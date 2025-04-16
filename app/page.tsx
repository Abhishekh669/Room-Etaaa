import Link from 'next/link'
import React from 'react'

function MainPage() {
  return (
    <div>
      hello wrodl
      <Link href={"/login"}>login</Link>
      <Link href={"/ghar/dashboard"}>dashboard</Link>
    </div>
  )
}

export default MainPage
