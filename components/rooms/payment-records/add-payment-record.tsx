import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import { UserType } from "@/features/schemas/room/room.type";
import { RoomBilling } from "@/generated/prisma";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, AlertCircle, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";

interface AddPaymentRecordDialogBoxProps {
  open: boolean;
  onClose: () => void;
  handleSubmit: ({
    userId,
    amount,
    description,
    totalAmount,
    reason,
  }: {
    userId: string;
    amount: string;
    description: string;
    totalAmount: number;
    reason?: string;
  }) => void;
  users: UserType[];
  roomBilling: RoomBilling;
  isLoading: boolean;
}

function AddPaymentRecordDialogBox({
  open,
  onClose,
  handleSubmit,
  users,
  roomBilling,
  isLoading,
}: AddPaymentRecordDialogBoxProps) {
  const [selectedUser, setSelectedUser] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [reason, setReason] = useState<string>("");
  const [showReason, setShowReason] = useState<boolean>(false);

  const totalAmount =
    roomBilling.roomCost +
    roomBilling.electricity +
    roomBilling.water +
    roomBilling.internet;

  const paidAmount = Number(amount) || 0;
  const dueAmount = totalAmount - paidAmount;
  const paymentStatus =
    paidAmount === 0
      ? "PENDING"
      : dueAmount === 0
      ? "PAID"
      : "OVERDUE";

  useEffect(() => {
    if (!open) {
      setSelectedUser("");
      setAmount("");
      setDescription("");
      setReason("");
      setShowReason(false);
    }
  }, [open]);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount = e.target.value;
    const numericAmount = Number(newAmount);
    
    if (numericAmount > totalAmount) {
      toast.error(
        `Paid amount cannot exceed total amount (Rs ${totalAmount.toFixed(2)})`
      );
      return;
    }
    
    setAmount(newAmount);
    setShowReason(numericAmount > 0 && numericAmount < totalAmount);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="z-999 sm:max-w-[425px] bg-white dark:bg-gray-900">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-gray-900 dark:text-white">
            Add Payment Record
          </DialogTitle>
          <DialogDescription className="text-gray-600 dark:text-gray-400">
            Add a new payment record for the room
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Total Amount Section */}
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <CreditCard className="h-4 w-4 text-red-500" />
              <span>
                Total amount due:{" "}
                <span className="font-semibold text-red-500">
                  Rs {totalAmount.toFixed(2)}
                </span>
              </span>
            </div>
          </div>

          {/* Payment Status */}
          <div className="flex items-center gap-2">
            <Badge 
              variant="outline" 
              className={`${
                paymentStatus === "PAID"
                  ? "bg-green-100 text-green-800 border-green-200"
                  : paymentStatus === "OVERDUE"
                  ? "bg-red-100 text-red-800 border-red-200"
                  : "bg-yellow-100 text-yellow-800 border-yellow-200"
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

          {/* Payment Details */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Paid Amount
              </p>
              <p className="text-lg font-semibold text-green-600 dark:text-green-400">
                Rs {paidAmount.toFixed(2)}
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Due Amount
              </p>
              <p className="text-lg font-semibold text-red-500">
                Rs {dueAmount.toFixed(2)}
              </p>
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label
                htmlFor="user"
                className="text-gray-700 dark:text-gray-300"
              >
                Select User (Paid By)
              </Label>
              <div className="relative">
                <select
                  id="user"
                  value={selectedUser}
                  onChange={(e) => setSelectedUser(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent appearance-none pr-10"
                >
                  <option value="">Select a user</option>
                  {users.map((user) => (
                    <option
                      key={user.id}
                      value={user.id}
                      className="py-2 px-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                    >
                      {user.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
              </div>
            </div>

            <div className="grid gap-2">
              <Label
                htmlFor="amount"
                className="text-gray-700 dark:text-gray-300"
              >
                Amount (Rs)
              </Label>
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
                <Label
                  htmlFor="reason"
                  className="text-gray-700 dark:text-gray-300"
                >
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
              <Label
                htmlFor="description"
                className="text-gray-700 dark:text-gray-300"
              >
                Description
              </Label>
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
          <Button
            variant="outline"
            onClick={onClose}
            className="border-gray-300 dark:border-gray-700"
          >
            Cancel
          </Button>
          <Button
            onClick={() =>
              handleSubmit({
                userId: selectedUser,
                amount,
                description,
                totalAmount,
                reason: showReason ? reason : undefined
              })
            }
            className="bg-red-500 text-white hover:bg-red-600 focus:ring-red-500"
            disabled={
              isLoading ||
              !selectedUser ||
              !amount ||
              !description ||
              Number(amount) > totalAmount ||
              (showReason && !reason)
            }
          >
            {isLoading ? "Submitting..." : "Submit Payment"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AddPaymentRecordDialogBox;
