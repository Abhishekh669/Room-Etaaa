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
import { Trash } from "lucide-react"

function RoomIdPage() {
    const roomId = useRoomId();
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const { data: roomData, isLoading: roomDataLoading } = useGetRoomById(roomId)
    const router = useRouter();
    const { mutate: deleteRoom, isPending: deleteRoomLoading } = useDeleteRoom();

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
                <RouteBackButton isDisabled={deleteRoomLoading} location={`/ghar/rooms`}/>
                <div className='flex gap-x-2'>
                    <DeleteButton onDelete={() => setIsDeleteDialogOpen(true)} loadingText='Deleting room...' deleting={deleteRoomLoading} title='Room' />
                    <AddButton isDisabled={deleteRoomLoading} title='edit-room' location={`/ghar/rooms/${roomId}/edit-room`} />
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
                    <div className='w-full lg:mt-20  '>
                    <RoomSummaryCard room={roomData?.data} />
                </div>
                    </div>

                </div>
               

            </div>


        </div>
    )
}

export default RoomIdPage
