"use client"

import type React from "react"
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload, Trash2 } from "lucide-react"
import type { Control } from "react-hook-form"
import { RoomFormValues } from "@/utils/types/schema"

interface RoomBasicDetailsFormProps {
  control: Control<RoomFormValues>
  images: string[]
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void
  onImageRemove: (index: number) => void
}

export function RoomBasicDetailsForm({ control, images, onImageUpload, onImageRemove }: RoomBasicDetailsFormProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Room Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={control}
            name="roomNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Room Number</FormLabel>
                <FormControl>
                  <Input type="number" {...field} onChange={(e) => field.onChange(Number(e.target.value))} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="roomStatus"
            render={({ field }) => {
              // Debug the field value
              console.log("Room status field value:", field.value)

              return (
                <FormItem>
                  <FormLabel>Room Status</FormLabel>
                  <Select defaultValue={field.value} onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select room status">
                          {field.value === "VACANT" && "Vacant"}
                          {field.value === "OCCUPIED" && "Occupied"}
                          {field.value === "MAINTENANCE" && "Maintenance"}
                        </SelectValue>
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="VACANT">Vacant</SelectItem>
                      <SelectItem value="OCCUPIED">Occupied</SelectItem>
                      <SelectItem value="MAINTENANCE">Maintenance</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )
            }}
          />

          <FormField
            control={control}
            name="numberOfRooms"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of Rooms</FormLabel>
                <FormControl>
                  <Input type="number" {...field} onChange={(e) => field.onChange(Number(e.target.value))} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="maxNoOfClient"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Maximum Number of Clients</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min={1}
                    {...field}
                    onChange={(e) => {
                      const value = Number.parseInt(e.target.value)
                      if (!isNaN(value) && value > 0) {
                        field.onChange(value)
                      }
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter room description" className="min-h-[120px]" {...field} />
              </FormControl>
              <FormDescription>Provide details about the room (minimum 5 characters)</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div>
          <FormLabel>Room Images</FormLabel>
          <div className="mt-2 flex flex-wrap gap-4">
            <label className="flex h-32 w-32 cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-muted-foreground/50 bg-muted/50 hover:bg-muted transition-colors">
              <Upload className="h-6 w-6 text-muted-foreground" />
              <span className="mt-2 text-xs text-muted-foreground">Upload Image</span>
              <Input type="file" accept="image/*" multiple className="hidden" onChange={onImageUpload} />
            </label>

            {images.map((image, index) => (
              <div key={index} className="relative h-32 w-32">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Room image ${index + 1}`}
                  className="h-full w-full rounded-md object-cover"
                />
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  className="absolute -right-2 -top-2 h-6 w-6 rounded-full"
                  onClick={() => onImageRemove(index)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

