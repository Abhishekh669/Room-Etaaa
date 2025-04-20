"use client"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { PostsDataTypeFromServer } from '@/features/schemas/posts/posts.type'
import { PostCard } from '../post-card'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useState, useEffect } from 'react'
import { locations } from '@/data/locations'

// Fix for default marker icon
const defaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
})

// Custom icons
const locationIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
})

const postIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [20, 32],
  iconAnchor: [10, 32],
  popupAnchor: [1, -28],
  tooltipAnchor: [12, -24],
  shadowSize: [32, 32]
})

// Set default icon
L.Marker.prototype.options.icon = defaultIcon

// Helper function to calculate distance between two points in kilometers
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

function deg2rad(deg: number): number {
  return deg * (Math.PI/180);
}

interface LocationMapProps {
  posts: PostsDataTypeFromServer[]
  center: [number, number]
  zoom?: number
  maxDistance?: number // Maximum distance in kilometers
}

export function LocationMap({ posts, center, zoom = 13, maxDistance = 5 }: LocationMapProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLocation, setSelectedLocation] = useState<[number, number] | null>(null)
  const [map, setMap] = useState<any>(null)

  const filteredLocations = locations.filter(loc => 
    loc.location.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Filter locations within maxDistance km
  const nearbyLocations = filteredLocations.filter(loc => {
    if (!loc.lat || !loc.lon) return false
    const distance = calculateDistance(center[0], center[1], loc.lat, loc.lon)
    return distance <= maxDistance
  })

  // Filter posts within maxDistance km
  const nearbyPosts = posts.filter(post => {
    if (!post.room.lat || !post.room.lon) return false
    const distance = calculateDistance(center[0], center[1], post.room.lat, post.room.lon)
    return distance <= maxDistance
  })

  // Auto-zoom to fit nearby locations and posts
  useEffect(() => {
    if (map && (nearbyLocations.length > 0 || nearbyPosts.length > 0)) {
      const bounds = [
        ...nearbyLocations.map(loc => [loc.lat!, loc.lon!] as [number, number]),
        ...nearbyPosts.map(post => [post.room.lat!, post.room.lon!] as [number, number])
      ]
      map.fitBounds(bounds, { padding: [50, 50] })
    }
  }, [map, nearbyLocations, nearbyPosts])

  return (
    <div className="space-y-4">
      <div className="relative">
        <Input
          type="text"
          placeholder="Search locations..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full"
        />
      </div>
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: '400px', width: '100%' }}
        className="rounded-lg"
        ref={setMap}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* User's current location marker */}
        <Marker
          position={center}
          icon={L.divIcon({
            className: 'user-location-marker',
            html: '<div class="w-4 h-4 bg-blue-500 rounded-full border-2 border-white"></div>',
            iconSize: [16, 16],
            iconAnchor: [8, 8]
          })}
        >
          <Popup>
            <div className="p-2">
              <h3 className="font-semibold">Your Location</h3>
            </div>
          </Popup>
        </Marker>

        {/* Nearby locations markers with labels */}
        {nearbyLocations.map((loc) => (
          <div key={loc.location}>
            <Marker
              position={[loc.lat!, loc.lon!]}
              icon={locationIcon}
            >
              <Popup>
                <div className="p-2">
                  <h3 className="font-semibold">{loc.location}</h3>
                  <p className="text-sm text-muted-foreground">
                    {loc.postCount} {loc.postCount === 1 ? 'post' : 'posts'}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Distance: {calculateDistance(center[0], center[1], loc.lat!, loc.lon!).toFixed(1)} km
                  </p>
                </div>
              </Popup>
            </Marker>
            <Marker
              position={[loc.lat!, loc.lon!]}
              icon={L.divIcon({
                className: 'location-label',
                html: `
                  <div class="bg-white/90 backdrop-blur-sm px-1.5 py-0.5 rounded text-[10px] font-medium text-gray-700 shadow-sm border border-gray-100">
                    ${loc.location}
                  </div>
                `,
                iconSize: [80, 12],
                iconAnchor: [40, 20]
              })}
            />
          </div>
        ))}

        {/* Nearby posts markers */}
        {nearbyPosts.map((post) => (
          <Marker
            key={post.id}
            position={[post.room.lat!, post.room.lon!]}
            icon={postIcon}
          >
            <Popup>
              <Card className="w-80">
                <PostCard post={post} />
              </Card>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
} 