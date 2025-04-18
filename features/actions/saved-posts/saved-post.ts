"use server"
import { db } from "@/prisma";
import { getCurrentUser } from "../users/user";


interface toggleSavePost {
    postId: string,
    userId: string,
    savedPostId?: string,
}

export const toggleSavePost = async (values: toggleSavePost) => {


    const currentUser = await getCurrentUser();
    if (!currentUser || !currentUser.id || !currentUser.isOnboarded) {
        return {
            error: "user not authenticated"
        }
    }


    const checkPost = await db.posts.findFirst({
        where: { id: values.postId }
    })
    if (!checkPost) {
        return {
            error: "failed to found post"
        }
    }

    const checkUser = await db.user.findFirst({
        where: { id: values.userId }
    })
    if (!checkUser) {
        return {
            error: 'user not found'
        }
    }
    const checkSavedPost = await db.savedPost.findFirst({
        where: {
            userId: values.userId,
            postId: values.postId
        }
    });


    if (checkSavedPost) {
        await db.savedPost.delete({
            where: {
                id: checkSavedPost.id
            }
        });

        return {
            message: 'unsaved post',
            success: true,
        }
    } else {
        await db.savedPost.create({
            data: {
                userId: values.userId,
                postId: values.postId
            }
        })

        return {
            message: "saved post",
            success: true
        }
    }

}


export const deleteSavedPost = async(id : string) =>{
    try {
        const currentUser = await getCurrentUser();
        if (!currentUser || !currentUser.id || !currentUser.isOnboarded) {
            return {
                error: "user not authenticated"
            }
        }


        const checkSavedPost = await db.savedPost.findFirst({
            where : {
                id
            }
        });
        if(!checkSavedPost){
            return {
                error : "failed to remove from the save collection"
            }
        }
        await db.savedPost.delete({
            where  :{
                id 
            }
        })
        
        return {
            message : "successfully removed from the saved colleciton",
            success : true,
        }
    } catch (error) {
        return {
            error : "faild to remove from the saved collection"
        }
        
    }
}




export const getSavedPosts = async () => {
    try {
        const currentUser = await getCurrentUser();
        if (!currentUser || !currentUser.id || !currentUser.isOnboarded) {
            return {
                error: "user not authenticated"
            }
        }

        const getUserSavedPost = await db.savedPost.findMany({
            where: {
                userId: currentUser.id
            },
            include: {
                post: {
                    select: {
                        id: true,
                        owner: {
                            select: {
                                id: true,
                                name: true,
                                email: true,
                                image: true,
                                phoneNumber: true,
                            }
                        },
                        room: {
                            select: {
                                id: true,
                                roomImages: true,
                                roomBilling: {
                                    select: {
                                        id: true,
                                        roomCost: true,
                                    }
                                },
                                title: true,
                                roomStatus: true,
                                description: true,
                                location: true,
                                lat: true,
                                lon: true,
                                beds: true,
                                toilet: true,
                                roomCapacity: true,
                            }
                        },
                        
                    }
                }
            }
        })
        return getUserSavedPost;
    } catch (error) {
        return {
            error: "failed to get posts"
        }

    }
}
