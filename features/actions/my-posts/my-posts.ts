'use server'

import { db } from "@/prisma";
import { getCurrentUser } from "../users/user";

export const getMyPosts = async () =>{
    try {
        const currentUser = await getCurrentUser()
        if (!currentUser || !currentUser.id || !currentUser.email || 
            currentUser.role === "USER" ||
            !currentUser.isOnboarded) {
            throw new Error("User not authenticated");
        }

        const posts = await db.posts.findMany({
            where : {
                ownerId : currentUser.id,
            },
            include : {
                room : true,

            }
        }) || [];

        return {
            message : "successfully fetched posts",
            success : true,
            posts
        }


    } catch (error) {
        return {
            success: false,
            error: error instanceof Error ? error.message : "Failed to fetch clients",
          };
        
    }
}


export const deleteMyPost = async (postId : string) =>{
    try {
        const currentUser = await getCurrentUser()
        if (!currentUser || !currentUser.id || !currentUser.email || 
            currentUser.role === "USER" ||
            !currentUser.isOnboarded) {
            throw new Error("User not authenticated");
        }
        
        const checkPost = await db.posts.findFirst({
            where : {
                id: postId,
                ownerId : currentUser.id
            }
        });

        if(!checkPost){
            throw new Error("Post not found");
        }

        const  deleteData = await db.posts.delete({
            where   : {
                id : checkPost.id
            }
        });

        if(!deleteData){
            throw new Error("Failed to delete post");
        }

        return {
            message : "Post deleted successfully",
            success : true,
        }

    } catch (error) {
        return {
            error : error instanceof Error ? error.message : "Failed to delete post",
            success : false,
        }   
    }
}


export const deleteMyPostFromRoomId = async (roomId : string) =>{
    try {
        const currentUser = await getCurrentUser()
        if (!currentUser || !currentUser.id || !currentUser.email || 
            currentUser.role === "USER" ||
            !currentUser.isOnboarded) {
            throw new Error("User not authenticated");
        }
        
        const checkPost = await db.posts.findFirst({
            where : {
                roomId : roomId,
                ownerId : currentUser.id
            }
        });

        if(!checkPost){
            throw new Error("Post not found");
        }

        const  deleteData = await db.posts.delete({
            where   : {
                id : checkPost.id
            }
        });

        if(!deleteData){
            throw new Error("Failed to delete post");
        }

        return {
            message : "Post deleted successfully",
            success : true,
        }

    } catch (error) {
        return {
            error : error instanceof Error ? error.message : "Failed to delete post",
            success : false,
        }   
    }
}



export const addToMyPosts = async (roomId : string) =>{
    try {
        const currentUser = await getCurrentUser()
        if (!currentUser || !currentUser.id || !currentUser.email || 
            currentUser.role === "USER" ||
            !currentUser.isOnboarded) {
            throw new Error("User not authenticated");
        }

        const checkRoom = await db.room.findFirst({
            where : {
                id : roomId,
                ownerId : currentUser.id
            }
        })

        if(!checkRoom){
            throw new Error("Room not found");
        }

        const checkPost = await db.posts.findFirst({
            where : {
                roomId : roomId,
                ownerId : currentUser.id
            }
        })

        if(checkPost){
            throw new Error("Room already in my posts");
        }

        const addPost = await db.posts.create({
            data : {
                roomId : roomId,
                ownerId : currentUser.id
            }
        })

        if(!addPost){
            throw new Error("Failed to add to my posts");
        }

        return {
            message : "Room added to my posts successfully",
            success : true,
        }
        
    } catch (error) {
        return {
            error : error instanceof Error ? error.message : "Failed to add to my posts",
            success : false,
        }   
    }
}