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
        <div className="h-full flex flex-col">
            <div className="flex-1 overflow-x-auto -mx-4">
                <div className="min-w-[1000px] px-4">
                    <table className="w-full text-sm text-left border border-gray-200">
                        <thead className="bg-gray-100 text-gray-700 sticky top-0">
                            <tr>
                                <th className="px-4 py-3 w-[180px]">Client</th>
                                <th className="px-4 py-3 w-[100px]">Room</th>
                                <th className="px-4 py-3 w-[120px]">Total</th>
                                <th className="px-4 py-3 w-[120px]">Paid</th>
                                <th className="px-4 py-3 w-[100px]">Due</th>
                                <th className="px-4 py-3 w-[100px]">Status</th>
                                <th className="px-4 py-3 w-[120px]">Date</th>
                                <th className="px-4 py-3 w-[160px]">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {isLoading ? (
                                Array.from({ length: 6 }).map((_, idx) => (
                                    <tr key={idx} className="border-t border-gray-100">
                                        {Array.from({ length: 8 }).map((__, cellIdx) => (
                                            <td key={cellIdx} className="px-4 py-4">
                                                <Skeleton className="h-4 w-full" />
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
                                                    <div className="w-8 h-8 rounded-full overflow-hidden bg-red-100 flex items-center justify-center shrink-0">
                                                        {payment.client.image ? (
                                                            <Image
                                                                src={payment.client.image}
                                                                alt={name}
                                                                width={32}
                                                                height={32}
                                                                className="object-cover rounded-full"
                                                            />
                                                        ) : (
                                                            <span className="text-red-600 font-semibold text-sm">
                                                                {name.charAt(0)}
                                                            </span>
                                                        )}
                                                    </div>
                                                    <span className="truncate font-medium text-gray-800">
                                                        {name}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3">Room {payment.room.roomNumber}</td>
                                            <td className="px-4 py-3 font-medium">{formatCurrency(payment.amountTotal)}</td>
                                            <td className="px-4 py-3">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-red-600 font-medium">
                                                        {getStatusIcon(payment.paymentStatus)}
                                                        {formatCurrency(payment.payedAmount)}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 text-red-500">
                                                {payment.dueAmount > 0 ? formatCurrency(payment.dueAmount) : '-'}
                                            </td>
                                            <td className="px-4 py-3">{getStatusBadge(payment.paymentStatus)}</td>
                                            <td className="px-4 py-3 text-xs text-gray-500">
                                                {format(new Date(payment.createdAt), 'MMM dd, yyyy')}
                                            </td>
                                            <td className="px-4 py-3 text-gray-600 line-clamp-2">
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
            </div>
        </div>
    );
};
