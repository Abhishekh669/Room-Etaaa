"use client"
import { dashboardChartData, getDashboardData } from '@/features/actions/dashboard/dashboard'
import { useQuery } from '@tanstack/react-query'
import { Bed, Building, Users, Wallet, AlertCircle, Percent, Wrench, Home } from 'lucide-react'
import React from 'react'
import DashboardCard from './dashboard-card'
import { RevenueBarChart } from './RevenueBarChart'
import { RecentPayments } from './RecentPayments'

function DashBoardMainPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['dashboard-data'],
    queryFn: () => getDashboardData()
  })

  const { data: chartData, isLoading: chartLoading, error: chartError } = useQuery({
    queryKey: ['dashboard-chart-data'],
    queryFn: () => dashboardChartData()
  })
  console.log("this is data", data)

  return (
    <div className='space-y-4 p-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        <DashboardCard
          title="Total Rooms"
          number={data?.totalRooms || 0}
          iconName={Building}
          growthRate={data?.growthRate?.rooms}
        />
        <DashboardCard
          title="Total Clients"
          number={data?.totalClients || 0}
          iconName={Users}
          growthRate={data?.growthRate?.clients}
        />
        <DashboardCard
          title="Vacant Rooms"
          number={data?.vacantRooms || 0}
          iconName={Home}  // or Bed
        />
        <DashboardCard
          title="Occupied Rooms"
          number={data?.occupiedRooms || 0}
          iconName={Bed}
        />
        <DashboardCard
          title="Maintenance Rooms"
          number={data?.maintenanceRooms || 0}
          iconName={Wrench}
        />
        <DashboardCard
          title="Total Revenue"
          number={data?.totalRevenue || 0}
          iconName={Wallet}
          money={true}
          growthRate={data?.growthRate?.revenue}
        />
        <DashboardCard
          title="Total Due Amount"
          money={true}
          number={data?.totalDueAmount || 0}
          iconName={AlertCircle}
        />
        <DashboardCard
          title="Occupancy Rate"
          number={data?.occupancyRate || 0}
          iconName={Percent}
          rate={true}
          growthRate={data?.growthRate?.revenue}
        />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        <div className='h-[500px]'>
          <RevenueBarChart data={chartData?.data || []} />
        </div>
        <div className='h-[500px] bg-white rounded-lg shadow p-4 border border-gray-100'>
          <h2 className="text-lg font-semibold text-gray-800 new-font mb-4">
            Recent <span className="text-red-600">Payments</span>
          </h2>
          <RecentPayments payments={data?.recentPaymentRecords || []} isLoading={isLoading} />
        </div>
      </div>
    </div>
  )
}

export default DashBoardMainPage