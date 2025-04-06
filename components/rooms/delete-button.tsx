"use client"
import { deleteRoom } from '@/actions/room/room';
import { useRouter } from 'next/navigation';
import React from 'react'
import toast from 'react-hot-toast';
import { Button } from '../ui/button';
import { Trash2 } from 'lucide-react';

function DeleteButton({ id }: { id: string }) {
    const router = useRouter();
    const deleteRoomData = async () => {
        if (!id) return;
        const deleteResult = await deleteRoom(id)
        if (deleteResult.message && deleteResult.success) {
            toast.success(deleteResult.message)
            router.replace('/ghar/rooms')

        } else if (deleteResult.error) {
            toast.error(deleteResult.error)
        }
    }
    return (
        <Button variant="destructive"
            onClick={deleteRoomData}
        >
            <Trash2 className="mr-2 h-4 w-4" />
            Delete
        </Button>
    )
}

export default DeleteButton
