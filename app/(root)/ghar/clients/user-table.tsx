"use client"

import { useState } from "react"
import { Copy, MoreHorizontal, ArrowUpDown, User } from "lucide-react"
import type { UserForOwner } from "@/utils/types/type"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import toast from "react-hot-toast"

interface UserTableProps {
  users: UserForOwner[]
  onViewDetails: (user: UserForOwner) => void
  onDeleteUser: (user: UserForOwner) => void
}

type SortField = "name" | "email"
type SortDirection = "asc" | "desc"

export function UserTable({ users, onViewDetails, onDeleteUser }: UserTableProps) {
  const [sortField, setSortField] = useState<SortField>("name")
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc")

  const getUserInitials = (name: string | null) => {
    if (!name) return "U"
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .substring(0, 2)
  }

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("asc")
    }
  }

  const sortedUsers = [...users].sort((a, b) => {
    const aValue = a[sortField] || ""
    const bValue = b[sortField] || ""

    if (sortDirection === "asc") {
      return aValue < bValue ? -1 : aValue > bValue ? 1 : 0
    } else {
      return aValue > bValue ? -1 : aValue < bValue ? 1 : 0
    }
  })

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast.success("copied id successfully")
  }

  if (users.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <User className="h-12 w-12 text-muted-foreground/60" />
        <h3 className="mt-4 text-lg font-semibold">No users found</h3>
        <p className="text-muted-foreground">There are no users to display at the moment.</p>
      </div>
    )
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead>
              <Button
                variant="ghost"
                onClick={() => handleSort("email")}
                className="flex items-center gap-1 p-0 font-medium"
              >
                Email
                <ArrowUpDown className="h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Room Numbers</TableHead>
            <TableHead className="w-[80px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={user.image || ""} alt={user.name || "user"} />
                    <AvatarFallback>{getUserInitials(user.name)}</AvatarFallback>
                  </Avatar>
                  <div className="font-medium">{user.name || "Unnamed User"}</div>
                </div>
              </TableCell>
              <TableCell className="max-w-[150px] truncate ">{user.email || "—"}</TableCell>
              <TableCell>{user.phoneNumber || "—"}</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {user.roomNumbers && user.roomNumbers.length > 0
                    ? user.roomNumbers.map((roomNumber) => (
                        <Badge key={roomNumber} variant="outline">
                          {roomNumber}
                        </Badge>
                      ))
                    : "—"}
                </div>
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => onViewDetails(user)}>View details</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => copyToClipboard(user.id)}>
                      <Copy className="mr-2 h-4 w-4" />
                      Copy ID
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="text-destructive focus:text-destructive"
                      onClick={() => onDeleteUser(user)}
                    >
                      {user.roomNumbers && user.roomNumbers.length > 0 ? "Remove from rooms" : "Delete user"}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

