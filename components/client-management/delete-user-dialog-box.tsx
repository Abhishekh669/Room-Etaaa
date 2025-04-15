"use client"

import { useState } from "react"
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
import { RoomNumberNId, UserForOwnerType } from "@/features/schemas/client-management/client-management.type"  
interface DeleteUserDialogProps {
  user: UserForOwnerType | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onConfirm: (userId: string, data : RoomNumberNId[]) => void
}

export function DeleteUserDialog({ user, open, onOpenChange, onConfirm }: DeleteUserDialogProps) {
  const [selectedRooms, setSelectedRooms] = useState<RoomNumberNId[]>([])
  const [deleteEntireUser, setDeleteEntireUser] = useState(false)

  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      setSelectedRooms([])
      setDeleteEntireUser(false)
    } else if (user?.rooms?.length === 0) {
      setDeleteEntireUser(true)
    }
    onOpenChange(newOpen)
  }

  const toggleRoom = (data: RoomNumberNId) => {
    setSelectedRooms((prev) =>
      prev.some(room => room.roomNumber === data.roomNumber) 
        ? prev.filter((room) => room.roomNumber !== data.roomNumber) 
        : [...prev, data]
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
    if (!user?.rooms) return

    if (selectedRooms.length === user.rooms.length) {
      setSelectedRooms([])
    } else {
      setSelectedRooms([...user.rooms])
    }
  }

  if (!user) return null

  const hasRooms = user.rooms && user.rooms.length > 0

  return (
    <AlertDialog open={open} onOpenChange={handleOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="new-font">Remove <span className="text-red-600">User</span></AlertDialogTitle>
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
                      {selectedRooms.length === (user.rooms && user.rooms.length) ? "Deselect All" : "Select All"}
                    </Button>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-2">
                    {user.rooms && user.rooms.map((data) => (
                      <div key={data.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={`room-${data.id}`}
                          checked={selectedRooms.some(room => room.roomNumber === data.roomNumber)}
                          onCheckedChange={() => toggleRoom(data)}
                          disabled={deleteEntireUser}
                        />
                        <label
                          htmlFor={`room-${data.id}`}
                          className="flex items-center space-x-2 text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          <Badge variant="outline">Room {data.roomNumber}</Badge>
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

