import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import React, { useState, useEffect } from 'react'
import { RoomPaymentRecord } from '@/generated/prisma';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CreditCard, AlertCircle, ChevronDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { Textarea } from '@/components/ui/textarea';

interface UpdatePaymentRecordDialogBoxProps {
  open: boolean;
  onClose: () => void;
  handleSubmit: ({paymentId, amount, description, reason}:{paymentId: string, amount: string, description: string, reason?: string}) => void;
  payment: RoomPaymentRecord;
  isLoading: boolean;
}

function UpdatePaymentRecordDialogBox({ open, onClose, handleSubmit, payment, isLoading }: UpdatePaymentRecordDialogBoxProps) {
  const [amount, setAmount] = useState<string>(payment.payedAmount.toString());
  const [description, setDescription] = useState<string>(payment.description || "");
  const [reason, setReason] = useState<string>(payment.dueMoneyReason || "");
  const [showReason, setShowReason] = useState<boolean>(payment.dueAmount > 0);

  const totalAmount = payment.amountTotal;
  const paidAmount = Number(amount) || 0;
  const dueAmount = totalAmount - paidAmount;
  const paymentStatus = paidAmount === 0 ? "PENDING" : dueAmount === 0 ? "PAID" : "OVERDUE";

  useEffect(() => {
    if (!open) {
      setAmount(payment.payedAmount.toString());
      setDescription(payment.description || "");
      setReason(payment.dueMoneyReason || "");
      setShowReason(payment.dueAmount > 0);
    }
  }, [open, payment]);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount = e.target.value;
    const numericAmount = Number(newAmount);
    
    if (numericAmount > totalAmount) {
      toast.error(`Paid amount cannot exceed total amount (Rs ${totalAmount.toFixed(2)})`)
      return;
    }
    
    setAmount(newAmount);
    setShowReason(numericAmount > 0 && numericAmount < totalAmount);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="z-999 sm:max-w-[425px] bg-white dark:bg-gray-900">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-gray-900 dark:text-white">Update Payment Record</DialogTitle>
          <DialogDescription className="text-gray-600 dark:text-gray-400">
            Update the payment record details
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <CreditCard className="h-4 w-4 text-red-500" />
              <span>Total amount due: <span className="font-semibold text-red-500">Rs {totalAmount.toFixed(2)}</span></span>
            </div>
          </div>

          <div className="flex items-center gap-2">
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
            {paymentStatus === "OVERDUE" && (
              <div className="flex items-center gap-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4" />
                <span>Payment is overdue</span>
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
              <p className="text-sm text-gray-500 dark:text-gray-400">Paid Amount</p>
              <p className="text-lg font-semibold text-green-600 dark:text-green-400">Rs {paidAmount.toFixed(2)}</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
              <p className="text-sm text-gray-500 dark:text-gray-400">Due Amount</p>
              <p className="text-lg font-semibold text-red-500">Rs {dueAmount.toFixed(2)}</p>
            </div>
          </div>

          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="amount" className="text-gray-700 dark:text-gray-300">Amount (Rs)</Label>
              <Input
                id="amount"
                type="number"
                value={amount}
                onChange={handleAmountChange}
                placeholder="Enter amount"
                className="border-gray-300 dark:border-gray-700 focus:ring-red-500"
                max={totalAmount}
              />
            </div>
            {showReason && (
              <div className="grid gap-2">
                <Label htmlFor="reason" className="text-gray-700 dark:text-gray-300">
                  Reason for Partial Payment
                </Label>
                <Textarea
                  id="reason"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="Please provide a reason for partial payment"
                  className="border-gray-300 dark:border-gray-700 focus:ring-red-500 min-h-[100px]"
                />
              </div>
            )}
            <div className="grid gap-2">
              <Label htmlFor="description" className="text-gray-700 dark:text-gray-300">Description</Label>
              <Input
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter description"
                className="border-gray-300 dark:border-gray-700 focus:ring-red-500"
              />
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose} className="border-gray-300 dark:border-gray-700">Cancel</Button>
          <Button 
            onClick={() => handleSubmit({
              paymentId: payment.id,
              amount,
              description,
              reason: showReason ? reason : undefined
            })}
            className="bg-red-500 text-white hover:bg-red-600 focus:ring-red-500"
            disabled={isLoading || !amount || !description || Number(amount) > totalAmount || (showReason && !reason)}
          >
            {isLoading ? "Updating..." : "Update Payment"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default UpdatePaymentRecordDialogBox; 