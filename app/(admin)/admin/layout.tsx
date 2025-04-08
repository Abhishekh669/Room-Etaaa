import AdminAuthProtected from '@/components/shared/admin-auth-protected'
import React from 'react'

function AdminLayoutPage({children} : {children : React.ReactNode}) {
  return (
    <AdminAuthProtected>
        {children}
    </AdminAuthProtected>
  )
}

export default AdminLayoutPage
