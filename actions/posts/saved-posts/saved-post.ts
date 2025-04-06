'use server'

import { getCurrentUser } from "@/actions/user/user";
import { db } from "@/prisma";


interface SavedPostType {
    postId: string,
    userId: string,
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

export const createSavedPost = async (values: SavedPostType) => {
    try {
        const currentUser = await getCurrentUser();
        if (!currentUser || !currentUser.id || !currentUser.isOnboarded) {
            return {
                error: "user not authenticated"
            }
        }


        const checkPost = await db.post.findFirst({
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
        const { postId, userId } = values;
        const checkAlreadySaved = await db.savedPost.findFirst({
            where: {
                postId,
                userId
            }
        });
        if (checkAlreadySaved) {
            return {
                error: "post already saved"
            }
        }
        const createNewSavedPost = await db.savedPost.create({
            data: {
                postId,
                userId,
            }
        });

        if (!createNewSavedPost) {
            return {
                error: "failed to save the post"
            }
        }

        return {
            message: "successfully saved the post",
            success: true,
        }


    } catch (error) {
        return {
            error: "failed to save the post"
        }

    }
}



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


    const checkPost = await db.post.findFirst({
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
                        roomId: true,
                        roomImages: true,
                        description: true,
                        roomStatus: true,
                        roomNumber: true,
                        roomCost: true,
                        location: true,
                        //TODO: lat and lon if added map
                        numberOfRooms: true,
                        ownerId: true,
                        owner: {
                            select: {
                                id: true,
                                name: true,
                                email: true,
                                image: true,
                                phoneNumber: true,
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