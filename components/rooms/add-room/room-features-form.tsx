"use client"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { MapPin } from 'lucide-react'
import { UseFormReturn } from "react-hook-form"
import { z } from "zod"
import { RoomSchema } from "@/features/schemas/room/room.schema"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useShowPosition } from "@/features/store/use-show-position.ts/use-show-position"
import { useRouter } from "next/navigation"
import { useLocationStore } from "@/features/store/location/use-location-store"
import ShowMapPage from "./show-map"

interface Province {
  id: number
  name: string
}

interface RoomFeaturesFormProps {
  form: UseFormReturn<z.infer<typeof RoomSchema>>
  provinces: Province[]
}

export const RoomFeaturesForm = ({ form, provinces }: RoomFeaturesFormProps) => {
  const [showMap, setShowMap] = useState(false);
  const router = useRouter();
  const { location, position, resetAllData } = useLocationStore();
  console.log("thisi slocation : ", position, location)

  useEffect(() => {
    if (position && position[0] !== 0 && position[1] !== 0) {
      form.setValue("lat", position[0]);
      form.setValue("lon", position[1]);
    }
    if (location) {
      form.setValue("location", location);
    }
  }, [position, location, form]);

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <ShowMapPage showMap={showMap} onClose={() => setShowMap(false)} />
      <FormField
        control={form.control}
        name="province"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="font-semibold">Province</FormLabel>
            <Select
              onValueChange={(value) => field.onChange(Number(value))}
              defaultValue={field.value?.toString()}
            >
              <FormControl>
                <SelectTrigger className="border-gray-300 focus:ring-[#ff0000]">
                  <SelectValue placeholder="Select province" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {provinces.map((province) => (
                  <SelectItem
                    key={province.id}
                    value={province.id.toString()}
                    className="focus:bg-red-50"
                  >
                    {province.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage className="text-[#ff0000]" />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="location"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="font-semibold">Location</FormLabel>
            <FormControl>
              <div className="relative">
                <Input
                  placeholder="Enter location"
                  {...field}
                  className="pl-9 border-gray-300 focus-visible:ring-[#ff0000]"
                />
                <MapPin className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
              </div>
            </FormControl>
            <FormMessage className="text-[#ff0000]" />
          </FormItem>
        )}
      />

      <div className="md:col-span-2">
        <div className="md:col-span-2">
          <div className="flex flex-col space-y-2">
            <FormLabel className="font-semibold">Position</FormLabel>

            <div className="flex flex-wrap items-center gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setShowMap(true);
                }}
                className="text-sm"
              >
                Select from Map
              </Button>

              {(location || position) && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    resetAllData();
                    form.setValue("lat", 0);
                    form.setValue("lon", 0);
                    form.setValue("location", "");
                  }}
                  className="text-sm"
                >
                  Clear Location
                </Button>
              )}
            </div>

            {(location || position) && (
              <div className="text-sm text-muted-foreground mt-1">
                {location || `Lat: ${position[0]}, Lon: ${position[1]}`}
              </div>
            )}
          </div>
        </div>

        {showMap && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            <FormField
              control={form.control}
              name="lat"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Latitude</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      step="any"
                      value={field.value?.toString() || ""}
                      onChange={(e) => field.onChange(parseFloat(e.target.value))}
                      className="border-gray-300 focus-visible:ring-[#ff0000]"
                    />
                  </FormControl>
                  <FormMessage className="text-[#ff0000]" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lon"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Longitude</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      step="any"
                      value={field.value?.toString() || ""}
                      onChange={(e) => field.onChange(parseFloat(e.target.value))}
                      className="border-gray-300 focus-visible:ring-[#ff0000]"
                    />
                  </FormControl>
                  <FormMessage className="text-[#ff0000]" />
                </FormItem>
              )}
            />
          </div>
        )}
      </div>

      <Separator className="my-2 md:col-span-2" />

      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="numberOfRooms"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold">Number of Rooms</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  min="1"
                  {...field}
                  onChange={e => field.onChange(Number(e.target.value))}
                  className="border-gray-300 focus-visible:ring-[#ff0000]"
                />
              </FormControl>
              <FormMessage className="text-[#ff0000]" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="beds"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold">Beds</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  min="1"
                  {...field}
                  onChange={e => field.onChange(Number(e.target.value))}
                  className="border-gray-300 focus-visible:ring-[#ff0000]"
                />
              </FormControl>
              <FormMessage className="text-[#ff0000]" />
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="toilet"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold">Toilets</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  min="1"
                  {...field}
                  onChange={e => field.onChange(Number(e.target.value))}
                  className="border-gray-300 focus-visible:ring-[#ff0000]"
                />
              </FormControl>
              <FormMessage className="text-[#ff0000]" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="roomCapacity"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold">Room Capacity</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  min="1"
                  {...field}
                  onChange={e => field.onChange(Number(e.target.value))}
                  className="border-gray-300 focus-visible:ring-[#ff0000]"
                />
              </FormControl>
              <FormMessage className="text-[#ff0000]" />
            </FormItem>
          )}
        />
      </div>
    </div>
  )
}