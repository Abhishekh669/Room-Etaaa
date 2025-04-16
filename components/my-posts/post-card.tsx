import React from 'react'
import { Card } from '@/components/ui/card'
import { format } from 'date-fns'
import { Room } from '@/generated/prisma'
import { Button } from '../ui/button'
import { BedDouble, Users, Bath } from 'lucide-react'

interface PostCardProps {
  post: {
    id: string
    roomId: string
    createdAt: Date
    room: Room
  }
}

function PostCard({ post }: PostCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg border border-gray-200">
      <div className="relative aspect-video bg-black">
        {post.room.roomImages && post.room.roomImages.length > 0 ? (
          <img
            src={post.room.roomImages[0]}
            alt={`Room ${post.room.roomNumber}`}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-white new-font text-xl">Room {post.room.roomNumber}</span>
          </div>
        )}
      </div>
      <div className="p-4 bg-white">
        <h3 className="new-font text-lg font-medium text-gray-900 line-clamp-1">
          {post.room.title}
        </h3>
        <p className="mt-1 text-sm text-gray-600 line-clamp-2">
          {post.room.description}
        </p>
        
        <div className="mt-3 flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <BedDouble className="h-4 w-4" />
            <span>{post.room.beds} Beds</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4" />
            <span>{post.room.toilet} Bath</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{post.room.roomCapacity} People</span>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-red-600">
              Room {post.room.roomNumber}
            </span>
            <span className={`text-sm px-2 py-1 rounded-full ${
              post.room.roomStatus === 'VACANT' 
                ? 'bg-green-100 text-green-800' 
                : post.room.roomStatus === 'OCCUPIED'
                ? 'bg-blue-100 text-blue-800'
                : 'bg-yellow-100 text-yellow-800'
            }`}>
              {post.room.roomStatus}
            </span>
          </div>
          <span className="text-xs text-gray-500">
            {format(new Date(post.createdAt), 'MMM d, yyyy')}
          </span>
        </div>
        
        <div className="mt-2 flex items-center justify-between">
          <span className="text-xs text-gray-600">{post.room.location}</span>
          <span className="text-xs font-medium text-gray-900">
            {post.room.numberOfRooms} Rooms
          </span>
        </div>

        <Button className="w-full mt-4" variant="outline">
          View Details
        </Button>
      </div>
    </Card>
  )
}

export default PostCard
