'use client'
import { useParams } from "next/navigation"
import MainLayout from "@/app/components/mainLayout"
import BackButton from "@/app/components/backButton"
export default function StockParentsByType() {
    const { name } = useParams()
    const decodedName = decodeURIComponent(String(name))
    return (
        <MainLayout 
            button={<BackButton routeTo="/pages/stockItems/stockParents" />}
            title={decodedName}
        >
            <div>
                {decodedName}
            </div>
        </MainLayout>
    )
}