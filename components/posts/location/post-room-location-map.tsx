"use client"
import React from 'react'

interface RoomLocationMapProps {
    position: [number, number]
    onLocationSelect: (position: [number, number], location: string) => void
    initialLocation?: string
    province?: number
    onProvinceChange?: (province: number) => void
  }



function PostRoomLocationMapPage() {
  return (
    <div>
      
    </div>
  )
}

export default PostRoomLocationMapPage
