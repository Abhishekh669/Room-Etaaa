"use client"

import { useEffect, useState, useCallback, useRef } from "react"
import { MapContainer, TileLayer, Marker, useMap, useMapEvents } from "react-leaflet"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation, Loader2 } from "lucide-react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

interface LocationMapProps {
  markerPosition?: [number, number]
  onMarkerDrag?: (position: [number, number]) => void
  onMapClick?: (position: [number, number]) => void
  onMapInitialized?: () => void
  zoom?: number
}

const mapStyles = {
  default: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  dark: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
  satellite: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
}

const defaultCenter: [number, number] = [27.7172, 85.324] // Default center if no position provided
const defaultZoom = 13
const zoomToLocation = 15 // Zoom level when focusing on a location

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
  const [marker, setMarker] = useState<L.Marker | null>(null)

  useEffect(() => {
    if (markerPosition && markerPosition[0] !== 0 && markerPosition[1] !== 0) {
      if (marker) {
        marker.setLatLng(markerPosition)
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

        setMarker(newMarker)
      }

      if (zoomToMarker) {
        map.setView(markerPosition, zoomToLocation)
      } else {
        map.setView(markerPosition, map.getZoom())
      }
    } else if (marker) {
      marker.remove()
      setMarker(null)
    }
  }, [markerPosition, map, marker, onMarkerDrag, zoomToMarker])

  useEffect(() => {
    onMapInitialized?.()
  }, [onMapInitialized])

  return null
}

const LocationMap = ({
  markerPosition,
  onMarkerDrag,
  onMapClick,
  onMapInitialized,
  zoom = defaultZoom,
}: LocationMapProps) => {
  const [mapStyle, setMapStyle] = useState<keyof typeof mapStyles>("default")
  const [currentLocation, setCurrentLocation] = useState<[number, number] | null>(null)
  const [zoomToMarker, setZoomToMarker] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const mapRef = useRef<L.Map | null>(null)

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

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

  const initialPosition = markerPosition && markerPosition[0] !== 0 
    ? markerPosition 
    : currentLocation || defaultCenter

  if (!isMounted) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="mt-2 text-sm text-muted-foreground">Loading map...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/50 z-50">
          <div className="flex flex-col items-center">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="mt-2 text-sm text-muted-foreground">Getting your location...</p>
          </div>
        </div>
      )}
      
      <MapContainer
        center={initialPosition}
        zoom={zoom}
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
        
        <MapEvents onMapClick={onMapClick} />
        <MapController 
          markerPosition={markerPosition}
          onMarkerDrag={onMarkerDrag}
          onMapInitialized={onMapInitialized}
          zoomToMarker={zoomToMarker}
        />
      </MapContainer>

      <div className="absolute bottom-4 right-4 flex flex-col gap-2 z-10">
        <Button
          onClick={handleUseCurrentUserLocation}
          size="icon"
          className="bg-white text-primary hover:bg-gray-100 shadow-md"
        >
          <Navigation className="h-5 w-5" />
        </Button>
        {markerPosition && markerPosition[0] !== 0 && (
          <Button
            onClick={() => {
              if (mapRef.current) {
                mapRef.current.invalidateSize()
                setZoomToMarker(true)
              }
            }}
            size="icon"
            className="bg-white text-primary hover:bg-gray-100 shadow-md"
          >
            <MapPin className="h-5 w-5" />
          </Button>
        )}
      </div>

      <div className="absolute top-4 left-4 bg-white/90 p-3 rounded-lg shadow-md max-w-xs z-10">
        <h3 className="font-medium text-sm mb-1">Instructions:</h3>
        <ul className="text-xs text-gray-600 space-y-1">
          <li className="flex items-center gap-1">
            <MapPin className="h-3 w-3" /> Click on map to set location
          </li>
          <li className="flex items-center gap-1">
            <Navigation className="h-3 w-3" /> Drag marker to adjust position
          </li>
        </ul>
      </div>
    </div>
  )
}

export default LocationMap

