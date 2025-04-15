"use client"
 import { UserForOwnerType } from "@/features/schemas/client-management/client-management.type"
import { ColumnDef } from "@tanstack/react-table"



export const columns: ColumnDef<UserForOwnerType>[] = [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "phoneNumber",
      header: "Phone Number",
    },
    {
        accessorKey : "roomNumbers",
        header : "Room Number"
    },
    {
        accessorKey : "image",
        header : "Picture"
    }
  ]