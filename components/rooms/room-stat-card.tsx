import { LucideIcon } from 'lucide-react'
import React from 'react'
import CountUp from 'react-countup'

interface RoomStatsCardType {
  title: string
  number: number
  iconName: LucideIcon
}

function RoomStatCard({ title, number, iconName: Icon }: RoomStatsCardType) {
  return (
    <div className='bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300'>
      <div className='flex justify-between items-start mb-4'>
        <h3 className='text-gray-500 font-medium text-sm uppercase tracking-wider'>
          {title}
        </h3>
        <div className='p-2 bg-red-50 rounded-lg'>
          <Icon className='w-5 h-5 text-red-600' />
        </div>
      </div>
      <div className='text-3xl font-bold text-gray-900'>
        <CountUp 
          end={number} 
          duration={1} 
          separator=","
          className='font-semibold'
          prefix={title === "Total Revenue" ? "Rs " : ""}
        />
      </div>
    </div>
  )
}

export default RoomStatCard