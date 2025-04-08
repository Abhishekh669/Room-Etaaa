"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Plus, Home, Users, PenToolIcon as Tool, CheckCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import RoomDataCard from "@/components/rooms/room-data-card"
import { RoomStatus } from "@prisma/client"
import { getRoomStatistics } from "@/actions/room/room"

// Define the RoomStats type based on the data structure
interface RoomStats {
  totalRooms: number
  totalClients: number
  totalClientsLiving: number
  vacantRooms: number
  occupiedRooms: number
  maintenaceRoom: number
  rooms: {
    id: string
    description: string
    roomStatus: RoomStatus
    client?: {
      id: string
      name: string
    };
    noOfClientLiving?: number
    roomImages?: string[],
    roomNumber : number,
  }[]
}

export default function RoomsPage() {
  const [roomStats, setRoomStats] = useState<RoomStats | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [activeFilter, setActiveFilter] = useState("all")

  
  const filteredRooms =  roomStats?.rooms && roomStats?.rooms.filter((room) => {
    if (activeFilter === "all") return true
    if (activeFilter === "vacant") return room.roomStatus === "VACANT"
    if (activeFilter === "occupied") return room.roomStatus === "OCCUPIED"
    if (activeFilter === "maintenance") return room.roomStatus === "MAINTENANCE"
    return true
  })


  useEffect(()=>{
    const fetchData = async() =>{
      setIsLoading(true)
      const data = await getRoomStatistics();
      setRoomStats(data as RoomStats)
      setIsLoading(false)
    }
    fetchData()
  },[])

  if (isLoading) {
    return (
      <div className=" py-10 flex items-center justify-center min-h-screen w-full">
        <div className="flex flex-col items-center ">
          <Loader2 className="h-10 w-10 animate-spin text-primary" />
          <p className="mt-4 text-muted-foreground">Loading room data...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="px-10
     py-10">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Rooms</h1>
          <p className="text-muted-foreground">Manage your rooms and their details.</p>
        </div>
        <Link href="/ghar/rooms/add-room">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Room
          </Button>
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
        <Card className="bg-white">
          <CardContent className="p-4 flex flex-col items-center justify-center">
            <div className="rounded-full bg-blue-100 p-3 mb-2">
              <Home className="h-6 w-6 text-blue-700" />
            </div>
            <p className="text-sm text-muted-foreground">Total Rooms</p>
            <h3 className="text-2xl font-bold">{roomStats?.totalRooms || 0}</h3>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="p-4 flex flex-col items-center justify-center">
            <div className="rounded-full bg-green-100 p-3 mb-2">
              <CheckCircle className="h-6 w-6 text-green-700" />
            </div>
            <p className="text-sm text-muted-foreground">Vacant</p>
            <h3 className="text-2xl font-bold">{roomStats?.vacantRooms || 0}</h3>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="p-4 flex flex-col items-center justify-center">
            <div className="rounded-full bg-blue-100 p-3 mb-2">
              <Users className="h-6 w-6 text-blue-700" />
            </div>
            <p className="text-sm text-muted-foreground">Occupied</p>
            <h3 className="text-2xl font-bold">{roomStats?.occupiedRooms || 0}</h3>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="p-4 flex flex-col items-center justify-center">
            <div className="rounded-full bg-amber-100 p-3 mb-2">
              <Tool className="h-6 w-6 text-amber-700" />
            </div>
            <p className="text-sm text-muted-foreground">Maintenance</p>
            <h3 className="text-2xl font-bold">{roomStats?.maintenaceRoom || 0}</h3>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="p-4 flex flex-col items-center justify-center">
            <div className="rounded-full bg-purple-100 p-3 mb-2">
              <Users className="h-6 w-6 text-purple-700" />
            </div>
            <p className="text-sm text-muted-foreground">Total Clients</p>
            <h3 className="text-2xl font-bold">{roomStats?.totalClients || 0}</h3>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="p-4 flex flex-col items-center justify-center">
            <div className="rounded-full bg-indigo-100 p-3 mb-2">
              <Home className="h-6 w-6 text-indigo-700" />
            </div>
            <p className="text-sm text-muted-foreground"> Total Clients Living</p>
            <h3 className="text-2xl font-bold">{roomStats?.totalClientsLiving || 0}</h3>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all" className="mb-6" onValueChange={setActiveFilter}>
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Rooms</TabsTrigger>
          <TabsTrigger value="vacant">Vacant</TabsTrigger>
          <TabsTrigger value="occupied">Occupied</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-0">
          {filteredRooms && filteredRooms.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredRooms.map((room) => (
                <RoomDataCard key={room.id} room={room} />
              ))}
            </div>
          ) : (
            <div className="rounded-lg border shadow-sm p-6 text-center">
              <p className="text-muted-foreground">No rooms found. Add a room to get started.</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="vacant" className="mt-0">
          {filteredRooms && filteredRooms.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredRooms.map((room) => (
                <RoomDataCard key={room.id} room={room} />
              ))}
            </div>
          ) : (
            <div className="rounded-lg border shadow-sm p-6 text-center">
              <p className="text-muted-foreground">No vacant rooms found.</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="occupied" className="mt-0">
          {filteredRooms && filteredRooms.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredRooms.map((room) => (
                <RoomDataCard key={room.id} room={room} />
              ))}
            </div>
          ) : (
            <div className="rounded-lg border shadow-sm p-6 text-center">
              <p className="text-muted-foreground">No occupied rooms found.</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="maintenance" className="mt-0">
          {filteredRooms && filteredRooms.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredRooms.map((room) => (
                <RoomDataCard key={room.id} room={room} />
              ))}
            </div>
          ) : (
            <div className="rounded-lg border shadow-sm p-6 text-center">
              <p className="text-muted-foreground">No rooms under maintenance found.</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

