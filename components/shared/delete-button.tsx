import React from 'react'
import { Button } from '../ui/button'
import { Trash2 } from 'lucide-react'

function DeleteButton({onDelete, title,} : {onDelete : () => void, title : string}) {
  return (
    <Button  variant={"outline"} className='bg-red-500 text-white hover:bg-red-500/50 cursor-pointer hover:text-white'>
    <Trash2 />
    <span>
     Delete {title}
    </span>
</Button>
  )
}

export default DeleteButton
