'use server'

import { db } from "@/prisma";
import { getCurrentUser } from "../users/user";
import { AlignVerticalDistributeStart, Navigation } from "lucide-react";
import { Main } from "next/document";



export const getDashboardData = async() =>{
    try {
        const currentUser = await getCurrentUser();

        if (!currentUser || !currentUser.id || !currentUser.email || currentUser.role === "USER" || !currentUser.isOnboarded) {
            throw new Error("User not authenticated")
        }

        const dashboardData = await db.room.findMany({
            where : {
                ownerId : currentUser.id,
            },
            orderBy : {
                createdAt : "desc",
            },
            include : {
                roomPaymentRecord : true,
                
            }
        });

        const totalRooms = dashboardData.length;

        const getTotalRevenue = async(ownerId : string) =>{
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
        }

        const values = await getTotalRevenue(currentUser.id);
        const totalRevenue = values.totalPayedAmount;
        const totalDueAmount = values.totalDueAmount;

        const clientId = new Set<string>();

        const roomWithClients = dashboardData.length > 0 && dashboardData.map((room)=>{
            room.clients.forEach((client)=>{
                clientId.add(client);
            })
        })

        const totalClients = clientId.size;

        const vacantRooms = dashboardData.filter((room)=> room.roomStatus === "VACANT").length;

        const occupiedRooms = dashboardData.filter((room)=> room.roomStatus === "OCCUPIED").length;

        const occupiancyRate = (occupiedRooms / totalRooms) * 100;


        
        




        
        
        

    } catch (error) {
        console.log(error)
        return {
            error : error instanceof Error ? error.message : "Something went wrong",
            success : false,
        }
    }
}



