"use client"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { ClientForm } from "./client-form"
import { Plus, Trash2, Users, CalendarIcon } from "lucide-react"
import type { Control, UseFieldArrayReturn, UseFormReturn } from "react-hook-form"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { RoomFormValues } from "@/utils/types/schema"
import { useEffect, useState } from "react"
import { getUserFromQuery } from "@/actions/user/user"
import { User } from "@prisma/client"
import { ClientFormForOthers } from "./client-form-for-others"

interface RoomClientsFormProps {
  form: UseFormReturn<RoomFormValues>
  hasClient: boolean
  clientsFieldArray: UseFieldArrayReturn<RoomFormValues, "otherClients", "id">
  onAddPrimaryClient: () => void
  onRemovePrimaryClient: () => void
  onAddOtherClient: () => void
  maxNoOfClient: number 
}

export function RoomClientsForm({
  form,
  hasClient,
  clientsFieldArray,
  onAddPrimaryClient,
  onRemovePrimaryClient,
  onAddOtherClient,
  maxNoOfClient,
}: RoomClientsFormProps) {
  const { fields, remove } = clientsFieldArray
  const currentClientCount = (hasClient ? 1 : 0) + fields.length
  const isClientLimitReached = currentClientCount >= maxNoOfClient
  const [query, setQuery] = useState("")
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
 
  useEffect(()=>{
    const fetchUsers = async () => {
      setIsLoading(true);
      if (!query.trim()) {
        setIsLoading(false);
        setUsers([]);
        return;
      };
  
      try {
        const usersData = await getUserFromQuery(query);
        if (!usersData || "error" in usersData) {
          setUsers([]);
          return;
        }
        setUsers(usersData);
      } catch (error) {
        console.error("Error fetching users:", error);
        setUsers([]);
      } finally {
        setIsLoading(false);
      }
    };

    const debounceTimer = setTimeout(()=>{
      fetchUsers();
    },400)
    return () => clearTimeout(debounceTimer);
  },[query])


  const handleClientUser = (user  : User) =>{
    if(!user)return;
    form.setValue('client.id',user.id)
    form.setValue('client.name',user.name)
    form.setValue('client.email',user.email)
    form.setValue('client.phoneNumber',user.phoneNumber)
    setQuery("")
  }

  const handleOtherClients = (user : User, position ?: number) =>{
    console.log("this ish the in other users : ",user,position)
    if (typeof position !== 'number' || !user) {
      console.warn("Invalid arguments:", { position, user });
      return;
    }
    console.log('iamhere')
    form.setValue(`otherClients.${position}.id`,user.id)
    form.setValue(`otherClients.${position}.email`,user.email)
    form.setValue(`otherClients.${position}.name`,user.name)
    form.setValue(`otherClients.${position}.phoneNumber`,user.phoneNumber)
    setQuery("")
  }



  return (
    <Card>
      <CardHeader>
        <CardTitle>Client Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex justify-between items-center">
          <FormLabel>Client Capacity</FormLabel>
          <span className={cn("text-sm font-medium", isClientLimitReached ? "text-red-500" : "text-muted-foreground")}>
            {currentClientCount} / {maxNoOfClient} clients
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

        <Accordion type="single" collapsible defaultValue="primary-client">
          <AccordionItem value="primary-client">
            <AccordionTrigger className="text-lg font-medium">Primary Client</AccordionTrigger>
            <AccordionContent>
              {hasClient ? (
                <div className="space-y-4">
                  <ClientForm
                    control={form.control}
                    nameField="client.name"
                    emailField="client.email"
                    phoneField="client.phoneNumber"
                    query={query}
                    setQuery={setQuery}
                    users={users}
                    isLoading={isLoading}
                    onSelectUser={handleClientUser}
                  />

                  <Button type="button" variant="outline" className="w-full" onClick={onRemovePrimaryClient}>
                    <Trash2 className="mr-2 h-4 w-4" />
                    Remove Primary Client
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center p-6">
                  <Users className="h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground mb-4">No primary client assigned</p>
                  <Button type="button" onClick={onAddPrimaryClient} disabled={isClientLimitReached}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Primary Client
                  </Button>
                  {isClientLimitReached && !hasClient && (
                    <p className="text-xs text-red-500 mt-2">
                      Maximum client limit reached. Increase the maximum client capacity to add more clients.
                    </p>
                  )}
                </div>
              )}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="other-clients">
            <AccordionTrigger className="text-lg font-medium">Other Clients ({fields.length})</AccordionTrigger>
            <AccordionContent>
              {fields.length > 0 ? (
                <div className="space-y-6">
                  {fields.map((field, index) => (
                    <Card key={field.id} className="p-4">
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="font-medium">Client {index + 1}</h4>
                        <Button type="button" variant="ghost" size="sm" onClick={() => remove(index)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>

                      <ClientFormForOthers
                        position={index}
                        control={form.control}
                        nameField={`otherClients.${index}.name` as const}
                        emailField={`otherClients.${index}.email` as const}
                        phoneField={`otherClients.${index}.phoneNumber` as const}
                        query={query}
                        setQuery={setQuery}
                        users={users}
                        isLoading={isLoading}
                        onSelectUser={handleOtherClients}
                      />
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center p-6">
                  <Users className="h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground mb-4">No other clients added</p>
                </div>
              )}

              <Button type="button" className="w-full mt-4" onClick={onAddOtherClient} disabled={isClientLimitReached}>
                <Plus className="mr-2 h-4 w-4" />
                Add Another Client
              </Button>

              {isClientLimitReached && (
                <p className="text-xs text-red-500 mt-2 text-center">
                  Maximum client limit reached. Increase the maximum client capacity to add more clients.
                </p>
              )}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  )
}

