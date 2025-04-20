"use client"
import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { RoomSchema } from "@/features/schemas/room/room.schema"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { RoomFeaturesForm } from "./room-features-form"
import { RoomPricingForm } from "./room-pricingform"
import { RoomBasicInfoForm } from "./room-basic-info"
import { useUploadThing } from "@/lib/uploadthing-client"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { checkRoomNumber, createRoom, removeMultipleRoomImages } from "@/features/actions/rooms/rooms"
import { useLocationStore } from "@/features/store/location/use-location-store"

const provinces = [
  { id: 1, name: "Province 1" },
  { id: 2, name: "Province 2" },
  { id: 3, name: "Province 3" },
  { id: 4, name: "Province 4" },
  { id: 5, name: "Province 5" },
  { id: 6, name: "Province 6" },
  { id: 7, name: "Province 7" },
]

export default function AddRoomForm() {
  const router = useRouter()
  const [loading, setLoading] = React.useState(false)
  const { startUpload } = useUploadThing("imageUploader")
  const [files, setFiles] = React.useState<File[]>([])
  const {resetAllData} = useLocationStore()

  const form = useForm<z.infer<typeof RoomSchema>>({
    resolver: zodResolver(RoomSchema),
    defaultValues: {
      roomStatus: "VACANT",
      province: 1,
      location: "",
      lon: undefined,
      lat: undefined,
      roomNumber: 0,
      roomFor : "STUDENTS",
      roomType : "ROOM",
      title: "",
      description: "",
      roomImages: [],
      numberOfRooms: 1,
      beds: 1,
      toilet: 1,
      roomCapacity: 1,
      water: 0,
      electricity: 0,
      internet: 0,
      roomCost: 0
    }
  })

  const handleImageChange = React.useCallback((newFiles: File[]) => {
    setFiles(newFiles)
  }, [])

  console.log("this is the images  ;",files)

  async function onSubmit(values: z.infer<typeof RoomSchema>) {
    let errorDelete : string[] = []
    try {
      setLoading(true)
      if (values.lat === 0 && values.lon === 0) {
        values = {
          ...values,
          lat: undefined,
          lon: undefined
        }
      }

      const checkRoom = await checkRoomNumber(values.roomNumber)
      if(!checkRoom.success){
        toast.error(checkRoom.message)
        setLoading(false)
        return;
      }

      let uploadedImages: string[] = []
      if (files.length > 0) {
        console.log("i am going to upload the images")
        const uploadResults = await startUpload(files)
        console.log("this is the upload results :", uploadResults)
        if (uploadResults) {
          errorDelete = uploadResults.map(result => result.ufsUrl)
          uploadedImages = uploadResults.map(result => result.ufsUrl)
        }
      }

      const formData = {
        ...values,
        roomImages: uploadedImages
      }

      const res = await createRoom(formData);
      if (res.message && res.success) {
        toast.success("Room added successfully")
        router.push("/ghar/rooms")
        form.reset()
        setFiles([])
        resetAllData()
      } else if(res.error){
        toast.error(res.error || "Something went wrong")
      }
    } catch (error) {
      await removeMultipleRoomImages(errorDelete);
      errorDelete = []
      console.error("Error submitting form:", error)
      toast.error(error instanceof Error ? error.message : "Something went wrong");
    } finally {
      setLoading(false)

    }
  }

  const handleCancel = () => {
    form.reset()
    resetAllData();
    setFiles([])
  }

  return (
    <div className="container mx-auto lg:flex lg:justify-center lg:items-center px-4 py-2 lg:p-4">
      <Card className="border-black/10 shadow-md lg:max-w-[800px] lg:w-[800px]">
        <CardHeader className="border-b">
          <CardTitle className="text-lg font-semibold">Add Room</CardTitle>
          <CardDescription className="text-sm text-gray-500">
            Fill in the details of the room you want to add.
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="p-6">
              <Accordion type="single" collapsible defaultValue="basic" className="w-full space-y-4">
                <AccordionItem value="basic" className="border rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-4 hover:no-underline data-[state=open]:text-[#ff0000]">
                    <span className="font-semibold">Basic Information</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 pt-2">
                    <RoomBasicInfoForm
                      form={form}
                      onImageChange={handleImageChange}
                    />
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="features" className="border rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-4 hover:no-underline data-[state=open]:text-[#ff0000]">
                    <span className="font-semibold">Features</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 pt-2">
                    <RoomFeaturesForm form={form} provinces={provinces} />
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="pricing" className="border rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-4 hover:no-underline data-[state=open]:text-[#ff0000]">
                    <span className="font-semibold">Pricing</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 pt-2">
                    <RoomPricingForm form={form} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>

            <CardFooter className="flex justify-between border-t p-6 bg-gray-50">
              <Button
                type="button"
                variant="outline"
                className="border-gray-300 hover:bg-gray-100 hover:text-black"
                onClick={handleCancel}
                disabled={loading}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-[#ff0000] hover:bg-red-700 text-white"
                disabled={loading}
              >
                {loading ? "Uploading..." : "Add Room"}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  )
}