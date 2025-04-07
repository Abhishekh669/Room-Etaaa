"use client"
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import PaymentCard from "./payment-card";
import { PaymentHistory as PaymentHistoryType } from "@/utils/types/type";
import { useParams, useRouter } from "next/navigation";
import { getPaymentHistory } from "@/actions/room/room";
import { ArrowLeft, Loader2 } from "lucide-react";




const PaymentHistory = () => {

  const params = useParams()
  const router = useRouter()
  const [mounted, setMounted] = useState(true)
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest" | "amount">("newest");
  const [mockPaymentHistory, setMockPaymentHistory]  = useState<PaymentHistoryType[]>([])
  console.log(mockPaymentHistory)

  useEffect(()=>{
    setMounted(true)
  },[])
  


  useEffect(()=>{
    if(mounted){
      if(!params.id)return;
    const fetchMockedPaymentHistory = async() =>{
      setLoading(true)
      const res = await getPaymentHistory(params.id as string)
      if(!res || "error" in res){
        setLoading(false)
        return;
      }
      setMockPaymentHistory(res);
      setLoading(false)
    }
    fetchMockedPaymentHistory();
    }
  },[params.id,mounted])



  const filteredPayments = mockPaymentHistory
    .filter(payment => 
      payment.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.roomId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.id.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "newest") return new Date(b.date).getTime() - new Date(a.date).getTime();
      if (sortOrder === "oldest") return new Date(a.date).getTime() - new Date(b.date).getTime();
      if (sortOrder === "amount") return b.amount - a.amount;
      return 0;
    });

  const totalAmount = filteredPayments.reduce((sum, payment) => sum + payment.amount, 0);

  if(!mounted)return null;

  if(loading){
    return <div className=" h-full flex justify-center items-center">
        <Loader2 className="size-10 animate-spin" />
    </div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex justify-between">
        <div>
        <h1 className="text-3xl font-bold mb-2">Payment History</h1>
        <p className="text-muted-foreground">Track all your previous payments</p>
        </div>
        <Button variant={"outline"} onClick={() => router.back()}>
          <ArrowLeft className="size-4"/>
          Go back
        </Button>
      </div>
      
      <div className="bg-card rounded-lg p-4 mb-8 shadow-sm">
        <h2 className="text-xl font-medium mb-2">Payment Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-background p-4 rounded-md border">
            <p className="text-sm text-muted-foreground">Total Payments</p>
            <p className="text-2xl font-bold">{filteredPayments.length}</p>
          </div>
          <div className="bg-background p-4 rounded-md border">
            <p className="text-sm text-muted-foreground">Total Amount</p>
            <p className="text-2xl font-bold">Rs {totalAmount.toFixed(2)}</p>
          </div>
          <div className="bg-background p-4 rounded-md border">
            <p className="text-sm text-muted-foreground">Last Payment</p>
            <p className="text-2xl font-bold">
              {filteredPayments.length > 0
                ? new Date(filteredPayments[0].date).toLocaleDateString()
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
            <PaymentCard key={payment.id} payment={payment} />
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

export default PaymentHistory;
