"use client"
import { RoomDetailsCards } from '@/components/rooms/room-details-card'
import RoomStatCard from '@/components/rooms/room-stat-card'
import AddButton from '@/components/shared/add-button'
import HeaderPage from '@/components/shared/Header'
import SpinningLoader from '@/components/shared/SpinningLoader'
import { useGetRoomStatistics } from '@/features/hooks/tanstacks/query-hooks/rooms/use-get-room-statistic'
import { RoomWithClientDataType } from '@/features/schemas/room/room.type'
import { CheckCircle, DollarSign, DoorOpen, PenToolIcon, UserCheck, Users2 } from 'lucide-react'
import React, { useState } from 'react'
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'

function RoomMainPage() {
  const { data: roomData, isLoading: roomDataLoading } = useGetRoomStatistics();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; 

  if (roomDataLoading) {
    return <SpinningLoader />
  }

  const totalRooms = roomData?.data?.rooms.length || 0;
  const totalPages = Math.ceil(totalRooms / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentRooms = roomData?.data?.rooms.slice(startIndex, endIndex) || [];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className='w-full flex flex-col gap-y-6'>
      <HeaderPage title1="Room" title2="Management" />
      
      <div className='px-4 md:px-6 lg:px-8 flex justify-end w-full'>
        <AddButton title={"Add Room"} location='/ghar/rooms/add-room' />
      </div>

      <section className='px-4 md:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          <RoomStatCard title='Total Rooms' number={roomData?.data?.totalRooms || 0} iconName={DoorOpen} />
          <RoomStatCard title='Total Clients' number={roomData?.data?.totalClients || 0} iconName={Users2} />
          <RoomStatCard title='Total Revenue' number={roomData?.data?.totalRevenue || 0} iconName={DollarSign} />
          <RoomStatCard title='Vacant' number={roomData?.data?.vacantRooms || 0} iconName={CheckCircle} />
          <RoomStatCard title='Occupied' number={roomData?.data?.occupiedRooms || 0} iconName={UserCheck} />
          <RoomStatCard title='Maintenance' number={roomData?.data?.maintenaceRooms || 0} iconName={PenToolIcon} />
        </div>
      </section>

      <section className='px-4 md:px-6 lg:px-8 py-2'>
        <div className='flex items-center justify-between mb-6'>
          <div className='text-2xl mochiy-pop-one-regular font-medium'>
            Your&nbsp;<span className='text-red-600'>Rooms</span>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {currentRooms.map((room: RoomWithClientDataType) => (
            <RoomDetailsCards key={room.id} room={room} />
          ))}
        </div>
        {
          currentRooms.length === 0 && (
            <div className='flex justify-center items-center h-full'>
              <p className='text-muted-foreground'>No rooms found</p>
            </div>
          )
        }

        {totalPages > 1 && (
          <div className=' flex justify-center '>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => handlePageChange(currentPage - 1)}
                    className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                  />
                </PaginationItem>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      onClick={() => handlePageChange(page)}
                      isActive={currentPage === page}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                <PaginationItem>
                  <PaginationNext
                    onClick={() => handlePageChange(currentPage + 1)}
                    className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </section>
    </div>
  )
}

export default RoomMainPage


