import EditRoomFormPage from '@/components/rooms/edit-room/edit-room-form';
import HeaderPage from '@/components/shared/Header';
import RouteBackButton from '@/components/shared/route-back-button';
import React from 'react'

function EditRoomIdPage() {

  

 
  return (
    <div className='w-full flex flex-col gap-y-4 '>
      <HeaderPage title1="Room" title2="Management (Edit)" />
     
      <div className=''>
        <EditRoomFormPage />
      </div>
    </div>
  )
}

export default EditRoomIdPage;

