'use server'

import { auth } from "@/auth";
import { db } from "@/prisma"
import { UserRole } from "@prisma/client";





export const getUserFromQuery = async (query: string) => {
    try {
        const currentUser = await getCurrentUser();
        if (!currentUser || !currentUser.id || !currentUser.email || (currentUser.role !== "ADMIN" && currentUser.role !== "OWNER") || !currentUser.isOnboarded) {
            throw new Error("User not authenticated")
        }

        const trimmedQuery = query.trim();
        if (!trimmedQuery) return [];

        const users = await db.user.findMany({
            where: {
                AND: [
                    {
                        OR: [
                            { name: { contains: trimmedQuery, mode: "insensitive" } },
                            { email: { contains: trimmedQuery, mode: "insensitive" } }
                        ]
                    },
                    { id: { not: currentUser.id } }  // Exclude current user
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
export const onboardUser = async (role: "USER" | "OWNER", phoneNumber: string) => {
    try {
        // Input validation
        if (!role || !phoneNumber) {
            return { error: "Invalid payload" };
        }

        const currentUser = await getCurrentUser();
        if (!currentUser?.id) {
            return { error: "User not authenticated" };
        }

        if (currentUser.isOnboarded) {
            return { error: "User is already onboarded - please refresh" };
        }

        // Handle admin case
        if (currentUser.isAdmin) {
            await db.user.update({
                where: { id: currentUser.id },
                data: { isOnboarded: true }
            });
            return { 
                message: "Admin onboarded successfully",
                success: true 
            };
        }

        if(role === UserRole.USER){
            await db.user.update({
                where : {id : currentUser.id},
                data : {
                    isVerified : true,
                    isOnboarded : true,
                }
            })
            await db.userRequest.delete({
                where : {
                    userId : currentUser.id
                }
            })
            return {
                message  : "onboarded successfully",
                success : true,
            }
        }

        const result = await db.$transaction(async (prisma) => {
            const existingRequest = await prisma.userRequest.findFirst({
                where: { userId: currentUser.id }
            });

            if (existingRequest) {
                if (existingRequest.requestedRole !== role) {
                    await prisma.userRequest.update({
                        where: { id: existingRequest.id },
                        data: { requestedRole: role }
                    });
                }
            } else {
                await prisma.userRequest.create({
                    data: {
                        userId: currentUser.id,
                        requestedRole: role,
                    }
                });
            }

            return await prisma.user.update({
                where: { id: currentUser.id },
                data: { phoneNumber, isOnboarded : true }
            });
        });

        return {
            message: "Successfully updated user",
            success: true,
        };

    } catch (error) {
        console.error("Onboarding error:", error);
        return {
            error: "Failed to onboard user",
        };
    }
}


export const getUserSession = async () => {
    const user = await auth();
    if (!user) return null;
    const findUser = await db.user.findUnique({
        where: {
            id: user?.user?.id
        }
    })
    if (!findUser) {
        return null;
    }
    return findUser;
}

export const getCurrentUser = async () => {
    const user = await auth();
    if (!user) return null;
    const findUser = await db.user.findUnique({
        where: { id: user?.user.id }
    });

    if (!findUser) {
        return null;
    }

    return findUser;
}


export const getUserById = async (id: string) => {
    try {
        const user = await db.user.findUnique({
            where: {
                id
            }
        });
        if (!user) {
            return {
                error: "user not found"
            }
        }
        return {
            message: "user found successfully",
            user: JSON.stringify(user)
        }
    } catch (error) {
        return {
            error: error || "something went wrong"
        }

    }
}



export const getAccountByUserId = async (userId: string) => {
    try {
        const account = await db.account.findFirst({
            where: {
                userId
            }
        });
        if (!account) return { error: "no account found" }
        return {
            message: "found account",
            account: JSON.stringify(account)
        }
    } catch (error) {
        return {
            error: error || "something went wrong"
        }

    }
}



