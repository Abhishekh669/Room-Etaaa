'use server'

import { auth } from "@/auth";
import { db } from "@/prisma"





export const getUserFromQuery = async (query: string) => {
    try {
        const trimmedQuery = query.trim();
        if (!trimmedQuery) return [];

        const users = await db.user.findMany({
            where: {
                OR: [
                    { name: { contains: trimmedQuery, mode: "insensitive" } },
                    { email: { contains: trimmedQuery, mode: "insensitive" } }
                ]
            },
            orderBy: {
                name: 'asc'
            },
            take: 10
        });

        return users;

    } catch (error) {
        console.error("Error fetching users:", error);
        return {
            error: "Failed to get the user"
        };
    }
};




export const getUserSession = async() =>{
    const user = await auth();
    if(!user) return null;
    return user;
}

export  const getCurrentUser = async() =>{
    const user = await auth();
    if(!user) return null;
    const findUser = await db.user.findUnique({
        where : {id : user?.user.id}
    });

    if(!findUser){
        return null;
    }

    return findUser;
}


export const getUserById = async(id : string) =>{
    try {
        const user = await db.user.findUnique({
            where : {
                id
            }
        });
        if(!user){
            return {
                error : "user not found"
            }
        }
        return {
            message : "user found successfully",
            user : JSON.stringify(user)
        }
    } catch (error) {
        return {
            error : error || "something went wrong"
        }
        
    }
}



export const getAccountByUserId = async(userId : string)=>{
    try {
        const account = await db.account.findFirst({
            where : {
                userId
            }
        });
        if(!account) return {error : "no account found"}
        return {
            message : "found account",
            account : JSON.stringify(account)
        }
    } catch (error) {
        return {
            error : error || "something went wrong"
        }
        
    }
}



