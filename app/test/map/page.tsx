"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useLocationStore } from "@/features/store/location/use-location-store"
import dynamic from "next/dynamic"
import HeaderPage from "@/components/shared/Header"
import RouteBackButton from "@/components/shared/route-back-button"

const AddMapPage = dynamic(() => import("@/components/location/map"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[calc(100vh-200px)] flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        <p className="mt-2 text-sm text-muted-foreground">Loading map...</p>
      </div>
    </div>
  ),
})

export default function MapSelectionPage() {
  const router = useRouter()
  const { location, position } = useLocationStore()

  const handleSubmit = () => {
    router.push("/ghar/rooms/add-room")
  }

  return (
    <main className="flex flex-col h-screen">
      <HeaderPage title1="Select" title2="Location" />
      <div className="px-2 md:px-4 lg:px-6 flex justify-between py-2">
        <RouteBackButton  location={"/ghar/rooms"}/>
        <Button 
          onClick={handleSubmit}
          disabled={!position || !location}
        >
          Submit Location
        </Button>
      </div>
      <section className="flex-1 w-full h-[calc(100vh-200px)]">
        <AddMapPage />
      </section>
    </main>
  )
}