"use client"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Calendar, DoorClosedIcon, FileText, Home, Inbox, LucideDoorOpen, Search, Settings, Users2 } from "lucide-react"
import { NavMain } from "./nav-main"
import { SideBarHeader } from "./sidebar-header"


const items = [

  {
  
  title: "Dashboard",
  
  url: "dashboard",
  
  icon: Home,
  
  },
  
  {
  
  title: "Client Management",
  
  url: "client-management",
  
  icon: Users2,
  
  },
  
  {
  
  title: "Room Management",
  
  url: "rooms",
  
  icon: LucideDoorOpen,
  
  },
  
  {
  
  title: "My Posts",
  
  url: "my-posts",
  
  icon: FileText,
  
  },
  
  {
  
  title: "Settings",
  
  url: "#",
  
  icon: Settings,
  
  },
  
  ]
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="bg-white">
        <SideBarHeader />
      </SidebarHeader>
      <SidebarContent className="bg-white">
        <NavMain items={items} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}