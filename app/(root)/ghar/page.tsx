"use client"
import { useGetUserSession } from '@/hooks/tanstack/query-hooks/user/use-get-user-session'
import React from 'react'

function MainPage() {
  const {data} = useGetUserSession()
  console.log("this ish te user : ",data)
  return (
    <div>
      
    </div>
  )
}

export default MainPage
