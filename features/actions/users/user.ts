'use server'

import { auth } from "@/auth";
import { db } from "@/prisma";


export const getUserFromQuery = async ({ query, page, pageSize }: { query: string, page: number, pageSize: number }) => {
    try {
        const currentUser = await getCurrentUser();
        if (!currentUser || !currentUser.id || !currentUser.email || (currentUser.role !== "ADMIN" && currentUser.role !== "OWNER") || !currentUser.isOnboarded) {
            throw new Error("User not authenticated")
        }

        const skip = (page - 1) * pageSize

        const totalCount = await db.user.count({
            where: {
                OR: [
                    { name: { contains: query, mode: "insensitive" } },
                    { email: { contains: query, mode: "insensitive" } },
                    { phoneNumber: { contains: query, mode: "insensitive" } },
                ],
            },
        })

        const users = await db.user.findMany({
            where: {
                OR: [
                    { name: { contains: query, mode: "insensitive" } },
                    { email: { contains: query, mode: "insensitive" } },
                    { phoneNumber: { contains: query, mode: "insensitive" } },
                ],
            },
            select: {
                id: true,
                name: true,
                email: true,
                phoneNumber: true,
                image: true,
            },
            skip,
            take: pageSize,
            orderBy: {
                name: "asc",
            },
        });
        const data = {
            users,
            totalCount,
            page,
            pageSize,
            totalPages: Math.ceil(totalCount / pageSize),
        }

        return {
            data,
            success: true,
        }

    } catch (error) {
        return {
            error: error instanceof Error ? error.message : "Something went wrong",
            success: false,
        }

    }
}


export const onboardUser = async ({ phoneNumber, role }: { phoneNumber: string, role: 'USER' | 'OWNER' }) => {
    try {
        if (!role || !phoneNumber) {
            throw new Error("invalid payloads")
        }

        const currentUser = await getCurrentUser();
        if (!currentUser?.id) {
            throw new Error("User not authenticated")
        }

        if (currentUser.isOnboarded) {
            return {
                message: "User is already onboarded (refresh the page)",
                success: true,
            }
        }

        if (currentUser.isAdmin) {
            await db.user.update({
                where: { id: currentUser.id },
                data: { isOnboarded: true, phoneNumber }
            })
            return {
                message: "admin onboarded successfully",
                success: true,
            }
        }


        if (role === "USER") {
            await db.$transaction(async (prisma) => {
                await prisma.user.update({
                    where: { id: currentUser.id },
                    data: {
                        phoneNumber,
                        isOnboarded: true,
                        isVerified: true,
                    }
                });

                const checkUserRequest = await prisma.userRequest.findFirst({
                    where: { userId: currentUser.id }
                });

                if (checkUserRequest) {
                    await prisma.userRequest.delete({
                        where: {
                            id: checkUserRequest.id
                        }
                    })
                }

            })

            return {
                message: "user onboarded successfully",
                success: true,
            }
        }

        await db.$transaction(async (prisma) => {
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

            await prisma.user.update({
                where: { id: currentUser.id },
                data: { phoneNumber, isOnboarded: true }
            });
        });

        return {
            message: "successfully onboarded as owner",
            success: true,
        };

    } catch (error) {
        console.log("error in onboarding", error)
        return {
            error: error instanceof Error ? error.message : "Something went wrong",
            success: false,
        }

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



