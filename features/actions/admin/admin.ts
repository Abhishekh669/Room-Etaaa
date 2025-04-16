'use server'


import { getCurrentUser } from "@/features/actions/users/user";
import { db } from "@/prisma";

export const getUsersRequests = async() =>{
    try {
        const currentUser = await getCurrentUser();
        if(!currentUser || !currentUser.id || !currentUser.isAdmin || currentUser.role !== "ADMIN" ){
            return {
                error : "user not authenticated"
            }
        }

        const getAllRequest = await db.userRequest.findMany({
            where : {user : {
                role : {
                    not : 'ADMIN'
                }
            }

             },
            include : {
                user : {
                   select : {
                    name : true,
                    email : true,
                    id : true,
                    isOnboarded : true,
                    phoneNumber : true,
                    image : true,
                   }
                }
            }
        }) || []

        return {
            message  : "successfully got users requeats",
            ownerRequest : JSON.stringify(getAllRequest)
        }
    } catch (error) {
        return {
            error : error instanceof Error ? error.message : "Something went wrong",
            success : false,
        }
        
    }
}