"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import Image from "next/image"
import { Heart, MessageSquare, MapPin, BedDouble, Phone, Users, Toilet } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { formatDistanceToNow } from "date-fns"
import { PostsDataTypeFromServer } from "@/features/schemas/posts/posts.type"
import { useGetUserSession } from "@/features/hooks/tanstacks/query-hooks/users/use-get-session"
import { useMemo, useState } from "react"

interface PostCardProps {
  post: PostsDataTypeFromServer
  handleSave?: (postId: string, userId: string) => void
  pending?: boolean
}

export function PostCard({ post, handleSave, pending = false }: PostCardProps) {
  const { data: session, isLoading: isSessionLoading } = useGetUserSession();
  const getBadgeVariant = (status: string) => {
    switch (status) {
      case "VACANT":
        return "outline"
      case "OCCUPIED":
        return "destructive"
      case "MAINTENANCE":
        return "secondary"
      default:
        return "default"
    }
  }

  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  const checkUserSavedStatus = useMemo(() => {
    return (): boolean => {
      if (isSessionLoading || !session || !post.id) return false;
      return post.savedPost.some((p) => p.userId === session.id);
    };
  }, [isSessionLoading, session, post.id, post.savedPost]);

  if (!session) return null;

  return (
    <Card className="hover:shadow-lg transition-all duration-300 overflow-hidden">

      <CardHeader className="p-0 relative">
        <div className="relative h-56 w-full">
          {post.room.roomImages && post.room.roomImages.length > 0 ? (
            <Image
              src={post.room.roomImages[0]}
              alt={`Room ${post.room.title}`}
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
            variant={getBadgeVariant(post.room.roomStatus)}
            className="absolute top-3 left-3 px-2 py-1 text-xs font-medium bg-green-100"
          >
            {post.room.roomStatus.charAt(0) + post.room.roomStatus.slice(1).toLowerCase()}
          </Badge>
          <div className="absolute bottom-3 right-3">
            <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
              Posted {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
            </Badge>
          </div>

          {post.room.roomImages && post.room.roomImages.length > 1 && (
            <div className="absolute bottom-3 right-3">
              <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                +{post.room.roomImages.length - 1} Photos
              </Badge>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-xl">{post.room.title}</CardTitle>
          </div>
          <div className="bg-primary/10 rounded-full px-3 py-2 text-primary font-semibold">
            Rs {post.room.roomBilling ? formatPrice(post.room.roomBilling.roomCost) : 'N/A'}/mo
          </div>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 max-h-[100px] max-w-[300px] truncate">{post.room.description}</p>
        <div className="flex items-center mt-1 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 mr-1 flex-shrink-0 text-red-600" />
          <span className="truncate max-w-[200px]">{post.room.location}</span>
        </div>

        <div className="flex justify-between my-1 gap-4 pt-1">
          <div className="flex items-center">
            <BedDouble className="h-4 w-4 mr-1 text-[#ff0000]" />
            <span className="text-sm font-medium ]">
              {post.room.beds} {post.room.beds === 1 ? "Bed" : "Beds"}
            </span>
          </div>
          <div className="flex items-center">
            <Toilet className="h-4 w-4 mr-1 text-[#ff0000]" />
            <span className="text-sm font-medium">
              {post.room.toilet} {post.room.toilet === 1 ? "Bathroom" : "Bathrooms"}
            </span>
          </div>

          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1 text-[#ff0000]" />
            <span className="text-sm font-medium">
              {post.room.roomCapacity} {post.room.roomCapacity === 1 ? "client" : "clients"}
            </span>
          </div>
        </div>

        <div className='flex justify-between text-sm border-t py-1 text-muted-foreground'>
          <div>
            <span className='font-semibold'>Room Type</span> : {post.room.roomType}
          </div>
          <div>
            <span className='font-semibold'> Room For</span> : {post.room.roomFor}
          </div>
        </div>
        <div className="border-t pt-1">
          <span className="text-muted-foreground bg-red-200 rounded-md p-1 font-semibold">Owner Details</span>
          <div className="text-muted-foreground   text-sm flex flex-wrap gap-x-4">
            <span><span className="font-semibold">Name :</span> {post.owner.name}</span>
            <span><span className="font-semibold">Email :</span> {post.owner.email}</span>
            <span><span className="font-semibold">Phone Number :</span> {post.owner.phoneNumber}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between p-4 pt-0 border-t">
        {handleSave && (
          <Button
            variant={checkUserSavedStatus() ? "default" : "outline"}
            size="sm"
            disabled={pending}
            className={cn(
              "w-1/2 mr-2",
              checkUserSavedStatus() && "bg-rose-100 hover:bg-rose-200 text-rose-600 border-rose-200",
            )}
            onClick={() => handleSave(post.id, session?.id)}
          >
            <Heart className={cn("h-4 w-4 mr-2", checkUserSavedStatus() && "fill-rose-600")} />
            {checkUserSavedStatus() ? "Saved" : "Save"}
          </Button>
        )}
        <Button disabled={pending} variant="default" size="sm" className="w-1/2 bg-red-500 text-white hover:bg-red-500/50 cursor-pointer hover:text-white">
          <MessageSquare className="h-4 w-4 mr-2" /> Inquire
        </Button>
      </CardFooter>
    </Card>
  )
}

