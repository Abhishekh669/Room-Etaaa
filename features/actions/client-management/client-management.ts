'use server'

import { db } from "@/prisma";
import { getCurrentUser } from "../users/user";



export const deleteUserFromRoom = async(values : {userId : string, data : RoomNumberNId[]}) =>{
    try {
        if(!values.userId || values.data.length === 0){
            return {
                error : "invalid payload found"
            }
        }
        const currentUser = await getCurrentUser();
        if (!currentUser || !currentUser.id || !currentUser.email || 
            currentUser.role === "USER" ||
            !currentUser.isOnboarded) {
            throw new Error("User not authenticated");
        }

        const user = await db.user.findUnique({
            where : {
                id : values.userId
            },
            
        })
        if(!user){
            throw new Error("User not found")
        }

        await Promise.all(
            values.data.map(async(room)=>{
                const roomData = await db.room.findUnique({
                    where : {id : room.id},
                    select : {ownerId : true, clients : true}
                });

                if(roomData?.ownerId !== currentUser.id || currentUser.role === "USER"){
                    throw new Error("You are not authorized to modify this room ")
                }

                await db.room.update({
                    where : {id : room.id},
                    data : {
                        clients : {
                            set : roomData?.clients.filter((id) => id !== values.userId),
                        }
                    }
                })
            })
        )

        return {
            message : "successfully removed users from room",
            success : true,
        }

    } catch (error) {
        return {
            error : error || "something went wrong"
        }
        
    }
}









interface RoomNumberNId{
    id : string,
    roomNumber : number
}





export const getClientsForOwner = async () => {
    try {
        const currentUser = await getCurrentUser();
        if (!currentUser || !currentUser.id || !currentUser.email || 
            currentUser.role === "USER" ||
            !currentUser.isOnboarded) {
            throw new Error("User not authenticated");
        }

        // Get all rooms owned by current user with their clients
        const ownerRooms = await db.room.findMany({
            where: {
                ownerId: currentUser.id
            },
            select: {
                id: true,
                roomNumber: true,
                clients: true,
                createdAt: true,
            }
        });

        if (!ownerRooms || ownerRooms.length === 0) {
            return [];
        }

        // Collect all unique client IDs and map users to their rooms
        const userIds = new Set<string>();
        const userRoomMap = new Map<string, RoomNumberNId[]>(); // userID -> roomIDs

        ownerRooms.forEach(room => {
            room.clients.forEach(clientId => {
                userIds.add(clientId);
                if (!userRoomMap.has(clientId)) {
                    userRoomMap.set(clientId, []);
                }
                userRoomMap.get(clientId)?.push({
                    id : room.id,
                    roomNumber : room.roomNumber
                });
            });
        });

        // Get user details for all clients
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
                image: true,
                phoneNumber: true,
                role: true,
            }
        });

        const usersWithRooms = users.map(user => ({
            ...user,
            rooms: userRoomMap.get(user.id) || []
        }));

        return usersWithRooms;
    } catch (error) {
        console.error("Error in getClientsForOwner:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Failed to fetch clients",
          };
    }
};