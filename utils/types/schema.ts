import { RoomStatus } from "@prisma/client";
import { z } from "zod"



export const PaymentHistorySchema = z.object({
    id: z.string(),
    date: z.date(),
    amount: z.number(),
    userId: z.string(),
    roomId: z.string(),
});




export const RoomSchema = z.object({
    roomStatus : z.nativeEnum(RoomStatus),
    noOfRooms : z.number().min(1,'at least 1 room is needed'),
    description : z.string().min(5,"minimum 5 character is required").max(300, "maximum 300 characteres can be used"),
    roomImages : z.array(z.string()).optional(),
    maxNoOfClient : z.number().min(1,'at least 1 client must be fit'),
    roomCost : z.number().nonnegative(),
    roomNumber : z.number().min(1,"minimum is 1").max(1000000, "excedd the capacity"),
    electricityBill : z.number().nonnegative().optional(),
    location : z.string().min(2, 'at least 2 character is required').max(100, 'max 100 characters can be useed'),
    waterBill : z.number().nonnegative().optional(),
    internetBill : z.number().nonnegative().optional(),
})

export const clientSchema = z.object({
    id: z.string().optional(),
    name: z.string().min(1, "Name is required").nullable(), // Allow null
    email: z.string().email("Invalid email").nullable(),
    phoneNumber: z.string().nullable().optional(),
    image: z.string().nullable().optional(), // Changed from array to single string
    createdAt: z.date().optional(),
    updatedAt: z.date().optional()
});
  



export const roomFormSchema = z.object({
    roomNumber: z.number().int().positive("Room number must be positive"),
    roomStatus: z.nativeEnum(RoomStatus),
    description: z.string().min(5, "Description must be at least 5 characters").max(300,'max 300 letter can be used'),
    numberOfRooms: z.number().int().positive("Number of rooms must be positive"),
    maxNoOfClient: z.number().int().positive("Maximum number of clients must be positive"),
    roomCost: z.number().nonnegative("Room cost must be non-negative"),
    electricityBill: z.number().nonnegative("Electricity bill must be non-negative"),
    waterBill: z.number().nonnegative("Water bill must be non-negative"),
    internetBill: z.number().nonnegative("Internet bill must be non-negative"),
    location: z.string().min(1, "Location is required"),
    lat: z.number().nullable().optional(),
    lon: z.number().nullable().optional(),
    clientInitationDate: z.date().nullable().optional(),
    payedMoney: z.number().nullable().optional(),
    client: clientSchema.nullable().optional(),
    otherClients: z.array(clientSchema).optional(),
    roomImages: z.array(z.string()).optional(),
})
  
  export type RoomFormValues = z.infer<typeof roomFormSchema>
  
  