import { z } from "zod";

const objectIdSchema = z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId");
const dateSchema = z.coerce.date();
const nonNegativeNumber = z.number().min(0);

export const RoomStatusSchema = z.enum(["VACANT", "OCCUPIED", "MAINTENANCE"]);

// export const RoomSchema = z.object({
//   roomStatus: RoomStatusSchema.default("VACANT"),
//   province: z.number().int().min(1).max(7),
//   location: z.string().min(1, "Location is required"),
//   lon: z.number().optional(),
//   lat: z.number().optional(),
//   roomNumber: z.number().int().positive("Room number must be positive"),
//   title: z.string().min(1, "Title is required"),
//   description: z.string().min(1, "Description is required"),
//   roomImages: z.array(z.string().url("Invalid image URL")).default([]),
//   numberOfRooms: z.number().int().min(1, "At least 1 room required"),
//   beds: z.number().int().min(1, "At least 1 bed required"),
//   toilet: z.number().int().min(1, "At least 1 toilet required"),
//   roomCapacity: z.number().int().min(1).default(1),
//   water : nonNegativeNumber.default(0),
//   electricity : nonNegativeNumber.default(0),
//   internet : nonNegativeNumber.default(0),
//   roomCost : nonNegativeNumber.default(0),
// });


export const RoomSchema = z.object({
  roomStatus: z.enum(["VACANT", "OCCUPIED", "MAINTENANCE"]),
  province: z.number(),
  location: z.string().min(1, "Location is required"),
  lon: z.number().optional(),
  lat: z.number().optional(),
  roomNumber: z.number(),
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  roomImages: z.array(z.string()),
  numberOfRooms: z.number().min(1),
  beds: z.number().min(1),
  toilet: z.number().min(1),
  roomCapacity: z.number().min(1),
  water: z.number(),
  electricity: z.number(),
  internet: z.number(),
  roomCost: z.number().min(0),
})

export const RoomBillingSchema = z.object({
  id : z.string(),
  ownerId : z.string(),
  roomId : z.string(),
  water : z.number(),
  electricity : z.number(),
  internet : z.number(),
  roomCost : z.number(),
  createdAt : dateSchema,
})

export const ClientSchema = z.object({
  id : z.string(),
  name : z.string(),
  image : z.string(),
  email : z.string(),
  phoneNumber : z.string(),
})

export const PaymentHistorySchema = z.object({
  id : z.string(),
  ownerId : z.string(),
  payedBy : z.string(),
  totalAmount : z.number(),
  roomId : z.string(),
  payedamount : z.number(),
  dueAmount : z.number(),
  startedDate : dateSchema,
  createdAt : dateSchema,
})

export const RoomPaymentSchema = z.object({
  id : z.string(),
  ownerId : z.string(),
  roomId : z.string(),
  paymentDate : dateSchema,
})
// export const EditRoomSchema = z.object({
//   id : z.string(),
//   ownerId : z.string(),
//   owner : z.object({
//     id : z.string(),
//     name : z.string(),
//     email : z.string(),
//     phoneNumber : z.string(),
//     image : z.string(),
//   }),
//   roomStatus: RoomStatusSchema.default("VACANT"),
//   province: z.number(),
//   location: z.string().min(1, "Location is required"),
//   lon: z.number().optional(),
//   lat: z.number().optional(),
//   roomNumber: z.number(),
//   title: z.string().min(1, "Title is required"),
//   description: z.string().min(1, "Description is required"),
//   roomImages: z.array(z.string()),
//   numberOfRooms: z.number().min(1),
//   beds: z.number().min(1),
//   toilet: z.number().min(1),
//   clients : z.array(ClientSchema),
//   roomCapacity: z.number().min(1),
//   roomBilling : RoomBillingSchema.optional(),
//   roomPayment : RoomPaymentSchema.optional(),
//   paymentHistory : z.array(PaymentHistorySchema),
//   dueAmount : z.number().optional(),
//   payedAmount : z.number().optional(),
//   clientInitationData : dateSchema.optional(),
//   startedPriceFromDate : dateSchema.optional(),
//   lastPayedDate : dateSchema.optional(),
//   createdAt : dateSchema,
// })


// RoomType Zod Schema
export const EditRoomSchema = z.object({
  beds: z.number().int().nonnegative(),
  clientInitationDate: z.date().optional(),
  clients: z.array(ClientSchema),
  description: z.string(),
  dueAmount: z.number().nonnegative(),
  lastPayedDate: z.date().optional(),
  lat: z.number().optional(),
  location: z.string(),
  id : z.string(),
  lon: z.number().optional(),
  numberOfRooms: z.number().int().positive(),
  ownerId: z.string(),
  owner: ClientSchema,
  province: z.number().int().nonnegative(),
  roomBilling: RoomBillingSchema, // Replace with RoomBilling schema if available
  roomCapacity: z.number().int().positive(),
  roomImages: z.array(z.string()),
  roomNumber: z.number().int().positive(),
  roomPayment: z.array(PaymentHistorySchema), // Replace with PaymentHistory schema if available
  roomStatus: z.enum(['VACANT', 'OCCUPIED', 'MAINTENANCE']),
  startedPriceFromDate: z.date().optional(),
  title: z.string(),
  toilet: z.number().int().nonnegative(),
});


export type EditRoomType = z.infer<typeof EditRoomSchema>

