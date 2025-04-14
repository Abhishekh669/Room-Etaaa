"use client"
import { type LucideIcon } from "lucide-react"
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
  }[]
}) {
  const router = useRouter();
  const pathname = usePathname();
  
  return (
    <SidebarGroup className="bg-white">
      <SidebarGroupLabel>Features: </SidebarGroupLabel>
      <SidebarMenu className="flex flex-col gap-y-2">
        {items.map((item) => (
          <SidebarMenuItem
            key={item.title}
            className={cn(
              "relative rounded-lg overflow-hidden",
              "transition-all duration-300 ease-in-out"
            )}
          >
            <SidebarMenuButton
              tooltip={item.title}
              onMouseEnter={() => router.prefetch(`/ghar/${item.url}`)}
              onClick={() => router.push(`/ghar/${item.url}`)}
              className={cn(
                "flex items-center gap-3 p-3 w-full rounded-lg",
                "transition-all duration-300 ease-in-out",
                "hover:bg-gray-50 hover:text-red-600 hover:translate-x-1",
                "relative before:absolute before:left-0 before:top-0",
                "before:h-full before:w-1 before:bg-red-600 before:rounded-r-lg",
                "before:opacity-0 hover:before:opacity-100",
                "before:transition-opacity before:duration-300",
                pathname.includes(item.url) && 
                  "text-red-600 font-medium bg-red-50 before:opacity-100"
              )}
            >
              {item.icon && <item.icon className="w-5 h-5 transition-colors duration-300" />}
              <span className="transition-colors duration-300">{item.title}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}