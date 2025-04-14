import { Loader2 } from 'lucide-react'
import React from 'react'

function SpinningLoader() {
  return (
    <div className="flex justify-center items-center w-full h-full">
        <Loader2 className="size-10 animate-spin text-gray-300" />
      </div>
  )
}

export default SpinningLoader
