import { RoomType } from '@/features/schemas/room/room.type'
import { Clock, CreditCard, DollarSign, Droplets, Wifi, Zap } from 'lucide-react';
import React from 'react'
import { Separator } from '../ui/separator';
import { Card } from '../ui/card';
import { formatDate } from 'date-fns';
interface RoomBillingTabsProps{
    room : RoomType
}

function RoomBillingTabs({room} : RoomBillingTabsProps) {
  console.log("this is room",room)
  const calculateTotalCost = () => {
    const roomCost = room.roomBilling.roomCost || 0;
    const electricityBill = room.roomBilling.electricity || 0;
    const waterBill = room.roomBilling.water || 0;
    const internetBill = room.roomBilling.internet || 0;
    return roomCost + electricityBill + waterBill + internetBill;
  };

  const calculateTotalPayedAmount = () => {
    if (!room.roomPaymentRecord || !Array.isArray(room.roomPaymentRecord)) {
      return 0;
    }
    return room.roomPaymentRecord.reduce((sum, payment) => sum + (payment.payedAmount || 0), 0);
  };

  const calculateAmountDue = () => {
    const totalCost = calculateTotalCost();
    const totalPayedAmount = calculateTotalPayedAmount();
    return Math.max(0, totalCost - totalPayedAmount);
  };

  return (
    <div className="p-6 border rounded-lg bg-white">
      <h3 className="text-lg font-semibold mb-2">Billing Information</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-center">
          <DollarSign className="h-5 w-5 mr-2 text-muted-foreground" />
          <div>
            <p className="text-sm text-muted-foreground">Room Cost</p>
            <p className="font-medium">${room.roomBilling.roomCost?.toFixed(2) || "0.00"}</p>
          </div>
        </div>

        <div className="flex items-center">
          <Zap className="h-5 w-5 mr-2 text-muted-foreground" />
          <div>
            <p className="text-sm text-muted-foreground">Electricity Bill</p>
            <p className="font-medium">${room.roomBilling.electricity?.toFixed(2) || "0.00"}</p>
          </div>
        </div>

        <div className="flex items-center">
          <Droplets className="h-5 w-5 mr-2 text-muted-foreground" />
          <div>
            <p className="text-sm text-muted-foreground">Water Bill</p>
            <p className="font-medium">${room.roomBilling.water?.toFixed(2) || "0.00"}</p>
          </div>
        </div>

        <div className="flex items-center">
          <Wifi className="h-5 w-5 mr-2 text-muted-foreground" />
          <div>
            <p className="text-sm text-muted-foreground">Internet Bill</p>
            <p className="font-medium">${room.roomBilling.internet?.toFixed(2) || "0.00"}</p>
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
        <p className="font-medium">${calculateTotalPayedAmount().toFixed(2)}</p>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-muted-foreground">Amount Due</p>
        <p className="font-medium text-red-500">${calculateAmountDue().toFixed(2)}</p>
      </div>

      <Separator className="my-6" />

      <h3 className="text-lg font-semibold mb-4">Payment History</h3>

      {room.roomPaymentRecord && room.roomPaymentRecord.length > 0 ? (
        <div className="space-y-4">
          {room.roomPaymentRecord.map((payment) => (
            <Card key={payment.id} className="p-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <CreditCard className="h-5 w-5 mr-2 text-muted-foreground" />
                  <div>
                    <p className="font-medium">${payment.payedAmount?.toFixed(2) || "0.00"}</p>
                    <p className="text-sm text-muted-foreground">{payment.description}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-muted-foreground" />
                  <p className="text-sm">{formatDate(payment.createdAt,"eeee, MMMM do yyyy, h:mm:ss a")}</p>
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


export default RoomBillingTabs
