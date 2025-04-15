"use client"
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RoomPaymentRecord } from "@/generated/prisma";
import { useRoomId } from "@/features/hooks/params-id/use-rooms-id";
import { useGetRoomPaymentRecords } from "@/features/hooks/tanstacks/query-hooks/rooms/use-get-room-payment-records";
import SpinningLoader from "@/components/shared/SpinningLoader";
import PaymentRecordCard from "./payment-record-card";

interface PaymentRecordsProps {
  payments: RoomPaymentRecord[];
  onDelete?: (payment: RoomPaymentRecord) => void;
  onUpdate?: (payment: RoomPaymentRecord) => void;
}

const PaymentRecords = ({ payments, onDelete, onUpdate }: PaymentRecordsProps) => {
const id = useRoomId();
  const [mounted, setMounted] = useState(true)
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest" | "amount">("newest");
  const [mockPaymentHistory, setMockPaymentHistory]  = useState<RoomPaymentRecord[]>([])
  const {data : roomPaymentRecords, isLoading : roomPaymentRecordsLoading} = useGetRoomPaymentRecords(id as string);
  console.log("this is room payment records : ",roomPaymentRecords)



  useEffect(()=>{
    setMounted(true)
  },[])
  


  useEffect(()=>{
    if(!mounted || roomPaymentRecordsLoading  || !id)return;
      if(roomPaymentRecords?.data){
        setMockPaymentHistory(roomPaymentRecords?.data as RoomPaymentRecord[])
      }
    
  },[id,mounted,roomPaymentRecords?.data])



  const filteredPayments = mockPaymentHistory
    .filter(payment => 
      payment.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.roomId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.id.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "newest") return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      if (sortOrder === "oldest") return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      if (sortOrder === "amount") return b.amountTotal - a.amountTotal;
      return 0;
    });

  const totalAmount = filteredPayments.reduce((sum, payment) => sum + payment.amountTotal, 0);
  const totalDueAmount = filteredPayments.reduce((sum, payment) => sum + payment.dueAmount, 0);
  const totalPayedAmount = filteredPayments.reduce((sum, payment) => sum + payment.payedAmount, 0);

  if(!mounted)return null;

  if(roomPaymentRecordsLoading){
    return <SpinningLoader />
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-card rounded-lg p-4 mb-8 shadow-sm">
        <div className="text-lg font-medium mochiy-pop-one-regular my-2">
            Payment <span className="text-red-500">Summary</span>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-5 gap-4">
          <div className="bg-background p-6 rounded-md border">
            <p className="text-sm text-muted-foreground">Total Payments</p>
            <p className="text-2xl font-bold text-red-500">{filteredPayments.length}</p>
          </div>
          <div className="bg-background p-6 rounded-md border">
            <p className="text-sm text-muted-foreground">Total Amount</p>
                <p className="text-2xl text-red-500 font-bold">Rs {totalAmount.toFixed(2)}</p>
          </div>
          <div className="bg-background p-6 rounded-md border">
            <p className="text-sm text-muted-foreground">Total Revenue</p>
                <p className="text-2xl text-red-500 font-bold">Rs {totalPayedAmount.toFixed(2)}</p>
          </div>
          <div className="bg-background p-6 rounded-md border">
            <p className="text-sm text-muted-foreground">Total Due Amount</p>
            <p className="text-2xl font-bold text-red-500">Rs {totalDueAmount.toFixed(2)}</p>
          </div>
          <div className="bg-background p-6 rounded-md border">
            <p className="text-sm text-muted-foreground">Last Payment</p>
            <p className="text-2xl font-bold text-red-500">
              {filteredPayments.length > 0
                ? new Date(filteredPayments[0].createdAt).toLocaleDateString()
                : "N/A"}
            </p>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
        <div className="flex-1 max-w-sm">
          <Input
            placeholder="Search by description or ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground whitespace-nowrap">Sort by:</span>
          <Select value={sortOrder} onValueChange={(value) => setSortOrder(value as any)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort order" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest first</SelectItem>
              <SelectItem value="oldest">Oldest first</SelectItem>
              <SelectItem value="amount">Amount (high to low)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPayments.length > 0 ? (
          filteredPayments.map((payment) => (
            <PaymentRecordCard key={payment.id} payment={payment} onDelete={onDelete} onUpdate={onUpdate} />
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
            <p className="text-xl font-medium mb-2">No payments found</p>
            <p className="text-muted-foreground mb-4">
              {searchTerm ? "Try adjusting your search terms" : "You don't have any payment history yet"}
            </p>
            {searchTerm && (
                <Button variant="outline" onClick={() => setSearchTerm("")}>
                Clear search
              </Button>
            )}

          </div>
        )}
      </div>
    </div>
  );
};

    export default PaymentRecords;
