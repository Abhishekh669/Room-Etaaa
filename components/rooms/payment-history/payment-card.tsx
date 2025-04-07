
import { format } from "date-fns";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon } from "lucide-react";
import { PaymentHistory } from "@/utils/types/type";

interface PaymentCardProps {
  payment: PaymentHistory;
}

const PaymentCard = ({ payment }: PaymentCardProps) => {
  const formattedDate = format(new Date(payment.date), "MMM dd, yyyy");
  const isRecentPayment = new Date().getTime() - new Date(payment.date).getTime() < 1000 * 60 * 60 * 24 * 7; // 7 days

  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-medium">
            Rs {payment.amount.toFixed(2)}
          </CardTitle>
          {isRecentPayment && (
            <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200">
              Recent
            </Badge>
          )}
        </div>
        <CardDescription className="flex items-center gap-1 text-sm text-muted-foreground">
          <CalendarIcon size={14} />
          {formattedDate}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{payment?.description || "No description provided"}</p>
      </CardContent>
      <CardFooter className="pt-2 text-xs text-muted-foreground">
        <div className="flex w-full justify-between">
          <span>Room ID: {payment.roomId}</span>
          <span>Payment ID: {payment.id}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PaymentCard;