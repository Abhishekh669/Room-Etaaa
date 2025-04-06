"use server"

import { db } from "@/prisma"


export async function getPosts(params?: {
  location?: string
  minPrice?: string
  maxPrice?: string
  rooms?: string
  search?: string
}) {
  try {
    const where: any = {}

    if (params?.location) {
      where.location = {
        contains: params.location as string  ?? "",
        mode: "insensitive",
      }
    }

    if (params?.minPrice) {
      where.roomCost = {
        ...where.roomCost,
        gte: Number.parseInt(params.minPrice as string),
      }
    }

    if (params?.maxPrice) {
      where.roomCost = {
        ...where.roomCost,
        lte: Number.parseInt(params.maxPrice as string),
      }
    }

    if (params?.rooms) {
      where.numberOfRooms = {
        gte: Number.parseInt(params.rooms as string),
      }
    }

    if (params?.search) {
      where.description = {
        contains: params.search as string,
        mode: "insensitive",
      }
    }

    const posts = await db.post.findMany({
      where,
      include: {
        owner: {
          select: {
            id: true,
            name: true,
            email: true,
            phoneNumber: true,
          },
        },
        savedPost : true,
      },
      orderBy: {
        roomCost: "asc",
      },
    })

    return posts
  } catch (error) {
    console.error("Error fetching posts:", error)
    return []
  }
}

