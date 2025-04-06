"use client"

import * as React from "react"
import {
  BookOpen,
  GalleryVerticalEnd,
  Home,
  Key,
  LayoutDashboardIcon,
  ListTodo,
  Settings2,
  User2,
  UserRoundCheck,
  Users,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { NavMain } from "./mav-main";

const data = {
  teams: 
    {
      name: "Kothi-Ghar",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
  navMain: [
    
    {
      title: "Dashboard",
      url: "dashboard",
      icon: LayoutDashboardIcon,
      
    },
    {
      title: "Rooms",
      url: "rooms",
      icon: Home,
      isAdmin : true
    },
    {
      title: "Clients",
      url: "clients",
      icon: User2,
    },
    {
      title: "Students",
      url: "students",
      icon: Users,
      
    },
   
    {
      title: "Subjects",
      url: "subjects",
      icon: BookOpen,
      
    },
    {
      title: "Attendance",
      url: "attendance",
      icon: UserRoundCheck,
      
    },
    {
      title: "Todo",
      url: "todo",
      icon: ListTodo,
      
    },
    {
      title: "Authorize",
      url: "authorize",
      icon: Key,
      isAdmin : true,
      
    },
    {
      title: "Settings",
      url: "settings",
      icon: Settings2,
    },
   
  ],
 
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}