"use client"

import { useEffect, useState } from "react"
import { useLocationStore } from "@/features/store/location/use-location-store"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"
import dynamic from "next/dynamic"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import type { Control } from "react-hook-form"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { RoomLocationMap } from "./room-location-map"

// Dynamically import the Map component to avoid SSR issues
const Map = dynamic(() => import("@/components/location/map"), {
  ssr: false,
  loading: () => <div className="h-[400px] w-full bg-muted animate-pulse" />,
})

interface RoomLocationSectionProps {
  control: Control<any>
  lat?: number
  lon?: number
  onLocationSelect: (location: string, position: [number, number]) => void
}

export function RoomLocationSection({ control, lat, lon, onLocationSelect }: RoomLocationSectionProps) {
  const { location, position, setLocation, setPosition } = useLocationStore()
  const [showMap, setShowMap] = useState(false)

  useEffect(() => {
    if (lat && lon) {
      setPosition([lat, lon])
      setShowMap(true)
    }
  }, [lat, lon, setPosition])

  const handleMapClick = (newPosition: [number, number], newLocation: string) => {
    setPosition(newPosition)
    setLocation(newLocation)
    onLocationSelect(newLocation, newPosition)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Location Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <FormField
          control={control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter location" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-4">
          {!showMap ? (
            <div className="flex flex-col items-center justify-center p-6 border rounded-md border-dashed">
              <MapPin className="h-12 w-12 text-muted-foreground mb-4" />
              <p className="text-muted-foreground mb-4">No location set yet</p>
              <Button type="button" onClick={() => setShowMap(true)}>
                <MapPin className="mr-2 h-4 w-4" />
                Add Location
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">Room Location</h3>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setShowMap(false)
                    setPosition([0, 0])
                    setLocation("")
                    onLocationSelect("", [0, 0])
                  }}
                >
                  Remove Location
                </Button>
              </div>
              <div className="h-[400px] w-full rounded-md overflow-hidden">
                <RoomLocationMap
                  position={position}
                  onLocationSelect={handleMapClick}
                  initialLocation={location}
                />
              </div>
              {location && (
                <p className="text-sm text-muted-foreground">
                  Selected Location: {location}
                </p>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
} 