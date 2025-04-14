import { Separator } from "@/components/ui/separator";
import { Home, Users, Calendar } from "lucide-react";
// import { formatDate } from "date-fns";
import { RoomType, RoomWithClientDataType } from "@/features/schemas/room/room.type";

interface RoomDetailsTabProps {
  room: RoomType;
}

export const RoomDetailsTab = ({ room }: RoomDetailsTabProps) => {
  return (
    <div className="p-6 border rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Room Description</h3>
      <p className="text-muted-foreground mb-4">{room.description}</p>

      <Separator className="my-4" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center">
          <Home className="h-5 w-5 mr-2 text-muted-foreground" />
          <div>
            <p className="text-sm text-muted-foreground">Room Number</p>
            <p className="font-medium">{room.roomNumber}</p>
          </div>
        </div>

        <div className="flex items-center">
          <Home className="h-5 w-5 mr-2 text-muted-foreground" />
          <div>
            <p className="text-sm text-muted-foreground">Number of Rooms</p>
            <p className="font-medium">{room.numberOfRooms}</p>
          </div>
        </div>

        <div className="flex items-center">
          <Users className="h-5 w-5 mr-2 text-muted-foreground" />
          <div>
            <p className="text-sm text-muted-foreground">Maximum Clients</p>
            <p className="font-medium">{room.roomCapacity}</p>
          </div>
        </div>

        <div className="flex items-center">
          <Users className="h-5 w-5 mr-2 text-muted-foreground" />
          <div>
            <p className="text-sm text-muted-foreground">Clients Living</p>
            <p className="font-medium">
              {room.clients.length || 0} of {room.roomCapacity}
            </p>
          </div>
        </div>

        <div className="flex items-center">
          <Calendar className="h-5 w-5 mr-2 text-muted-foreground" />
          <div>
            <p className="text-sm text-muted-foreground">Client Since</p>
            <p className="font-medium">{
                room.clientInitationDate ? (
                    <>
                    {/* TODO : Here add the data  */}
                    {/* {formatDate(room.clientInitationDate,"eeee, MMMM do yyyy, h:mm:ss a")} */}
                    </>
                ) : (
                    <span>
                        No Client arrived till now
                    </span>
                )
            }</p>
          </div>
        </div>
      </div>

      <Separator className="my-4" />

      <h3 className="text-lg font-semibold mb-2">Owner Information</h3>
      <div className="flex items-center">
        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
          <Users className="h-5 w-5 text-gray-500" />
        </div>
        <div>
          <p className="font-medium">{room.owner.name}</p>
          <p className="text-sm text-muted-foreground">{room.owner.email}</p>
          <p className="text-sm text-muted-foreground">{room.owner.phoneNumber}</p>
        </div>
      </div>
    </div>
  );
};