'use client'

import { useState } from "react"
import {usePathname} from "next/navigation"
import Link from "next/link"
import { Biohazard, ChartNetwork, FolderInput, BadgeJapaneseYen, Boxes, PanelLeftOpen, PanelLeftClose, LogOut } from "lucide-react"
import { useRouter } from "next/navigation"


export default function NavBar({children} : {children: React.ReactNode}){
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()
    const pathname = usePathname()
    const logout = () => {
            localStorage.removeItem("tokenApp")
            router.push('/')
        }
    return (
        <div className="w-full h-full">
            <div className={`h-screen ${ isOpen ? "max-w-60 w-full" : "max-w-18 w-full"} fixed top-0 left-0 bg-midground border flex flex-col border-stroke transition-all duration-150`}>
                
                <div className="flex items-center justify-center w-full h-fit border-b border-stroke px-3 py-5">
                    <button className="w-full rounded-xl bg-foreground border border-stroke py-2.5 px-3 flex justify-center items-center">
                        <Biohazard color="background"/>
                        <span className={` ${isOpen ? "" : "hidden"} w-2/3 text-sm text-background italic font-bold`}>Biohazard</span>
                    </button>
                </div>

                <div className="h-full flex flex-col items-center space-y-4 p-3">
                    <Link href="/pages/home" className={`${ pathname.startsWith('/pages/home') ? "bg-foreground-2 border border-stroke" : ""} w-full rounded-xl py-2.5 ${isOpen ? 'pr-3' : 'px-3'} flex items-center justify-center hover:bg-gray-200 duration-150`}>
                        <ChartNetwork className={`${isOpen ? "w-min me-2" : ""} `} />
                        <span className={` ${isOpen ? "" : "hidden"} w-2/3 text-sm`}>Dashboard</span>
                    </Link>


                    <Link href="/pages/stockItems" className={`${ pathname.startsWith('/pages/stockItems') ? "bg-foreground-2 border border-stroke" : ""} w-full rounded-xl py-2.5 ${isOpen ? 'pr-3' : 'px-3'} flex items-center justify-center hover:bg-gray-200 duration-150`}>
                        <Boxes className={`${isOpen ? "w-min me-2" : ""}`} />
                        <span className={` ${isOpen ? "" : "hidden"} w-2/3 text-sm`}>Stock Items</span>
                    </Link>

                    <Link href="#" className={`${ pathname.startsWith('/pages/supplies') ? "bg-foreground-2 border border-stroke" : ""} w-full rounded-xl py-2.5 ${isOpen ? 'pr-3' : 'px-3'} flex items-center justify-center hover:bg-gray-200 duration-150`}>
                        <FolderInput className={`${isOpen ? "w-min me-2" : ""}`} />
                        <span className={` ${isOpen ? "" : "hidden"} w-2/3 text-sm`}>Purchasing</span>
                    </Link>


                    <Link href="#" className={`${ pathname.startsWith('/pages/financial') ? "bg-foreground-2 border border-stroke" : ""} w-full rounded-xl py-2.5 ${isOpen ? 'pr-3' : 'px-3'} flex items-center justify-center hover:bg-gray-200 duration-150`}>
                        <BadgeJapaneseYen className={`${isOpen ? "w-min me-2" : ""}`} />
                        <span className={` ${isOpen ? "" : "hidden"} w-2/3 text-sm`}>Sale</span>
                    </Link>
                </div>
                
                <div className="flex items-center justify-center w-full h-fit border-t border-stroke p-3 space-x-2">
                    
                    
                    {isOpen && 
                    
                    <button className="py-2.5 px-3 rounded-xl border border-stroke bg-foreground-2 hover:bg-gray-200 cursor-pointer transition duration-200" onClick={logout}>
                        <LogOut className="rotate-180" />
                    </button>
                    
                    }


                    <button onClick={() => {setIsOpen((prev) => !prev)}} className="flex-1 rounded-xl bg-foreground-2 border border-stroke py-2.5 px-3 flex justify-center hover:bg-gray-200 duration-150">
                        {isOpen ? <PanelLeftClose /> : <PanelLeftOpen />}
                    </button>
                </div>
            </div>
            <div className={`${isOpen ? "ml-42" : ""} transition-all duration-150`}>
                {children}
            </div>
        </div>
    )
}