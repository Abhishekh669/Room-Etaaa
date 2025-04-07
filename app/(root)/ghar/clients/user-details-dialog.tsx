"use client"

import type { UserForOwner } from "@/utils/types/type"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Copy } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import toast from "react-hot-toast"

interface UserDetailsDialogProps {
  user: UserForOwner | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function UserDetailsDialog({ user, open, onOpenChange }: UserDetailsDialogProps) {

  // Get user initials for avatar fallback
  const getUserInitials = (name: string | null) => {
    if (!name) return "U"
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .substring(0, 2)
  }

  // Copy text to clipboard
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    toast.success("copied id successfully")
  }

  if (!user) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>User Details</DialogTitle>
          <DialogDescription>Detailed information about the selected user.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <Avatar className="h-16 w-16">
              <AvatarImage src={user.image || ""} alt={user.name || ""} />
              <AvatarFallback className="text-lg">{getUserInitials(user.name)}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-xl font-semibold">{user.name || "Unnamed User"}</h3>
              <p className="text-sm text-muted-foreground">{user.email || "No email provided"}</p>
            </div>
          </div>
          <div className="grid gap-3">
            <div className="flex items-center justify-between">
              <span className="font-medium">User ID:</span>
              <div className="flex items-center gap-2">
                <code className="rounded bg-muted px-2 py-1 text-sm">{user.id}</code>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6"
                  onClick={() => copyToClipboard(user.id, "User ID")}
                >
                  <Copy className="h-3 w-3" />
                  <span className="sr-only">Copy ID</span>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Phone:</span>
              <span>{user.phoneNumber || "Not provided"}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-medium">Room Numbers:</span>
              {user.roomNumbers && user.roomNumbers.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {user.roomNumbers.map((roomNumber) => (
                    <Badge key={roomNumber} variant="outline">
                      {roomNumber}
                    </Badge>
                  ))}
                </div>
              ) : (
                <span className="text-muted-foreground">No rooms assigned</span>
              )}
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

