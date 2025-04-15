import React from 'react'
import { Button } from '../ui/button'
import { Trash2 } from 'lucide-react'

function DeleteButton({onDelete, title, deleting, loadingText} : {onDelete : () => void, title : string, deleting : boolean, loadingText : string}) {
  return (
    <Button  variant={"outline"} disabled={deleting} className='bg-red-500 text-white hover:bg-red-500/50 cursor-pointer hover:text-white'
    onClick={onDelete}
    >
    <Trash2 />
    <span>
     {deleting ? loadingText : `Delete ${title}`}
    </span>
  </Button>
  )
}

export default DeleteButton
