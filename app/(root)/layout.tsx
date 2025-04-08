import MainAuthProtectedLayout from '@/components/shared/main-auth-protected-layout'
import React from 'react'


function OnboardingWrapLayout({children} : {children : React.ReactNode}) {
  return (
    <>
    <MainAuthProtectedLayout>
      {children}
    </MainAuthProtectedLayout>
    </>
  )
}
export default OnboardingWrapLayout
















































// import MainAuthProtectedLayout from '@/components/shared/main-auth-protected-layout'
// import React from 'react'
// function OnboardingWrapLayout({children} : {children : React.ReactNode}) {
//     // const {data : session, isLoading : sessionLoading} = useGetUserSession();
//     // const [open, setOpen] = useState(false)
//     // const [submiting, setIsubmiting] = useState(true)

//     // useEffect(()=>{
//     //     if( sessionLoading)return;
//     //     if(session && session?.isOnboarded){
//     //       setOpen(true)
//     //     }
//     //     if(session && !session.isOnboarded && !session.isAdmin){
//     //         console.log("i am here")
//     //       setOpen(true);
//     //     }
//     //   },[ sessionLoading, session?.isOnboarded, session?.isAdmin])

//     //  const handleUpdate =  async ( phoneNumber : string, role : "USER" | "OWNER") => {
//     //     if(!phoneNumber || !role)return;
//     //     setIsubmiting(true)
//     //     console.log("payload :: ",role, phoneNumber)
//     //     const udpateUser = await onboardUser(role, phoneNumber);
//     //     if(udpateUser.message && udpateUser.success){
//     //       toast.success(udpateUser.message)
//     //     }else if(udpateUser.error){
//     //       toast.error(udpateUser.error)
//     //     }else{
//     //       toast.error("something went wrong")
//     //     }
//     //     setIsubmiting(false)
//     //   }


    
//   return (
//     <>
//     {/* <OnboardingPage isOpen={open}   handleUpdate={handleUpdate}/>
//     <div className='w-full h-full'>
//       {children}
//     </div> */}

//     <MainAuthProtectedLayout>
//       {children}
//     </MainAuthProtectedLayout>
//     </>
//   )
// }
// export default OnboardingWrapLayout

