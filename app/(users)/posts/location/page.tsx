"use client"
import React, { useEffect, useState, useMemo, useCallback } from 'react'
import { LocationList } from '@/components/posts/location/location-list'
import { LocationMap } from '@/components/posts/location/location-map'
import { LocationInfo } from '@/components/posts/location/location-info'
import { locations } from '@/data/locations'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { PostsDataTypeFromServer } from '@/features/schemas/posts/posts.type'
import { LocationSearch } from '@/components/posts/location/location-search'
import { getNearByLocation } from '@/features/actions/posts/location/location'
import { Skeleton } from '@/components/ui/skeleton'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { MapPin, BedDouble, Users, Toilet, MessageSquare } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import Hint from '@/components/shared/hint'

interface Room {
  id: string
  title: string
  location: string
  roomType: string
  roomFor: string
  lat: number | null
  lon: number | null
  createdAt: Date
  ownerId: string
  roomStatus: string
  province: number
  roomNumber: number
  lastPayedDate: Date | null
  roomBilling?: {
    id: string
    roomCost: number
  }
  beds: number
  toilet: number
  roomCapacity: number
  owner?: {
    name: string
    phoneNumber: string
    email: string
  }
}

export default function LocationPage() {
  const [location, setLocation] = useState('Kathmandu')
  const [lat, setLat] = useState<number | undefined>(27.7172)
  const [lon, setLon] = useState<number | undefined>(85.3240)
  const [rooms, setRooms] = useState<Room[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleLocationSelect = useCallback(async (newLocation: string, newLat: number, newLon: number) => {
    setLocation(newLocation)
    setLat(newLat)
    setLon(newLon)
    setIsLoading(true)
    setError(null)

    try {
      const nearbyRooms = await getNearByLocation(newLocation, newLat, newLon)
      setRooms(nearbyRooms)
    } catch (err) {
      setError('Failed to fetch nearby rooms')
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    handleLocationSelect(location, lat!, lon!)
  }, [handleLocationSelect, location, lat, lon])

  const currentLocationData = locations.find(loc => loc.location === location)

  const nearbyLocations = useMemo(() => 
    rooms
      .filter(room => room.lat !== null && room.lon !== null)
      .map(room => ({
        name: room.location,
        lat: room.lat!,
        lon: room.lon!
      }))
  , [rooms])

  const locationSearchProps = useMemo(() => ({
    onLocationSelect: handleLocationSelect,
    initialLocation: location,
    initialLat: lat,
    initialLon: lon,
    nearbyLocations
  }), [handleLocationSelect, location, lat, lon, nearbyLocations])

  const renderRooms = useMemo(() => {
    if (isLoading) {
      return (
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-32 w-full rounded-lg" />
          ))}
        </div>
      )
    }

    if (error) {
      return (
        <div className="text-red-500 p-4 bg-red-50 rounded-lg text-center">
          {error}
        </div>
      )
    }

    if (rooms.length === 0) {
      return (
        <div className="text-gray-500 p-4 bg-gray-50 rounded-lg text-center">
          No rooms found in this location
        </div>
      )
    }

    return (
      <div className="space-y-4 md:space-y-8 lg:space-y-10">
        {rooms.map((room) => (
          <Card key={room.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
            <CardContent className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg line-clamp-1">{room.title}</h3>
                  <div className="flex items-center mt-1 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1 flex-shrink-0 text-red-600" />
                    <span className="truncate">{room.location}</span>
                  </div>
                </div>
                <Badge variant="outline" className="bg-primary/10 text-primary font-semibold mt-2 sm:mt-0">
                  Rs {room.roomBilling?.roomCost?.toLocaleString() || 'N/A'}/mo
                </Badge>
              </div>

              <div className="flex flex-wrap justify-between my-3 gap-3 pt-3">
                <Hint label='Beds'>
                  <div className="flex items-center">
                    <BedDouble className="h-4 w-4 mr-1 text-[#ff0000]" />
                    <span className="text-sm font-medium">
                      {room.beds} {room.beds === 1 ? "Bed" : "Beds"}
                    </span>
                  </div>
                </Hint>
                <Hint label='Toilet'>
                  <div className="flex items-center">
                    <Toilet className="h-4 w-4 mr-1 text-[#ff0000]" />
                    <span className="text-sm font-medium">
                      {room.toilet} {room.toilet === 1 ? "Bathroom" : "Bathrooms"}
                    </span>
                  </div>
                </Hint>
                <Hint label='Room Capacity'>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1 text-[#ff0000]" />
                    <span className="text-sm font-medium">
                      {room.roomCapacity} {room.roomCapacity === 1 ? "client" : "clients"}
                    </span>
                  </div>
                </Hint>
              </div>

              <div className="flex flex-row px-2 justify-between text-sm border-t py-3 text-muted-foreground gap-2">
                <div className="">
                  <span className="font-semibold">Room Type:</span> {room.roomType}
                </div>
                <div className="">
                  <span className="font-semibold">Room For:</span> {room.roomFor}
                </div>
              </div>

              <div className="border-t pt-3">
                <span className="text-muted-foreground bg-red-200 rounded-md px-2 py-1 font-semibold text-sm">
                  Owner Details
                </span>
                <div className="text-muted-foreground text-sm flex flex-col sm:flex-row flex-wrap gap-x-4 gap-y-1 mt-2">
                  <span><span className="font-semibold">Name:</span> {room.owner?.name || 'N/A'}</span>
                  <span><span className="font-semibold">Phone:</span> {room.owner?.phoneNumber || 'N/A'}</span>
                  <span><span className="font-semibold">Email:</span> {room.owner?.email || 'N/A'}</span>
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex justify-between p-4 pt-0 border-t">
              <Button
                variant="default"
                size="sm"
                className="w-full bg-red-500 text-white hover:bg-red-500/90"
                asChild
              >
                <Link href={`/posts/${room.id}`}>
                  <MessageSquare className="h-4 w-4 mr-2" /> Visit Room
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    )
  }, [isLoading, error, rooms])

  return (
    <div className="space-y-4 md:space-y-8">
      <div className='flex flex-row justify-between items-start sm:items-center gap-3 p-4 shadow-sm rounded-lg bg-white'>
        <h1 className="text-2xl sm:text-3xl font-bold new-font">
          Room <span className='text-red-500'>Etaaa</span>
        </h1>
        <Button 
          variant="outline" 
          className='bg-red-500 text-white hover:bg-red-500/90  sm:w-auto'
          onMouseEnter={() => router.prefetch('/posts')}
          onClick={() => router.push('/posts')}
        >
          Go To Rooms
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <div className="lg:sticky lg:top-4 lg:h-[calc(100vh-8rem)]">
          <LocationSearch {...locationSearchProps} />
        </div>

        <div className=" lg:pr-2">
          <Card className="border-0 shadow-sm lg:border lg:shadow-md ">
            <CardHeader className="p-4 sm:p-6 pb-2 sm:pb-4">
              <CardTitle className="text-xl sm:text-2xl font-semibold new-font">
                Nearby <span className='text-red-500'>Rooms</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 md:px-16 lg:px-30  max-h-[calc(100vh-17rem)]  h-full overflow-y-auto">
              {renderRooms}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}