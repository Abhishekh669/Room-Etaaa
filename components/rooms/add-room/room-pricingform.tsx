"use client"
import {
  FormField, FormItem, FormLabel, FormControl,
  FormMessage, FormDescription
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { UseFormReturn } from "react-hook-form"
import { z } from "zod"
import { RoomSchema } from "@/features/schemas/room/room.schema"
import { useState } from "react"

interface RoomPricingFormProps {
  form: UseFormReturn<z.infer<typeof RoomSchema>>
}

export const RoomPricingForm = ({ form }: RoomPricingFormProps) => {
  const handleNumberChange = (field: any) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numberValue = value === '' ? 0 : parseInt(value, 10);
    field.onChange(numberValue);
  }



  return (
    <div className="grid gap-6 md:grid-cols-2">
      <FormField
        control={form.control}
        name="roomCost"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="font-semibold">Room Cost</FormLabel>
            <FormControl>
              <Input
                type="number"
                min="0"
                value={field.value?.toString() || ""}
                onChange={handleNumberChange(field)}
                className="border-gray-300 focus-visible:ring-[#ff0000]"
              />
            </FormControl>
            <FormDescription>Base cost of the room per month</FormDescription>
            <FormMessage className="text-[#ff0000]" />
          </FormItem>
        )}
      />

      <div className="space-y-4">
        <h3 className="font-semibold">Utilities (Cost per month)</h3>

        <FormField
          control={form.control}
          name="water"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between">
                <FormLabel>Water</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min="0"
                    value={field.value?.toString() || ""}
                    onChange={handleNumberChange(field)}
                    className="w-32 border-gray-300 focus-visible:ring-[#ff0000]"
                  />
                </FormControl>
              </div>
              <FormMessage className="text-[#ff0000]" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="electricity"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between">
                <FormLabel>Electricity</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min="0"
                    value={field.value?.toString() || ""}
                    onChange={handleNumberChange(field)}
                    className="w-32 border-gray-300 focus-visible:ring-[#ff0000]"
                  />
                </FormControl>
              </div>
              <FormMessage className="text-[#ff0000]" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="internet"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between">
                <FormLabel>Internet</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min="0"
                    value={field.value?.toString() || ""}
                    onChange={handleNumberChange(field)}
                    className="w-32 border-gray-300 focus-visible:ring-[#ff0000]"
                  />
                </FormControl>
              </div>
              <FormMessage className="text-[#ff0000]" />
            </FormItem>
          )}
        />
      </div>

      <div className="md:col-span-2 bg-gray-50 p-4 rounded-lg">
        <h3 className="font-semibold text-lg mb-2">Total Monthly Cost</h3>
        <div className="flex justify-between items-center">
          <span>Room Cost:</span>
          <span className="font-medium">Rs {form.watch('roomCost') || 0}</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Utilities:</span>
          <span className="font-medium">
            Rs {(form.watch('water') || 0) + (form.watch('electricity') || 0) + (form.watch('internet') || 0)}
          </span>
        </div>
        <Separator className="my-2" />
        <div className="flex justify-between items-center text-lg font-bold">
          <span>Total:</span>
          <span className="text-[#ff0000]">
            Rs {(form.watch('roomCost') || 0) + (form.watch('water') || 0) + (form.watch('electricity') || 0) + (form.watch('internet') || 0)}
          </span>
        </div>
      </div>
    </div>
  )
}
