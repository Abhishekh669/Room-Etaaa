"use client"

import { Input } from "@/components/ui/input"
import type { RoomFormValues } from "@/utils/types/schema"
import type { User } from "@prisma/client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Loader2, Search, UserIcon, X } from "lucide-react"
import type { Control } from "react-hook-form"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { Separator } from "@/components/ui/separator"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"

interface ClientFormProps {
  control: Control<RoomFormValues>
  nameField: `client.name` | `otherClients.${number}.name`
  emailField: `client.email` | `otherClients.${number}.email`
  phoneField: `client.phoneNumber` | `otherClients.${number}.phoneNumber`
  query: string
  setQuery: (q: string) => void
  users: User[]
  isLoading: boolean
  onSelectUser: (user: User, position?: number) => void
  position?: number
}

export function ClientFormForOthers({
  control,
  isLoading,
  users,
  query,
  setQuery,
  nameField,
  emailField,
  phoneField,
  onSelectUser,
  position,
}: ClientFormProps) {
  return (
    <div className="space-y-4">
      {/* Search Input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="h-4 w-4 text-muted-foreground" />
        </div>
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search users by name or email..."
          className="pl-10 pr-10 transition-all focus-visible:ring-2 focus-visible:ring-offset-1"
        />
        {query && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 h-9 w-9 rounded-full hover:bg-muted"
            onClick={() => setQuery("")}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* User Search Results */}
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex justify-center py-6"
          >
            <div className="flex flex-col items-center gap-2">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <p className="text-sm text-muted-foreground">Searching users...</p>
            </div>
          </motion.div>
        ) : users.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="max-h-[300px] overflow-y-auto rounded-lg border border-input bg-background shadow-sm">
              <div className="p-2 space-y-2">
                {users.map((user, index) => (
                  <div key={user.id}>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Button
                        variant="ghost"
                        type="button"
                        className={cn(
                          "flex w-full items-center p-8 justify-start gap-3 text-left hover:bg-accent",
                          "transition-colors duration-150 ease-in-out rounded-md",
                        )}
                        onClick={() => onSelectUser(user, position)}
                      >
                        <Avatar className="h-10 w-10 border border-muted">
                          <AvatarImage src={user.image || undefined} alt={user.name || "User"} />
                          <AvatarFallback className="bg-primary/10 text-primary">
                            {user.name?.charAt(0).toUpperCase() || "U"}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 text-left">
                          <p className="font-medium text-foreground">{user.name || "Unnamed User"}</p>
                          <p className="text-sm text-muted-foreground">{user.email || "No email"}</p>
                        </div>
                      </Button>
                    </motion.div>
                    <Separator className="my-2" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : query ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="rounded-md border border-dashed p-6 text-center"
          >
            <UserIcon className="mx-auto h-10 w-10 text-muted-foreground/50" />
            <p className="mt-2 text-sm font-medium">No users found</p>
            <p className="text-xs text-muted-foreground">Try a different search term</p>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="space-y-4">
        <FormField
          control={control}
          name={nameField}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} readOnly placeholder="No user selected" value={field.value || ""}/>
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
                <Input {...field} readOnly placeholder="No user selected" type="email" value={field.value || ""}/>
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
                <Input {...field} readOnly placeholder="No user selected" type="tel"  value={field.value || ""}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  )
}