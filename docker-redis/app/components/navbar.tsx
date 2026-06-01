'use client'

import { useState } from "react"
import { Biohazard, ChartNetwork, FolderInput, BadgeJapaneseYen, Boxes, PanelLeftOpen, PanelLeftClose } from "lucide-react"

export default function NavBar(){
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className={`h-screen ${ isOpen ? "max-w-60 w-full" : "max-w-18 w-full"}  bg-midground border flex flex-col border-stroke transition-all duration-150`}>
            
            <div className="flex items-center justify-center w-full h-fit border-b border-stroke px-3 py-5">
                <button className="w-full rounded-xl bg-foreground border border-stroke py-2.5 px-3 flex justify-center items-center">
                    <Biohazard color="background"/>
                    <span className={` ${isOpen ? "" : "hidden"} w-2/3 text-sm text-background italic font-bold`}>Biohazard</span>
                </button>
            </div>

            <div className="h-full flex flex-col items-center space-y-2 p-3">
                <a href="#" className="w-full rounded-xl bg-foreground-2 border border-stroke py-2.5 px-3 flex items-center justify-center hover:bg-gray-200 duration-150">
                    <ChartNetwork className={`${isOpen ? "w-1/3" : ""}`} />
                    <span className={` ${isOpen ? "" : "hidden"} w-2/3 text-sm`}>Dashboard</span>
                </a>


                <a href="#" className="w-full rounded-xl bg-foreground-2 border border-stroke py-2.5 px-3 flex items-center justify-center hover:bg-gray-200 duration-150">
                    <Boxes className={`${isOpen ? "w-1/3" : ""}`} />
                    <span className={` ${isOpen ? "" : "hidden"} w-2/3 text-sm`}>Stock Items</span>
                </a>

                <a href="#" className="w-full rounded-xl bg-foreground-2 border border-stroke py-2.5 px-3 flex items-center justify-center hover:bg-gray-200 duration-150">
                    <FolderInput className={`${isOpen ? "w-1/3" : ""}`} />
                    <span className={` ${isOpen ? "" : "hidden"} w-2/3 text-sm`}>Purchasing</span>
                </a>


                <a href="#" className="w-full rounded-xl bg-foreground-2 border border-stroke py-2.5 px-3 flex items-center justify-center hover:bg-gray-200 duration-150">
                    <BadgeJapaneseYen className={`${isOpen ? "w-1/3" : ""}`} />
                    <span className={` ${isOpen ? "" : "hidden"} w-2/3 text-sm`}>Sale</span>
                </a>
            </div>
            
            <div className="flex items-center justify-center w-full h-fit border-t border-stroke p-3 space-x-2">
                <button onClick={() => {setIsOpen((prev) => !prev)}} className="w-full rounded-xl bg-foreground-2 border border-stroke py-2.5 px-3 flex justify-center hover:bg-gray-200 duration-150">
                    {isOpen ? <PanelLeftClose /> : <PanelLeftOpen />}
                </button>
            </div>
        </div>
    )
}