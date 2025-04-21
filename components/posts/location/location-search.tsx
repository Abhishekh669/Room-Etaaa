"use client"
import { useState, useEffect, useCallback, useMemo } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, Circle, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { Search, MapPin } from 'lucide-react'
import { debounce } from 'lodash'

// Fix for default marker icons
const defaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})

const nearbyIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [20, 33],
  iconAnchor: [10, 33],
  popupAnchor: [1, -34],
  shadowSize: [33, 33]
})

L.Marker.prototype.options.icon = defaultIcon

interface LocationSearchProps {
  onLocationSelect: (location: string, lat: number, lon: number) => void
  initialLocation?: string
  initialLat?: number
  initialLon?: number
  nearbyLocations?: Array<{ name: string, lat ?: number, lon ?: number }>
}

// Custom marker with label
const createCustomMarker = (name: string) => {
  const icon = L.divIcon({
    className: 'custom-marker',
    html: `
      <div class="relative">
        <div class="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow text-sm font-medium w-32 truncate text-center">
          ${name}
        </div>
        <img src="https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png" alt="marker" />
      </div>
    `,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
  })
  return icon
}

export function LocationSearch({ 
  onLocationSelect, 
  initialLocation = 'Kathmandu',
  initialLat = 27.7172,
  initialLon = 85.3240,
  nearbyLocations = []
}: LocationSearchProps) {
  const [location, setLocation] = useState(initialLocation)
  const [position, setPosition] = useState<[number, number]>([initialLat, initialLon])
  const [suggestions, setSuggestions] = useState<Array<{ name: string, lat: number, lon: number }>>([])
  const [isMapReady, setIsMapReady] = useState(false)
  const [isSearching, setIsSearching] = useState(false)

  console.log("this is hte nearbyLocation : ",nearbyLocations)

  const mapCenter = useMemo(() => position, [position])

  const bounds = useMemo(() => {
    const allLocations = [
      { lat: position[0], lon: position[1] },
      ...nearbyLocations.filter(loc => loc.lat !== undefined && loc.lon !== undefined)
    ]
    return L.latLngBounds(
      allLocations.map(loc => [loc.lat!, loc.lon!] as [number, number])
    )
  }, [position, nearbyLocations])

  const fetchSuggestions = useCallback(
    debounce(async (query: string) => {
      if (!query.trim()) {
        setSuggestions([])
        return
      }

      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=5&countrycodes=np`
        )
        const data = await response.json()
        setSuggestions(
          data.map((item: any) => ({
            name: item.display_name,
            lat: parseFloat(item.lat),
            lon: parseFloat(item.lon)
          }))
        )
      } catch (error) {
        console.error('Error fetching suggestions:', error)
        setSuggestions([])
      }
    }, 300),
    []
  )

  useEffect(() => {
    fetchSuggestions(location)
    return () => {
      fetchSuggestions.cancel()
    }
  }, [location, fetchSuggestions])

  const handleSearch = async () => {
    if (!location.trim()) return

    setIsSearching(true)
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}&limit=1&countrycodes=np`
      )
      const data = await response.json()
      if (data.length > 0) {
        const firstResult = data[0]
        const newPosition: [number, number] = [parseFloat(firstResult.lat), parseFloat(firstResult.lon)]
        setPosition(newPosition)
        onLocationSelect(firstResult.display_name, newPosition[0], newPosition[1])
      }
    } catch (error) {
      console.error('Error fetching location:', error)
    } finally {
      setIsSearching(false)
    }
  }

  const MapEvents = useMemo(() => {
    return function MapEventsComponent() {
      useMapEvents({
        click: async (e) => {
          const { lat, lng } = e.latlng
          setPosition([lat, lng])
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
          )
          const data = await response.json()
          setLocation(data.display_name)
          onLocationSelect(data.display_name, lat, lng)
        }
      })
      return null
    }
  }, [onLocationSelect])

  function MapContent() {
    const map = useMap()
    
    useEffect(() => {
      if (nearbyLocations.length > 0) {
        map.fitBounds(bounds, { padding: [50, 50] })
      }
    }, [map, nearbyLocations.length, bounds])

    return null
  }

  return (
    <Card className="p-4 space-y-4">
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="relative flex-1">
          <Input
            type="text"
            placeholder="Enter location in Nepal"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full "
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
          {suggestions.length > 0 && (
            <div className="absolute z-10 w-full mt-1 z-990 bg-white border rounded-md shadow-lg max-h-60 overflow-y-auto">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  className="w-full px-4 py-2 text-left hover:bg-gray-100 border-b last:border-b-0"
                  onClick={() => {
                    setLocation(suggestion.name)
                    setPosition([suggestion.lat, suggestion.lon])
                    setSuggestions([])
                    onLocationSelect(suggestion.name, suggestion.lat, suggestion.lon)
                  }}
                >
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span>{suggestion.name}</span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
        <Button 
          onClick={handleSearch} 
          className="w-full sm:w-auto bg-red-600 text-white hover:bg-red-600/90"
          disabled={isSearching}
        >
          <Search className="h-4 w-4 mr-2" />
          {isSearching ? 'Searching...' : 'Search'}
        </Button>
      </div>

      <div className="h-[400px] w-full rounded-md overflow-hidden">
        <MapContainer
          center={mapCenter}
          zoom={13}
          style={{ height: '100%', width: '100%' }}
          whenReady={() => setIsMapReady(true)}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {isMapReady && <MapEvents />}
          <MapContent />
          
          <Circle
            center={position}
            radius={500}
            pathOptions={{ color: 'blue', fillColor: 'blue', fillOpacity: 0.2 }}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-semibold">{location}</h3>
                <p className="text-sm text-gray-600">
                  Latitude: {position[0].toFixed(4)}<br />
                  Longitude: {position[1].toFixed(4)}
                </p>
              </div>
            </Popup>
          </Circle>
          <Marker
            position={position}
            icon={createCustomMarker(location)}
          />

          {nearbyLocations.map((loc, index) => (
            <Marker 
              key={`nearby-${loc.lat}-${loc.lon}-${index}`}
              position={[loc.lat!, loc.lon!]}
              icon={createCustomMarker(loc.name)}
            >
              <Popup>
                <div className="p-2">
                  <h3 className="font-semibold">{loc.name}</h3>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </Card>
  )
} 