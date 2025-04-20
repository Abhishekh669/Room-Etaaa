import Link from 'next/link'
import React from 'react'

function MainPage() {
  return (
    <div className='flex min-h-screen items-center justify-center gap-3'>
      <Link href={"/login"} className='rounded-md border p-2'>login</Link>
      <Link href={"/ghar/dashboard"} className='rounded-md border p-2'>dashboard</Link>
    </div>
  )
}

export default MainPage
