"use client"

import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { DollarSign, Zap, Droplets, Wifi } from "lucide-react"
import { useWatch, type Control } from "react-hook-form"
import { RoomFormValues } from "@/utils/types/schema"

interface RoomBillingFormProps {
  control: Control<RoomFormValues>
  calculateTotalCost: () => number
}

export function RoomBillingForm({ control }: RoomBillingFormProps) {
  const [roomCost, electricityBill, waterBill, internetBill] = useWatch({
    control,
    name: ["roomCost", "electricityBill", "waterBill", "internetBill"]
  });

  // Calculate total cost
  const calculateTotalCost = () => {
    return (
      (Number(roomCost) || 0) +
      (Number(electricityBill) || 0) +
      (Number(waterBill) || 0) +
      (Number(internetBill) || 0)
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
            name="roomCost"
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
            name="electricityBill"
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
            name="waterBill"
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
            name="internetBill"
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

        <FormField
          control={control}
          name="payedMoney"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount Paid</FormLabel>
              <FormControl>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="number"
                    className="pl-8"
                    {...field}
                    onChange={(e) => field.onChange(e.target.value ? Number(e.target.value) : null)}
                    value={field.value ?? ""}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="p-4 bg-muted/50 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="font-semibold">Total Monthly Cost:</span>
            <span className="text-lg font-bold">${calculateTotalCost().toFixed(2)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

