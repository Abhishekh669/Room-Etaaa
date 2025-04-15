"use client"
import React from 'react'
import { Button } from '../ui/button'
import Hint from './hint'
import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'

function RouteBackButton({isDisabled, location} : {isDisabled ?: boolean, location ?: string}) {
    const router = useRouter();
  return (
    <Hint label='go back'>
        <Button variant={"outline"} disabled={isDisabled} className='cursor-pointer bg-red-500 text-white hover:bg-red-500/50 hover:text-white' onClick={() => router.push(location || "/" )}>
        <ArrowLeft className='size-4' />
        Go Back
    </Button>
    </Hint>
  )
}

export default RouteBackButton
