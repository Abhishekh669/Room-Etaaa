"use client"
import { deleteRoom } from '@/actions/room/room';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
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
        <>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button variant="destructive">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your
                            account and remove your data from our servers.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={deleteRoomData}>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}

export default DeleteButton
