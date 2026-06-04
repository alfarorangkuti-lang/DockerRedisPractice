'use client'
import MainLayout from "@/app/components/mainLayout"
import { Plus, ChevronRight, Bookmark ,SmartphoneCharging, CircleUserRound, HandCoins, Circle } from "lucide-react"
import { useRouter } from "next/navigation"
export default function Categories(){

    const router = useRouter()

    const badgeItems = [
        {icon: Bookmark,label : "Kategori", description: "Stok berdasarkan kategori", endIcon: ChevronRight, count: '3', route:'/pages/stockItems/categories'},
        {icon: SmartphoneCharging,label : "Tipe Unit", description: "Stok berdasarkan tipe unit", endIcon: ChevronRight, count: '37', route:'/pages/stockItems/stockParents'},
        {icon: CircleUserRound,label : "Suppliers", description: "Pemasok unit stok", endIcon: ChevronRight, count: '7', route:'/pages/stockItems/suppliers'},
        {icon: HandCoins,label : "Valuasi Inventory", description: "Total seluruh harga stok", endIcon: Circle, count: 'Rp. 5.3 M', route:'/pages/stockItems/categories'},
    ]

    

    return(
        <MainLayout title = "Daftar Stok">
            <div className="w-full h-fit grid grid-cols-4 gap-2">

                {badgeItems.map((item) => {
                    return (
                    <button onClick={() => {router.push(item.route)}} key={item.label} className="w-full rounded-xl bg-midground border border-stroke flex mt-4 py-2 hover:opacity-70 duration-150 cursor-pointer">

                        <div className="max-w-24 max-h-24 h-full w-full flex items-center justify-center">
                            <div className="bg-foreground-2 px-3 py-2.5 flex items-center justify-center m-4 w-fit rounded-xl border border-stroke">
                                <item.icon />
                            </div>
                        </div>

                        <div className="flex-1 flex items-center justify-around space-x-8">
                            <div className="flex flex-col items-start">
                                <span className="tracking-wide text-lg">{item.label}</span>
                                <span className="tracking-wide text-xs text-gray-500">{item.description}</span>
                            </div>
                            <span>{item.count}</span>
                            { item.label === 'Valuasi Inventory' ? '' :  <item.endIcon /> }
                        </div>

                    </button>
                    )
                })}
            
            </div>
            
        </MainLayout>
    )
}