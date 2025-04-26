import DashBoardMainPage from '@/components/dashboard/dashboard-page'
import HeaderPage from '@/components/shared/Header'
import React from 'react'

function DashboardPage() {
  return (
    <div>
      <HeaderPage title1="Owner" title2="Dashboard" />
      <div className='py-1'  >
      <DashBoardMainPage />
      </div>
    </div>
  )
}

export default DashboardPage
