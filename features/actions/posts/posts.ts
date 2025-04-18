'use server'

import { getCurrentUser } from "../users/user"
import { db } from "@/prisma"



export const getAllPosts = async (params?: {
  location?: string
  minPrice?: number
  maxPrice?: number
  numberOfRooms?: number
  title?: string
  topSearch?: boolean
}) => {
  try {
    const currentUser = await getCurrentUser()
    if (!currentUser?.id || !currentUser.isOnboarded) {
      throw new Error("User not authorized")
    }

    const where: any = {
      roomStatus: "VACANT"
    }

    if (params?.location) {
      where.location = {
        contains: params.location,
        mode: "insensitive",
      }
    }

    if (params?.minPrice || params?.maxPrice) {
      where.roomBilling = {
        roomCost: {
          ...(params.minPrice && { gte: params.minPrice }),
          ...(params.maxPrice && { lte: params.maxPrice }),
        }
      }
    }

    if (params?.numberOfRooms) {
      where.numberOfRooms = {
        gte: params.numberOfRooms,
      }
    }

    if (params?.title) {
      where.title = {
        contains: params.title,
        mode: "insensitive",
      }
    }

    const posts = await db.posts.findMany({
      where: {
        room: where
      },
      include: {
        owner: {
          select: {
            id: true,
            name: true,
            email: true,
            phoneNumber: true,
            image: true,
          }
        },
        savedPost : true,
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
            beds: true,
            toilet: true,
            roomCapacity: true,
          }
        },
      }
    })

    return posts

  } catch (error) {
    return {
        error : error instanceof Error ? error.message : "Something went wrong",
        success : false,
    }
  }
}