import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RoomPaymentRecord } from "@/generated/prisma";
import { payDueAmount } from "@/features/actions/rooms/rooms";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import { AlertCircle, CreditCard } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface PayDueDialogProps {
    payment: RoomPaymentRecord;
    isOpen: boolean;
    onClose: () => void;
}

export const PayDueDialog = ({ payment, isOpen, onClose }: PayDueDialogProps) => {
    const [amount, setAmount] = useState(payment.dueAmount.toString());
    const [reason, setReason] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const queryClient = useQueryClient();

    const validateAmount = (value: string): boolean => {
        const numValue = parseFloat(value);
        if (isNaN(numValue)) {
            setError("Please enter a valid number");
            return false;
        }
        if (numValue <= 0) {
            setError("Amount must be greater than 0");
            return false;
        }
        if (numValue > payment.dueAmount) {
            setError(`Amount cannot exceed Rs ${payment.dueAmount.toFixed(2)}`);
            return false;
        }
        setError(null);
        return true;
    };

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setAmount(value);
        validateAmount(value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        
        if (!validateAmount(amount)) {
            return;
        }

        setIsLoading(true);

        try {
            const payedAmount = parseFloat(amount);
            const result = await payDueAmount({
                paymentId: payment.id,
                payedAmount,
                description: `Payment for due amount of Rs ${payment.dueAmount}`,
                payedBy: payment.payedBy,
                reason: reason || undefined
            });

            if (result.success) {
                toast.success("Payment processed successfully");
                queryClient.invalidateQueries({ queryKey: ['get-room-payment-records'] });
                onClose();
            } else {
                setError(result.error || "Failed to process payment");
                toast.error(result.error || "Failed to process payment");
            }
        } catch (error) {
            setError("An unexpected error occurred");
            toast.error("Something went wrong");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px] bg-white dark:bg-gray-900">
                <DialogHeader>
                    <DialogTitle className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                        <CreditCard className="h-5 w-5 text-red-500" />
                        Pay Due Amount
                    </DialogTitle>
                    <DialogDescription className="text-gray-500 dark:text-gray-400">
                        Enter the amount you want to pay for this due payment.
                    </DialogDescription>
                </DialogHeader>

                {error && (
                    <Alert variant="destructive" className="bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
                        <AlertCircle className="h-4 w-4 text-red-500" />
                        <AlertDescription className="text-red-700 dark:text-red-300">
                            {error}
                        </AlertDescription>
                    </Alert>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="dueAmount" className="text-gray-700 dark:text-gray-300">
                            Due Amount
                        </Label>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">Rs</span>
                            <Input
                                id="dueAmount"
                                type="number"
                                value={amount}
                                onChange={handleAmountChange}
                                className="pl-8 border-gray-300 dark:border-gray-700 focus:border-red-500 dark:focus:border-red-500"
                                min="1"
                                max={payment.dueAmount}
                                step="0.01"
                                required
                            />
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Maximum amount: Rs {payment.dueAmount.toFixed(2)}
                        </p>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="reason" className="text-gray-700 dark:text-gray-300">
                            Reason (Optional)
                        </Label>
                        <Textarea
                            id="reason"
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                            placeholder="Enter reason for partial payment"
                            className="resize-none border-gray-300 dark:border-gray-700 focus:border-red-500 dark:focus:border-red-500"
                        />
                    </div>

                    <DialogFooter className="gap-2 sm:gap-0">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={onClose}
                            disabled={isLoading}
                            className="border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            Cancel
                        </Button>
                        <Button 
                            type="submit" 
                            disabled={isLoading}
                            className="bg-red-500 hover:bg-red-600 text-white"
                        >
                            {isLoading ? (
                                <div className="flex items-center gap-2">
                                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                                    Processing...
                                </div>
                            ) : (
                                "Pay Now"
                            )}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}; 