'use client';

import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface ChartData {
    month: string;
    totalRevenue: number;
    dueAmount: number;
    color: {
        totalRevenue: string;
        dueAmount: string;
    };
}

interface RevenueBarChartProps {
    data: ChartData[];
}

export const RevenueBarChart = ({ data }: RevenueBarChartProps) => {
    const chartData = {
        labels: data.map(item => item.month),
        datasets: [
            {
                label: 'Total Revenue',
                data: data.map(item => item.totalRevenue),
                backgroundColor: 'rgba(220, 38, 38, 0.8)', // red-600
                borderColor: 'rgba(220, 38, 38, 1)',
                borderWidth: 1,
                borderRadius: 4,
            },
            {
                label: 'Due Amount',
                data: data.map(item => item.dueAmount),
                backgroundColor: 'rgba(248, 113, 113, 0.8)', // red-400
                borderColor: 'rgba(248, 113, 113, 1)',
                borderWidth: 1,
                borderRadius: 4,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
                labels: {
                    color: '#374151', // gray-700
                    font: {
                        size: 12,
                    },
                },
            },
            title: {
                display: false,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Amount (Rs)',
                    color: '#6B7280', // gray-500
                    font: {
                        size: 13,
                        weight: 'bold' as const,
                    },
                },
                ticks: {
                    color: '#6B7280',
                },
                grid: {
                    color: '#E5E7EB', // gray-200
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Month',
                    color: '#6B7280',
                    font: {
                        size: 13,
                        weight: 'bold' as const,
                    },
                },
                ticks: {
                    color: '#6B7280',
                },
                grid: {
                    display: false,
                },
            },
        },
    };

    return (
        <div className="bg-white shadow rounded-lg h-full w-full flex flex-col">
            <div className="p-4 border-b">
                <h2 className="text-lg font-semibold text-gray-800 new-font">
                    Monthly <span className="text-red-600">Overview</span>
                </h2>
            </div>
            <div className="flex-1 p-4">
                <Bar data={chartData} options={options} />
            </div>
            <div className="p-2 border-t">
                <p className='text-sm text-muted-foreground text-center font-semibold'>
                    Monthly Revenue and Due Amount
                </p>
            </div>
        </div>
    );
};
