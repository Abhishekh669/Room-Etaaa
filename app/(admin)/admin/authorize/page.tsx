"use client"
import { DashboardHeader } from '@/components/admin/authorize/authorize-header'
import { VerificationRequests } from '@/components/admin/authorize/verification-page'
import { useGetAllUserRequest } from '@/hooks/tanstack/query-hooks/admin/use-get-all-user-request'
import React from 'react'

function AuthorizePage() {
  const {data : users, isLoading} = useGetAllUserRequest()
  console.log("this is hte users : ",users)
  return (
    <div className="flex min-h-screen flex-col">
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex-1 space-y-4">
    <DashboardHeader heading="Verification Requests" text="Review and manage user verification requests." />
        <VerificationRequests />
        </div>
    </div>
  </div>
  )
}

export default AuthorizePage
