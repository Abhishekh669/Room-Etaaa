import AuthenticationLayout from '@/components/shared/AuthenticationLayout'
import React from 'react'

function MainAppLayout({children} : {children : React.ReactNode}) {
  return (
    <AuthenticationLayout>
      {children}
    </AuthenticationLayout>
  )
}

export default MainAppLayout
