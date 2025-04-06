import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Room } from "@/utils/types/type";
import { Users, CreditCard } from "lucide-react";
import { RoomStatusBadge } from "./room-badge-status";
import { formatDate } from "date-fns";

interface RoomSummaryCardProps {
  room: Room;
}

export const RoomSummaryCard = ({ room }: RoomSummaryCardProps) => {
  const calculateTotalCost = () => {
    const roomCost = room.roomCost || 0;
    const electricityBill = room.electricityBill || 0;
    const waterBill = room.waterBill || 0;
    const internetBill = room.internetBill || 0;
    return roomCost + electricityBill + waterBill + internetBill;
  };

  const calculateAmountDue = () => {
    const totalCost = calculateTotalCost();
    const payedMoney = room.payedMoney || 0;
    return Math.max(0, totalCost - payedMoney);
  };

  return (
    <Card className="sticky top-4">
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4">Room Summary</h3>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Status</span>
            <RoomStatusBadge status={room.roomStatus} />
          </div>

          <Separator />

          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Room Number</span>
            <span className="font-medium">{room.roomNumber}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Number of Rooms</span>
            <span className="font-medium">{room.numberOfRooms}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Clients Living</span>
            <span className="font-medium">
              {room.noOfClientLiving || 0} / {room.maxNoOfClient}
            </span>
          </div>

          <Separator />

          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Room Cost</span>
            <span className="font-medium">${room.roomCost?.toFixed(2) || "0.00"}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Utilities</span>
            <span className="font-medium">
              ${(room.electricityBill + room.waterBill + room.internetBill).toFixed(2)}
            </span>
          </div>

          <Separator />

          <div className="flex justify-between items-center font-bold">
            <span>Total Monthly</span>
            <span className="text-lg">${calculateTotalCost().toFixed(2)}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Amount Paid</span>
            <span className="font-medium">${room.payedMoney?.toFixed(2) || "0.00"}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Amount Due</span>
            <span className="font-medium text-red-500">
              ${calculateAmountDue().toFixed(2)}
            </span>
          </div>

          <Separator />

          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Client Since</span>
            <p className="font-medium">{
                room.clientInitationDate ? (
                    <>
                    {formatDate(room.clientInitationDate,"eeee, MMMM do yyyy, h:mm:ss a")}
                    </>
                ) : (
                    <span>
                        No Client arrived till now
                    </span>
                )
            }</p>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Location</span>
            <span className="font-medium truncate max-w-[180px]" title={room.location}>
              {room.location.length > 20 ? `${room.location.substring(0, 20)}...` : room.location}
            </span>
          </div>
        </div>

        <div className="mt-6 space-y-2">
          {room.roomStatus === "VACANT" && (
            <Button className="w-full">
              <Users className="mr-2 h-4 w-4" />
              Assign Client
            </Button>
          )}

          <Button variant="outline" className="w-full">
            <CreditCard className="mr-2 h-4 w-4" />
            Record Payment
          </Button>
        </div>
      </div>
    </Card>
  );
};