'use server'

import { db } from "@/prisma";
import { getCurrentUser } from "../user/user";

export const getUsersForOwner = async () => {
    try {
        const currentUser = await getCurrentUser();
        if (!currentUser || !currentUser.id || !currentUser.email || 
            (currentUser.role !== "ADMIN" && currentUser.role !== "OWNER") || 
            !currentUser.isOnboarded) {
            throw new Error("User not authenticated");
        }

        // Fetch all rooms with client and otherClients IDs
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

        // Map users with their room numbers
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