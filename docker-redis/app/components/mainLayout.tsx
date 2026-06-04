'use client'

import NavBar from "./navbar"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
export default function MainLayout({children, title} : {children : React.ReactNode, title: String}){
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
            <div className="flex-1 p-5">
                <div className="flex w-full">
                    <span className="text-3xl font-bold">{title}</span>
                </div>
                {children}
            </div>
        </div>
    )
}