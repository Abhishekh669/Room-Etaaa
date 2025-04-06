"use client"
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { Edit } from 'lucide-react'
import { useRouter } from 'next/navigation'

function EditButton({ id }: { id: string }) {
    const router = useRouter()
    return (
        <Link href={`/ghar/rooms/${id}/edit-room`}
            onMouseEnter={
                () => {
                    router.prefetch(`/ghar/rooms/${id}/edit-room`)
                }
            }
        >
            <Button variant="outline" >
                <Edit className="mr-2 h-4 w-4" />
                Edit Room
            </Button>
        </Link>
    )
}

export default EditButton
