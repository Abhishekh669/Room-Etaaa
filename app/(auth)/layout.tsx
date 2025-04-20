"use client"
import SpinningLoader from '@/components/shared/SpinningLoader';
import { useGetUserSession } from '@/features/hooks/tanstacks/query-hooks/users/use-get-session'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
function AuthenticationCheckLayout({children} : {children : React.ReactNode}) {
   const {data : session, isLoading} = useGetUserSession(); 
   const router = useRouter();
   useEffect(()=>{
        if(isLoading)return;
        if(session){
            if(session.role === "USER"){
                router.push("/posts")
                return;
            } else if(session.role === "ADMIN" || session.role === "OWNER"){
                router.push("/ghar/dashboard")
                return;
            } else{
                router.push("/login")
            }
        }
   },[isLoading, router, session])

   if(isLoading){
    return <SpinningLoader />
   }
  return (
    <div className='min-w-screen min-h-screen'>
      {children}
    </div>
  )
}

export default AuthenticationCheckLayout
