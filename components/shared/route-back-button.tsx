"use client"
import React from 'react'
import { Button } from '../ui/button'
import Hint from './hint'
import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'

function RouteBackButton() {
    const router = useRouter();
  return (
    <Hint label='go back'>
        <Button variant={"outline"} className='cursor-pointer bg-red-500 text-white hover:bg-red-500/50 hover:text-white' onClick={() => router.back()}>
        <ArrowLeft className='size-4' />
        Go Back
    </Button>
    </Hint>
  )
}

export default RouteBackButton
