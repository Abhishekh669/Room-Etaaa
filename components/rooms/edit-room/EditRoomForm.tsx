"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { notFound, useParams, useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, useFieldArray } from "react-hook-form"
import { ArrowLeft, Save, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { roomFormSchema, RoomFormValues } from "@/utils/types/schema"
import { Room } from "@/utils/types/type"
import { RoomBasicDetailsForm } from "./room-basic-details"
import { RoomBillingForm } from "./room-billing-form"
import { RoomLocationForm } from "./room-location-form"
import { RoomClientsForm } from "./room-client-form"
import { RoomStatus } from "@prisma/client"
import { getRoomDataById, updateRoomData } from "@/actions/room/room"
import toast from "react-hot-toast"


export default function EditRoomPage() {
  const params = useParams()
  const router = useRouter()
  const roomId = params.id as string;
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [images, setImages] = useState<string[]>([])
  const [hasClient, setHasClient] = useState(false)

  // Initialize form
  const form = useForm<RoomFormValues>({
    resolver: zodResolver(roomFormSchema),
    defaultValues: {
      roomNumber: 0,
      roomStatus: "VACANT",
      description: "",
      numberOfRooms: 1,
      maxNoOfClient: 1,
      roomCost: 0,
      electricityBill: 0,
      waterBill: 0,
      internetBill: 0,
      location: "",
      lat: null,
      lon: null,
      clientInitationDate: null,
      payedMoney: null,
      client: null,
      otherClients: [],
      roomImages: [],
    },
  })

  const clientsFieldArray = useFieldArray({
    control: form.control,
    name: "otherClients",
  })

  const roomStatus = form.watch("roomStatus")

  const maxNoOfClient = form.watch("maxNoOfClient")

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        setIsLoading(true)
        const mockRoom = await getRoomDataById(roomId);
        if (!mockRoom || "error" in mockRoom) {
          return notFound();
        }
        form.reset({
          roomNumber: mockRoom.roomNumber,
          roomStatus: mockRoom.roomStatus,
          description: mockRoom.description,
          numberOfRooms: mockRoom.numberOfRooms,
          maxNoOfClient: mockRoom.maxNoOfClient,
          roomCost: mockRoom.roomCost,
          electricityBill: mockRoom.electricityBill,
          waterBill: mockRoom.waterBill,
          internetBill: mockRoom.internetBill,
          location: mockRoom.location,
          lat: mockRoom.lat,
          lon: mockRoom.lon,
          clientInitationDate: mockRoom.clientInitationDate,
          payedMoney: mockRoom.payedMoney,
          client: mockRoom.client,
          otherClients: mockRoom.otherClients || [],
          roomImages: mockRoom.roomImages || [],
        })

        setImages(mockRoom.roomImages || [])
        setHasClient(!!mockRoom.client)
      } catch (error) {
        console.error("Error fetching room data:", error)
      } finally {
        setIsLoading(false)
      }
    }

    if (roomId) {
      fetchRoomData()
    }
  }, [roomId, form])

  useEffect(() => {
    const currentClientCount = (hasClient ? 1 : 0) + clientsFieldArray.fields.length
    if (currentClientCount > maxNoOfClient) {
      const excessClients = currentClientCount - maxNoOfClient
      if (excessClients > 0) {
        if (hasClient && clientsFieldArray.fields.length > 0) {
          const clientsToRemove = Math.min(excessClients, clientsFieldArray.fields.length)
          for (let i = 0; i < clientsToRemove; i++) {
            clientsFieldArray.remove(clientsFieldArray.fields.length - 1 - i)
          }
        } else if (hasClient && excessClients > 0) {
          setHasClient(false)
          form.setValue("client", null)
        }
      }
    }
  }, [maxNoOfClient, hasClient, clientsFieldArray, form])

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files)
      const newImages = filesArray.map((file) => URL.createObjectURL(file))
      setImages((prev) => [...prev, ...newImages])
      const currentImages = form.getValues("roomImages") || []
      form.setValue("roomImages", [...currentImages, ...newImages])
    }
  }

  const handleImageRemove = (index: number) => {
    const newImages = [...images]
    newImages.splice(index, 1)
    setImages(newImages)
    form.setValue("roomImages", newImages)
  }
  const handleAddPrimaryClient = () => {
    form.setValue("client", {
      id: "",
      name: "",
      email: null,
      phoneNumber: null,
    })
    setHasClient(true)
  }

  const handleRemovePrimaryClient = () => {
    form.setValue("client", null)
    setHasClient(false)
  }

  const handleAddOtherClient = () => {
    clientsFieldArray.append({
      id: "",
      name: "",
      email: null,
      phoneNumber: null,
    })
  }

  const calculateTotalCost = () => {
    const values = form.getValues()
    return (values.roomCost || 0) + (values.electricityBill || 0) + (values.waterBill || 0) + (values.internetBill || 0)
  }

  const onSubmit = async (values: RoomFormValues) => {
    try {
      setIsSaving(true)
      console.log("this is values : ",values)
      const response = await updateRoomData(values, roomId)
      if(response.message && response.success){
        toast.success(response.message)
        router.push(`/ghar/rooms/${roomId}`)
      } else if (response.error){
        toast.error("failed to update the form")
      }
    } catch (error) {
      console.error("Error saving room:", error)
    } finally {
      setIsSaving(false)
    }
  }

  if (isLoading) {
    return (
      <div className=" p-10 flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center">
          <Loader2 className="h-10 w-10 animate-spin text-primary" />
          <p className="mt-4 text-muted-foreground">Loading room data...</p>
        </div>
      </div>
    )
  }

  console.log("Current form values:", form.getValues())

  return (
    <div className="py10">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <Button variant="outline" onClick={() => router.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Room Details
        </Button>
        <div className="flex items-center gap-2">
          <Badge
            className={cn(
              roomStatus === "VACANT"
                ? "bg-green-100 text-green-800 border-green-300"
                : roomStatus === "OCCUPIED"
                  ? "bg-blue-100 text-blue-800 border-blue-300"
                  : "bg-amber-100 text-amber-800 border-amber-300",
            )}
          >
            {roomStatus.charAt(0) + roomStatus.slice(1).toLowerCase()}
          </Badge>
          <span className="text-muted-foreground">Room {form.getValues("roomNumber")}</span>
        </div>
      </div>

      <div className="mb-6">
        <h1 className="text-3xl font-bold">Edit Room</h1>
        <p className="text-muted-foreground">Update room details and client information</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Tabs defaultValue="basic" className="w-full">
            <TabsList className="grid grid-cols-4 w-full mb-6">
              <TabsTrigger value="basic">Basic Details</TabsTrigger>
              <TabsTrigger value="billing">Billing</TabsTrigger>
              <TabsTrigger value="location">Location</TabsTrigger>
              <TabsTrigger value="clients">Clients</TabsTrigger>
            </TabsList>

            <TabsContent value="basic" className="space-y-6">
              <RoomBasicDetailsForm
                control={form.control}
                images={images}
                onImageUpload={handleImageUpload}
                onImageRemove={handleImageRemove}
              />
            </TabsContent>

            <TabsContent value="billing" className="space-y-6">
              <RoomBillingForm control={form.control} calculateTotalCost={calculateTotalCost} />
            </TabsContent>

            <TabsContent value="location" className="space-y-6">
              <RoomLocationForm control={form.control} />
            </TabsContent>

            <TabsContent value="clients" className="space-y-6">
              <RoomClientsForm
                form={form}
                hasClient={hasClient}
                clientsFieldArray={clientsFieldArray}
                onAddPrimaryClient={handleAddPrimaryClient}
                onRemovePrimaryClient={handleRemovePrimaryClient}
                onAddOtherClient={handleAddOtherClient}
                maxNoOfClient={form.watch("maxNoOfClient")} 
                
              />
            </TabsContent>
          </Tabs>

          <div className="flex flex-col sm:flex-row sm:justify-end gap-4">
            <Button type="button" variant="outline" onClick={() => router.back()}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSaving}>
              {isSaving ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

