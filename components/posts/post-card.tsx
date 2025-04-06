"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import Image from "next/image"
import { Heart, MessageSquare, MapPin, BedDouble, Phone } from "lucide-react"
import { RoomStatus } from "@prisma/client"
import type { Posts } from "@/utils/types/type"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { useGetUserSession } from "@/hooks/tanstack/query-hooks/user/use-get-user-session"
import { formatDistanceToNow } from "date-fns"

interface PostCardProps {
  post: Posts,
  handleSave : (post : Posts) => void
  pending : boolean
}

export function PostCard({ post, handleSave, pending }: PostCardProps) {
  const { data: user, isLoading } = useGetUserSession()

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

  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  const checkUserSavedStatus = (): boolean => {
    if (isLoading || !user?.user) return false
    return post.savedPost.some((savedPost) => savedPost.userId === user.user.id)
  }

  return (
    <Card className="hover:shadow-lg transition-all duration-300 overflow-hidden">
      <CardHeader className="p-0 relative">
        <div className="relative h-56 w-full">
          {post.roomImages && post.roomImages.length > 0 ? (
            <Image
              src={post.roomImages[0] || "/placeholder.svg"}
              alt={`Room ${post.roomNumber}`}
              fill
              className="object-cover rounded-t-lg transition-transform hover:scale-105 duration-300"
              sizes="(max-width: 768px) 100vw, 600px"
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
                        Posted {formatDistanceToNow(new Date(post.createdAt || new Date()), { addSuffix: true })}
                      </Badge>
                    </div>

          {post.roomImages && post.roomImages.length > 1 && (
            <div className="absolute bottom-3 right-3">
              <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                +{post.roomImages.length - 1} Photos
              </Badge>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="p-5 space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">Room #{post.roomNumber}</CardTitle>
            <div className="flex items-center mt-1 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
              <span className="truncate max-w-[200px]">{post.location}</span>
            </div>
          </div>
          <div className="bg-primary/10 rounded-full px-3 py-2 text-primary font-semibold">
            Rs {formatPrice(post.roomCost)}/mo
          </div>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">{post.description}</p>

        <div className="flex flex-wrap gap-4 pt-1">
          <div className="flex items-center">
            <BedDouble className="h-4 w-4 mr-1 text-muted-foreground" />
            <span className="text-sm font-medium">
              {post.numberOfRooms} {post.numberOfRooms === 1 ? "Room" : "Rooms"}
            </span>
          </div>
          {post.owner && post.owner.name && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span>Listed by {post.owner.name}</span>
                  </div>
                </TooltipTrigger>
                {post.owner.phoneNumber && (
                  <TooltipContent>
                    <div className="flex items-center gap-1">
                      <Phone className="h-3 w-3" />
                      <span>{post.owner.phoneNumber}</span>
                    </div>
                  </TooltipContent>
                )}
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
      </CardContent>

      <CardFooter className="flex justify-between p-4 pt-0 border-t">
        <Button
          variant={checkUserSavedStatus() ? "default" : "outline"}
          size="sm"
          disabled={pending}
          className={cn(
            "w-1/2 mr-2",
            checkUserSavedStatus() && "bg-rose-100 hover:bg-rose-200 text-rose-600 border-rose-200",
          )}
          onClick={() => handleSave(post)}
        >
          <Heart className={cn("h-4 w-4 mr-2", checkUserSavedStatus() && "fill-rose-600")} />
          {checkUserSavedStatus() ? "Saved" : "Save"}
        </Button>
        <Button disabled={pending} variant="default" size="sm" className="w-1/2">
          <MessageSquare className="h-4 w-4 mr-2" /> Inquire
        </Button>
      </CardFooter>
    </Card>
  )
}

