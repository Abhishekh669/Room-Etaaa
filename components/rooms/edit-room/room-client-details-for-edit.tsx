"use client"

import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { Plus, Trash2, Users, CalendarIcon, Search, Loader2 } from "lucide-react"
import type { UseFieldArrayReturn, UseFormReturn } from "react-hook-form"
import type { EditRoomType } from "@/features/schemas/room/room.schema"
import { useRef, useState, useEffect } from "react"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { toast } from "sonner"
import { getUserFromQuery } from "@/features/actions/users/user"
import { UserType } from "@/features/schemas/room/room.type"

interface RoomClientDetailsForEditProps {
  form: UseFormReturn<EditRoomType>
  clientsFieldArray: UseFieldArrayReturn<EditRoomType, "clients", "id">
  onAddClient: () => void
  roomCapacity: number
  hasClient: boolean
}

function RoomClientDetailsForEdit({
  form,
  clientsFieldArray,
  onAddClient,
  roomCapacity,
}: RoomClientDetailsForEditProps) {
  const { fields, remove, append } = clientsFieldArray
  const currentClientCount = fields.length
  const isClientLimitReached = currentClientCount >= roomCapacity

  const [searchQuery, setSearchQuery] = useState("")
  const [users, setUsers] = useState<UserType[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [selectedUsers, setSelectedUsers] = useState<Set<string>>(new Set())
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [pageSize] = useState(5)

  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Get current client IDs to prevent duplicates
  const currentClientIds = new Set(fields.map((client) => client.id).filter(Boolean))

  const handleSearch = async (query: string, pageNum = 1) => {
    setSearchQuery(query)

    if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current)

    searchTimeoutRef.current = setTimeout(async () => {
      if (!query.trim()) {
        setUsers([])
        setIsLoading(false)
        return
      }

      setIsLoading(true)

      try {
        const response = await getUserFromQuery({
          query,
          page: pageNum,
          pageSize,
        })

        if (!response.success && response.error) {
          toast.error(response.error)
          setUsers([])
        }
        if (response.success && response.data) {
          const data = response.data
          // Filter out users that are already added or selected
          const availableUsers = data.users.filter((user) => {
            const isAdded = fields.some(client => client.id === user.id)
            const isSelected = selectedUsers.has(user.id)
            return !isAdded && !isSelected
          })
          setUsers(availableUsers)
          setTotalPages(data.totalPages)
          setPage(data.page)
        }
      } catch (error) {
        console.error("Error fetching users:", error)
        setUsers([])
      } finally {
        setIsLoading(false)
      }
    }, 400)
  }

  const handleSelectUser = (user: UserType) => {
    if (currentClientCount >= roomCapacity) {
      toast.error("Maximum client limit reached")
      return
    }

    // Check if user is already added
    const isUserAlreadyAdded = fields.some(client => client.id === user.id)
    if (isUserAlreadyAdded) {
      toast.error("This client is already added to the room")
      return
    }

    // Check if user is in selectedUsers set
    if (selectedUsers.has(user.id)) {
      toast.error("This client is already selected")
      return
    }

    append({
      id: user.id,
      name: user.name || "",
      email: user.email || "",
      phoneNumber: user.phoneNumber || "",
      image: user.image || "",
    })

    // Update selected users set
    setSelectedUsers((prev) => new Set([...prev, user.id]))

    // Remove the selected user from the current search results
    setUsers(users.filter(u => u.id !== user.id))
  }

  const handlePageChange = (newPage: number) => {
    setPage(newPage)
    handleSearch(searchQuery, newPage)
  }

  useEffect(() => {
    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current)
      }
    }
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Client Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex justify-between items-center">
          <FormLabel>Client Capacity</FormLabel>
          <span className={cn("text-sm font-medium", isClientLimitReached ? "text-red-500" : "text-muted-foreground")}>
            {currentClientCount} / {roomCapacity} clients
          </span>
        </div>

        <FormField
          control={form.control}
          name="clientInitationDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Client Initiation Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
                    >
                      {field.value ? format(new Date(field.value), "PPP") : <span>Pick a date</span>}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value ? new Date(field.value) : undefined}
                    onSelect={field.onChange}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <Separator />

        {/* Client Search */}
        <div className="space-y-4">
          <div className="space-y-2">
            <FormLabel>Search Clients</FormLabel>
            <div className="relative">
              <Input
                placeholder="Search by name, email or phone"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>

          {/* Search Results */}
          {isLoading ? (
            <div className="flex justify-center py-4">
              <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
            </div>
          ) : users.length > 0 ? (
            <div className="space-y-2">
              <div className="max-h-48 overflow-y-auto rounded-md border">
                {users.map((user) => (
                  <div
                    key={user.id}
                    className="flex items-center justify-between p-2 hover:bg-muted cursor-pointer"
                    onClick={() => handleSelectUser(user)}
                  >
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user.image || ""} alt={user.name || ""} />
                        <AvatarFallback>{user.name?.charAt(0).toUpperCase() || "?"}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{user.name}</p>
                        <p className="text-xs text-muted-foreground">{user.email}</p>
                      </div>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleSelectUser(user)
                      }}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={() => handlePageChange(page - 1)}
                        className={cn(page === 1 ? "pointer-events-none opacity-50" : "cursor-pointer")}
                      />
                    </PaginationItem>

                    {Array.from({ length: totalPages }, (_, i) => i + 1)
                      .filter((p) => p === 1 || p === totalPages || Math.abs(p - page) <= 1)
                      .map((p, i, arr) => {
                        if (i > 0 && p - arr[i - 1] > 1) {
                          return (
                            <PaginationItem key={`ellipsis-${p}`}>
                              <PaginationEllipsis />
                            </PaginationItem>
                          )
                        }

                        return (
                          <PaginationItem key={p}>
                            <PaginationLink isActive={page === p} onClick={() => handlePageChange(p)}>
                              {p}
                            </PaginationLink>
                          </PaginationItem>
                        )
                      })}

                    <PaginationItem>
                      <PaginationNext
                        onClick={() => handlePageChange(page + 1)}
                        className={cn(page === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer")}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              )}
            </div>
          ) : searchQuery ? (
            <p className="text-sm text-muted-foreground text-center py-2">No users found</p>
          ) : null}
        </div>

        <Separator />

        {/* Client List */}
        <div className="space-y-4">
          <FormLabel>Added Clients (<span className={cn("text-green-500", (currentClientCount >= roomCapacity ) && "text-red-600")}>{currentClientCount}</span>/ {roomCapacity})</FormLabel>

          {fields.length > 0 ? (
            <div className="space-y-4">
              {fields.map((client, index) => (
                <div key={client.id} className="flex items-center justify-between p-3 border rounded-md">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={client.image || ""} alt={client.name || ""} />
                      <AvatarFallback>{client.name?.charAt(0).toUpperCase() || "?"}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{client.name || "Unnamed Client"}</p>
                      <p className="text-sm text-muted-foreground">{client.email || "No email"}</p>
                    </div>
                  </div>
                  <Button type="button" variant="ghost" size="sm" onClick={() => remove(index)}>
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center p-6 border rounded-md border-dashed">
              <Users className="h-12 w-12 text-muted-foreground mb-4" />
              <p className="text-muted-foreground mb-4">No clients added yet</p>
              <Button type="button" onClick={onAddClient} disabled={isClientLimitReached}>
                <Plus className="mr-2 h-4 w-4" />
                Add Client
              </Button>
            </div>
          )}

         

          {isClientLimitReached ? (
            <p className="text-xs text-red-500 text-center">
              Maximum client limit reached. Increase the room capacity to add more clients.
            </p>
          ) : (
            <p className="text-xs text-green-500 text-center">you can add still {roomCapacity - currentClientCount} user/s</p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default RoomClientDetailsForEdit
