"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { RoomStatus } from "@prisma/client"
import { useRouter } from "next/navigation"
import type React from "react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import {
  Loader2,
  Plus,
  Trash2,
  Upload,
  Home,
  DollarSign,
  Zap,
  Droplets,
  Wifi,
  Users,
  Info,
  ImageIcon,
} from "lucide-react"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"
import { Card, CardContent } from "../ui/card"
import { Badge } from "../ui/badge"
import { Separator } from "../ui/separator"
import { RoomSchema } from "@/utils/types/schema"
import Hint from "../shared/hint"
import { createRoom } from "@/actions/room/room"
import toast from "react-hot-toast"



function AddRoomFormPage() {
  const router = useRouter()
  const [images, setImages] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof RoomSchema>>({
    resolver: zodResolver(RoomSchema),
    defaultValues: {
      roomStatus: RoomStatus.VACANT,
      noOfRooms: 1,
      description: "",
      roomNumber: 0,
      location: "",
      roomImages: [],
      maxNoOfClient: 1,
      roomCost: undefined,
      electricityBill: undefined,
      waterBill: undefined,
      internetBill: undefined,
    },
  })

  const roomStatus = form.watch("roomStatus")


  //TODO : Handle image upload feautres

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files)
      const newImages = filesArray.map((file) => URL.createObjectURL(file))
      setImages((prev) => [...prev, ...newImages])
      form.setValue("roomImages", [...images, ...newImages])
    }
  }

  const handleRemoveImage = (index: number) => {
    const newImages = [...images]
    newImages.splice(index, 1)
    setImages(newImages)
    form.setValue("roomImages", newImages)
  }

  async function onSubmit(values: z.infer<typeof RoomSchema>) {
    setIsSubmitting(true)
    try {
      const res = await createRoom(values)
      console.log("this is the response", res)
      if (res.message && res.room) {
        toast.success(res.message)
        router.replace("/ghar/rooms")
        form.reset()
      } else if (res.error) {
        toast.error(res.error)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      toast.error("something went wrong")
    } finally {
      setIsSubmitting(false)
    }
  }

  const calculateTotalCost = () => {
    const roomCost = form.watch("roomCost") || 0
    const electricityBill = form.watch("electricityBill") || 0
    const waterBill = form.watch("waterBill") || 0
    const internetBill = form.watch("internetBill") || 0

    return roomCost + electricityBill + waterBill + internetBill
  }

  const totalCost = calculateTotalCost()

  return (
    <div className="w-full px-4 sm:px-6 md:max-w-5xl md:mx-auto ">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Add New Room</h1>
          <Badge
            variant={
              roomStatus === RoomStatus.VACANT
                ? "outline"
                : roomStatus === RoomStatus.OCCUPIED
                  ? "default"
                  : "destructive"
            }
            className="text-sm py-1 px-3"
          >
            {roomStatus.charAt(0) + roomStatus.slice(1).toLowerCase()}
          </Badge>
        </div>
        <p className="text-muted-foreground mt-2">Fill in the details below to add a new room to the system</p>
        <Separator className="my-4" />
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Summary Card - Appears at top on mobile, left side on desktop */}
            <div className="order-2 lg:order-1 lg:col-span-1">
              <Card className="lg:sticky lg:top-4">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Info className="mr-2 h-4 w-4" />
                    Room Summary
                  </h3>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-1 gap-4">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground flex items-center">
                          <Home className="mr-2 h-4 w-4" />
                          Room Status
                        </span>
                        <span className="font-medium">{roomStatus.charAt(0) + roomStatus.slice(1).toLowerCase()}</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground flex items-center">
                          <Home className="mr-2 h-4 w-4" />
                          Rooms
                        </span>
                        <span className="font-medium">{form.watch("noOfRooms") || 0}</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground flex items-center">
                          <Users className="mr-2 h-4 w-4" />
                          Max Clients
                        </span>
                        <span className="font-medium">{form.watch("maxNoOfClient") || 0}</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground flex items-center">
                          <ImageIcon className="mr-2 h-4 w-4" />
                          Images
                        </span>
                        <span className="font-medium">{images.length}</span>
                      </div>
                    </div>

                    <Separator />

                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-1 gap-4">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground flex items-center">
                          <DollarSign className="mr-2 h-4 w-4" />
                          Room Cost
                        </span>
                        <span className="font-medium">${form.watch("roomCost") || 0}</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground flex items-center">
                          <Zap className="mr-2 h-4 w-4" />
                          Electricity
                        </span>
                        <span className="font-medium">${form.watch("electricityBill") || 0}</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground flex items-center">
                          <Droplets className="mr-2 h-4 w-4" />
                          Water
                        </span>
                        <span className="font-medium">${form.watch("waterBill") || 0}</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground flex items-center">
                          <Wifi className="mr-2 h-4 w-4" />
                          Internet
                        </span>
                        <span className="font-medium">${form.watch("internetBill") || 0}</span>
                      </div>
                    </div>

                    <Separator />

                    <div className="flex justify-between items-center font-bold">
                      <span>Total Cost</span>
                      <span className="text-lg">${totalCost.toFixed(2)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Form Fields - Appears first on mobile, right side on desktop */}
            <div className="order-1 lg:order-2 lg:col-span-2">
              <Accordion type="single" collapsible defaultValue="room-details" className="w-full">
                <AccordionItem value="room-details" className="border rounded-lg mb-4 shadow-sm">
                  <AccordionTrigger className="text-xl font-semibold px-4 py-3 hover:bg-muted/50">
                    <div className="flex items-center">
                      <Home className="mr-2 h-5 w-5" />
                      Room Details
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="p-4 pt-2">
                    <div className="grid gap-6 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="roomStatus"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center">
                              Room Status
                              <Hint label='Current occupancy status of the room'>

                                <Info className="h-4 w-4 ml-1 text-muted-foreground" />
                              </Hint>

                            </FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="w-full">
                                  <SelectValue placeholder="Select room status" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {Object.values(RoomStatus).map((status) => (
                                  <SelectItem key={status} value={status}>
                                    {status.charAt(0) + status.slice(1).toLowerCase()}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="noOfRooms"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center">
                              Number of Rooms
                              <Hint label="How many separate rooms are included">
                                <Info className="h-4 w-4 ml-1 text-muted-foreground" />
                              </Hint>
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="number"
                                min={1}
                                className="w-full"
                                {...field}
                                onChange={(e) => field.onChange(e.target.value && Number.parseInt(e.target.value))}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="maxNoOfClient"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center">
                              Maximum Clients
                              <Hint label="Maximum no. of people allowed to stay">
                                <Info className="h-4 w-4 ml-1 text-muted-foreground" />
                              </Hint>
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="number"
                                min={1}
                                className="w-full"
                                {...field}
                                onChange={(e) => field.onChange(e.target.value && Number.parseInt(e.target.value))}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="roomNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center">
                              Room Number
                              <Hint label="Room Number">
                                <Info className="h-4 w-4 ml-1 text-muted-foreground" />
                              </Hint>
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="number"
                                min={1}
                                className="w-full"
                                {...field}
                                onChange={(e) => field.onChange(e.target.value && Number.parseInt(e.target.value))}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center">
                              Location
                              <Hint label="location">
                                <Info className="h-4 w-4 ml-1 text-muted-foreground" />
                              </Hint>
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="text"
                                min={1}
                                className="w-full"
                                placeholder="your location"
                                {...field}
                                onChange={(e) => field.onChange(e.target.value)}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="mt-6">
                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center">
                              Description
                              <Hint label="detailed description of the room and amentities">
                                <Info className="h-4 w-4 ml-1 text-muted-foreground" />
                              </Hint>
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Enter room description"
                                className="min-h-[120px] resize-none"
                                {...field}
                              />
                            </FormControl>
                            <div className="flex justify-between">
                              <FormDescription>Between 5-300 characters</FormDescription>
                              <p className="text-xs text-muted-foreground">{field.value.length}/300 characters</p>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="mt-6">
                      <FormLabel className="flex items-center mb-2">
                        Room Images
                        <Hint label="upload the photos of the room">
                          <Info className="h-4 w-4 ml-1 text-muted-foreground" />
                        </Hint>
                      </FormLabel>
                      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4">
                        <label className="flex h-32 cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-muted-foreground/50 bg-muted/50 hover:bg-muted transition-colors">
                          <Upload className="h-6 w-6 text-muted-foreground" />
                          <span className="mt-2 text-xs text-muted-foreground">Upload Images</span>
                          <Input
                            type="file"
                            accept="image/*"
                            multiple
                            className="hidden"
                            onChange={handleImageUpload}
                          />
                        </label>

                        {images.map((image, index) => (
                          <div key={index} className="relative h-32">
                            <img
                              src={image || "/placeholder.svg"}
                              alt={`Room image ${index + 1}`}
                              className="h-full w-full rounded-md object-cover"
                            />
                            <Button
                              type="button"
                              variant="destructive"
                              size="icon"
                              className="absolute -right-2 -top-2 h-6 w-6 rounded-full shadow-md"
                              onClick={() => handleRemoveImage(index)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                      {images.length > 0 && (
                        <p className="text-xs text-muted-foreground mt-2">
                          {images.length} image{images.length !== 1 ? "s" : ""} uploaded
                        </p>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="billing-details" className="border rounded-lg shadow-sm">
                  <AccordionTrigger className="text-xl font-semibold px-4 py-3 hover:bg-muted/50">
                    <div className="flex items-center">
                      <DollarSign className="mr-2 h-5 w-5" />
                      Billing Details
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="p-4 pt-2">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="roomCost"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center">
                              Room Cost
                              <Hint label="Base cost of room per month">
                                <Info className="h-4 w-4 ml-1 text-muted-foreground" />
                              </Hint>
                            </FormLabel>
                            <FormControl>
                              <div className="relative">
                                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                  type="number"
                                  min={0}
                                  step="0.01"
                                  placeholder="0.00"
                                  className="pl-8"
                                  {...field}
                                  onChange={(e) => field.onChange(Number.parseFloat(e.target.value))}
                                  value={field.value ?? ""}
                                />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="electricityBill"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center">
                              Electricity Bill
                              <Hint label="Monthly electric bill">
                                <Info className="h-4 w-4 ml-1 text-muted-foreground" />
                              </Hint>
                            </FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Zap className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                  type="number"
                                  min={0}
                                  step="0.01"
                                  placeholder="0.00"
                                  className="pl-8"
                                  {...field}
                                  onChange={(e) => field.onChange(Number.parseFloat(e.target.value))}
                                  value={field.value ?? ""}
                                />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="waterBill"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center">
                              Water Bill
                              <Hint label="Monthly electric charge">
                                <Info className="h-4 w-4 ml-1 text-muted-foreground" />
                              </Hint>
                            </FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Droplets className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                  type="number"
                                  min={0}
                                  step="0.01"
                                  placeholder="0.00"
                                  className="pl-8"
                                  {...field}
                                  onChange={(e) => field.onChange(Number.parseFloat(e.target.value))}
                                  value={field.value ?? ""}
                                />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="internetBill"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center">
                              Internet Bill
                              <Hint label="Monthly internet bill">
                                <Info className="h-4 w-4 ml-1 text-muted-foreground" />
                              </Hint>
                            </FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Wifi className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                  type="number"
                                  min={0}
                                  step="0.01"
                                  placeholder="0.00"
                                  className="pl-8"
                                  {...field}
                                  onChange={(e) => field.onChange(Number.parseFloat(e.target.value))}
                                  value={field.value ?? ""}
                                />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Total Monthly Cost:</span>
                        <span className="text-lg font-bold">${totalCost.toFixed(2)}</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

          </div>
          {/* <div className="">
            <Accordion type="single" collapsible defaultValue="map-details" className="border rounded-lg shadow-sm">
              <AccordionItem value="map-details">
                <AccordionTrigger className="text-xl font-semibold px-4 py-3 hover:bg-muted/50">
                  <div className="flex items-center">
                    <Home className="mr-2 h-5 w-5" />
                    Location Details
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="w-full h-full">
                    <AddMapPage />
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div> */}

          <div className="flex flex-col sm:flex-row sm:justify-end gap-4 mt-8">
            <Button type="button" variant="outline" onClick={() => router.back()} disabled={isSubmitting} className="w-full sm:w-auto">
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto px-8">
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Room
                </>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default AddRoomFormPage

