import ProtectPosts from '@/components/shared/protect-post'
import React from 'react'
function PostLayout({children} : {children : React.ReactNode}) {
  return (
    <ProtectPosts>
        {children}
    </ProtectPosts>
  )
}

export default PostLayout
