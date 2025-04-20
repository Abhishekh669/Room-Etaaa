"use client"
import React, { useEffect, useState } from 'react'
import { LocationList } from '@/components/posts/location/location-list'
import { LocationMap } from '@/components/posts/location/location-map'
import { LocationInfo } from '@/components/posts/location/location-info'
import { locations } from '@/data/locations'
import { Card } from '@/components/ui/card'
import { PostsDataTypeFromServer } from '@/features/schemas/posts/posts.type'

export default function LocationPage() {
  const [currentLocation, setCurrentLocation] = useState<string>('')
  const [userCoordinates, setUserCoordinates] = useState<[number, number] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [nearbyPosts, setNearbyPosts] = useState<PostsDataTypeFromServer[]>([])

  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        if (navigator.geolocation) {
          const position = await new Promise<GeolocationPosition>((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject)
          })
          
          const { latitude, longitude } = position.coords
          setUserCoordinates([latitude, longitude])
          
          // Find the nearest location with coordinates
          const nearestLocation = locations
            .filter(loc => loc.lat && loc.lon)
            .reduce((nearest, current) => {
              if (!nearest) return current
              const nearestDist = Math.sqrt(
                Math.pow(nearest.lat! - latitude, 2) + 
                Math.pow(nearest.lon! - longitude, 2)
              )
              const currentDist = Math.sqrt(
                Math.pow(current.lat! - latitude, 2) + 
                Math.pow(current.lon! - longitude, 2)
              )
              return currentDist < nearestDist ? current : nearest
            })

          setCurrentLocation(nearestLocation.location)
        } else {
          throw new Error('Geolocation is not supported by your browser')
        }
      } catch (error) {
        setError('Unable to retrieve your location')
        setCurrentLocation('New York')
        setUserCoordinates([40.7128, -74.0060])
      } finally {
        setIsLoading(false)
      }
    }

    fetchUserLocation()
  }, [])

  useEffect(() => {
    const fetchNearbyPosts = async () => {
      if (!userCoordinates) return
      
      try {
        // TODO: Replace with your actual API call to fetch nearby posts
        // This is just a placeholder
        const response = await fetch(`/api/posts/nearby?lat=${userCoordinates[0]}&lon=${userCoordinates[1]}&distance=5`)
        const data = await response.json()
        setNearbyPosts(data)
      } catch (error) {
        console.error('Error fetching nearby posts:', error)
      }
    }

    fetchNearbyPosts()
  }, [userCoordinates])

  const currentLocationData = locations.find(loc => loc.location === currentLocation)

  if (isLoading) {
    return (
      <div className="container mx-auto py-6">
        <Card className="p-4">
          <p>Loading your location...</p>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-6 space-y-6">
      {error && (
        <Card className="p-4 bg-destructive/10 text-destructive">
          <p>{error}</p>
        </Card>
      )}

      {currentLocationData && (
        <LocationInfo
          location={currentLocationData.location}
          postCount={currentLocationData.postCount}
          coordinates={currentLocationData.lat && currentLocationData.lon ? {
            lat: currentLocationData.lat,
            lon: currentLocationData.lon
          } : undefined}
        />
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <Card className="p-4">
            <h2 className="text-2xl font-bold mb-4">Nearby Locations & Posts (within 5km)</h2>
            {userCoordinates && (
              <LocationMap
                posts={nearbyPosts}
                center={userCoordinates}
                zoom={13}
                maxDistance={5}
              />
            )}
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="p-4">
            <h2 className="text-2xl font-bold mb-4">All Locations</h2>
            <LocationList currentLocation={currentLocation} />
          </Card>
        </div>
      </div>
    </div>
  )
}
