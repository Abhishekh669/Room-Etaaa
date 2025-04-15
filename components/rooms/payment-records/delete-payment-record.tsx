import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { RoomPaymentRecord } from "@/generated/prisma";
import { Trash2 } from "lucide-react";

interface DeletePaymentRecordDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  payment: RoomPaymentRecord;
  isLoading: boolean;
}

function DeletePaymentRecordDialog({ open, onClose, onConfirm, payment, isLoading }: DeletePaymentRecordDialogProps) {
  return (
    <AlertDialog open={open} onOpenChange={onClose}>
      <AlertDialogContent className="bg-white dark:bg-gray-900">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-xl font-semibold text-gray-900 dark:text-white">
            Delete Payment Record
          </AlertDialogTitle>
          <div className="space-y-4">
            <AlertDialogDescription className="text-gray-600 dark:text-gray-400">
              Are you sure you want to delete this payment record?
            </AlertDialogDescription>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg space-y-2">
              <div className="flex items-center gap-2">
                <Trash2 className="h-5 w-5 text-red-500" />
                <span className="font-medium">Payment Details</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Amount</span>
                  <p className="font-semibold text-gray-900 dark:text-white">Rs {payment.payedAmount.toFixed(2)}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Date</span>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {new Date(payment.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Description</span>
                <p className="font-semibold text-gray-900 dark:text-white">{payment.description}</p>
              </div>
            </div>
            <p className="text-red-500 text-sm">
              This action cannot be undone. This will permanently delete the payment record.
            </p>
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="border-gray-300 dark:border-gray-700">Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={onConfirm}
            className="bg-red-500 text-white hover:bg-red-600 focus:ring-red-500"
            disabled={isLoading}
          >
            {isLoading ? "Deleting..." : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default DeletePaymentRecordDialog; 