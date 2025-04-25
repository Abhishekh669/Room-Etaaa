'use client';

import { RecentPaymentRecordType } from '@/features/schemas/dashboard/dashboard.type';
import { format } from 'date-fns';
import { AlertCircle, CheckCircle2, Clock } from 'lucide-react';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton'; // Adjust this path as needed

interface RecentPaymentsProps {
    payments: RecentPaymentRecordType[];
    isLoading: boolean;
}

export const RecentPayments = ({ payments, isLoading }: RecentPaymentsProps) => {
    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'PAID':
                return <CheckCircle2 className="w-4 h-4 text-green-500" />;
            case 'PENDING':
                return <Clock className="w-4 h-4 text-yellow-500" />;
            case 'OVERDUE':
                return <AlertCircle className="w-4 h-4 text-red-500" />;
            default:
                return null;
        }
    };

    const getStatusBadge = (status: string) => {
        let color = '';
        switch (status) {
            case 'PAID':
                color = 'bg-green-100 text-green-600';
                break;
            case 'PENDING':
                color = 'bg-yellow-100 text-yellow-600';
                break;
            case 'OVERDUE':
                color = 'bg-red-100 text-red-600';
                break;
            default:
                color = 'bg-gray-100 text-gray-600';
        }

        return (
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${color}`}>
                {status}
            </span>
        );
    };

    const formatCurrency = (amount: number) => `Rs ${amount.toLocaleString('en-NP', { minimumFractionDigits: 0 })}`;

    return (
        <div className=" overflow-x-auto">
            
            <table className="min-w-full text-sm text-left border border-gray-200 whitespace-nowrap">
                <thead className="bg-gray-100 text-gray-700">
                    <tr>
                        <th className="px-4 py-3">Client</th>
                        <th className="px-4 py-3">Room</th>
                        <th className="px-4 py-3">Total Amount</th>
                        <th className="px-4 py-3">Paid</th>
                        <th className="px-4 py-3">Due</th>
                        <th className="px-4 py-3">Status</th>
                        <th className="px-4 py-3">Date</th>
                        <th className="px-4 py-3">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {isLoading ? (
                        Array.from({ length: 6 }).map((_, idx) => (
                            <tr key={idx} className="border-t border-gray-100">
                                {Array.from({ length: 8 }).map((__, cellIdx) => (
                                    <td key={cellIdx} className="px-4 py-4">
                                        <Skeleton className="h-4 w-full max-w-[120px]" />
                                    </td>
                                ))}
                            </tr>
                        ))
                    ) : payments.length > 0 ? (
                        payments.map((payment) => {
                            const name = payment.client.name?.toUpperCase() || 'UNKNOWN CLIENT';
                            return (
                                <tr key={payment.id} className="border-t border-gray-100 hover:bg-red-50">
                                    <td className="px-4 py-3">
                                        <div className="flex items-center gap-2">
                                            <div className="w-9 h-9 rounded-full overflow-hidden bg-red-100 flex items-center justify-center">
                                                {payment.client.image ? (
                                                    <Image
                                                        src={payment.client.image}
                                                        alt={name}
                                                        width={36}
                                                        height={36}
                                                        className="object-cover rounded-full"
                                                    />
                                                ) : (
                                                    <span className="text-red-600 font-semibold text-sm">
                                                        {name.charAt(0)}
                                                    </span>
                                                )}
                                            </div>
                                            <span className="truncate max-w-[120px] block font-medium text-gray-800">
                                                {name}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3">Room {payment.room.roomNumber}</td>
                                    <td className="px-4 py-3 font-medium">{formatCurrency(payment.amountTotal)}</td>
                                    <td className="px-4 py-3 flex items-center gap-2">
                                        <span className="text-red-600 font-medium flex my-2 gap-2">
                                            <span>{getStatusIcon(payment.paymentStatus)}</span>
                                            <span>{formatCurrency(payment.payedAmount)}</span>
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-red-500">
                                        {payment.dueAmount > 0 ? formatCurrency(payment.dueAmount) : '-'}
                                    </td>
                                    <td className="px-4 py-3">{getStatusBadge(payment.paymentStatus)}</td>
                                    <td className="px-4 py-3 text-xs text-gray-500">
                                        {format(new Date(payment.createdAt), 'MMM dd, yyyy')}
                                    </td>
                                    <td className="px-4 py-3 text-gray-600 max-w-xs line-clamp-2">
                                        {payment.description || '-'}
                                    </td>
                                </tr>
                            );
                        })
                    ) : (
                        <tr>
                            <td colSpan={8} className="px-4 py-6 text-center text-gray-400">
                                No recent payments found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};
