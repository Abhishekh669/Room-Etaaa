"use client"

import type React from "react"

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import type { Control } from "react-hook-form"
import  { User } from "@prisma/client"
import { Loader2 } from "lucide-react"

interface ClientFormForOthersProps {
  position: number
  control: Control<any>
  nameField: string
  emailField: string
  phoneField: string
  query: string
  setQuery: (query: string) => void
  users: User[]
  isLoading: boolean
  onSelectUser: (user: User, position: number) => void
  renderPagination: () => React.ReactNode
  currentPage: number
  totalPages: number
}

export function ClientFormForOthers({
  position,
  control,
  nameField,
  emailField,
  phoneField,
  query,
  setQuery,
  users,
  isLoading,
  onSelectUser,
  renderPagination,
}: ClientFormForOthersProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <FormLabel>Search User</FormLabel>
        <Input placeholder="Search by name, email or phone" value={query} onChange={(e) => setQuery(e.target.value)} />
      </div>

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
                onClick={() => onSelectUser(user, position)}
              >
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-muted overflow-hidden">
                    {user.image ? (
                      <img
                        src={user.image || "/placeholder.svg"}
                        alt={user.name || ""}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center bg-primary/10 text-primary font-medium">
                        {user.name?.charAt(0).toUpperCase() || "?"}
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{user.name}</p>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {renderPagination()}
        </div>
      ) : query ? (
        <p className="text-sm text-muted-foreground text-center py-2">No users found</p>
      ) : null}

      <div className="space-y-4">
        <FormField
          control={control}
          name={nameField}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Client name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name={emailField}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Client email" type="email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name={phoneField}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Client phone number" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  )
}
