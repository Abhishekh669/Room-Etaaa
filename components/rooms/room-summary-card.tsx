"use client"
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Users, CreditCard } from "lucide-react";
import { formatDate } from "date-fns";
import { useRouter } from "next/navigation";
import { RoomType } from "@/features/schemas/room/room.type";
import { RoomStatusBadge } from "../shared/room-status-badge";

interface RoomSummaryCardProps {
    room: RoomType;
}

export const RoomSummaryCard = ({ room }: RoomSummaryCardProps) => {
    console.log("this is room",room.clientInitationDate)
    const router = useRouter();
    const calculateTotalCost = () => {
        const roomCost = room.roomBilling.roomCost || 0;
        const electricityBill = room.roomBilling.electricity || 0;
        const waterBill = room.roomBilling.water || 0;
        const internetBill = room.roomBilling.internet || 0;
        return roomCost + electricityBill + waterBill + internetBill;
    };

    const calculateTotalPayedAmount = () => {
        const totalPayedAmount = room.roomPaymentRecord.reduce((sum, payment) => sum + (payment.payedAmount || 0), 0);
        return totalPayedAmount;
    };

    const calculateAmountDue = () => {
        const totalCost = calculateTotalCost();
        const totalPayedAmount = calculateTotalPayedAmount();
        return Math.max(0, totalCost - totalPayedAmount);
    };

    return (
        <Card className="p-10 border rounded-lg">
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
                        {room.clients.length || 0} / {room.roomCapacity}
                    </span>
                </div>

                <Separator />

                <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Room Cost</span>
                    <span className="font-medium">${room.roomBilling.roomCost?.toFixed(2) || "0.00"}</span>
                </div>

                <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Utilities</span>
                    <span className="font-medium">
                        ${(room.roomBilling.electricity + room.roomBilling.water + room.roomBilling.internet).toFixed(2)}
                    </span>
                </div>

                <Separator />

                <div className="flex justify-between items-center font-bold">
                    <span>Total Monthly</span>
                    <span className="text-lg">${calculateTotalCost().toFixed(2)}</span>
                </div>

                <Separator />

                <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Client Since</span>
                    <p className="font-medium">{
                        room.clients.length > 0 ? (
                            <>
                                    <span>
                                        {room.clients.length} / {room.roomCapacity} clients living
                                    </span>
                                {   
                                    room.clientInitationDate && (
                                        <>
                                        {formatDate(room?.clientInitationDate, "eeee, MMMM do yyyy, h:mm:ss a")}
                                        </>
                                    )
                                }
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
                    <Button className="w-full"
                        onMouseEnter={() => router.prefetch(`/ghar/rooms/${room.id}/edit-room`)}
                        onClick={() => router.push(`/ghar/rooms/${room.id}/edit-room`)}
                    >
                        <Users className="mr-2 h-4 w-4" />
                        Assign Client
                    </Button>
                )}

                <Button variant="outline" className="w-full"
                    onMouseEnter={() => router.prefetch(`/ghar/rooms/${room.id}/payment-records`)}
                    onClick={() => router.push(`/ghar/rooms/${room.id}/payment-records`)}
                >
                    <CreditCard className="mr-2 h-4 w-4" />
                    Record of Payment
                </Button>
            </div>
        </Card>
    );
};