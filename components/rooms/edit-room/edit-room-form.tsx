"use client"
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { EditRoomSchema } from '@/features/schemas/room/room.schema'
import { useGetRoomById } from '@/features/hooks/tanstacks/query-hooks/rooms/use-get-room-by-id'
import { useRoomId } from '@/features/hooks/params-id/use-rooms-id'
import SpinningLoader from '@/components/shared/SpinningLoader'
import { RoomStatusBadge } from '@/components/shared/room-status-badge'
import RouteBackButton from '@/components/shared/route-back-button'
import { Form } from '@/components/ui/form'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { Button } from '@/components/ui/button'
import RoomBasicDetailsForm from './room-basic-details-form'
import { useLocationStore } from '@/features/store/location/use-location-store'
import { Loader2, Save } from 'lucide-react'
import { toast } from 'sonner'
import RoomClientDetailsForEdit from './room-client-details-for-edit'
import { RoomBillingForm } from './room-billing-form'
import { RoomLocationForm } from './edit-location-form'
import RoomLocationMap from "./room-location-map"

const provinces = [
  { id: 1, name: "Province 1" },
  { id: 2, name: "Province 2" },
  { id: 3, name: "Province 3" },
  { id: 4, name: "Province 4" },
  { id: 5, name: "Province 5" },
  { id: 6, name: "Province 6" },
  { id: 7, name: "Province 7" },
]


function EditRoomFormPage() {
  const id = useRoomId();
  const { data: roomData, isLoading } = useGetRoomById(id)
  const { resetAllData } = useLocationStore()
  const [mounted, setMounted] = useState(false)
  const [hasClient, setHasClient] = useState(false)
  const [images, setImages] = useState<string[]>([])
  const [files, setFiles] = useState<File[]>([])
  const [previewUrls, setPreviewUrls] = useState<string[]>([])
  const filesRef = useRef<File[]>([])

  const form = useForm<z.infer<typeof EditRoomSchema>>({
    resolver: zodResolver(EditRoomSchema),
    defaultValues: {
      beds: 0,
      clientInitationDate: undefined,
      clients: [],
      description: "",
      dueAmount: 0,
      lastPayedDate: undefined,
      lat: undefined,
      location: "",
      lon: undefined,
      numberOfRooms: 0,
      ownerId: "",
      owner: {
        id: "",
        name: "",
        email: "",
        phoneNumber: "",
        image: "",
      },
      payedAmount: 0,
      province: 1,
      roomBilling: {
        water: 0,
        electricity: 0,
        internet: 0,
        roomCost: 0,
        createdAt: new Date(),
        ownerId: "",
        roomId: "",
        id: "",
      },
      roomCapacity: 0,
      roomImages: [],
      roomNumber: 0,
      roomStatus: "VACANT",
      startedPriceFromDate: undefined,
      title: "",
      toilet: 0,
      roomPayment: []
    }
  })

  const clientsFiledArray = useFieldArray({
    control: form.control,
    name: "clients"
  });

  const roomStatus = form.watch("roomStatus")
  const roomCapacity = form.watch("roomCapacity")


  const resetFromWithRoomData = useCallback(() => {
    if (!mounted || isLoading || !roomData?.data) return;
    if (roomData?.data) {
      const room = roomData.data;
      form.reset({
        beds: room.beds,
        clientInitationDate: room.clientInitationDate,
        clients: room.clients,
        description: room.description,
        dueAmount: room.dueAmount,
        lastPayedDate: room.lastPayedDate,
        lat: room.lat,
        location: room.location,
        lon: room.lon,
        numberOfRooms: room.numberOfRooms,
        ownerId: room.ownerId,
        owner: {
          id: room.owner.id,
          name: room.owner.name,
          email: room.owner.email,
          phoneNumber: room.owner.phoneNumber,
          image: room.owner.image,
        },
        payedAmount: room.payedAmount,
        province: room.province,
        roomBilling: {
          water: room.roomBilling.water,
          electricity: room.roomBilling.electricity,
          internet: room.roomBilling.internet,
          roomCost: room.roomBilling.roomCost,
          createdAt: room.roomBilling.createdAt,
          ownerId: room.roomBilling.ownerId,
          roomId: room.roomBilling.roomId,
          id: room.roomBilling.id,
        },
        roomCapacity: room.roomCapacity,
        roomImages: room.roomImages,
        roomNumber: room.roomNumber,
        roomStatus: room.roomStatus,
        startedPriceFromDate: room.startedPriceFromDate,
        title: room.title,
        toilet: room.toilet,
        roomPayment: room.roomPayment,
      })
      setImages(room.roomImages)
    }
  }, [mounted, isLoading, roomData, form])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    resetFromWithRoomData();
  }, [resetFromWithRoomData])

  useEffect(() => {
    const currentclientCount = (hasClient ? 1 : 0) + clientsFiledArray.fields.length
    if (currentclientCount > roomCapacity) {
      const excess = currentclientCount - roomCapacity;
      if (excess > 0) {
        if (hasClient && clientsFiledArray.fields.length > 0) {
          const clientsToRemove = Math.min(excess, clientsFiledArray.fields.length)
          for (let i = 0; i < clientsToRemove; i++) {
            clientsFiledArray.remove(clientsFiledArray.fields.length - 1)
          }
        } else if (hasClient && excess > 0) {
          setHasClient(false)
          form.setValue("clients", [])
        }
      }
    }
  }, [roomCapacity, hasClient, clientsFiledArray, form])

  async function onSubmit(data: z.infer<typeof EditRoomSchema>) {
    console.log("Form data:", data)
  }


  const handleImageChageForFiles = useCallback((newFiles: File[]) => {
    setFiles(newFiles)
  }, [])


  const handleCancel = () => {
    if (!mounted || isLoading) return;
    resetAllData();
    setFiles([])
    resetFromWithRoomData();

  }

  const handleServerImages = (imageUrl: string) => {
    setImages((prev) => {
      const newImages = prev.filter((image) => image !== imageUrl)
      return newImages;
    })
  }


  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = e.target.files;
    if (!newFiles) return;

    const fileArray = Array.from(newFiles);
    if (filesRef.current.length + fileArray.length + images.length > 10) {
      toast.error("You can only upload up to 10 images");
      return;
    }

    const updatedFiles = [...files, ...fileArray];
    const newPreviewUrls = fileArray.map(file => URL.createObjectURL(file));
    const updatedPreviewUrls = [...previewUrls, ...newPreviewUrls];

    setFiles(updatedFiles);
    setPreviewUrls(updatedPreviewUrls);
    filesRef.current = updatedFiles;
    handleImageChageForFiles(updatedFiles);
  };

  const removeImage = (index: number) => {
    const newFiles = [...files];
    const newPreviewUrls = [...previewUrls];

    URL.revokeObjectURL(newPreviewUrls[index]);

    newFiles.splice(index, 1);
    newPreviewUrls.splice(index, 1);

    setFiles(newFiles);
    setPreviewUrls(newPreviewUrls);
    filesRef.current = newFiles;
    handleImageChageForFiles(newFiles);
  };

  useEffect(() => {
    return () => {
      previewUrls.forEach(url => URL.revokeObjectURL(url))
    }
  }, [previewUrls])


  const handleAddClient = () => {
    if (clientsFiledArray.fields.length >= roomCapacity) {
      toast.error("Maximum client limit reached")
      return
    }
    setHasClient(true)
  }

  const handleLocationSelect = (location: string, position: [number, number]) => {
    form.setValue("location", location)
    form.setValue("lat", position[0])
    form.setValue("lon", position[1])
  }

  if (!mounted) {
    return null
  }
  if (isLoading) {
    return <SpinningLoader />
  }

  return (
    <div className='py-4 px-4 md:px-6 lg:px-10'>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <RouteBackButton />
        <div className="flex items-center gap-2">
          <RoomStatusBadge status={roomStatus} />
          <span className="text-muted-foreground">Room {form.getValues("roomNumber")}</span>
        </div>
      </div>

      <div className='mochiy-pop-one-regular '>
        <h1 className="text-2xl font-bold my-1">Edit <span className='text-[#ff0000]'>Room</span> </h1>
        <p className="text-muted-foreground text-sm">Update room details and client information</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 mt-4'>
          <Tabs defaultValue="basic" className="w-full" >
            <TabsList className="grid grid-cols-4 w-full mb-6">
              <TabsTrigger value="basic">Basic Details</TabsTrigger>
              <TabsTrigger value="clients">Clients</TabsTrigger>
              <TabsTrigger value="billing">Billing</TabsTrigger>
              <TabsTrigger value="location">Location</TabsTrigger>
            </TabsList>

            <TabsContent value="basic" className="space-y-6">
              <RoomBasicDetailsForm
                form={form}
                images={images}
                handleServerImages={handleServerImages}
                previewUrls={previewUrls}
                files={files}
                removeImage={removeImage}
                handleImageChange={handleImageChange}

              />
            </TabsContent>
            <TabsContent value="clients">
              <RoomClientDetailsForEdit
                form={form}
                clientsFieldArray={clientsFiledArray}
                hasClient={hasClient}
                onAddClient={handleAddClient}
                roomCapacity={roomCapacity}
              />
            </TabsContent>
            <TabsContent value="billing">
              <RoomBillingForm
                control={form.control}
              />
            </TabsContent>

            <TabsContent value="location" className="space-y-6">
              <RoomLocationMap
                lat={form.watch("lat")}
                lon={form.watch("lon")}
                onLocationSelect={handleLocationSelect}
              />
            </TabsContent>



          </Tabs>
          <div className="flex flex-col sm:flex-row sm:justify-end gap-4">
            <Button type="button" variant="outline" onClick={handleCancel}>
              Cancel
            </Button>
            <Button type="submit">

              Save Changes
            </Button>
          </div>
        </form>
      </Form>


    </div>
  )
}

export default EditRoomFormPage
