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
import { Search, X, Filter } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const formSchema = z.object({
  location: z.string().optional(),
  minPrice: z.coerce.number().min(0).optional(),
  maxPrice: z.coerce.number().min(0).optional(),
  rooms: z.coerce.number().min(0).optional(),
  title: z.string().optional(),
})

type FilterFormValues = z.infer<typeof formSchema>

export function PostFiltersForMobile({open, onClose}: {open: boolean, onClose: () => void}) {
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
      title: searchParams.get("title") || "",
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
    if (values.title) {
      newActiveFilters.push(`Search: ${values.title}`)
    }

    setActiveFilters(newActiveFilters)
  }

  const resetFilters = useCallback(() => {
    form.reset({
      location: "",
      minPrice: 0,
      maxPrice: 20000,
      rooms: undefined,
      title: "",
    })
    setActiveFilters([])
    router.replace("/posts")
    onClose();
  }, [form, router, onClose])

  const clearSearch = () => {
    form.setValue("title", "")
    updateActiveFilters()
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
    onClose();
  }


  return (
    <>
      {/* Mobile Trigger Button */}
      <div className="sm:hidden fixed bg-red-600 bottom-6 right-6 z-999">
        <Dialog open={open} onOpenChange={onClose}>
          <DialogTrigger asChild>
            <Button
              size="lg"
              className="rounded-full shadow-lg h-14 w-14"
              variant="default"
            >
              <Filter className="h-6 w-6" />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Filter Rooms</DialogTitle>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} onChange={updateActiveFilters}>
                <div className="grid gap-4 py-4">
                  <div className="relative">
                    <FormField
                      control={form.control}
                      name="title"
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

                  <div className="grid gap-4">
                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium">Location</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter location..." {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="minPrice"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium">Min Price ($)</FormLabel>
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

                    <FormField
                      control={form.control}
                      name="maxPrice"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium">Max Price ($)</FormLabel>
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

                    <FormField
                      control={form.control}
                      name="rooms"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium">Number of Rooms</FormLabel>
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

                  {activeFilters.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {activeFilters.map((filter, index) => (
                        <Badge key={index} variant="secondary" className="px-2 py-1">
                          {filter}
                        </Badge>
                      ))}
                    </div>
                  )}

                  <div className="flex justify-between gap-2 mt-4">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={resetFilters}
                    >
                      Reset
                    </Button>
                    <Button 
                      type="submit"
                      className=" bg-red-500 text-white hover:bg-red-500/50 hover:text-white"
                    >
                      Apply Filters
                    </Button>
                  </div>
                </div>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Desktop View (unchanged) */}
      <div className="hidden lg:block w-full bg-card rounded-lg shadow-sm p-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} onChange={updateActiveFilters}>
            <div className="grid gap-4">
              <div className="relative">
                <FormField
                  control={form.control}
                  name="title"
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

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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

              <div className="flex justify-end gap-2 mt-2">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={resetFilters}
                >
                  Reset
                </Button>
                <Button type="submit"
                className="bg-red-500 text-white hover:bg-red-500/50 cursor-pointer hover:text-white"
                >Apply Filters</Button>
              </div>

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
    </>
  )
}