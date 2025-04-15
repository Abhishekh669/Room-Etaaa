"use client"
import React, { useState } from 'react'
import { useGetUsersForOwner } from '@/features/hooks/tanstacks/query-hooks/client-management/use-get-users-for-owner'
import SpinningLoader from '@/components/shared/SpinningLoader';
import { RoomNumberNId, UserForOwnerType } from '@/features/schemas/client-management/client-management.type';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import HeaderPage from '@/components/shared/Header';
import RouteBackButton from '@/components/shared/route-back-button';
import { UserTable } from '@/components/client-management/user-table';
import { DeleteUserDialog } from '@/components/client-management/delete-user-dialog-box';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useDeleteUserFromRoom } from '@/features/hooks/tanstacks/mutate-hooks/client-management/use-delete-user';
import { toast } from 'sonner';
import { UserDetailsDialog } from '@/components/client-management/user-details-dialog';


function ClientManagementPage() {
  const {data : users, isLoading: usersLoading, error : usersError } = useGetUsersForOwner();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState<UserForOwnerType | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const {mutate : deleteUserFromRoom, isPending } = useDeleteUserFromRoom();

  console.log("users", users)

  if(users && "error" in users){
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


    const handleViewDetails = (user: UserForOwnerType) => {
      setSelectedUser(user)
      setIsDetailsOpen(true)
    }
  
    const handleDeleteRequest = (user: UserForOwnerType) => {
      setSelectedUser(user)
      setIsDeleteDialogOpen(true)
    }

    const handleDeleteUser = (userId : string, data : RoomNumberNId[]) =>{
      deleteUserFromRoom({userId, data}, {
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
  





  if(usersLoading){
  return <SpinningLoader />
  }

  if(usersError){
    return <div className='flex justify-center items-center h-screen'>Error: {usersError.message}</div>
  }

  return (
    <div className=''>
      <HeaderPage title1="Client" title2="Management" />
      <div className="container mx-auto py-6 px-4">
      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle className='new-font my-1'>User <span className='text-red-600'>Management</span></CardTitle>
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
    </div>
  )
}

export default ClientManagementPage
