"use client"

import { useState } from "react"
import type { UserForOwner } from "@/utils/types/type"
import { Button } from "@/components/ui/button"
import { Trash } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

interface DeleteUserDialogProps {
  user: UserForOwner | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onConfirm: (userId: string, roomNumbers: number[]) => void
}

export function DeleteUserDialog({ user, open, onOpenChange, onConfirm }: DeleteUserDialogProps) {
  const [selectedRooms, setSelectedRooms] = useState<number[]>([])
  const [deleteEntireUser, setDeleteEntireUser] = useState(false)

  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      setSelectedRooms([])
      setDeleteEntireUser(false)
    } else if (user?.roomNumbers?.length === 0) {
      setDeleteEntireUser(true)
    }
    onOpenChange(newOpen)
  }

  const toggleRoom = (roomNumber: number) => {
    setSelectedRooms((prev) =>
      prev.includes(roomNumber) ? prev.filter((room) => room !== roomNumber) : [...prev, roomNumber],
    )
  }

  const handleConfirm = () => {
    if (!user) return

    if (deleteEntireUser) {
      onConfirm(user.id, [])
    } else {
      onConfirm(user.id, selectedRooms)
    }
  }

  const toggleAllRooms = () => {
    if (!user?.roomNumbers) return

    if (selectedRooms.length === user.roomNumbers.length) {
      setSelectedRooms([])
    } else {
      setSelectedRooms([...user.roomNumbers])
    }
  }

  if (!user) return null

  const hasRooms = user.roomNumbers && user.roomNumbers.length > 0

  return (
    <AlertDialog open={open} onOpenChange={handleOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Remove User</AlertDialogTitle>
          <AlertDialogDescription>
            {hasRooms
              ? "Select which rooms to remove this user from, or delete the entire user account."
              : "This user is not assigned to any rooms. You can only delete the entire user account."}
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="py-4">
          {hasRooms && (
            <>
              {!deleteEntireUser && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">Select rooms to remove user from:</h3>
                    <Button variant="outline" size="sm" onClick={toggleAllRooms} className="h-7 text-xs">
                      {selectedRooms.length === (user.roomNumbers && user.roomNumbers.length) ? "Deselect All" : "Select All"}
                    </Button>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-2">
                    {user.roomNumbers &&  user.roomNumbers.map((roomNumber) => (
                      <div key={roomNumber} className="flex items-center space-x-2">
                        <Checkbox
                          id={`room-${roomNumber}`}
                          checked={selectedRooms.includes(roomNumber)}
                          onCheckedChange={() => toggleRoom(roomNumber)}
                          disabled={deleteEntireUser}
                        />
                        <label
                          htmlFor={`room-${roomNumber}`}
                          className="flex items-center space-x-2 text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          <Badge variant="outline">Room {roomNumber}</Badge>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

          {!hasRooms && (
            <div className="flex items-center p-3 rounded-md bg-muted">
              <p className="text-sm text-muted-foreground">This user is not assigned to any rooms.</p>
            </div>
          )}
        </div>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            onClick={handleConfirm}
            disabled={!deleteEntireUser && selectedRooms.length === 0}
          >
            <Trash className="mr-2 h-4 w-4" />
            {deleteEntireUser
              ? "Delete User"
              : `Remove from ${selectedRooms.length} room${selectedRooms.length !== 1 ? "s" : ""}`}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

