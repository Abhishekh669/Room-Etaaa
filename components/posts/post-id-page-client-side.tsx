"use client"
import React from 'react'
import { useRoomId } from '@/features/hooks/params-id/use-rooms-id'
import { useGetRoomById } from '@/features/hooks/tanstacks/query-hooks/rooms/use-get-room-by-id';
import RouteBackButton from '@/components/shared/route-back-button';
import { RoomImageGallery } from '@/components/rooms/room-image-card';
import SpinningLoader from '@/components/shared/SpinningLoader';
import { RoomStatusBadge } from '@/components/shared/room-status-badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RoomDetailsTab } from '@/components/rooms/room-details-tab';
import { RoomLocationTab } from '@/components/rooms/room-location-tab';
import { PostRoomSummaryCard } from './post-summary-card';
import RoomBillingTabs from './post-room-billing';

function PostIdClientSide() {
    const roomId = useRoomId();
    const { data: roomData, isLoading: roomDataLoading } = useGetRoomById(roomId)

    if (roomDataLoading) {
        return <SpinningLoader />
    }
    if (!roomData?.data) {
        return (
            <div className='min-h-screen flex items-center justify-center'>
                <div className='mochiy-pop-one-regular text-2xl'>
                    Room <span className='text-[#ff0000]'>not</span> found
                </div>
            </div>
        )
    }

    return (
        <div className='w-full flex flex-col'>
            <div className='sticky top-0 z-10 bg-white rounded-md shadow-md py-4 px-4 md:px-6 lg:px-8'>
                <div className='max-w-7xl mx-auto flex justify-between items-center'>
                    <div className='text-xl font-semibold new-font text-gray-800'>
                        Room <span className='text-red-600'>Details</span>
                    </div>
                    <RouteBackButton location={`/posts`} />
                </div>
            </div>

            <div className='max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-8 py-6'>
                <div className='flex flex-col gap-6'>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className='flex items-center gap-4'>
                            <h1 className="text-2xl md:text-3xl font-bold mochiy-pop-one-regular">
                                Room <span className='text-[#ff0000]'>{roomData?.data?.roomNumber}</span>
                            </h1>
                            <RoomStatusBadge status={roomData?.data.roomStatus} />
                        </div>
                    </div>

                    <div className='w-full'>
                        <RoomImageGallery 
                            images={roomData?.data.roomImages} 
                            roomNumber={roomData?.data.roomNumber} 
                        />
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                        <div className='lg:col-span-2'>
                            <Tabs defaultValue='details' className='w-full'>
                                <TabsList className='grid grid-cols-3 w-full bg-gray-100 p-1 rounded-lg'>
                                    <TabsTrigger 
                                        value='details' 
                                        className='data-[state=active]:bg-white data-[state=active]:shadow-sm'
                                    >
                                        Details
                                    </TabsTrigger>
                                    <TabsTrigger 
                                        value="billing" 
                                        className='data-[state=active]:bg-white data-[state=active]:shadow-sm'
                                    >
                                        Billing
                                    </TabsTrigger>
                                    <TabsTrigger 
                                        value="location" 
                                        className='data-[state=active]:bg-white data-[state=active]:shadow-sm'
                                    >
                                        Location
                                    </TabsTrigger>
                                </TabsList>
                                
                                <div className='mt-4 bg-white rounded-lg shadow-sm p-4 md:p-6'>
                                    <TabsContent value='details'>
                                        <RoomDetailsTab room={roomData?.data} />
                                    </TabsContent>
                                    
                                    <TabsContent value="billing">
                                        <RoomBillingTabs room={roomData?.data} />
                                    </TabsContent>
                                    
                                    <TabsContent value="location">
                                        <RoomLocationTab room={roomData?.data} />
                                    </TabsContent>
                                </div>
                            </Tabs>
                        </div>

                        <div className='lg:sticky lg:top-24 lg:h-fit'>
                            <PostRoomSummaryCard room={roomData?.data} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostIdClientSide