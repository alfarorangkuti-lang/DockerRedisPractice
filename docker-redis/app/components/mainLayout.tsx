'use client'

import NavBar from "./navbar"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Spinner from "./spinner"
export default function MainLayout({children, title, button, isLoading=false} : {children : React.ReactNode, title: String, button?: React.ReactNode, isLoading?:boolean}){
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
            <NavBar>
            <div className="flex-1 p-5 ml-18">
                <div className="flex w-full justify-between items-center gap-2">
                    <div className="flex items-center gap-2">
                        {button}
                        <span className="text-3xl font-bold">{title}</span>
                    </div>
                </div>
                <Spinner isShow={isLoading} />
                {children}
            </div>
            </NavBar>
        </div>
    )
}