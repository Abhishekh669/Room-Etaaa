"use client"
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { Plus } from 'lucide-react'
import Hint from './hint'
import { useRouter } from 'next/navigation'
import { useLocationStore } from '@/features/store/location/use-location-store'

interface AddButtonType{
    title : string,
    location : string,
    isDisabled? : boolean
}

function AddButton({title, location, isDisabled} : AddButtonType) {
  const router = useRouter();
  const {resetAllData} = useLocationStore();
  return (
    <Link href={location} className=''>
        <Hint label={title}>
        <Button 
          onClick={() => resetAllData()} 
          onMouseEnter={() =>router.prefetch(location) } 
          variant={"outline"} 
          className='bg-red-500 text-white hover:bg-red-500/50 cursor-pointer hover:text-white' disabled={isDisabled} >
            <Plus />
            <span>
            {title}
            </span>
        </Button>
        </Hint>
    </Link>
  )
}

export default AddButton
