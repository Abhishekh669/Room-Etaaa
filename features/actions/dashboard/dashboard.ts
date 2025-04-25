'use server'

import { db } from "@/prisma";
import { getCurrentUser } from "../users/user";

export const getDashboardData = async () => {
    try {
        const currentUser = await getCurrentUser();

        if (!currentUser || !currentUser.id || !currentUser.email || currentUser.role === "USER" || !currentUser.isOnboarded) {
            throw new Error("User not authenticated")
        }

        // Get all rooms for the current user
        const dashboardData = await db.room.findMany({
            where: {
                ownerId: currentUser.id,
            },
            orderBy: {
                createdAt: "desc",
            },
            include: {
                roomPaymentRecord: true,
            }
        });

        const totalRooms = dashboardData.length;

        // Calculate total revenue from room payment records
        const totalRevenue = dashboardData.reduce((sum, room) => {
            return sum + room.roomPaymentRecord.reduce((roomSum, record) => {
                return roomSum + (record.payedAmount || 0);
            }, 0);
        }, 0);

        // Calculate total due amount from rooms
        const totalDueAmount = dashboardData.reduce((sum, room) => sum + (room.dueAmount || 0), 0);

        // Get all unique clients from rooms and payment records
        const clientIds = new Set<string>();
        
        // Add clients from rooms
        dashboardData.forEach(room => {
            room.clients.forEach(clientId => clientIds.add(clientId));
        });

        // Add clients from payment records
        dashboardData.forEach(room => {
            room.roomPaymentRecord.forEach(record => {
                if (record.payedBy) clientIds.add(record.payedBy);
            });
        });

        const totalClients = clientIds.size;

        // Calculate growth rates from one month ago to today
        const now = new Date();
        const currentMonthStart = new Date(now.getFullYear(), now.getMonth(), 1);
        const previousMonthStart = new Date(now.getFullYear(), now.getMonth() - 1, 1);
        
        // Room growth calculation
        const currentRooms = await db.room.count({
            where: {
                ownerId: currentUser.id,
                createdAt: {
                    lte: now
                }
            }
        });

        const previousMonthRooms = await db.room.count({
            where: {
                ownerId: currentUser.id,
                createdAt: {
                    lte: previousMonthStart
                }
            }
        });

        const roomGrowthRate = previousMonthRooms > 0 
            ? ((currentRooms - previousMonthRooms) / previousMonthRooms) * 100 
            : currentRooms > 0 ? 100 : 0;

        // Client growth calculation
        const currentClients = (await db.room.findMany({
            where: {
                ownerId: currentUser.id,
                createdAt: {
                    lte: now
                }
            },
            select: {
                clients: true
            }
        })).flatMap(room => room.clients).length;

        const previousMonthClients = (await db.room.findMany({
            where: {
                ownerId: currentUser.id,
                createdAt: {
                    lte: previousMonthStart
                }
            },
            select: {
                clients: true
            }
        })).flatMap(room => room.clients).length;

        const clientGrowthRate = previousMonthClients > 0 
            ? ((currentClients - previousMonthClients) / previousMonthClients) * 100 
            : currentClients > 0 ? 100 : 0;

        // Calculate monthly revenues and due amounts
        const currentMonthRevenue = dashboardData
            .filter(room => room.createdAt >= currentMonthStart && room.createdAt <= now)
            .reduce((sum, room) => {
                return sum + room.roomPaymentRecord.reduce((roomSum, record) => {
                    return roomSum + (record.payedAmount || 0);
                }, 0);
            }, 0);

        const previousMonthRevenue = dashboardData
            .filter(room => room.createdAt >= previousMonthStart && room.createdAt < currentMonthStart)
            .reduce((sum, room) => {
                return sum + room.roomPaymentRecord.reduce((roomSum, record) => {
                    return roomSum + (record.payedAmount || 0);
                }, 0);
        }, 0);

        const currentMonthDueAmount = dashboardData
            .filter(room => room.createdAt >= currentMonthStart && room.createdAt <= now)
            .reduce((sum, room) => sum + (room.dueAmount || 0), 0);

        const previousMonthDueAmount = dashboardData
            .filter(room => room.createdAt >= previousMonthStart && room.createdAt < currentMonthStart)
            .reduce((sum, room) => sum + (room.dueAmount || 0), 0);

        const revenueDifferencePercentage = previousMonthRevenue > 0 
            ? ((currentMonthRevenue - previousMonthRevenue) / previousMonthRevenue) * 100 
            : currentMonthRevenue > 0 ? 100 : 0;

        const dueAmountDifferencePercentage = previousMonthDueAmount > 0 
            ? ((currentMonthDueAmount - previousMonthDueAmount) / previousMonthDueAmount) * 100 
            : currentMonthDueAmount > 0 ? 100 : 0;

        const vacantRooms = dashboardData.filter(room => room.roomStatus === "VACANT").length;
        const occupiedRooms = dashboardData.filter(room => room.roomStatus === "OCCUPIED").length;
        const maintenanceRooms = dashboardData.filter(room => room.roomStatus === "MAINTENANCE").length;
        const occupancyRate = totalRooms > 0 ? (occupiedRooms / totalRooms) * 100 : 0;

        const clientDetails = await Promise.all(
            Array.from(clientIds).map(async (id: string) => {
                return await db.user.findUnique({
                    where: { id },
                    select: {
                        name: true,
                        email: true,
                        phoneNumber: true,
                        image: true,
                    }
                });
            })
        );

        const recentPaymentRecords = await db.roomPaymentRecord.findMany({
            where : {
                ownerId : currentUser.id,
            },
            include : {
                client : {
                    select : {
                        id : true,
                        name : true,
                        email : true,
                        phoneNumber : true,
                        image : true,
                    }
                },
                room : {
                    select : {
                        roomNumber : true,
                    }
                }
            },
            orderBy : {
                createdAt : "desc",
            },
            take : 6,
        });



        return {
            totalRooms,
            totalClients,
            vacantRooms,
            occupiedRooms,
            maintenanceRooms,
            occupancyRate,
            totalRevenue: currentMonthRevenue,
            totalDueAmount: currentMonthDueAmount,
            recentPaymentRecords,
            growthRate: {
                rooms: roomGrowthRate,
                clients: clientGrowthRate,
                revenue: revenueDifferencePercentage,
                monthlyRevenue: {
                    currentMonth: currentMonthRevenue,
                    previousMonth: previousMonthRevenue,
                    differencePercentage: revenueDifferencePercentage
                },
                monthlyDueAmount: {
                    currentMonth: currentMonthDueAmount,
                    previousMonth: previousMonthDueAmount,
                    differencePercentage: dueAmountDifferencePercentage
                }
            },
            roomWithClients: clientDetails.filter(client => client !== null),
            success: true
        };
    } catch (error) {
        console.log(error);
        return {
            error: error instanceof Error ? error.message : "Something went wrong",
            success: false,
        };
    }
};

export const dashboardChartData = async () => {
    try {
        const currentUser = await getCurrentUser();

        if (!currentUser || !currentUser.id || !currentUser.email || currentUser.role === "USER" || !currentUser.isOnboarded) {
            throw new Error("User not authenticated")
        }

        // Get the earliest room record to determine the start date
        const earliestRoom = await db.room.findFirst({
            where: {
                ownerId: currentUser.id
            },
            orderBy: {
                createdAt: 'asc'
            },
            select: {
                createdAt: true
            }
        });

        if (!earliestRoom) {
            return {
                data: [],
                success: true
            };
        }

        const now = new Date();
        const startDate = new Date(earliestRoom.createdAt);
        
        // Calculate the number of months between start date and now
        const monthsDiff = (now.getFullYear() - startDate.getFullYear()) * 12 + 
                          (now.getMonth() - startDate.getMonth()) + 1;

        const months = Array.from({ length: monthsDiff }, (_, i) => {
            const date = new Date(startDate.getFullYear(), startDate.getMonth() + i, 1);
            return {
                start: date,
                end: new Date(startDate.getFullYear(), startDate.getMonth() + i + 1, 0),
                label: date.toLocaleString('default', { month: 'short', year: 'numeric' })
            };
        });

        const monthlyData = await Promise.all(months.map(async (month) => {
            const rooms = await db.room.findMany({
                where: {
                    ownerId: currentUser.id,
                    createdAt: {
                        lte: month.end
                    }
                },
                include: {
                    roomPaymentRecord: true
                }
            });

            const totalRevenue = rooms.reduce((sum, room) => {
                return sum + room.roomPaymentRecord.reduce((roomSum, record) => {
                    return roomSum + (record.payedAmount || 0);
                }, 0);
            }, 0);

            const dueAmount = rooms.reduce((sum, room) => sum + (room.dueAmount || 0), 0);

            return {
                month: month.label,
                totalRevenue,
                dueAmount,
                color: {
                    totalRevenue: 'text-red-600',
                    dueAmount: 'text-red-400'
                }
            };
        }));

        return {
            data: monthlyData,
            success: true
        };
    } catch (error) {
        console.log(error);
        return {
            error: error instanceof Error ? error.message : "Something went wrong",
            success: false,
        };
    }
};