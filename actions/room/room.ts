'use server'

import { clientSchema, RoomFormValues, RoomSchema } from "@/utils/types/schema"
import { z } from "zod"
import { getCurrentUser } from "../user/user"
import { db } from "@/prisma"
import { RoomStatus } from "@prisma/client"
import { Room } from "@/utils/types/type"


export const deleteRoom = async(id : string) =>{
    try {
        if(!id){
            throw new Error("invalid id ")
        }
        const currentUser = await getCurrentUser();
        if (!currentUser || !currentUser.id || !currentUser.email || (currentUser.role !== "ADMIN" && currentUser.role !== "OWNER") || !currentUser.isOnboarded) {
            throw new Error("User not authenticated")
        }

        const deleteData = await db.room.delete({
            where : {id}
        })

        if(deleteData){
            return {
                error : 'failed to delete data'
            }
        }

        return {
            message : "successfully deleted room",
            success :  true
        }
    } catch (error) {
        return {
            error : "failed to delte the data"
        }
        
    }
}

export const updateRoomData = async(values : RoomFormValues, id : string) =>{
    console.log("this is the values : ",values)
    try {
        if(!id){
            throw new Error("Invalid id ")
        }
        const currentUser = await getCurrentUser();
        if (!currentUser || !currentUser.id || !currentUser.email || (currentUser.role !== "ADMIN" && currentUser.role !== "OWNER") || !currentUser.isOnboarded) {
            throw new Error("User not authenticated")
        }

        const otherClientIds = values.otherClients?.map((e)=>{
            return e.id as string;
        }) || []

        console.log("this ishte ot her clients Id ",otherClientIds)
        let totalClients =  0;

        if(values.client){
            totalClients += 1;
            if(values.otherClients && values.otherClients.length > 0){
                totalClients += values.otherClients.length
            }
        }


        const updateForm = await db.room.update({
            where : {id},
            data : {
                roomNumber : values.roomNumber,
                roomStatus : values.roomStatus,
                description : values.description,
                numberOfRooms : values.numberOfRooms,
                maxNoOfClient : values.maxNoOfClient,
                roomCost : values.roomCost,
                electricityBill : values.electricityBill,
                waterBill : values.waterBill,
                internetBill : values.internetBill,
                location : values.location,
                lat : values.lat,
                lon : values.lon,
                clientInitationDate :values.clientInitationDate,
                payedMoney : values.payedMoney,
                otherClients : otherClientIds ,
                clientId : values.client?.id ,
                roomImages : values.roomImages,
                noOfClientLiving : totalClients,
                
            }
        })

        if(values.payedMoney && values.client && values.client.id){
            await db.paymentHistory.create({
                data : {
                    date : new Date(),
                    amount : values.payedMoney,
                    userId : values.client.id,
                    roomId : id
                }
            })
        }
        if(!updateForm){
            throw new Error("Failed to update the form")
        }
        
        return {
            message : "successfully updated form",
            success : true,
        }
    } catch (error) {
        return {
            error : error ||  "failed to update the room data",
        }
        
    }
}

export const getRoomStatistics = async () => {
    try {
        const currentUser = await getCurrentUser();
        if (!currentUser || !currentUser.id || !currentUser.email || (currentUser.role !== "ADMIN" && currentUser.role !== "OWNER") || !currentUser.isOnboarded) {
            throw new Error("User not authenticated")
        }
        const roomStats = await db.room.groupBy({
            by: ['ownerId'],
            where: {
                ownerId: currentUser?.id
            },
            _count : {
                _all : true,
                clientId : true,
            },
            _sum : {
                noOfClientLiving : true,
            }
        });

        const statusCounts = await db.room.groupBy({
            by : ['roomStatus'],
            where : {
                ownerId : currentUser.id,
            },
            _count : {
                _all : true,
            },
        })

        const result = {
            totalRooms : roomStats[0]?._count._all || 0,
            totalClients : roomStats[0]?._count.clientId || 0,
            totalClientsLiving : roomStats[0]?._sum.noOfClientLiving || 0,
            vacantRooms : statusCounts.find(s => s.roomStatus === "VACANT")?._count._all || 0,
            occupiedRooms : statusCounts.find(s =>s.roomStatus === "OCCUPIED")?._count._all || 0,
            maintenaceRoom : statusCounts.find(s => s.roomStatus === "MAINTENANCE")?._count._all || 0,

            rooms : await db.room.findMany({
                where : {
                    ownerId : currentUser.id,
                },
                select : {
                    id : true,
                    description : true,
                    roomStatus : true,
                    client : {
                        select : {
                            id : true,
                            name : true,
                        }
                    },
                    roomNumber : true,
                    noOfClientLiving : true,
                    roomImages : true,
                }
            })
        }
        return result;
    } catch (error) {
        return {
            error: error || "something went wrong"
        }

    }
}


export const createRoom = async (values: z.infer<typeof RoomSchema>) => {
    try {
        const currentUser = await getCurrentUser();
        if (!currentUser || !currentUser.id || !currentUser.email || (currentUser.role !== "ADMIN" && currentUser.role !== "OWNER") || !currentUser.isOnboarded) {
            throw new Error("User not authenticated")
        }
        console.log("this are teh values : ",values)
        const checkNumber = await db.room.findFirst({
            where : {
                ownerId : currentUser.id,
                roomNumber : values.roomNumber
            }
        })

        if(checkNumber){
            return {
                error : "room number already used"
            }
        }
        const newRoom = await db.room.create({
            data: {
                description: values.description,
                electricityBill: values.electricityBill || 0,
                internetBill: values.internetBill || 0,
                location: values.location,
                maxNoOfClient: values.maxNoOfClient,
                numberOfRooms: values.noOfRooms,
                roomCost: values.roomCost,
                roomImages: values.roomImages || [],
                roomStatus: values.roomStatus || RoomStatus.VACANT,
                waterBill: values.waterBill || 0,
                ownerId: currentUser.id,
                roomNumber : values.roomNumber,
            }
        });


        if (!newRoom) {
            throw new Error("Failed to create a new room")
        }

        await db.post.create({
            data : {
                roomId : newRoom.id,
                roomImages : newRoom.roomImages,
                description : newRoom.description,
                roomStatus : newRoom.roomStatus,
                roomCost : newRoom.roomCost,
                location : newRoom.location,
                numberOfRooms : newRoom.numberOfRooms,
                ownerId : newRoom.ownerId,
                lat : newRoom?.lat,
                lon : newRoom?.lon,
                roomNumber : newRoom.roomNumber,
            }
        })

        return {
            message: "successfully created new room",
            room: JSON.stringify(newRoom)
        }
    } catch (error) {
        console.log("this isht eerror : ",error)
        return {
            error: "failed to create a room"
        }

    }

}


export const getRoomDataById = async(id : string) =>{
    try {
        if(!id){
            return {error : "invalid id "}
        }
        const currentUser = await getCurrentUser();

        if (!currentUser || !currentUser.id || !currentUser.email || (currentUser.role !== "ADMIN" && currentUser.role !== "OWNER") || !currentUser.isOnboarded) {
            throw new Error("User not authenticated")
        }

        const room = await db.room.findFirst({
            where: { id, ownerId: currentUser.id },
            include: {
              client: {
                select: {
                  id: true,
                  name: true,
                  email: true,
                  phoneNumber: true,
                  image: true,
                  createdAt: true,
                  updatedAt: true
                }
              },
              paymentHistory: {
                orderBy: { date: 'desc' },
                take: 5
              },
              owner: {
                select: {
                  id: true,
                  name: true,
                  email: true,
                  phoneNumber: true,
                  image : true,
                  createdAt : true,
                  updatedAt : true,
                }
              }
            }
          });
      
          if (!room) return { error: "No room exists with this ID" };
      
          const otherClients = room.otherClients.length > 0 
            ? await db.user.findMany({
                where: { id: { in: room.otherClients } },
                select: {
                  id: true,
                  name: true,
                  email: true,
                  phoneNumber: true,
                  image: true,
                  createdAt: true,
                  updatedAt: true
                }
              })
            : [];

            const noOfClients = (room.client ? 1 : 0) + otherClients.length;
      
          return {
            ...room,
            otherClients,
            paymentHistory: room.paymentHistory.map(p => ({
              ...p,
              date: new Date(p.date)
            })),
            createdAt: new Date(room.createdAt),
            updatedAt: new Date(room.updatedAt),
            clientInitationDate: room.clientInitationDate ? new Date(room.clientInitationDate) : undefined,
            noOfClientLiving : noOfClients,
          } as Room;
      

    } catch (error) {
        return {
            error : error || "failed to get the data"
        }
        
    }
}