import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'
import React from 'react'
import CountUp from 'react-countup'

interface RoomStatsCardType {
  title: string
  number: number
  iconName: LucideIcon
  money?: boolean
  rate?: boolean
  growthRate?: number
  secondaryText?: string
  iconBgColor?: string
  iconColor?: string
}

function DashboardCard({ 
  title, 
  number, 
  iconName: Icon, 
  money, 
  rate, 
  growthRate,
  secondaryText,
  iconBgColor = 'bg-blue-50',
  iconColor = 'text-red-600'
}: RoomStatsCardType) {
  return (
    <div className='bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-all duration-300 group'>
      <div className='flex justify-between items-start gap-4'>
        <div className='flex-1'>
          <h3 className='text-gray-500 font-medium text-sm uppercase tracking-wider mb-1'>
            {title}
          </h3>
          
          <div className='text-2xl font-bold text-gray-900 mb-2'>
            <CountUp 
              end={number} 
              duration={1.5} 
              separator=","
              decimals={money ? 2 : 0}
              prefix={money ? "Rs. " : ""}
              suffix={rate ? "%" : ""}
              className='font-semibold'
            />
          </div>
          
          {growthRate !== undefined && (
            <div className={cn(
              "text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-full",
              growthRate > 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
            )}>
              {growthRate > 0 ? '↑' : '↓'} {Math.abs(growthRate)}% from last month
            </div>
          )}
          
          {secondaryText && (
            <p className='text-sm text-gray-500 mt-1'>{secondaryText}</p>
          )}
        </div>
        
        <div className={cn(
          'p-3 rounded-lg flex-shrink-0',
          iconBgColor,
          'group-hover:scale-105 transition-transform duration-300'
        )}>
          <Icon className={cn('w-5 h-5', iconColor)} />
        </div>
      </div>
    </div>
  )
}

export default DashboardCard