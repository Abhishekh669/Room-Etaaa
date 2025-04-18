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
