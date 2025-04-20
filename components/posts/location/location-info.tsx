"use client"
import { Card } from '@/components/ui/card'
import { MapPin } from 'lucide-react'

interface LocationInfoProps {
  location: string
  postCount: number
  coordinates?: {
    lat: number
    lon: number
  }
}

export function LocationInfo({ location, postCount, coordinates }: LocationInfoProps) {
  return (
    <Card className="p-4">
      <div className="flex items-center gap-2">
        <MapPin className="h-5 w-5 text-primary" />
        <div>
          <h2 className="text-xl font-semibold">{location}</h2>
          <p className="text-sm text-muted-foreground">
            {postCount} {postCount === 1 ? 'post' : 'posts'} available
          </p>
          {coordinates && (
            <p className="text-xs text-muted-foreground">
              Coordinates: {coordinates.lat.toFixed(4)}, {coordinates.lon.toFixed(4)}
            </p>
          )}
        </div>
      </div>
    </Card>
  )
} 