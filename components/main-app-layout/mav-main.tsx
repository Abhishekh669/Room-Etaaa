"use client"

import {  type LucideIcon } from "lucide-react"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { IconType } from "react-icons/lib"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon | IconType;
    isAdmin?: boolean;
    
  }[]
}) {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
      {items.map((item) => (
          <SidebarMenuItem
            key={item.title}
            className={cn(
              "flex relative  items-center pr-2 rounded-md   "
            )}
          >
            <SidebarMenuButton
              tooltip={item.title}
              onMouseEnter={() => router.prefetch(`/ghar/${item.url}`)} // Prefetch on hover
              onClick={() => {
                router.push(`/ghar/${item.url}`);
              }}
              className={cn(
                "hover:bg-accent shrink-0 hover:text-black ",
                pathname.includes(item.url) && " bg-white text-black border"
              )}
            >
              {item.icon && <item.icon />}
              <span>{item.title}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}