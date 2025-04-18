"use client"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BedDouble, Bath, Users, MoreHorizontal, Pencil, Trash2, Map, MapPin } from "lucide-react"
import { format } from "date-fns"
import { Room } from "@/generated/prisma"
import Image from "next/image"
import { useRouter } from "next/navigation"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Hint from "../shared/hint"

interface PostCardProps {
  post: {
    id: string
    createdAt: Date
    room:Room
  }
  onDelete?: (postId: string) => void
}

function PostCard({ post,  onDelete }: PostCardProps) {
  const router = useRouter();
  return (
    <Card className="bg-white overflow-hidden group transition-all hover:shadow-lg border border-gray-200 h-full flex flex-col ">
      <div className="relative aspect-video bg-black">
        {post.room.roomImages && post.room.roomImages.length > 0 ? (
          <Image
            fill
            src={post.room.roomImages[0] || "/placeholder.svg"}
            alt={`Room ${post.room.roomNumber}`}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-white new-font text-xl">Room {post.room.roomNumber}</span>
          </div>
        )}
        <div className="absolute top-2 left-2">
          <span
            className={`text-xs px-2 py-1 rounded-full font-medium ${
              post.room.roomStatus === "VACANT"
                ? "bg-green-100 text-green-800"
                : post.room.roomStatus === "OCCUPIED"
                  ? "bg-blue-100 text-blue-800"
                  : "bg-yellow-100 text-yellow-800"
            }`}
          >
            {post.room.roomStatus}
          </span>
        </div>
        <div className="absolute top-0 right-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="size-6 text-red-600 font-semibold" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => router.push(`/ghar/rooms/${post.room.id}/edit-room`)}>
                <Pencil className="mr-2 h-4 w-4" />
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem 
                className="text-destructive focus:text-destructive"
                onClick={() => onDelete?.(post.id)}
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="p-4 bg-white flex-1 flex flex-col">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-red-600">Room {post.room.roomNumber}</span>
            <span className="text-xs text-gray-500">{format(new Date(post.createdAt), "MMM d, yyyy")}</span>
          </div>

          <h3 className="new-font text-lg font-medium text-gray-900 line-clamp-1 mb-1">{post.room.title}</h3>
          <p className="text-sm text-gray-600 line-clamp-2 mb-3">{post.room.description}</p>

          <div className="flex justify-between p-1  border-t border-gray-100">
          <Hint label="Room Beds">
            <div className="flex items-center  text-sm text-gray-600">
              <BedDouble className="h-4 w-4 mr-2 text-[#ff0000]" />
              <span>{post.room.beds} Beds</span>
            </div>
          </Hint>
          <Hint label='Room Toilet'>
            <div className="flex items-center text-sm text-gray-600">
              <Bath className="h-4 w-4 mr-2 text-[#ff0000]" />
              <span>{post.room.toilet} Baths</span>
            </div>
          </Hint>
          <Hint label='Room Capacity'>
            <div className="flex items-center text-sm text-gray-600">
              <Users className="h-4 w-4 mr-2 text-[#ff0000]" />
              <span>{post.room.roomCapacity} Clients</span>
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

          <div className="flex items-center border-t pt-2 justify-between text-xs mb-4">
            <Hint label={post.room.location}>
            <div className="flex  gap-x-1 "><MapPin className="h-4 w-4 mr-1 text-[#ff0000]" />
            <span className="text-gray-600 max-h-[100px] max-w-[300px] truncate">{post.room.location}</span>
            </div>
            </Hint>
            <span className="font-medium text-gray-900">{post.room.numberOfRooms} Rooms</span>
          </div>
        </div>

        <Button className="w-full group-hover:bg-red-50 group-hover:border-red-200 group-hover:text-red-600 transition-colors" variant="outline" size="sm"
          onClick={()=> router.push(`/ghar/rooms/${post.room.id}`)}
        >
          View Details
        </Button>
      </div>
    </Card>
  )
}

export { PostCard }
