"use client"
import { useGetUserSession } from '@/hooks/tanstack/query-hooks/user/use-get-user-session'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function ProtectPosts({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  const { data: session, isLoading: sessionLoading, error } = useGetUserSession()
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || sessionLoading) return
    
    if (!session) {
      router.push("/")
    }
  }, [session, sessionLoading, mounted, router])

  useEffect(() => {
    if (error) {
      console.error('Authentication error:', error)
    }
  }, [error])

  if (!mounted || sessionLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen min-w-screen">
        <Loader2 className="size-10 animate-spin" />
      </div>
    )
  }

  if (!session || !session) {
    return null
  }

  return (
    <div className="min-w-screen min-h-screen w-full h-full">
      {children}
    </div>
  )
}