"use client"
import { useGetUserSession } from '@/hooks/tanstack/query-hooks/user/use-get-user-session'
import { Loader2 } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import OnboardingPage from './onboard-user'
import toast from 'react-hot-toast'
import { onboardUser } from '@/actions/user/user'
import { useRouter } from 'next/navigation'

function MainAuthProtectedLayout({ children }: { children: React.ReactNode }) {
  const { data: user, isLoading, refetch } = useGetUserSession()
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handleUpdate = async (phoneNumber: string, role: "USER" | "OWNER") => {
    if (!phoneNumber || !role) return
    
    const updateResult = await onboardUser(role, phoneNumber)
    if (updateResult.message && updateResult.success) {
      toast.success(updateResult.message)
      await refetch() 
    } else if (updateResult.error) {
      toast.error(updateResult.error)
    } else {
      toast.error("Something went wrong")
    }
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || isLoading) return
    
    if (!user) {
      router.push("/login")
      return
    }

    if (user.isAdmin) {
      setIsOpen(false)
      return
    }

    setIsOpen(!user.isOnboarded)
  }, [mounted, isLoading, user, router])

  if (!mounted) return null
  
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen min-w-screen">
        <Loader2 className="size-10 animate-spin" />
      </div>
    )
  }

  if (!user) {
    return null;
  }

  return (
    <>
      <OnboardingPage 
        isOpen={isOpen} 
        handleUpdate={handleUpdate}
      />
      
      {user.isVerified || user.isAdmin ? (
        <div className='w-full min-h-screen h-full'>
          {children}
        </div>
      ) : (
        <div className='w-full min-h-screen h-full flex items-center justify-center'>
          Waiting for verification
        </div>
      )}
    </>
  )
}

export default MainAuthProtectedLayout