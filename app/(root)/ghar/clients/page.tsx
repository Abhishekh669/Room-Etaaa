"use client"
import { useGetUsersForOwner } from '@/hooks/tanstack/query-hooks/clients/use-get-users-for-owner'
import React from 'react'

function ClientPage() {
  const {data : users, isLoading : usersLoading} = useGetUsersForOwner();
  console.log("this is  the users for the owner : ",users)
  return (
    <div>
      
    </div>
  )
}

export default ClientPage
