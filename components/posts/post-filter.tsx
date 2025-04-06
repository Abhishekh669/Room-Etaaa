"use client"

import { useState, useCallback } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, X } from "lucide-react"

const formSchema = z.object({
  location: z.string().optional(),
  minPrice: z.coerce.number().min(0).optional(),
  maxPrice: z.coerce.number().min(0).optional(),
  rooms: z.coerce.number().min(0).optional(),
  search: z.string().optional(),
})

type FilterFormValues = z.infer<typeof formSchema>

export function PostFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  const form = useForm<FilterFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: searchParams.get("location") || "",
      minPrice: searchParams.get("minPrice") ? Number(searchParams.get("minPrice")) : 0,
      maxPrice: searchParams.get("maxPrice") ? Number(searchParams.get("maxPrice")) : 20000,
      rooms: searchParams.get("rooms") ? Number(searchParams.get("rooms")) : undefined,
      search: searchParams.get("search") || "",
    },
  })

  const updateActiveFilters = () => {
    const values = form.getValues()
    const newActiveFilters: string[] = []

    if (values.location) {
      newActiveFilters.push(`Location: ${values.location}`)
    }
    if (values.minPrice && values.minPrice > 0) {
      newActiveFilters.push(`Min Price: $${values.minPrice}`)
    }
    if (values.maxPrice && values.maxPrice < 20000) {
      newActiveFilters.push(`Max Price: $${values.maxPrice}`)
    }
    if (values.rooms) {
      newActiveFilters.push(`Rooms: ${values.rooms}`)
    }
    if (values.search) {
      newActiveFilters.push(`Search: ${values.search}`)
    }

    setActiveFilters(newActiveFilters)
  }

  const onSubmit = (values: FilterFormValues) => {
    const params = new URLSearchParams(searchParams.toString())

    Object.entries(values).forEach(([key, value]) => {
      if (value && !(key === "minPrice" && value === 0) && !(key === "maxPrice" && value === 20000)) {
        params.set(key, String(value))
      } else {
        params.delete(key)
      }
    })

    router.push(`?${params.toString()}`)
  }

  const resetFilters = useCallback(() => {
    form.reset({
      location: "",
      minPrice: 0,
      maxPrice: 20000,
      rooms: undefined,
      search: "",
    })
    setActiveFilters([])
    router.replace("/posts")
  }, [form, router])

  const clearSearch = () => {
    form.setValue("search", "")
    updateActiveFilters()
  }

  return (
    <div className="w-full bg-card rounded-lg shadow-sm p-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} onChange={updateActiveFilters}>
          <div className="grid gap-4">
            {/* Search Field */}
            <div className="relative">
              <FormField
                control={form.control}
                name="search"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Search by description..." className="pl-9" {...field} />
                        {field.value && (
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-1 top-1 h-7 w-7 p-0"
                            onClick={clearSearch}
                          >
                            <X className="h-4 w-4" />
                            <span className="sr-only">Clear</span>
                          </Button>
                        )}
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            {/* Filter Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Location */}
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-medium">Location</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter location..." {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Price Range - Min */}
              <FormField
                control={form.control}
                name="minPrice"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-medium">Min Price ($)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="0"
                        min={0}
                        {...field}
                        onChange={(e) => {
                          field.onChange(e.target.valueAsNumber || 0)
                          updateActiveFilters()
                        }}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Price Range - Max */}
              <FormField
                control={form.control}
                name="maxPrice"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-medium">Max Price ($)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="20000"
                        min={0}
                        {...field}
                        onChange={(e) => {
                          field.onChange(e.target.valueAsNumber || 20000)
                          updateActiveFilters()
                        }}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Number of Rooms */}
              <FormField
                control={form.control}
                name="rooms"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-medium">Number of Rooms</FormLabel>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value === "any" ? undefined : Number(value))
                        updateActiveFilters()
                      }}
                      value={field.value?.toString() || "any"}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Any" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="any">Any</SelectItem>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4">4+</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-2 mt-2">
              <Button type="button" variant="outline" onClick={resetFilters}>
                Reset
              </Button>
              <Button type="submit">Apply Filters</Button>
            </div>

            {/* Active Filters */}
            {activeFilters.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {activeFilters.map((filter, index) => (
                  <Badge key={index} variant="secondary" className="px-2 py-1">
                    {filter}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </form>
      </Form>
    </div>
  )
}

