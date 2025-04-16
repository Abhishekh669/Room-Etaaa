"use client"
import React, { useState } from 'react'
import { useRoomId } from '@/features/hooks/params-id/use-rooms-id'
import { useGetRoomById } from '@/features/hooks/tanstacks/query-hooks/rooms/use-get-room-by-id';
import HeaderPage from '@/components/shared/Header';
import RouteBackButton from '@/components/shared/route-back-button';
import AddButton from '@/components/shared/add-button';
import { RoomImageGallery } from '@/components/rooms/room-image-card';
import SpinningLoader from '@/components/shared/SpinningLoader';
import { redirect, useRouter } from 'next/navigation';
import { RoomStatusBadge } from '@/components/shared/room-status-badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RoomDetailsTab } from '@/components/rooms/room-details-tab';
import { RoomClientsTab } from '@/components/rooms/room-clients-tab';
import RoomBillingTabs from '@/components/rooms/room-billing-tab';
import { RoomLocationTab } from '@/components/rooms/room-location-tab';
import DeleteButton from '@/components/shared/delete-button';
import { toast } from 'sonner';
import { useDeleteRoom } from '@/features/hooks/tanstacks/mutate-hooks/rooms/use-delete-room';
import { RoomSummaryCard } from '@/components/rooms/room-summary-card';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Plus, Trash } from "lucide-react"
import { MapPin, Bath, DoorOpen, Users, Wallet, BedDouble, ArrowRight, MoreHorizontal, Pencil, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Hint from '@/components/shared/hint';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { checkInMyPosts } from '@/features/actions/rooms/rooms';
import { addToMyPosts, deleteMyPost, deleteMyPostFromRoomId } from '@/features/actions/my-posts/my-posts';
function RoomIdPage() {
    const queryClient = useQueryClient()
    const roomId = useRoomId();
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const { data: roomData, isLoading: roomDataLoading } = useGetRoomById(roomId)
    const router = useRouter();
    const { mutate: deleteRoom, isPending: deleteRoomLoading } = useDeleteRoom();
    const { data: isInMyPosts } = useQuery({
        queryKey: ["isInMyPosts", roomId],
        queryFn: () => checkInMyPosts(roomId)
    })


    const {mutate : deletePost, isPending : isDeleting } = useMutation({
        mutationFn : deleteMyPostFromRoomId,
        onSuccess : (res) => {
          if(res.success){
            queryClient.invalidateQueries({queryKey : ["isInMyPosts", roomId]})
          }
        },
        onError : (error) => {
          console.log(error)
        }
      })

    

   
    const {mutate : addMyPosts, isPending : isAddingToMyPosts } = useMutation({
        mutationFn : addToMyPosts,
        onSuccess : (res) => {
          if(res.success){
                queryClient.invalidateQueries({queryKey : ["isInMyPosts", roomId]})
          }
        },
        onError : (error) => {
          console.log(error)
        }
      })
    


    const handleDelete = () => {
        if (!roomId) {
            toast.error("Room not found")
            return;
        }
        if (deleteRoomLoading) {
            toast.error("Deleting room...")
            return;
        }
        deleteRoom(roomId, {
            onSuccess: (res) => {
                if (res.success && res.message) {
                    toast.success(res.message)
                    router.push("/ghar/rooms")
                } else if (res.error && !res.success) {
                    toast.error(res.error)
                }
            },
            onError: (error) => {
                toast.error(error.message)
            }
        })
    }

    const handleAddToMyPosts = async(id : string) =>{
        if(!id || isAddingToMyPosts){
            return;
        }
        addMyPosts(id, {
            onSuccess: (res) => {
                if(res.success){
                    toast.success(res.message)
                }else{
                    toast.error(res.error)
                }
            },
            onError: (error) => {
                toast.error(error.message)
            }
        })

    }

    const handleRemoveFromMyPosts = async(id : string) =>{
        if(!id || isDeleting){
            return;
        }
            deletePost(id, {
            onSuccess: (res) => {   
                if(res.success){
                    toast.success(res.message)
                }else{
                    toast.error(res.error)
                }
            },
            onError: (error) => {
                toast.error(error.message)
            }
        })
    }

    if (roomDataLoading) {
        return <SpinningLoader />
    }
    if (!roomData?.data) {
        return <div className=' mochiy-pop-one-regular text-2xl w-full h-full flex items-center justify-center'>Room <span className='text-[#ff0000]'>not</span> found</div>
    }

    return (
        <div className='w-full flex flex-col gap-y-4 '>
            <HeaderPage title1="Room" title2="Management" />
            <div className='flex  justify-between px-2'>
                <RouteBackButton isDisabled={deleteRoomLoading} location={`/ghar/rooms`} />
                <div className='flex gap-x-2'>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8 mr-4">
                                <Hint label='More options' side='left'>
                                    <div>
                                        <MoreHorizontal className="size-6  text-red-600" />
                                        <span className="sr-only">Open menu</span>
                                    </div>
                                </Hint>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            {
                                isInMyPosts?.success ? (
                                    <DropdownMenuItem disabled={roomDataLoading} className='text-red-500' onClick={() => handleRemoveFromMyPosts(roomId)}>
                                        <Trash2 className=" h-4 w-4" />
                                        Remove from my posts
                                    </DropdownMenuItem>
                                ) : (
                                    
                                    <DropdownMenuItem 
                                    onClick={()=>{
                                        handleAddToMyPosts(roomId)
                                    }}
                                    disabled={isAddingToMyPosts}
                                >
                                    <Plus className=" h-4 w-4" />
                                    Add to my posts
                                </DropdownMenuItem>
                                )
                            }
                            <DropdownMenuItem disabled={isAddingToMyPosts || deleteRoomLoading} onClick={() => router.push(`/ghar/rooms/${roomId}/edit-room`)}>
                                <Pencil className="mr-2 h-4 w-4" />
                                Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                className="text-destructive focus:text-destructive"
                                onClick={() => setIsDeleteDialogOpen(true)}
                                disabled={isAddingToMyPosts || deleteRoomLoading}
                            >
                                <Trash2 className="mr-2 h-4 w-4" />
                                Delete
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle className="new-font">Delete <span className="text-red-600">Room</span></AlertDialogTitle>
                        <AlertDialogDescription>
                            Are you sure you want to delete Room {roomData?.data?.roomNumber}? This action cannot be undone.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                            onClick={handleDelete}
                            disabled={deleteRoomLoading}
                        >
                            <Trash className="mr-2 h-4 w-4" />
                            Delete Room
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

            <div className='p-6  md:p-8 lg:p-10 flex flex-col lg:flex-row gap-x-4 gap-y-4 '>
                <div className='w-full flex flex-col gap-y-4'>
                    <div className="flex items-center justify-between mb-4">
                        <h1 className="text-3xl font-bold mochiy-pop-one-regular">Room <span className='text-[#ff0000]'>{roomData?.data?.roomNumber}</span> </h1>
                        <RoomStatusBadge status={roomData?.data.roomStatus} />
                    </div>
                    <RoomImageGallery images={roomData?.data.roomImages} roomNumber={roomData?.data.roomNumber} />
                    <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-4 '>
                        <Tabs defaultValue='details' className='mt-6'>
                            <TabsList className='grid grid-cols-4 w-full'>
                                <TabsTrigger value='details'>Details</TabsTrigger>
                                <TabsTrigger value="clients">Clients</TabsTrigger>
                                <TabsTrigger value="billing">Billing</TabsTrigger>
                                <TabsTrigger value="location">Location</TabsTrigger>
                            </TabsList>
                            <TabsContent value='details' >
                                <RoomDetailsTab room={roomData?.data} />
                            </TabsContent>

                            <TabsContent value="clients" >
                                <RoomClientsTab room={roomData?.data} />
                            </TabsContent>

                            <TabsContent value="billing" >
                                <RoomBillingTabs room={roomData?.data} />
                            </TabsContent>

                            <TabsContent value="location" >
                                <RoomLocationTab room={roomData?.data} />
                            </TabsContent>


                        </Tabs>
                        <div className='w-full lg:mt-18  '>
                            <RoomSummaryCard room={roomData?.data} />
                        </div>
                    </div>

                </div>


            </div>


        </div>
    )
}

export default RoomIdPage
