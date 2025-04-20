"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"

import { BedDouble, DoorOpen, MapPin, MessageSquare, Toilet, Trash2, Users } from "lucide-react"
import Image from "next/image"
import { formatDistanceToNow } from "date-fns"
import { RoomStatus } from "@/generated/prisma"
import { SavedPostTypeFromServer } from "@/features/schemas/posts/saved-posts/saved-post.type"
import Hint from "@/components/shared/hint"

interface SavedPostCardProps {
  savedPost: SavedPostTypeFromServer
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
          {post.room.roomImages && post.room.roomImages.length > 0 ? (
            <Image
              src={post.room.roomImages[0] || "/placeholder.svg"}
              alt={`Room ${post.room.title}`}
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
            variant={getBadgeVariant(post.room.roomStatus)}
            className="absolute top-3 bg-green-100 left-3 px-2 py-1 text-xs font-medium"
          >
            {post.room.roomStatus.charAt(0) + post.room.roomStatus.slice(1).toLowerCase()}
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
            <CardTitle className="text-md">Room #{post.room.roomNumber}</CardTitle>
            <div className=" items-center  mt-1 text-sm text-muted-foreground">
              <div className="flex items-center m-1 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                <span className="truncate max-w-[200px]">{post.room.location}</span>
              </div>
            </div>
          </div>
          <div className="bg-primary/10 rounded-full px-3 py-1.5 text-primary font-semibold text-sm">
            ${post.room.roomBilling?.roomCost}/mo
          </div>
        </div>

        <p className="text-[16px] font-semibold">{post.room.title}</p>
        <p className="text-sm text-muted-foreground line-clamp-2">{post.room.description}</p>

        <div className="flex gap-4  justify-between pt-1">
          <Hint label="Number of Beds">
            <div className="flex items-center">
              <BedDouble className="h-4 w-4 mr-1 text-[#ff0000]" />
              <span className="text-sm font-medium">{post.room.beds} Beds</span>
            </div>
          </Hint>
          <Hint label="Number of Rooms">
            <div className="flex items-center">
              <DoorOpen className="h-4 w-4 mr-1 text-[#ff0000]" />
              <span className="text-sm font-medium">{post.room.numberOfRooms} Rooms</span>
            </div>
          </Hint>
          <Hint label="Number of Bathrooms">
            <div className="flex items-center">
              <Toilet className="h-4 w-4 mr-1 text-[#ff0000]" />
              <span className="text-sm font-medium">{post.room.toilet} Toilets</span>
            </div>
          </Hint>

          <Hint label="Room Capacity">
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1 text-[#ff0000]" />
              <span className="text-sm font-medium">{post.room.roomCapacity} Room</span>
            </div>
          </Hint>
        </div>
        <div className='flex justify-between text-sm border-t py-1 text-muted-foreground'>
          <div>
            <span className='font-semibold'>Room Type</span> : {post.room.roomType}
          </div>
          <div>
           <span className='font-semibold'> Room For</span> : {post.room.roomFor}
          </div>
        </div>
        <div>
          <span className="text-muted-foreground font-semibold">Owner Details</span>
          <div className="text-muted-foreground  text-sm flex flex-wrap gap-x-4">
            <span><span className="font-semibold">Name :</span> {post.owner.name}</span>
            <span><span className="font-semibold">Email :</span> {post.owner.email}</span>
            <span><span className="font-semibold">Phone Number :</span> {post.owner.phoneNumber}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between p-4 pt-0  border-t mt-auto">
        <Button variant="outline" size="sm" className="w-1/2 mr-2 bg-[#ff0000]" onClick={handleRemove}>
          <Trash2 className="h-4 w-4 mr-2" /> Remove
        </Button>
        <Button variant="default" size="sm" className="w-1/2">
          <MessageSquare className="h-4 w-4 mr-2" /> Inquire
        </Button>
      </CardFooter>
    </Card>
  )
}

