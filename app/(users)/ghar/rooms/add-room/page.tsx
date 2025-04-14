import AddRoomFormPage from '@/components/rooms/add-room/add-room-form'
import HeaderPage from '@/components/shared/Header'
import RouteBackButton from '@/components/shared/route-back-button'
import React from 'react'

function RoomAddPage() {
  return (
   <main className='flex  flex-col  gap-y-2'>
     <HeaderPage title1='Add' title2='Room'/>
     <div className='px-2 md:px-4 lg:px-6 flex justify-between '>
      <RouteBackButton />
      <div></div>
     </div>
    <section>
      <AddRoomFormPage />
    </section>
   </main>
  )
}

export default RoomAddPage
