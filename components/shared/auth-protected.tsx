"use client"
import React, { useEffect, useState } from 'react'
import {  useRouter } from 'next/navigation'
import { useGetUserSession } from '@/hooks/tanstack/query-hooks/user/use-get-user-session'
import { Loader2 } from 'lucide-react'
import { UserRole } from '@prisma/client'


export default function AuthProtectedLayout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  const { data: session, isLoading: sessionLoading, error } = useGetUserSession()
  const router = useRouter()
  


  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (sessionLoading || !mounted) return
    
    if (!session) {
      router.push('/login')
      return
    }
    
    if ( session.role === UserRole.USER) {
      router.push('/posts')
      return
    }
  }, [sessionLoading, session, router, mounted])



  if (!mounted || sessionLoading) {
    return (
      <div className='w-full min-h-screen flex items-center justify-center'>
        <Loader2 className='size-10 animate-spin' />
      </div>
    )
  }

  if (error) {
    router.push('/error')
    return null
  }

  if (!session || !session.isOnboarded || session.role === UserRole.USER) {
    return null
  }

 
  return (
   <>
    <div className='min-w-screen min-h-screen h-full w-full'>
        {children}
   </div>
   </>
  )
}