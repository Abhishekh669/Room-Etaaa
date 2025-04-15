"use client"

import { useEffect, useState, useCallback, useRef, useMemo } from "react"
import { MapContainer, TileLayer, Marker, useMap, useMapEvents } from "react-leaflet"
import { MapPin, Navigation, Loader2, Search, X } from "lucide-react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface RoomLocationMapProps {
  position: [number, number]
  onLocationSelect: (position: [number, number], location: string) => void
  initialLocation?: string
  province?: number
  onProvinceChange?: (province: number) => void
}

interface SearchResult {
  display_name: string
  lat?: string
  lon?: string
}

const mapStyles = {
  default: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  dark: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
  satellite: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
}

const defaultCenter: [number, number] = [27.7172, 85.324] 
const defaultZoom = 13
const zoomToLocation = 15 

// Fix Leaflet marker icons
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

function MapEvents({ onMapClick }: { onMapClick?: (position: [number, number]) => void }) {
  useMapEvents({
    click: (e) => {
      if (onMapClick) {
        onMapClick([e.latlng.lat, e.latlng.lng])
      }
    },
  })
  return null
}

function MapController({ 
  markerPosition, 
  onMarkerDrag, 
  onMapInitialized,
  zoomToMarker = false
}: { 
  markerPosition?: [number, number]
  onMarkerDrag?: (position: [number, number]) => void
  onMapInitialized?: () => void
  zoomToMarker?: boolean
}) {
  const map = useMap()
  const markerRef = useRef<L.Marker | null>(null)

  useEffect(() => {
    if (markerPosition && markerPosition[0] !== 0 && markerPosition[1] !== 0) {
      if (markerRef.current) {
        markerRef.current.setLatLng(markerPosition)
      } else {
        const newMarker = L.marker(markerPosition, {
          draggable: true,
          autoPan: true,
        }).addTo(map)

        if (onMarkerDrag) {
          newMarker.on("dragend", (e) => {
            const position = e.target.getLatLng()
            onMarkerDrag([position.lat, position.lng])
          })
        }

        markerRef.current = newMarker
      }

      if (zoomToMarker) {
        map.setView(markerPosition, zoomToLocation)
      } else {
        map.setView(markerPosition, map.getZoom())
      }
    } else if (markerRef.current) {
      markerRef.current.remove()
      markerRef.current = null
    }
  }, [markerPosition, map, onMarkerDrag, zoomToMarker])

  useEffect(() => {
    onMapInitialized?.()
  }, [onMapInitialized])

  return null
}

const provinces = [
  { id: 1, name: "Province 1" },
  { id: 2, name: "Province 2" },
  { id: 3, name: "Province 3" },
  { id: 4, name: "Province 4" },
  { id: 5, name: "Province 5" },
  { id: 6, name: "Province 6" },
  { id: 7, name: "Province 7" },
]

export function RoomLocationMap({ 
  position, 
  onLocationSelect, 
  initialLocation,
  province,
  onProvinceChange 
}: RoomLocationMapProps) {
  const [mapStyle, setMapStyle] = useState<keyof typeof mapStyles>("default")
  const [currentLocation, setCurrentLocation] = useState<[number, number] | null>(null)
  const [zoomToMarker, setZoomToMarker] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const mapRef = useRef<L.Map | null>(null)
  const [manualLat, setManualLat] = useState<string>(position[0]?.toString() || "")
  const [manualLon, setManualLon] = useState<string>(position[1]?.toString() || "")
  const [manualLocation, setManualLocation] = useState<string>(initialLocation || "")

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  useEffect(() => {
    if (position && position[0] !== 0 && position[1] !== 0) {
      setManualLat(position[0].toString())
      setManualLon(position[1].toString())
    }
  }, [position])

  useEffect(() => {
    if (initialLocation) {
      setManualLocation(initialLocation)
    }
  }, [initialLocation])

  const handleSearch = useCallback(async (query: string) => {
    if (!query || query.length < 3) {
      setSearchResults([])
      return
    }

    setIsSearching(true)
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=5`,
        {
          headers: {
            'Accept-Language': 'en-US,en;q=0.9',
            'User-Agent': 'YourAppName/1.0'
          }
        }
      )
      const data = await response.json()
      setSearchResults(data)
    } catch (error) {
      console.error('Search error:', error)
    } finally {
      setIsSearching(false)
    }
  }, [])

  const handleSearchResultClick = useCallback((result: SearchResult) => {
    if (!result.lat || !result.lon) return;
    const newPosition: [number, number] = [parseFloat(result.lat), parseFloat(result.lon)]
    setManualLat(result.lat)
    setManualLon(result.lon)
    setManualLocation(result.display_name)
    onLocationSelect(newPosition, result.display_name)
    setSearchQuery("")
    setSearchResults([])
    setZoomToMarker(true)
  }, [onLocationSelect])

  const handleMapClick = useCallback((pos: [number, number]) => {
    setManualLat(pos[0].toString())
    setManualLon(pos[1].toString())
    onLocationSelect(pos, "")
  }, [onLocationSelect])

  const handleMarkerDrag = useCallback(async (pos: [number, number]) => {
    setManualLat(pos[0].toString())
    setManualLon(pos[1].toString())
    
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${pos[0]}&lon=${pos[1]}`,
        {
          headers: {
            'Accept-Language': 'en-US,en;q=0.9',
            'User-Agent': 'YourAppName/1.0'
          }
        }
      )
      const data = await response.json()
      const locationName = data.display_name || ""
      setManualLocation(locationName)
      onLocationSelect(pos, locationName)
    } catch (error) {
      console.error('Error getting location name:', error)
      onLocationSelect(pos, "")
    }
  }, [onLocationSelect])

  const handleUseCurrentUserLocation = useCallback(() => {
    if (!isMounted) return

    if ("geolocation" in navigator) {
      setIsLoading(true)
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords
          setCurrentLocation([latitude, longitude])
          setZoomToMarker(true)
          setIsLoading(false)
        },
        (error) => {
          console.error("Error getting location:", error)
          setCurrentLocation(defaultCenter)
          setIsLoading(false)
        }
      )
    } else {
      setCurrentLocation(defaultCenter)
      setIsLoading(false)
    }
  }, [isMounted])

  useEffect(() => {
    if (isMounted) {
      handleUseCurrentUserLocation()
    }
  }, [handleUseCurrentUserLocation, isMounted])

  const initialPosition = useMemo(() => {
    if (position && position[0] !== 0 && position[1] !== 0) {
      return position
    }
    return currentLocation || defaultCenter
  }, [position, currentLocation])

  useEffect(() => {
    if (position && position[0] !== 0 && position[1] !== 0) {
      setZoomToMarker(true)
    }
  }, [position])

  const handleManualLocationSubmit = useCallback(() => {
    if (!manualLat || !manualLon) return;
    const newPosition: [number, number] = [parseFloat(manualLat), parseFloat(manualLon)]
    onLocationSelect(newPosition, manualLocation || "")
    setZoomToMarker(true)
  }, [manualLat, manualLon, manualLocation, onLocationSelect])

  if (!isMounted) {
    return (
      <div className="w-full h-[500px] flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="mt-2 text-sm text-muted-foreground">Loading map...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="bg-white/90 p-4 rounded-lg shadow-md">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Latitude</label>
              <Input
                type="number"
                value={manualLat}
                onChange={(e) => setManualLat(e.target.value)}
                placeholder="Enter latitude"
                className="mt-1"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Longitude</label>
              <Input
                type="number"
                value={manualLon}
                onChange={(e) => setManualLon(e.target.value)}
                placeholder="Enter longitude"
                className="mt-1"
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium">Location Name</label>
            <Input
              type="text"
              value={manualLocation}
              onChange={(e) => setManualLocation(e.target.value)}
              placeholder="Enter location name"
              className="mt-1"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Province</label>
            <Select
              value={province?.toString()}
              onValueChange={(value) => onProvinceChange?.(Number(value))}
            >
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select Province" />
              </SelectTrigger>
              <SelectContent>
                {provinces.map((p) => (
                  <SelectItem key={p.id} value={p.id.toString()}>
                    {p.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button
            onClick={handleManualLocationSubmit}
            disabled={!manualLat || !manualLon}
          >
            Set Location
          </Button>
        </div>
      </div>

      <div className="relative w-full h-[500px] rounded-lg overflow-hidden border">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/50 z-50">
            <div className="flex flex-col items-center">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <p className="mt-2 text-sm text-muted-foreground">Getting your location...</p>
            </div>
          </div>
        )}
        
        <div className="absolute top-4 left-4 right-4 z-50">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Search for a location..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                setIsSearching(true)
                handleSearch(e.target.value)
              }}
              className="pl-10 pr-10 bg-white/90"
            />
            {searchQuery && (
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-4 w-4"
                  onClick={() => {
                    setSearchQuery("")
                    setSearchResults([])
                  }}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
          {isSearching && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-md shadow-lg p-2">
              <div className="flex items-center justify-center">
                <Loader2 className="h-4 w-4 animate-spin text-primary" />
                <span className="ml-2 text-sm text-muted-foreground">Searching...</span>
              </div>
            </div>
          )}
          {searchResults.length > 0 && !isSearching && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-md shadow-lg max-h-60 overflow-y-auto">
              {searchResults.map((result) => (
                <div
                  key={`${result.lat}-${result.lon}`}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSearchResultClick(result)}
                >
                  <p className="text-sm">{result.display_name}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <MapContainer
          center={initialPosition}
          zoom={defaultZoom}
          style={{ height: "100%", width: "100%" }}
          zoomControl={true}
          attributionControl={false}
          ref={mapRef}
          className="z-0"
        >
          <TileLayer
            url={mapStyles[mapStyle]}
            maxZoom={19}
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          
          <MapEvents onMapClick={handleMapClick} />
          <MapController 
            markerPosition={position && position[0] !== 0 ? position : undefined}
            onMarkerDrag={handleMarkerDrag}
            onMapInitialized={() => {
              if (position && position[0] !== 0) {
                setZoomToMarker(true)
              }
            }}
            zoomToMarker={zoomToMarker}
          />
        </MapContainer>

        {position && position[0] !== 0 && (
          <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-2 z-10">
            <div className="bg-white/90 p-3 rounded-lg shadow-md">
              <div className="space-y-1">
                <p className="text-sm font-medium">Current Location:</p>
                <p className="text-xs text-gray-600">
                  Lat: {position[0].toFixed(6)}
                </p>
                <p className="text-xs text-gray-600">
                  Lon: {position[1].toFixed(6)}
                </p>
                {initialLocation && (
                  <p className="text-xs text-gray-600">
                    Address: {initialLocation}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="absolute top-20 left-4 bg-white/90 p-3 rounded-lg shadow-md max-w-xs z-10">
          <h3 className="font-medium text-sm mb-1">Instructions:</h3>
          <ul className="text-xs text-gray-600 space-y-1">
            <li className="flex items-center gap-1">
              <MapPin className="h-3 w-3" /> Click on map to set location
            </li>
            <li className="flex items-center gap-1">
              <Navigation className="h-3 w-3" /> Drag marker to adjust position
            </li>
            <li className="flex items-center gap-1">
              <Search className="h-3 w-3" /> Search for a location
            </li>
          </ul>
        </div>

        <div className="absolute bottom-4 right-4 flex flex-col gap-2 z-10">
          <button
            onClick={handleUseCurrentUserLocation}
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
          >
            <Navigation className="h-5 w-5 text-primary" />
          </button>
          {position && position[0] !== 0 && (
            <button
              onClick={() => {
                if (mapRef.current) {
                  mapRef.current.invalidateSize()
                  setZoomToMarker(true)
                }
              }}
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            >
              <MapPin className="h-5 w-5 text-primary" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
} 