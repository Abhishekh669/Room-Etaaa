"use client"
import React from 'react'
import { Button } from '../ui/button'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

function BackButton() {
    const router = useRouter()

  return (
    <Button variant="outline" onMouseEnter={()=>router.prefetch("/ghar/rooms")} onClick={() => router.replace('/ghar/rooms')}>
    <ArrowLeft className="mr-2 h-4 w-4" />
    Back to Rooms
  </Button>
  )
}

export default BackButton
