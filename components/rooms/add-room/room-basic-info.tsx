"use client"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Upload, X } from 'lucide-react'
import { UseFormReturn } from "react-hook-form"
import { z } from "zod"
import { RoomSchema } from "@/features/schemas/room/room.schema"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

interface RoomBasicInfoFormProps {
  form: UseFormReturn<z.infer<typeof RoomSchema>>
  onImageChange?: (files: File[]) => void
}

export const RoomBasicInfoForm = ({ form, onImageChange }: RoomBasicInfoFormProps) => {
  const [files, setFiles] = useState<File[]>([])
  const [previewUrls, setPreviewUrls] = useState<string[]>([])
  const filesRef = useRef<File[]>([])

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = e.target.files
    if (!newFiles) return

    const fileArray = Array.from(newFiles)
    
    // Check if adding new files would exceed the limit
    if (filesRef.current.length + fileArray.length > 10) {
      toast.error("You can only upload up to 10 images")
      return
    }

    const newPreviewUrls = fileArray.map(file => URL.createObjectURL(file))

    setFiles(prev => [...prev, ...fileArray])
    setPreviewUrls(prev => [...prev, ...newPreviewUrls])
    filesRef.current = [...filesRef.current, ...fileArray]

    onImageChange?.(filesRef.current)
  }

  const removeImage = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index))
    setPreviewUrls(prev => {
      URL.revokeObjectURL(prev[index])
      return prev.filter((_, i) => i !== index)
    })
    filesRef.current = filesRef.current.filter((_, i) => i !== index)
    onImageChange?.(filesRef.current)
  }

  useEffect(() => {
    onImageChange?.(filesRef.current)
  }, [filesRef.current.length, onImageChange])

  useEffect(() => {
    return () => {
      previewUrls.forEach(url => URL.revokeObjectURL(url))
    }
  }, [previewUrls])

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <FormField
        control={form.control}
        name="title"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="font-semibold">Room Title</FormLabel>
            <FormControl>
              <Input placeholder="Enter room title" {...field} className="border-gray-300 focus-visible:ring-[#ff0000]" />
            </FormControl>
            <FormMessage className="text-[#ff0000]" />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="roomNumber"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="font-semibold">Room Number</FormLabel>
            <FormControl>
              <Input 
                type="number" 
                placeholder="Room number" 
                {...field} 
                onChange={e => field.onChange(e.target.value && parseInt(e.target.value))}
                className="border-gray-300 focus-visible:ring-[#ff0000]" 
              />
            </FormControl>
            <FormMessage className="text-[#ff0000]" />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="roomStatus"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel className="font-semibold">Room Status</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col space-y-1"
              >
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="VACANT" className="border-gray-400 text-[#ff0000]" />
                  </FormControl>
                  <FormLabel className="font-normal">Vacant</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="OCCUPIED" className="border-gray-400 text-[#ff0000]" />
                  </FormControl>
                  <FormLabel className="font-normal">Occupied</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="MAINTENANCE" className="border-gray-400 text-[#ff0000]" />
                  </FormControl>
                  <FormLabel className="font-normal">Maintenance</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage className="text-[#ff0000]" />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem className="md:col-span-2">
            <FormLabel className="font-semibold">Description</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Describe the room" 
                className="min-h-32 resize-none border-gray-300 focus-visible:ring-[#ff0000]" 
                {...field} 
              />
            </FormControl>
            <FormMessage className="text-[#ff0000]" />
          </FormItem>
        )}
      />

      <div className="md:col-span-2">
        <FormLabel className="font-semibold block mb-2">
          Room Images (Max 10 images)
          <span className="text-sm text-gray-500 ml-2">
            ({files.length}/10 images selected)
          </span>
        </FormLabel>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <Input
            type="file"
            multiple
            accept="image/*"
            id="roomImages"
            className="hidden"
            onChange={handleImageChange}
            disabled={files.length >= 10}
          />
          <label 
            htmlFor="roomImages" 
            className={`flex flex-col items-center justify-center ${files.length >= 10 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
          >
            <Upload className="h-10 w-10 text-gray-400 mb-2" />
            <span className="text-sm text-gray-500">
              {files.length >= 10 
                ? "Maximum 10 images reached" 
                : "Drag & drop images or click to browse"}
            </span>
          </label>
          {previewUrls.length > 0 && (
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {previewUrls.map((url, index) => (
                <div key={index} className="relative group">
                  <img
                    src={url}
                    alt={`Preview ${index}`}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => removeImage(index)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}