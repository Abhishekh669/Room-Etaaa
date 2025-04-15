import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { Users } from "lucide-react";
import Image from "next/image";
import { RoomType } from "@/features/schemas/room/room.type";

interface RoomClientsTabProps {
  room: RoomType;
}

export const RoomClientsTab = ({ room }: RoomClientsTabProps) => {
  return (
    <div className="p-6 border rounded-lg bg-white">
      <h3 className="text-lg font-semibold mb-2">Client Information</h3>

      <div className="flex items-center mb-4">
        <Users className="h-5 w-5 mr-2 text-muted-foreground" />
        <div>
          <p className="text-sm text-muted-foreground">Clients Living</p>
          <p className="font-medium">
            {room.clients.length || 0} of {room.roomCapacity}
          </p>
        </div>
      </div>

      <Separator className="my-4" />

      
      {room.clients && room.clients.length > 0 && (
        <div>
          <h4 className="text-md font-medium mb-2"> Clients</h4>
          <div className="space-y-4">
            {room.clients.map((client) => (
              <Card key={client.id} className="p-4">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center mr-3 overflow-hidden">
                    {client.image ? (
                      <Image
                        src={client.image}
                        alt={client.name || ""}
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <Users className="h-6 w-6 text-gray-500" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{client.name}</p>
                    <p className="text-sm text-muted-foreground">{client.email}</p>
                    <p className="text-sm text-muted-foreground">{client.phoneNumber}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {(room.clients.length === 0) && (
        <p className="text-muted-foreground">No clients currently assigned to this room.</p>
      )}
    </div>
  );
};