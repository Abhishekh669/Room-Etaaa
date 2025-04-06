import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { DollarSign, Zap, Droplets, Wifi, CreditCard, Clock } from "lucide-react";
import { Room } from "@/utils/types/type";
import { formatDate } from "date-fns";

interface RoomBillingTabProps {
  room: Room;
}

export const RoomBillingTab = ({ room }: RoomBillingTabProps) => {
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
    <div className="p-6 border rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Billing Information</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-center">
          <DollarSign className="h-5 w-5 mr-2 text-muted-foreground" />
          <div>
            <p className="text-sm text-muted-foreground">Room Cost</p>
            <p className="font-medium">${room.roomCost?.toFixed(2) || "0.00"}</p>
          </div>
        </div>

        <div className="flex items-center">
          <Zap className="h-5 w-5 mr-2 text-muted-foreground" />
          <div>
            <p className="text-sm text-muted-foreground">Electricity Bill</p>
            <p className="font-medium">${room.electricityBill.toFixed(2)}</p>
          </div>
        </div>

        <div className="flex items-center">
          <Droplets className="h-5 w-5 mr-2 text-muted-foreground" />
          <div>
            <p className="text-sm text-muted-foreground">Water Bill</p>
            <p className="font-medium">${room.waterBill.toFixed(2)}</p>
          </div>
        </div>

        <div className="flex items-center">
          <Wifi className="h-5 w-5 mr-2 text-muted-foreground" />
          <div>
            <p className="text-sm text-muted-foreground">Internet Bill</p>
            <p className="font-medium">${room.internetBill.toFixed(2)}</p>
          </div>
        </div>
      </div>

      <Separator className="my-6" />

      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Total Monthly Cost</h3>
        <p className="text-xl font-bold">${calculateTotalCost().toFixed(2)}</p>
      </div>

      <div className="flex justify-between items-center mb-4">
        <p className="text-muted-foreground">Amount Paid</p>
        <p className="font-medium">${room.payedMoney?.toFixed(2) || "0.00"}</p>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-muted-foreground">Amount Due</p>
        <p className="font-medium text-red-500">${calculateAmountDue().toFixed(2)}</p>
      </div>

      <Separator className="my-6" />

      <h3 className="text-lg font-semibold mb-4">Payment History</h3>

      {room.paymentHistory && room.paymentHistory.length > 0 ? (
        <div className="space-y-4">
          {room.paymentHistory.map((payment) => (
            <Card key={payment.id} className="p-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <CreditCard className="h-5 w-5 mr-2 text-muted-foreground" />
                  <div>
                    <p className="font-medium">${payment.amount.toFixed(2)}</p>
                    <p className="text-sm text-muted-foreground">{payment.description}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-muted-foreground" />
                  <p className="text-sm">{formatDate(payment.date,"eeee, MMMM do yyyy, h:mm:ss a")}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground">No payment history available.</p>
      )}
    </div>
  );
};