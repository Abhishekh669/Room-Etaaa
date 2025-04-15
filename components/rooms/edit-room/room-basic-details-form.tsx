"use client"
import React, { useEffect, useRef, useState } from 'react'
import { EditRoomType } from '@/features/schemas/room/room.schema'
import { UseFormReturn } from 'react-hook-form'
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload, Trash2, X } from "lucide-react"
import { toast } from 'sonner'

interface RoomBasicDetailsFormProps {
    form: UseFormReturn<EditRoomType>,
    images: string[],
    onImageChange?: (files: File[]) => void
    handleServerImages: (imageUrl: string) => void
    previewUrls: string[],
    files: File[],
    removeImage: (index: number) => void
    handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}


function RoomBasicDetailsForm({ form, images, previewUrls,  handleImageChange, files, removeImage, handleServerImages }: RoomBasicDetailsFormProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Room Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                        control={form.control}
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
                        control={form.control}
                        name="roomStatus"
                        render={({ field }) => {
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
                        control={form.control}
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
                        control={form.control}
                        name="roomCapacity"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Room Capacity</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        min={1}
                                        {...field}
                                        onChange={(e) => field.onChange(Number(e.target.value))}

                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
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

                <div className="md:col-span-2">
                    <FormLabel className="font-semibold block mb-2">
                        Room Images (Max 10 images)
                        <span className="text-sm text-gray-500 ml-2">
                            ({previewUrls.length + images.length}/10 images selected)
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
                        {images.length > 0 && (
                            <div className="">
                                <div className=' flex justify-start  text-muted-foreground font-semibold'>
                                    Images from the server:
                                </div>
                                <div className='mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
                                    {images.map((url, index) => (
                                        <div key={url} className="relative group">
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
                                                onClick={() => handleServerImages(url)}
                                            >
                                                <X className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {previewUrls.length > 0 && (
                            <div className="mt-4">
                                <div className='flex justify-start text-muted-foreground font-semibold'>
                                    Newly Uploaded Images:
                                </div>
                                <div className='mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
                                    {previewUrls.map((url, index) => (
                                        <div key={url} className="relative group">
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
                            </div>
                        )}
                    </div>
                </div>


            </CardContent>
        </Card>
    )
}

export default RoomBasicDetailsForm
