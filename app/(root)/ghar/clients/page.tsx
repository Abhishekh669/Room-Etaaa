"use client"

import { useState } from "react"
import { useGetUsersForOwner } from "@/hooks/tanstack/query-hooks/clients/use-get-users-for-owner"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import type { UserForOwner } from "@/utils/types/type"
import toast from "react-hot-toast"
import { UserTable } from "./user-table"
import { UserDetailsDialog } from "./user-details-dialog"
import { DeleteUserDialog } from "./delete-user-dialog"
import { useDeleteUserFromRoom } from "@/hooks/tanstack/mutate-hooks/clients/use-delete-user"

export default function ClientPage() {
  const { data: users, isLoading: usersLoading } = useGetUsersForOwner()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedUser, setSelectedUser] = useState<UserForOwner | null>(null)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const {mutate : deleteUserFromRoom, isPending } = useDeleteUserFromRoom();

  // Handle errors
  if (users && "error" in users) {
    return (
      <div className="container mx-auto py-6">
        <Card>
          <CardHeader>
            <CardTitle>Error</CardTitle>
            <CardDescription>There was an error loading the users.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-destructive">{(users as any).error}</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  const filteredUsers =
    users?.filter(
      (user) =>
        (user.name && user.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (user.email && user.email.toLowerCase().includes(searchQuery.toLowerCase())),
    ) || []

  const handleDeleteUser = (userId: string, roomNumbers: number[]) => {
    if(isPending)return;
    const user = users?.find((u) => u.id === userId)
    if (!user) return

    deleteUserFromRoom({userId,roomNumbers},{
      onSuccess : (res) =>{
        if(res.message && res.success){
          toast.success(res.message)
          setIsDeleteDialogOpen(false)
        }else if(res.error){
          toast.error(res.error as string)
        }
      },
      
        onError : () =>{
          toast.error("something wnet wrong")
        }
      
    })

    
  }

  const handleViewDetails = (user: UserForOwner) => {
    setSelectedUser(user)
    setIsDetailsOpen(true)
  }

  const handleDeleteRequest = (user: UserForOwner) => {
    setSelectedUser(user)
    setIsDeleteDialogOpen(true)
  }

  return (
    <div className="container mx-auto py-6">
      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>User Management</CardTitle>
              <CardDescription>Manage your users, view details, and remove accounts.</CardDescription>
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search users..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {usersLoading ? (
            <div className="flex justify-center py-8">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
            </div>
          ) : (
            <UserTable users={filteredUsers} onViewDetails={handleViewDetails} onDeleteUser={handleDeleteRequest} />
          )}
        </CardContent>
      </Card>

      <UserDetailsDialog user={selectedUser} open={isDetailsOpen} onOpenChange={setIsDetailsOpen} />

      <DeleteUserDialog
        user={selectedUser}
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
        onConfirm={handleDeleteUser}
      />
    </div>
  )
}

