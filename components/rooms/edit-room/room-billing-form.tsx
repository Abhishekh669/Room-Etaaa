"use client"

import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { DollarSign, Zap, Droplets, Wifi } from "lucide-react"
import { useWatch, type Control } from "react-hook-form"
import { EditRoomType } from "@/features/schemas/room/room.schema"
import { Separator } from "@/components/ui/separator"

interface RoomBillingFormProps {
  control: Control<EditRoomType>
}

export function RoomBillingForm({ control }: RoomBillingFormProps) {
  const [roomCost, electricity, water, internet, dueAmount] = useWatch({
    control,
    name: ["roomBilling.roomCost", "roomBilling.electricity", "roomBilling.water", "roomBilling.internet",  "dueAmount"]
  });

  // Calculate total cost
  const calculateTotalCost = () => {
    return (
      (Number(roomCost) || 0) +
      (Number(electricity) || 0) +
      (Number(water) || 0) +
      (Number(internet) || 0) + 
      (Number(dueAmount) || 0)
    );
  };



  return (
    <Card>
      <CardHeader>
        <CardTitle>Billing Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={control}
            name="roomBilling.roomCost"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Room Cost</FormLabel>
                <FormControl>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="number"
                      className="pl-8"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                      value={field.value || ""}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="roomBilling.electricity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Electricity Bill</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Zap className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="number"
                      className="pl-8"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="roomBilling.water"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Water Bill</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Droplets className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="number"
                      className="pl-8"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="roomBilling.internet"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Internet Bill</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Wifi className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="number"
                      className="pl-8"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>


        <div className="p-4 bg-muted/50 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="font-semibold">Total Monthly Cost:</span>
            <span className="text-lg font-bold ">Rs {calculateTotalCost().toFixed(2)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

