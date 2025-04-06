import { MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Room } from "@/utils/types/type";

interface RoomLocationTabProps {
  room: Room;
}

export const RoomLocationTab = ({ room }: RoomLocationTabProps) => {
  return (
    <div className="p-6 border rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Location Information</h3>

      <div className="flex items-center mb-4">
        <MapPin className="h-5 w-5 mr-2 text-muted-foreground" />
        <div>
          <p className="text-sm text-muted-foreground">Address</p>
          <p className="font-medium">{room.location}</p>
        </div>
      </div>

      {room.lat && room.lon && (
        <div className="mt-4">
          <p className="text-sm text-muted-foreground mb-2">Coordinates</p>
          <p className="font-medium">Latitude: {room.lat.toFixed(6)}</p>
          <p className="font-medium">Longitude: {room.lon.toFixed(6)}</p>
        </div>
      )}

      <div className="mt-6 h-[400px] bg-gray-100 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
          <p className="text-muted-foreground">
            Map would be displayed here using latitude {room.lat?.toFixed(6)} and longitude{" "}
            {room.lon?.toFixed(6)}
          </p>
        </div>
      </div>
    </div>
  );
};