'use client'
import { ChevronLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function BackButton({routeTo} : {routeTo:string}){
    const router = useRouter()
    return(
        <button onClick={() => router.push(routeTo)} className="border hover:bg-gray-100 duration-150 cursor-pointer border-stroke rounded-xl p-1.5 flex justify-center items-center">
            <ChevronLeft/>
        </button>
    )
}