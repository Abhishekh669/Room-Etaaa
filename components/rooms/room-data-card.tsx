import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Home, Users, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRouter } from "next/navigation"


// Define the Room type based on the data structure
interface Room {
  id: string
  description: string
  roomStatus: "VACANT" | "OCCUPIED" | "MAINTENANCE"
  client?: {
    id: string
    name: string
  }
  noOfClientLiving?: number
  roomImages?: string[],
  roomNumber : number
}

interface RoomDataCardProps {
  room: Room
}

export const getStatusColor = (status: string) => {
  switch (status) {
    case "VACANT":
      return "bg-green-100 text-green-800 border-green-300"
    case "OCCUPIED":
      return "bg-blue-100 text-blue-800 border-blue-300"
    case "MAINTENANCE":
      return "bg-amber-100 text-amber-800 border-amber-300"
    default:
      return "bg-gray-100 text-gray-800 border-gray-300"
  }
}

export default function RoomDataCard({ room }: RoomDataCardProps) {
  const router = useRouter()
  

  const formatStatus = (status: string) => {
    return status.charAt(0) + status.slice(1).toLowerCase()
  }

  const truncateDescription = (text: string, maxLength = 100) => {
    if (text.length <= maxLength) return text
    return text.slice(0, maxLength) + "..."
  }

  return (
    <Card className="h-full overflow-hidden flex flex-col hover:shadow-md transition-shadow">
      <div className="relative h-48 overflow-hidden bg-gray-100">
        {room.roomImages && room.roomImages.length > 0 ? (
          <Image
            src={room.roomImages[0] || "/placeholder.svg"}
            alt={` ${room.id}`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <Home className="h-16 w-16 text-gray-400" />
          </div>
        )}
        <div className="absolute top-2 right-2">
          <Badge className={`${getStatusColor(room.roomStatus)} px-2 py-1`}>{formatStatus(room.roomStatus)}</Badge>
        </div>
      </div>

      <CardContent className="flex-grow p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-1">Room {room.roomNumber}</h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-3">{truncateDescription(room.description)}</p>

        <Separator className="my-3" />

        <div className="flex items-center text-sm text-muted-foreground">
          <Users className="h-4 w-4 mr-1" />
          <span>
            {room.noOfClientLiving || 0} client{(room.noOfClientLiving || 0) !== 1 ? "s" : ""} living
          </span>
        </div>

         {
          room.client  ? (
            <div className="mt-2">
            <p className="text-sm font-medium ext-sm text-muted-foreground">Clients:</p>
                  {room.client?.name}
          </div>
          ) : (
            <div>
              No Client till now 
            </div>
          ) 
         }
        
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Link href={`/ghar/rooms/${room.id}`} className="w-full" onMouseEnter={()=>{
          router.prefetch(`/ghar/rooms/${room.id}`)
        }}>
          <Button variant="outline" className="w-full">
            View Details
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

