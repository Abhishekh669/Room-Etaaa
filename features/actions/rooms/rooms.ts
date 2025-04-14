'use server'

import { db } from "@/prisma";
import { getCurrentUser } from "../users/user"
import {  z } from "zod";
import { RoomSchema } from "@/features/schemas/room/room.schema";


export const getRoomById = async(id : string)=>{
    try {
        const currentUser = await getCurrentUser();
        if (!currentUser || !currentUser.id || !currentUser.email || (currentUser.role !== "ADMIN" && currentUser.role !== "OWNER") || !currentUser.isOnboarded) {
            throw new Error("User not authenticated")
        }
        const checkRoom = await db.room.findUnique({
            where : {
                id,
                
            },
            include : {
                roomBilling : true,
                roomPayment : true,
                owner : {
                    select : {
                        id : true,
                        name : true,
                        image : true,
                        email : true,
                        phoneNumber : true,
                    }
                }
            },
            
            
        });

        console.log("this is check room : ",checkRoom)
        if(!checkRoom){
            throw new Error("No such room found")
        }

          // Fetch all clients in parallel
          const clientPromises = checkRoom.clients.map(clientId => 
            db.user.findUnique({
                where: { id: clientId },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    phoneNumber: true,
                    image: true,
                }
            })
        );

        // Wait for all client data to be fetched
        const clients = await Promise.all(clientPromises);

        const roomData = {
            ...checkRoom,
            clients: clients.filter(client => client !== null) // Filter out any null results
        };

        return {
            data : JSON.stringify(roomData),
            message : "successfully fetched room data"
        }


    } catch (error) {
        console.log("this is the error : ",error)
        return {
            error: error instanceof Error ? error.message : "Something went wrong",
            success: false,
        }
        
    }
}


export const getRoomStatistics = async () => {
    try {
        const currentUser = await getCurrentUser();
        if (!currentUser || !currentUser.id || !currentUser.email || (currentUser.role !== "ADMIN" && currentUser.role !== "OWNER") || !currentUser.isOnboarded) {
            throw new Error("User not authenticated")
        }

        const rooms = await db.room.findMany(
            {
                where: {
                    ownerId: currentUser.id
                },
                orderBy : {
                    createdAt : "desc"
                },
                include : {
                    roomBilling : true,
                },

            }
        )


        const totalRooms = rooms.length;
        const totalClients = rooms.reduce((sum, room) => sum + (room.clients?.length || 0),0)

        const vacantRooms = rooms.filter((room) => room.roomStatus === "VACANT").length;
        const occupiedRooms = rooms.filter((room) => room.roomStatus === "OCCUPIED").length;
        const maintenaceRooms = rooms.filter((room) => room.roomStatus === "MAINTENANCE").length;

        const getTotalRevenue = async (ownerId: string) => {
            const paymentHistory = await db.paymentHistory.findMany({
              where: {
                ownerId: ownerId
              },
              

            });
            
            if (!paymentHistory || paymentHistory.length === 0) {
              return 0;
            }
            
            return paymentHistory.reduce((sum, payment) => sum + (payment.payedamount || 0), 0);
          };
          
          const totalRevenue = await getTotalRevenue(currentUser.id);

        const totalDueAmount = rooms.reduce((sum, room) => sum + (room.dueAmount || 0), 0);
        const totalPayedAmount = rooms.reduce((sum, room) => sum + (room.payedAmount || 0), 0);

          //TODO : only fetch the requried data
        const  roomWithClientData = rooms.length > 0
            && rooms.map((room) =>{
                return {
                    ...room,
                    clients :  room.clients.map(async (client) =>(
                        await db.user.findFirst({
                            where : {
                                id : client
                            },
                            
                                select : {
                                    id : true,
                                    name : true,
                                    image : true,
                                    email : true,
                                    phoneNumber : true,
                                }
                        })
                    ))
                }
            }) || [];



            return{
               data : JSON.stringify({
                    totalRooms,
                    totalClients,
                    vacantRooms,
                    occupiedRooms,
                    maintenaceRooms,
                    totalRevenue,
                    totalDueAmount,
                    totalPayedAmount,
                    rooms : roomWithClientData  
               }),
               message  : "successfully fetched room statistics"
            }

    } catch (error) {
        console.log("this isht eerror : ", error)
        return {
            error: error instanceof Error ? error.message : "Something went wrong",
            success: false,
        }
    }

}

export const deleteRoom = async (id : string) =>{
    try {
        const currentUser = await getCurrentUser();
        if (!currentUser || !currentUser.id || !currentUser.email || (currentUser.role !== "ADMIN" && currentUser.role !== "OWNER") || !currentUser.isOnboarded) {
            throw new Error("User not authenticated")
        }

        const checkRoom = await db.room.findUnique({
            where : {
                id,
                
            }
        })

        if (!checkRoom) {
            throw new Error("Room not found")
        }

        const deleteRoom = await db.room.delete({
            where : {   
                id
            }
        })

        if (!deleteRoom) {
            throw new Error("Failed to delete room")
        }

        return {
            message : "Room deleted successfully",
            success : true
        }
    } catch (error) {
        return {
            error : error instanceof Error ? error.message : "Something went wrong",
            success : false
        }
        
    }
}

export const checkRoomNumber = async (roomNumber : number) => {
        try {
            const currentUser = await getCurrentUser();
            if (!currentUser || !currentUser.id || !currentUser.email || currentUser.role === "USER" || !currentUser.isOnboarded) {
                throw new Error("User not authenticated")
            }

            const checkRoom = await db.room.findFirst({
                where : {
                    ownerId : currentUser.id,
                    roomNumber : roomNumber
                }
            })

            if(checkRoom){
                return {
                    message : "Room number already exists",
                    success : false
                }
            }       
            
            return {
                message : "Room number is available",
                success : true
            }
            

        } catch (error) {
            return {
                error : error instanceof Error ? error.message : "Something went wrong",
                success : false
            }
        }
}


export const createRoom = async (values: z.infer<typeof RoomSchema>) => {
    try {
        const error = RoomSchema.safeParse(values);
        if (!error.success) {
            throw new Error("Invalid input data");
        }

        const currentUser = await getCurrentUser();
        if (!currentUser || !currentUser.id || !currentUser.email || currentUser.role === "USER" || !currentUser.isOnboarded) {
            throw new Error("User not authenticated")
        }
        if (values.lat === 0 && values.lon === 0) {
            values = {
                ...values,
                lat: undefined,
                lon: undefined
            }
        }

        
        const newRoom = await db.room.create({
            data: {
                roomStatus: values.roomStatus,
                province: values.province,
                location: values.location,
                lon: values.lon,
                lat: values.lat,
                roomNumber: values.roomNumber,
                title: values.title,
                description: values.description,
                roomImages: values.roomImages,
                numberOfRooms: values.numberOfRooms,
                beds: values.beds,
                toilet: values.toilet,
                roomCapacity: values.roomCapacity,
                ownerId: currentUser.id
            }
        });


        if (!newRoom) {
            throw new Error("Failed to create a new room")
        }


        const roomBilling = await db.roomBilling.create({
            data: {
                ownerId: newRoom.ownerId,
                roomId: newRoom.id,
                water: values.water,
                electricity: values.electricity,
                internet: values.internet,
                roomCost: values.roomCost,
            }
        })

        if (!roomBilling) {
            throw new Error("Failed to create room billing")
        }

        //TODO : add the auto postiing ofo the post


        return {
            message: "successfully created new room",
            success: true,
        }
    } catch (error) {
        console.log("this isht eerror : ", error)
        return {
            error: error instanceof Error ? error.message : "Something went wrong",
            success: false,
        }

    }

}