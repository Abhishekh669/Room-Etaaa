"use client"
import React from 'react'
import { useRoomId } from '@/features/hooks/params-id/use-rooms-id'
import { useGetRoomById } from '@/features/hooks/tanstacks/query-hooks/rooms/use-get-room-by-id';
import HeaderPage from '@/components/shared/Header';
import RouteBackButton from '@/components/shared/route-back-button';
import AddButton from '@/components/shared/add-button';
import { RoomImageGallery } from '@/components/rooms/room-image-card';
import SpinningLoader from '@/components/shared/SpinningLoader';
import { redirect } from 'next/navigation';
import { RoomStatusBadge } from '@/components/shared/room-status-badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RoomDetailsTab } from '@/components/rooms/room-details-tab';
import { RoomClientsTab } from '@/components/rooms/room-clients-tab';
import RoomBillingTabs from '@/components/rooms/room-billing-tab';
import { RoomLocationTab } from '@/components/rooms/room-location-tab';
import DeleteButton from '@/components/shared/delete-button';
import { toast } from 'sonner';
import { useDeleteRoom } from '@/features/hooks/tanstacks/mutate-hooks/rooms/use-delete-room';

function RoomIdPage() {
    const roomId = useRoomId();

    const { data: roomData, isLoading: roomDataLoading } = useGetRoomById(roomId)
    const {mutate : deleteRoom, isPending : deleteRoomLoading} = useDeleteRoom();
    const handleDelete = () =>{
        if(!roomId){
            toast.error("Room not found")
            return;
        }
        if(deleteRoomLoading){
            toast.error("Deleting room...")
            return;
        }
        deleteRoom(roomId, {
            onSuccess : (res) => {
               if(res.success && res.message){
                toast.success(res.message)
                redirect("/ghar/rooms")
               } else if(res.error && !res.success){
                toast.error(res.error)
               }
            },
            onError : (error) => {
                toast.error(error.message)
            }
        })
    }
    if (roomDataLoading) {
        return <SpinningLoader />
    }
    

    return (
        <div className='w-full flex flex-col gap-y-4 '>
            <HeaderPage title1="Room" title2="Management" />
            <div className='flex  justify-between px-2'>
                <RouteBackButton />
                <div className='flex gap-x-2'>
                <DeleteButton onDelete={handleDelete} title='Room' />
                <AddButton isDisabled={deleteRoomLoading} title='edit-room' location={`/ghar/rooms/${roomId}/edit-room`} />
                </div>
            </div>
            <div className='p-6 md:p-8 lg:p-10 '>
                <div className='w-full lg:w-2/3'>
                    <div className="flex items-center justify-between mb-4">
                        <h1 className="text-3xl font-bold">Room {roomData?.data?.roomNumber}</h1>
                        <RoomStatusBadge status={roomData?.data.roomStatus} />
                    </div>
                    <RoomImageGallery images={roomData?.data.roomImages} roomNumber={roomData?.data.roomNumber} />
                    <Tabs defaultValue='details' className='mt-6'>
                        <TabsList className='grid grid-cols-4 w-full'>
                            <TabsTrigger value='details'>Details</TabsTrigger>
                            <TabsTrigger value="clients">Clients</TabsTrigger>
                            <TabsTrigger value="billing">Billing</TabsTrigger>
                            <TabsTrigger value="location">Location</TabsTrigger>
                        </TabsList>
                        <TabsContent value='details'>
                            <RoomDetailsTab room={roomData?.data} />
                        </TabsContent>

                        <TabsContent value="clients">
                            <RoomClientsTab room={roomData?.data} />
                        </TabsContent>

                        <TabsContent value="billing">
                            <RoomBillingTabs room={roomData?.data} />
                        </TabsContent>

                        <TabsContent value="location">
                            <RoomLocationTab room={roomData?.data} />
                        </TabsContent>


                    </Tabs>
                </div>
                <div>
                    //summary card
                </div>
            </div>

        </div>
    )
}

export default RoomIdPage
