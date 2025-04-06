"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"

import { BedDouble, MapPin, MessageSquare, Trash2 } from "lucide-react"
import Image from "next/image"
import { formatDistanceToNow } from "date-fns"
import { RoomStatus } from "@prisma/client"
import {  SavedPostType } from "@/utils/types/type"

interface SavedPostCardProps {
  savedPost: SavedPostType
  onRemove?: (id: string) => void
}

export function SavedPostCard({ savedPost, onRemove }: SavedPostCardProps) {
  const post = savedPost.post

  const getBadgeVariant = (status: RoomStatus) => {
    switch (status) {
      case RoomStatus.VACANT:
        return "outline"
      case RoomStatus.OCCUPIED:
        return "destructive"
      case RoomStatus.MAINTENANCE:
        return "secondary"
      default:
        return "default"
    }
  }

  const handleRemove = () => {
    if (onRemove) {
      onRemove(savedPost.id)
    }
  }

  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col">
      <CardHeader className="p-0 relative">
        <div className="relative h-48 w-full">
          {post.roomImages && post.roomImages.length > 0 ? (
            <Image
              src={post.roomImages[0] || "/placeholder.svg"}
              alt={`Room ${post.roomNumber}`}
              fill
              className="object-cover rounded-t-lg transition-transform hover:scale-105 duration-300"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            />
          ) : (
            <div className="bg-muted flex items-center justify-center h-full">
              <span className="text-muted-foreground">No Image Available</span>
            </div>
          )}
          <Badge
            variant={getBadgeVariant(post.roomStatus)}
            className="absolute top-3 left-3 px-2 py-1 text-xs font-medium"
          >
            {post.roomStatus.charAt(0) + post.roomStatus.slice(1).toLowerCase()}
          </Badge>

          <div className="absolute bottom-3 right-3">
            <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
              Saved {formatDistanceToNow(new Date(savedPost.savedDate), { addSuffix: true })}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4 space-y-3 flex-grow">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">Room #{post.roomNumber}</CardTitle>
            <div className="flex items-center mt-1 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
              <span className="truncate">{post.location}</span>
            </div>
          </div>
          <div className="bg-primary/10 rounded-full px-3 py-1.5 text-primary font-semibold text-sm">
            ${post.roomCost}/mo
          </div>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">{post.description}</p>

        <div className="flex gap-4 pt-1">
          <div className="flex items-center">
            <BedDouble className="h-4 w-4 mr-1 text-muted-foreground" />
            <span className="text-sm font-medium">{post.numberOfRooms} Rooms</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between p-4 pt-0 border-t mt-auto">
        <Button variant="outline" size="sm" className="w-1/2 mr-2" onClick={handleRemove}>
          <Trash2 className="h-4 w-4 mr-2" /> Remove
        </Button>
        <Button variant="default" size="sm" className="w-1/2">
          <MessageSquare className="h-4 w-4 mr-2" /> Inquire
        </Button>
      </CardFooter>
    </Card>
  )
}

