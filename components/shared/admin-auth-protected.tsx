"use client"
import { useGetUserSession } from '@/hooks/tanstack/query-hooks/user/use-get-user-session'
import { UserRole } from '@prisma/client';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function AdminAuthProtected({children} : {children : React.ReactNode}) {
    const {data : session, isLoading} = useGetUserSession();
    const [mounted, setMounted] = useState(false)
    const router = useRouter();
    useEffect(()=>{
        setMounted(true)
    },[])

    useEffect(()=>{
        if(isLoading || !mounted)return;
        if(!session){
            router.push("/")
            return;
        }
        if(session && (!session.isAdmin || session.role !== UserRole.ADMIN)){
            router.push("/")
        }
    },[isLoading, mounted, router, session])
    if(!mounted){
        return null;
    }
    if(!mounted || isLoading){
        return <div className='min-w-screen min-h-screen flex justify-center items-center'><Loader2 className='size-10 animate-spin' /></div>
    }

    if(!session  || !session.isAdmin){
        return null;
    }
  return (
    <div className='min-w-screen min-h-screen '>
      {children}
    </div>
  )
}

export default AdminAuthProtected
