'use client'
import MainLayout from "@/app/components/mainLayout"
import { StockParentHead } from "@/app/services/types"
import { Plus, Search, ChevronRight } from "lucide-react"
import BackButton from "@/app/components/backButton"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { getAllParentProducts } from "@/app/services/parentProducts"

export default function StockParents(){
    
    const [stockParents, setStockParents] = useState<StockParentHead[]>([])
    const [searchTerm, setSearchTerm] = useState("")
    const button = <BackButton routeTo="/pages/stockItems" />
    const router = useRouter()
    
    const getStockParentsData = async() => {
        const data = await getAllParentProducts() as StockParentHead[]
        setStockParents(data)
    }



    useEffect(() => {
        getStockParentsData()
    }, [])

    const filteredStockParents = stockParents.filter(item =>
        String(item.name).toLowerCase().includes(searchTerm.toLowerCase())
    )

    return(
        <MainLayout button={button} title="Tipe-tipe unit">
            
            {/* Create New Button */}
            <button 
                onClick={() => router.push('./stockParents/create')} 
                className="w-1/4 hover:bg-gray-100/70 duration-150 cursor-pointer rounded-xl bg-midground border border-stroke flex mt-4 py-2"
            >
                <div className="max-w-24 max-h-24 h-full w-full flex items-center justify-center">
                    <div className="bg-foreground-2 px-3 py-2.5 flex items-center justify-center m-4 w-fit rounded-xl border border-stroke">
                        <Plus size={20} />
                    </div>
                </div>
                <div className="flex-1 flex items-center justify-center">
                    <span className="tracking-wide">Tipe Baru</span>
                </div>
            </button>

            {/* Search Bar */}
            <div className="w-1/3 mt-4 mb-4">
                <div className="relative">
                    <input 
                        type="text" 
                        placeholder="Search" 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-midground border border-stroke placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Search size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
            </div>
            
            {/* Grid */}
            <div className="grid grid-cols-4 w-full gap-4 mt-4">
                {filteredStockParents.map((item, index) => (
                    <div key={index} className="w-full rounded-xl bg-midground border border-stroke p-4 hover:shadow-lg transition-shadow flex flex-col justify-between">
                        
                        {/* Product Name */}
                        <h3 className="text-center mb-5 text-sm">
                            {item.name}
                        </h3>

                        {/* Specs */}
                        <div className="space-y-2 mb-4 text-xs">
                            <table className="w-full text-center">
                                <thead>
                                    <tr>
                                        <th className="text-center tracking-wider w-1/3">RAM</th>
                                        <th className="text-center tracking-wider w-1/3">Stok</th>
                                        <th className="text-center tracking-wider w-1/3">Harga</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm text-gray-600 space-y-5">
                                    {item.variants.map((child, index) => (
                                        <tr key={index}>
                                            <td className="text-center w-1/3">{child.memory || '-'}</td>
                                            <td className="text-center w-1/3">0</td>
                                            <td className="text-center w-1/3">{Number(child.dgi_price) / 1000 || '-'}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Divider */}

                        {/* Action Buttons */}
                        <div className="flex items-center justify-center gap-2 border-t border-stroke pt-2">
                            
                            <span className="border-stroke border rounded-xl p-1.5 flex-1 text-center text-sm bg-foreground-2 text-gray-600">13</span>

                            <button 
                                onClick={() => {router.push(`./stockParents/stockParentsByType/${item.name}`)}} 
                                className="hover:bg-blue-100 duration-200 cursor-pointer bg-foreground-2 p-1.5 rounded-lg border border-stroke transition-colors"
                            >
                                <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </MainLayout>
    )
}