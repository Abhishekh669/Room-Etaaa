"use client"
import React from 'react'
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from '@/components/main-app-layout/app-sidebar';
import { usePathname } from 'next/navigation';

const HeaderAccordingToThePath = new Map([
  ["rooms", "Room Management"],
  ["clients", "Client Management"],
  ["dashboard", "Overall Details"]
]);

function MainAppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const pathSegments = pathname?.split('/').filter(Boolean);
  const firstSegment = pathSegments?.[1] || "";
  const getHeader = HeaderAccordingToThePath.get(firstSegment) || "Ghar Khoti";

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b border-b-gray-200">
          <div className="flex justify-between w-full gap-2 px-4">
            <div className="flex items-center">
              <SidebarTrigger className="-ml-2" />
              <Separator orientation="vertical" className="mr-2 ml-1 h-4" />
              <div className='text-2xl font-semibold'>
                {getHeader}
              </div>
            </div>
          </div>
        </header>
        <div className="w-full h-full p-4">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default MainAppLayout;