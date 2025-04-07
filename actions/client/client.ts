'use server'

import { db } from "@/prisma";
import { getCurrentUser } from "../user/user";

export const deleteUserFromRoom = async(values : {userId : string, roomNumbers : number[]}) =>{
    try {
        if(!values.userId || values.roomNumbers.length === 0){
            return {
                error : "invalid payload found"
            }
        }
        const currentUser = await getCurrentUser();
        if (!currentUser || !currentUser.id || !currentUser.email || 
            (currentUser.role !== "ADMIN" && currentUser.role !== "OWNER") || 
            !currentUser.isOnboarded) {
            throw new Error("User not authenticated");
        }


        const roomsWithUserAsClient = await db.room.findMany({
            where: {
                roomNumber: {
                    in: values.roomNumbers,
                },
                clientId: values.userId,
                ownerId : currentUser.id,
            }
        });;

        if(roomsWithUserAsClient.length > 0){
            await db.room.updateMany({
                where   :{
                    roomNumber : {
                        in : roomsWithUserAsClient.map(room => room.roomNumber)
                    },
                    clientId : values.userId
                },
                data : {clientId : null}
            })
        }

        const roomsWithUserInOtherClients = await db.room.findMany({
            where: {
                roomNumber: {
                    in: values.roomNumbers,
                },
                otherClients: {
                    has: values.userId
                },
                 ownerId : currentUser.id
            }
        });


        if (roomsWithUserInOtherClients.length > 0) {
            await Promise.all(
                roomsWithUserInOtherClients.map(room => 
                    db.room.update({
                        where: { id: room.id },
                        data: {
                            otherClients: {
                                set: room.otherClients.filter(id => id !== values.userId)
                            }
                        }
                    })
                )
            );
        }

        return {
            message : "successfully deleted users",
            success : true,
        }

    } catch (error) {
        return {
            error : error || "something went wrong"
        }
        
    }
}

export const getUsersForOwner = async () => {
    try {
        const currentUser = await getCurrentUser();
        if (!currentUser || !currentUser.id || !currentUser.email || 
            (currentUser.role !== "ADMIN" && currentUser.role !== "OWNER") || 
            !currentUser.isOnboarded) {
            throw new Error("User not authenticated");
        }

        const ownerRooms = await db.room.findMany({
            where: {
                ownerId: currentUser.id,
            },
            select: {
                roomNumber: true,
                clientId: true,
                client: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        phoneNumber: true,
                        image: true,
                    }
                },
                otherClients: true
            }
        });

        if (!ownerRooms || ownerRooms.length === 0) {
            return [];
        }

        const userIds = new Set<string>();
        const roomUserMap = new Map<string, number[]>();

        ownerRooms.forEach(room => {
            if (room.clientId) {
                userIds.add(room.clientId);
                const currentRooms = roomUserMap.get(room.clientId) || [];
                roomUserMap.set(room.clientId, [...currentRooms, room.roomNumber]);
            }

            if (room.otherClients && Array.isArray(room.otherClients)) {
                room.otherClients.forEach(userId => {
                    userIds.add(userId);
                    const currentRooms = roomUserMap.get(userId) || [];
                    roomUserMap.set(userId, [...currentRooms, room.roomNumber]);
                });
            }
        });

        const users = await db.user.findMany({
            where: {
                id: {
                    in: Array.from(userIds)
                }
            },
            select: {
                id: true,
                name: true,
                email: true,
                phoneNumber: true,
                image: true,
            }
        });

        const usersWithRooms = users.map(user => ({
            ...user,
            roomNumbers: roomUserMap.get(user.id) || []
        }));

        return usersWithRooms;

    } catch (error) {
        console.error("Error fetching users:", error);
        return {
            error: "Failed to get the users"
        };
    }
}