"use client"


import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar"
import Link from "next/link";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";


export function SideBarHeader() {
    const {  open } = useSidebar();
    
    return (
        <header className="text-center bg-white ">
            {
                !open ? <Link href={"/ghar/dashboard"}>

                    <span className='cursor-pointer text-[20px] font-bold mochiy-pop-one-regular '>

                        R<span className='text-[#ff0000] hover:text-red-700 duration-300'>E</span>

                    </span>

                </Link> : <Link href={"/ghar/dashboard"}>

                    <span className='cursor-pointer text-[24px] font-bold mochiy-pop-one-regular '>

                        Room&nbsp;&nbsp;<span className='text-[#ff0000] hover:text-red-700 duration-300'>Etaaa</span>

                    </span>

                </Link>
            }
            <Separator  className={cn(open && "mt-3", !open && "mt-4")}/>
        </header>
    )

}