"use client"

 
import { UserForOwner } from "@/utils/types/type"
import { ColumnDef } from "@tanstack/react-table"



export const columns: ColumnDef<UserForOwner>[] = [
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