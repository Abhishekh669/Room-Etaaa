'use server'

import { Room } from "@/generated/prisma";
import { db as prisma} from "@/prisma";

export async function getNearByLocation(
  location: string,
  lat?: number,
  lon?: number,
  maxDistance: number = 10 
): Promise<Room[]> {
  try {
    if (lat && lon) {
      const nearbyRooms = await prisma.room.findMany({
        where: {
          AND: [
            {
              lat: {
                gte: lat - (maxDistance / 111.32), 
                lte: lat + (maxDistance / 111.32)
              }
            },
            {
              lon: {
                gte: lon - (maxDistance / (111.32 * Math.cos(lat * Math.PI / 180))),
                lte: lon + (maxDistance / (111.32 * Math.cos(lat * Math.PI / 180)))
              }
            }
          ]
        },
        include: {
          owner: {
            select: {
              name: true,
              email: true,
              phoneNumber: true,
              
            }
          },
          roomBilling : {
            select : {
              id : true,
              roomCost : true,
            }
          }
        }
      })
      return nearbyRooms
    }

    const rooms = await prisma.room.findMany({
      where: {
        location: {
          contains: location,
          mode: 'insensitive'
        }
      },
      include: {
        owner: {
          select: {
            name: true,
            email: true,
            phoneNumber: true,
            
            
          }
        },
        roomBilling : {
          select : {
            id : true,
            roomCost : true,
          }
        }
      }
    })
    return rooms
  } catch (error) {
    console.error('Error fetching nearby locations:', error)
    throw new Error('Failed to fetch nearby locations')
  }
}