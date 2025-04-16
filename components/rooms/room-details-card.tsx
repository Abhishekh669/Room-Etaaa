"use client"
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { MapPin, Bath, DoorOpen, Users, Wallet, BedDouble, ArrowRight, MoreHorizontal, Pencil, Trash2 } from 'lucide-react';
import { RoomWithClientDataType } from '@/features/schemas/room/room.type';
import { RoomStatusBadge } from '../shared/room-status-badge';
import Hint from '../shared/hint';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useQuery } from '@tanstack/react-query';
import { checkInMyPosts } from '@/features/actions/rooms/rooms';
import { useDeleteRoom } from '@/features/hooks/tanstacks/mutate-hooks/rooms/use-delete-room';
import { toast } from 'sonner';

export function RoomDetailsCards({ room }: { room: RoomWithClientDataType }) {
  const router = useRouter()
  const {data : isInMyPosts} = useQuery({
    queryKey : ["isInMyPosts", room.id],
    queryFn : () => checkInMyPosts(room.id)
  })

  const {mutate : deleteRoom, isPending : isDeleting} = useDeleteRoom()

  const handleDeleteRoom = (id : string) =>{
    if(!id || isDeleting){
      return;
    }

    deleteRoom(id,{
      onSuccess : (res) => {
        if(res.success){
          toast.success(res.message)
        }
      },
      onError : (error) => {
        toast.error(error.message)
      }
    })

   
  }


  return (
    <Card className="w-full h-full bg-white shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 rounded-xl  group">
      <div className="relative aspect-video w-full overflow-hidden">
      
        {room.roomImages?.[0] ? (
          <div className="relative h-full w-full">
            <Image
              src={room.roomImages[0]}
              alt={room.title}
              className="object-cover h-full w-full transform group-hover:scale-105 transition-transform duration-500"
              width={1000}
              height={500}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
            <div className="absolute bottom-3 right-3">
              <RoomStatusBadge status={room.roomStatus} />
            </div>
          </div>
        ) : (
          <div className="bg-gray-100 h-full flex items-center justify-center">
            <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center">
              <BedDouble className="h-8 w-8 text-gray-400" />
              <div className="absolute bottom-3 right-3">
              <RoomStatusBadge status={room.roomStatus} />
            </div>
            </div>
          </div>
        )}
        <div className="absolute top-0 right-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => router.push(`/ghar/rooms/${room.id}/edit-room`)}>
                <Pencil className="mr-2 h-4 w-4" />
                  Edit
              </DropdownMenuItem>
              <DropdownMenuItem 
                className="text-destructive focus:text-destructive"
                onClick={() => handleDeleteRoom(room.id)}
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <CardContent className="p-5 space-y-4">
        <div className="space-y-2">
          <h3 className="font-bold text-lg leading-tight line-clamp-1">{room.title}</h3>
          <p className="text-gray-600 text-sm line-clamp-2 min-h-[40px]">
            {room.description || 'No description available'}
          </p>
        </div>

          <Hint label={room.location} align='start'>
          <span className="flex items-center  w-auto">
          <MapPin className="h-4 w-4 mr-2 text-[#ff0000] flex-shrink-0" />
            <span className="text-sm font-medium truncate flex-1">
              {room.location}
            </span>
          </span>
          </Hint>

        <div className="flex justify-between px-2 pt-2 border-t border-gray-100">
          <Hint label="Room Beds">
          <div className="flex items-center text-sm text-gray-600">
            <BedDouble className="h-4 w-4 mr-2 text-[#ff0000]" />
            <span>{room.beds} Beds</span>
          </div>
          </Hint>
          <Hint label='Room Toilet'>
          <div className="flex items-center text-sm text-gray-600">
            <Bath className="h-4 w-4 mr-2 text-[#ff0000]" />
            <span>{room.toilet} Baths</span>
          </div>
          </Hint>
          <Hint label='Room Capacity'>
          <div className="flex items-center text-sm text-gray-600">
            <Users className="h-4 w-4 mr-2 text-[#ff0000]" />
            <span>{room.roomCapacity} Clients</span>
          </div>
          </Hint>
        </div>

        <div className="flex justify-between items-center pt-2 border-t border-gray-100 ">
          <div className="flex items-center ">
            <span className="text-sm font-medium "><span className=" text-[18px] mr-1  text-[#ff0000] font-semibold">Rs</span> {room.roomBilling.roomCost}/month</span>
          </div>

          {room.clients.length > 0 ? (
            <Hint label={`${room.clients.length} client${room.clients.length !== 1 ? 's' : ''} staying`}>
              <div className="flex items-center bg-gray-50 px-3 py-1 rounded-full">
                <Users className="h-4 w-4 mr-2 text-[#ff0000]" />
                <span className="text-sm font-medium">
                  {room.clients.length}/{room.roomCapacity}
                </span>
              </div>
            </Hint>
          ) : (
            <div className='text-muted-foreground text-sm'>
              No Clients
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Link href={`/ghar/rooms/${room.id}`} className="w-full" onMouseEnter={() => {
          router.prefetch(`/ghar/rooms/${room.id}`)
        }}>
          <Button variant="outline" className="w-full group-hover:bg-red-50 group-hover:border-red-200 group-hover:text-red-600 transition-colors">
            View Details
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}