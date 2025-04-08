'use server'

import { UserRole } from "@prisma/client";
import { getCurrentUser } from "../user/user"
import { db } from "@/prisma";


export const getUsersRequests = async() =>{
    try {
        const currentUser = await getCurrentUser();
        if(!currentUser || !currentUser.id || !currentUser.isAdmin || currentUser.role !== UserRole.ADMIN ){
            return {
                error : "user not authenticated"
            }
        }

        const getAllRequest = await db.userRequest.findMany({
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

        return getAllRequest;


        
    } catch (error) {
        return {
            error : error || "failed to get users"
        }
        
    }
}

export const rejectOwnerREquest = async({id , userId} : {id : string, userId : string}) =>{
    try {
        if(!userId || !id){
            return {
                error : "invalid payloads"
            }
        }

        const currentUser = await getCurrentUser();

        if(!currentUser || !currentUser.id || !currentUser.isAdmin || currentUser.role !== "ADMIN"){
            return {
                error : "user not authenticated"
            }
        }
        const checkuser = await db.user.findUnique({
            where : {
                id : userId
            }
        })
        if(!checkuser){
            return {
                error : "user doesnot exists"
            }
        }

        const rejectUser = await db.user.delete({
            where : {
                id : checkuser.id
            }
        });

        if(!rejectUser){
            return {
                error : "failed to reject the user"
            }
        }

        const deleteFromRequest = await db.userRequest.delete({
            where : {
                id ,
                userId : checkuser.id
            }
        });
        if(!deleteFromRequest){
            return {
                error : "failed  to delete the user"
            }
        }
        return {
            message : "user deleted successfully",
            success : true
        }
    } catch (error) {
        return {
            error  : "failed to get the user"
        }
        
    }
}


export const accetpOwnerRequest = async({id, userId} : {id : string, userId : string}) =>{
    try {

        if(!userId || !id){
            return {
                error : "invalid payload"
            }
        }

        const currentUser = await getCurrentUser();
        if(!currentUser || !currentUser.id || !currentUser.isAdmin || currentUser.role !== UserRole.ADMIN){
            return {
                error : "user not authenticated"
            }
        }

    

        const checkUser = await db.user.findUnique({
            where : {
                id : userId
            }
        });
        if(!checkUser){
            return {
                error :"no such user exists"
            }
        }

        if(checkUser.isVerified){
            await db.userRequest.delete({
                where : {
                    userId : checkUser.id
                }
            })
            return {
                message : "user is already verified. Refresh the page",
                success : true
            }
        }

        const updateUser = await db.user.update({
            where : {
                id : checkUser.id
            },
            data : {
                isVerified : true,
            }
        })
        if(!updateUser){
            return {
                error : "fialed to  accept the user"
            }
        }

        const deleteRequest = await db.userRequest.delete({
            where : {
                id ,
                userId
            }
        })

        if(!deleteRequest){
            error : "failed to delete the request"
        }
        return {
            message : "successfully accepted the user",
            success : true,
        }
    } catch (error) {
        return {
            error  : "failed to reject user"
        }
        
    }
}