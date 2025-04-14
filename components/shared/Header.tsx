import { cn } from '@/lib/utils'
import React from 'react'
import { SidebarTrigger } from '../ui/sidebar'
import { Separator } from '../ui/separator'

function HeaderPage({ title1, title2 }: { title1: string, title2 ?: string }) {
  return (
    <header className={cn(
      "flex items-center h-14 px-4 border-b border-gray-200 bg-white",
      "w-full sticky top-0 z-40"
    )}>
      <div className="flex items-center gap-3">
        <SidebarTrigger className="text-gray-600 hover:text-gray-900" />
        <Separator 
          orientation="vertical" 
          className="h-6 bg-black " 
        />
        <div className="flex items-center mochiy-pop-one-regular">
          <span className="text-lg  text-gray-800 ">
            {title1}&nbsp;
          </span>
          {title2 && (
            <>
              <span className="text-lg  text-red-600">
                {title2}
              </span>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

export default HeaderPage
