import { format } from "date-fns";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, CreditCard, AlertCircle, MoreVertical, Pencil, Trash2, Info } from "lucide-react";
import { RoomPaymentRecord } from "@/generated/prisma";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface PaymentRecordCardProps {
  payment: RoomPaymentRecord;
  onUpdate?: (payment: RoomPaymentRecord) => void;
  onDelete?: (payment: RoomPaymentRecord) => void;
}

const PaymentRecordCard = ({ payment, onUpdate, onDelete }: PaymentRecordCardProps) => {
  const formattedDate = format(new Date(payment.createdAt), "MMM dd, yyyy");
  const isRecentPayment = new Date().getTime() - new Date(payment.createdAt).getTime() < 1000 * 60 * 60 * 24 * 7; // 7 days
  const paymentStatus = payment.dueAmount === 0 ? "PAID" : payment.dueAmount > 0 ? "OVERDUE" : "PENDING";

  const truncateId = (id: string) => {
    return `${id.slice(0, 4)}...${id.slice(-4)}`;
  };

  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-md bg-white dark:bg-gray-900">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CreditCard className="h-5 w-5 text-red-500" />
            <CardTitle className="text-lg font-medium text-gray-900 dark:text-white">
              Rs {payment.payedAmount.toFixed(2)}
            </CardTitle>
          </div>
          <div className="flex items-center gap-2">
            {isRecentPayment && (
              <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200">
                Recent
              </Badge>
            )}
            <Badge 
              variant="outline" 
              className={`${
                paymentStatus === "PAID" ? "bg-green-100 text-green-800 border-green-200" :
                paymentStatus === "OVERDUE" ? "bg-red-100 text-red-800 border-red-200" :
                "bg-yellow-100 text-yellow-800 border-yellow-200"
              }`}
            >
              {paymentStatus}
            </Badge>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem 
                  onClick={() => onUpdate?.(payment)}
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                >
                  <Pencil className="h-4 w-4" />
                  <span>Update</span>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => onDelete?.(payment)}
                  className="flex items-center gap-2 text-red-500"
                >
                  <Trash2 className="h-4 w-4" />
                  <span>Delete</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <CardDescription className="flex items-center gap-1 text-sm text-muted-foreground">
          <CalendarIcon size={14} />
          {formattedDate}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-gray-700 dark:text-gray-300">{payment?.description || "No description provided"}</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded-lg">
            <p className="text-xs text-gray-500 dark:text-gray-400">Total Amount</p>
            <p className="text-sm font-semibold text-gray-900 dark:text-white">Rs {payment.amountTotal.toFixed(2)}</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded-lg">
            <p className="text-xs text-gray-500 dark:text-gray-400">Due Amount</p>
            <p className="text-sm font-semibold text-red-500">Rs {payment.dueAmount.toFixed(2)}</p>
          </div>
        </div>
        {paymentStatus === "OVERDUE" && (
          <div className="flex items-center gap-1 text-red-500 text-sm">
            <AlertCircle className="h-4 w-4" />
            <span>Payment is overdue</span>
          </div>
        )}
        {payment.dueMoneyReason && (
          <div className="mt-2 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
            <div className="flex items-start gap-2">
              <Info className="h-4 w-4 text-yellow-500 mt-0.5" />
              <div>
                <p className="text-xs font-medium text-yellow-800 dark:text-yellow-200">Reason for Partial Payment</p>
                <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">{payment.dueMoneyReason}</p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-2 text-xs text-muted-foreground border-t border-gray-200 dark:border-gray-800">
        <div className="flex w-full justify-between">
          <span className="truncate max-w-[120px]" title={payment.roomId}>Room ID: {truncateId(payment.roomId)}</span>
          <span className="truncate max-w-[120px]" title={payment.id}>Payment ID: {truncateId(payment.id)}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PaymentRecordCard;