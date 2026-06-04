'use client'

import NavBar from "./navbar"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
export default function MainLayout({children, title, button} : {children : React.ReactNode, title: String, button?: React.ReactNode}){
    const router = useRouter()
    useEffect(() => {
        const token = localStorage.getItem("tokenApp")
        if (!token) {
            router.push('/')
            return
        }

    }, [router])

    return (
        <div className="flex">
            <NavBar/>
            <div className="flex-1 p-5 ml-18">
                <div className="flex w-full items-center gap-2">
                    {button}
                    <span className="text-3xl font-bold">{title}</span>
                </div>
                {children}
            </div>
        </div>
    )
}