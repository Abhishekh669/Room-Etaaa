'use server'

import { db } from "@/prisma";
import { getCurrentUser } from "../users/user"
import { z } from "zod";
import { EditRoomSchema, RoomSchema } from "@/features/schemas/room/room.schema";
import { UTApi } from "uploadthing/server";

const utapi = new UTApi();


export const updatePaymentRecord = async({paymentId , payedAmount, description, payedBy, reason}:{reason ?: string, paymentId : string, payedAmount : number, description : string, payedBy : string}) => {
    try {
        const currentUser = await getCurrentUser();
        if (!currentUser || !currentUser.id || !currentUser.email || (currentUser.role !== "ADMIN" && currentUser.role !== "OWNER") || !currentUser.isOnboarded) {
            throw new Error("User not authenticated")
        }

        const checkPayment = await db.roomPaymentRecord.findUnique({
            where : {
                id : paymentId
            }
        })

        if(!checkPayment){
            throw new Error("Payment record not found")
        }

        const totalAmount = checkPayment.amountTotal;
        const dueAmount = totalAmount - payedAmount;
        const paymentStatus = dueAmount === 0 ? "PAID" : "OVERDUE";
        const dueMoneyReason = dueAmount > 0 ? reason : null;

        const updatePayment = await db.roomPaymentRecord.update({
            where : {
                id : paymentId
            },
            data : {
                payedAmount : payedAmount,
                description : description,
                payedBy : payedBy,
                paymentStatus : paymentStatus,
                dueAmount : dueAmount,
                dueMoneyReason : dueMoneyReason
            }
        })  

        if(!updatePayment){
            throw new Error("Failed to update payment record")
        }

        const allPaymentRecords = await db.roomPaymentRecord.findMany({
            where : {
                roomId : updatePayment.roomId
            }
        });
    
        const totalDueAmount = allPaymentRecords.reduce((acc, curr) => acc + curr.dueAmount, 0);
    
        await db.room.update({
            where : {
                id : updatePayment.roomId
            },
            data : {
                dueAmount : totalDueAmount
            }
        })

        return {
            message : "Payment record updated successfully",
            success : true
        }
    } catch (error) {
        return {
            error : error instanceof Error ? error.message : "Something went wrong",
            success : false
        }
    }
}   

export const addPaymentRecord = async({roomId, userId, amount, description, totalAmount, reason} : {reason ?: string, roomId : string, userId : string, amount : number, description : string, totalAmount : number   }) =>{
    console.log("this is the reason : ", reason)
    try {
        if(!roomId || !userId || !amount || !description){
            throw new Error("Invalid input data")
        }




        const currentUser = await getCurrentUser();
        if (!currentUser || !currentUser.id || !currentUser.email || (currentUser.role !== "ADMIN" && currentUser.role !== "OWNER") || !currentUser.isOnboarded) {
            throw new Error("User not authenticated")
        }   
        const checkRoom = await db.room.findUnique({
            where : {
                id : roomId
            }
        })

        if(!checkRoom){ 
            throw new Error("Room not found")
        }

        const checkUser = await db.user.findUnique({
            where : {
                id : userId
            }
        })

        if(!checkUser){
            throw new Error("User not found")
        }

        const dueAmount  = totalAmount - amount;
        const   paymentStatus = dueAmount === 0 ? "PAID" : "OVERDUE"



        const addPaymentRecord = await db.roomPaymentRecord.create({
            data : {
                roomId,
                payedBy : userId,
                ownerId : currentUser.id,
                amountTotal : totalAmount,
                payedAmount : amount,
                dueAmount,
                description,
                paymentStatus,
                dueMoneyReason : reason,
            }
        })

        if(!addPaymentRecord){
            throw new Error("Failed to add payment record")
        }

       const alllPaymentRecords = await db.roomPaymentRecord.findMany({
        where : {
            roomId,
        }
       });

       const totalDueAmount = alllPaymentRecords.reduce((acc, curr) => acc + curr.dueAmount, 0);

       await db.room.update({
        where : {
            id : roomId
        },
        data : {
            dueAmount : totalDueAmount
        }
       })


       return {
        message : "Payment record added successfully",
        success : true
       }
        
        
        
        
        
    } catch (error) {
        console.log("this is the error : ", error)
return {
    error : error instanceof Error ? error.message : "Something went wrong",
    success : false
}
    }
}


export const getClientDataFromRoom = async(id : string) =>{
    try {
        const currentUser = await getCurrentUser();
        if (!currentUser || !currentUser.id || !currentUser.email || (currentUser.role !== "ADMIN" && currentUser.role !== "OWNER") || !currentUser.isOnboarded) {
            throw new Error("User not authenticated")
        }
        
        
        const checkRoom = await db.room.findUnique({
            where : {
                id
            },
        })

        if(!checkRoom){
            throw new Error("Room not found")
        }

        
        const clients = await db.user.findMany({
            where : {
                id : {
                    in : checkRoom.clients
                }
            },
            select : {
                id : true,
                name : true,
                email : true,
                phoneNumber : true,
                image : true,
            }
        }) || [];

        const roomBilling = await db.roomBilling.findUnique({
            where : {
                roomId : id
            }
        })
        
        

        return {
            clients,
            roomBilling,
            message : "successfully fetched clients data",
            success : true
        }
        
        
        
        
    } catch (error) {
        return {
            error : error instanceof Error ? error.message : "Something went wrong",
            success : false
        }
    }
}


export const getRoomPaymentRecords = async(roomId : string) =>{
    try {
        const currentUser = await getCurrentUser();
        if (!currentUser || !currentUser.id || !currentUser.email || (currentUser.role !== "ADMIN" && currentUser.role !== "OWNER") || !currentUser.isOnboarded) {
            throw new Error("User not authenticated")
        }

        const roomPaymentRecords = await db.roomPaymentRecord.findMany({
            where: {
                roomId: roomId
            }
        }) || [];

        return {
            data: JSON.stringify(roomPaymentRecords),
            message: "successfully fetched room payment records"
        }

        
        
        
        

    } catch (error) {
        return {
            error: error instanceof Error ? error.message : "Something went wrong",
            success: false
        }
        
    }
}


export const removeMultipleRoomImages = async (imageUrls: string[]) => {
    try {
        const currentUser = await getCurrentUser();
        if (!currentUser || !currentUser.id || !currentUser.email || (currentUser.role !== "ADMIN" && currentUser.role !== "OWNER") || !currentUser.isOnboarded) {
            throw new Error("User not authenticated")
        }

        const keys = imageUrls.map(url => {
            const parts = url.split('/');
            return parts[parts.length - 1];
        });


        const deleteResult = await utapi.deleteFiles(keys);


        if (!deleteResult) {
            throw new Error("Failed to delete images")
        }


        return {
            message: "Images deleted successfully",
            success: true
        }
    } catch (error) {
        return {
            error: error instanceof Error ? error.message : "Something went wrong",
            success: false
        }
    }
}

export const updateRoom = async (values: z.infer<typeof EditRoomSchema>) => {
    try {
        const errors = EditRoomSchema.safeParse(values);
        if (!errors.success) {
            throw new Error("Invalid input data")
        }

        const currentUser = await getCurrentUser();
        if (!currentUser || !currentUser.id || !currentUser.email || (currentUser.role !== "ADMIN" && currentUser.role !== "OWNER") || !currentUser.isOnboarded) {
            throw new Error("User not authenticated")
        }

        const checkRoom = await db.room.findUnique({
            where: {
                id: values.id
            }
        });

        if (!checkRoom) {
            throw new Error("No such room found")
        }




        const clients = values.clients.map((client) => client.id);




        const roomStatus = values.roomStatus === "VACANT" ? (values.clients.length > 0 ? "OCCUPIED" : "VACANT") : values.roomStatus;

        const updateRoom = await db.room.update({
            where: {
                id: values.id
            },
            data: {
                roomStatus: roomStatus,
                province: values.province,
                location: values.location,
                lon: values.lon || undefined,
                lat: values.lat || undefined,
                roomNumber: values.roomNumber,
                title: values.title,
                description: values.description,
                roomImages: values.roomImages,
                numberOfRooms: values.numberOfRooms,
                beds: values.beds,
                toilet: values.toilet,
                clients,
                roomCapacity: values.roomCapacity,
                dueAmount: values.dueAmount,
                clientInitationData: values.clientInitationDate || values.clients.length > 0 ? new Date() : undefined,
                startedPriceFromDate: values.startedPriceFromDate || values.clients.length > 0 ? new Date() : undefined,
                lastPayedDate: values.lastPayedDate || undefined,
            }
        });

        if (!updateRoom) {
            throw new Error("Failed to update room")
        }

        const checkBillingData = await db.roomBilling.findFirst({
            where: {
                id: values.roomBilling.id,
                ownerId: currentUser.id,
                roomId: values.id
            }
        })

        if (!checkBillingData) {
            await db.roomBilling.create({
                data: {
                    ownerId: currentUser.id,
                    roomId: values.id,
                    water: values.roomBilling.water,
                    electricity: values.roomBilling.electricity,
                    internet: values.roomBilling.internet,
                    roomCost: values.roomBilling.roomCost,
                }
            })
        }

        const updateRoomBilling = await db.roomBilling.update({
            where: {
                id: values.roomBilling.id,
                ownerId: currentUser.id,
                roomId: values.id
            },
            data: {
                water: values.roomBilling.water,
                electricity: values.roomBilling.electricity,
                internet: values.roomBilling.internet,
                roomCost: values.roomBilling.roomCost,
            }
        })

        if (!updateRoomBilling) {
            throw new Error("Failed to update room billing")
        }

        // if(values.clients.length > 0 && values.payedAmount > 0){
        //     const totalAmountToBePayed = values.roomBilling.roomCost + values.roomBilling.water + values.roomBilling.electricity + values.roomBilling.internet;
        //     const dueAmount = totalAmountToBePayed - values.payedAmount;
        //     await db.paymentHistory.create({
        //         data : {
        //             ownerId : currentUser.id,
        //             payedBy : values.clients[0].id,
        //             roomId : values.id,
        //             payedamount : values.payedAmount,
        //             dueAmount ,
        //             totalAmount : totalAmountToBePayed,
        //             startedDate : values.startedPriceFromDate || new Date(),
        //             createdAt : new Date()
        //         }
        //     })
        // };

        return {
            message: "Room updated successfully",
            success: true
        }
    } catch (error) {
        return {
            error: error instanceof Error ? error.message : "Something went wrong",
            success: false,
        }
    }
}




export const getRoomById = async (id: string) => {
    try {
        const currentUser = await getCurrentUser();
        if (!currentUser || !currentUser.id || !currentUser.email || (currentUser.role !== "ADMIN" && currentUser.role !== "OWNER") || !currentUser.isOnboarded) {
            throw new Error("User not authenticated")
        }
        const checkRoom = await db.room.findUnique({
            where: {
                id,

            },
            include: {
                roomBilling: true,
                roomPayment: true,
                owner: {
                    select: {
                        id: true,
                        name: true,
                        image: true,
                        email: true,
                        phoneNumber: true,
                    }
                }
            },


        });

        if (!checkRoom) {
            throw new Error("No such room found")
        }

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

        const clients = await Promise.all(clientPromises);

        const roomData = {
            ...checkRoom,
            clients: clients.filter(client => client !== null) // Filter out any null results
        };

        return {
            data: JSON.stringify(roomData),
            message: "successfully fetched room data"
        }


    } catch (error) {
        console.log("this is the error : ", error)
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
                orderBy: {
                    createdAt: "desc"
                },
                include: {
                    roomBilling: true,
                    roomPaymentRecord: true,

                },

            }
        )


        const totalRooms = rooms.length;
        const totalClients = rooms.reduce((sum, room) => sum + (room.clients?.length || 0), 0)

        const vacantRooms = rooms.filter((room) => room.roomStatus === "VACANT").length;
        const occupiedRooms = rooms.filter((room) => room.roomStatus === "OCCUPIED").length;
        const maintenaceRooms = rooms.filter((room) => room.roomStatus === "MAINTENANCE").length;

        const getTotalRevenue = async (ownerId: string) => {
            const paymentHistory = await db.roomPaymentRecord.findMany({
                where: {
                    ownerId: ownerId
                }
            });

            if (!paymentHistory || paymentHistory.length === 0) {
                return { totalPayedAmount: 0, totalDueAmount: 0 };
            }

            return {
                totalPayedAmount: paymentHistory.reduce((sum, payment) => sum + (payment.payedAmount || 0), 0),
                totalDueAmount: paymentHistory.reduce((sum, payment) => sum + (payment.dueAmount || 0), 0)
            };
        };

        const values = await getTotalRevenue(currentUser.id);
        const totalRevenue = values.totalPayedAmount;
        const totalDueAmount = values.totalDueAmount;




        const roomWithClientData = rooms.length > 0
            && rooms.map((room) => {
                return {
                    ...room,
                    clients: room.clients.map(async (client) => (
                        await db.user.findFirst({
                            where: {
                                id: client
                            },

                            select: {
                                id: true,
                                name: true,
                                image: true,
                                email: true,
                                phoneNumber: true,
                            }
                        })
                    ))
                }
            }) || [];



        return {
            data: JSON.stringify({
                totalRooms,
                totalClients,
                vacantRooms,
                occupiedRooms,
                maintenaceRooms,
                totalRevenue,
                totalDueAmount,
                rooms: roomWithClientData
            }),
            message: "successfully fetched room statistics"
        }

    } catch (error) {
        console.log("this isht eerror : ", error)
        return {
            error: error instanceof Error ? error.message : "Something went wrong",
            success: false,
        }
    }

}

export const deleteRoom = async (id: string) => {
    try {
        const currentUser = await getCurrentUser();
        if (!currentUser || !currentUser.id || !currentUser.email || (currentUser.role !== "ADMIN" && currentUser.role !== "OWNER") || !currentUser.isOnboarded) {
            throw new Error("User not authenticated")
        }

        const checkRoom = await db.room.findUnique({
            where: {
                id,
            },
            include: {
                roomPayment: true,
                roomBilling: true
            }
        })

        if (!checkRoom) {
            throw new Error("Room not found")
        }

        if (checkRoom.roomPayment.length > 0) {
            await db.paymentHistory.deleteMany({
                where: {
                    roomId: id
                }
            });
        }

        if (checkRoom.roomBilling) {
            await db.roomBilling.delete({
                where: {
                    id: checkRoom.roomBilling.id
                }
            });
        }

        if (checkRoom.roomImages.length > 0) {
            const deleteResult = await removeMultipleRoomImages(checkRoom.roomImages);
            if (!deleteResult.success) {
                console.error("Failed to delete room images");
            }
        }

        const deleteRoom = await db.room.delete({
            where: {
                id
            }
        })

        if (!deleteRoom) {
            throw new Error("Failed to delete room")
        }

        return {
            message: "Room deleted successfully",
            success: true
        }
    } catch (error) {
        return {
            error: error instanceof Error ? error.message : "Something went wrong",
            success: false
        }
    }
}

export const checkRoomNumber = async (roomNumber: number) => {
    try {
        const currentUser = await getCurrentUser();
        if (!currentUser || !currentUser.id || !currentUser.email || currentUser.role === "USER" || !currentUser.isOnboarded) {
            throw new Error("User not authenticated")
        }

        const checkRoom = await db.room.findFirst({
            where: {
                ownerId: currentUser.id,
                roomNumber: roomNumber
            }
        })

        if (checkRoom) {
            return {
                message: "Room number already exists",
                success: false
            }
        }

        return {
            message: "Room number is available",
            success: true
        }


    } catch (error) {
        return {
            error: error instanceof Error ? error.message : "Something went wrong",
            success: false
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

        await db.posts.create({
            data : {
                ownerId : currentUser.id,
                roomId : newRoom.id,
            }
        })


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


export const checkInMyPosts = async(roomId : string) =>{
    try {
        const currentUser = await getCurrentUser();
        if(!currentUser || !currentUser.id || !currentUser.email || currentUser.role === "USER" || !currentUser.isOnboarded){
            throw new Error("User not authenticated")
        }

        const checkRoom = await db.posts.findFirst({
            where : {
                roomId : roomId,
                ownerId : currentUser.id
            }
        })
        
        if(!checkRoom){
            throw new Error("Room not found")
        }

        return {
            message : "Room found",
            success : true
        }
        
    } catch (error) {
        return {
            error : error instanceof Error ? error.message : "Something went wrong",
            success : false
        }
    }
}

export const deletePaymentRecord = async (paymentId: string) => {
    try {
        const currentUser = await getCurrentUser();
        if (!currentUser || !currentUser.id || !currentUser.email || (currentUser.role !== "ADMIN" && currentUser.role !== "OWNER") || !currentUser.isOnboarded) {
            throw new Error("User not authenticated")
        }

        const checkPayment = await db.roomPaymentRecord.findUnique({
            where: {
                id: paymentId
            }
        });

        if (!checkPayment) {
            throw new Error("Payment record not found")
        }

        const deletePayment = await db.roomPaymentRecord.delete({
            where: {
                id: paymentId
            }
        });

        if (!deletePayment) {
            throw new Error("Failed to delete payment record")
        }

        // Update room's due amount
        const allPaymentRecords = await db.roomPaymentRecord.findMany({
            where: {
                roomId: checkPayment.roomId
            }
        });

        const totalDueAmount = allPaymentRecords.reduce((acc, curr) => acc + curr.dueAmount, 0);

        await db.room.update({
            where: {
                id: checkPayment.roomId
            },
            data: {
                dueAmount: totalDueAmount
            }
        });

        return {
            message: "Payment record deleted successfully",
            success: true
        }
    } catch (error) {
        return {
            error: error instanceof Error ? error.message : "Something went wrong",
            success: false
        }
    }
}

