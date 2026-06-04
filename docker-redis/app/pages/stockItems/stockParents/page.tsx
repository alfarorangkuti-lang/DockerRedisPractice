'use client'
import MainLayout from "@/app/components/mainLayout"
import ConfirmationModal from "@/app/components/ConfirmationModal"
import { getCategories, deleteCategory } from "@/app/services/categories"
import { Plus, Search, Edit, Trash, ChevronRight } from "lucide-react"
import BackButton from "@/app/components/backButton"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export default function StockParents(){

    type StockParentChild = {
        ram?: String,
        stok?: number,
        price?: String,
    }

    type StockParentHead = {
        id: number,
        name: String,
        data: StockParentChild[]
    }

    const dataDummy: StockParentHead[] = [
        {id: 1, name: "iPhone 14 Pro Max", data: [{  ram: "8GB", stok: 10, price: "Rp 18.000.000"}]},
        {id: 2, name: "Samsung Galaxy S23 Ultra", data: [{  ram: "12GB", stok: 5, price: "Rp 20.000.000"}]},
        {id: 3, name: "Google Pixel 7 Pro", data: [{  ram: "12GB", stok: 8, price: "Rp 15.000.000"}]},
        {id: 4, name: "OnePlus 11 Pro", data: [{  ram: "16GB", stok: 12, price: "Rp 14.000.000"}]},
        {id: 5, name: "Xiaomi 13 Pro", data: [{  ram: "12GB", stok: 15, price: "Rp 13.000.000"}]},
    ]
    
    const [stockParents, setStockParents] = useState<StockParentHead[]>(dataDummy)
    const [deleteId, setDeleteId] = useState<number | undefined>(undefined)
    const [isOpen, setIsOpen] = useState(false)
    const [isRefresh, setIsRefresh] = useState(true)
    const [searchTerm, setSearchTerm] = useState("")
    const button = <BackButton routeTo="/pages/stockItems" />
    const router = useRouter()
    
    // const getStockParentsData = async() => {
    //     const data = await getCategories()
    //     setStockParents(data)
    // }

    const handleDelete = async(id: number) => {
        setDeleteId(id)
        setIsOpen(true)
    }

    const onConfirmDelete = async() => {
        const data = await deleteCategory(deleteId)
        if (data === 'berhasil') {
            setIsOpen(false)
            setIsRefresh(!isRefresh)
        }
    }

    const filteredStockParents = stockParents.filter(item =>
        String(item.name).toLowerCase().includes(searchTerm.toLowerCase())
    )

    // useEffect(() => {
    //     getStockParentsData()
    // }, [isRefresh])

    return(
        <MainLayout button={button} title="Tipe-tipe unit">
            <ConfirmationModal 
                isOpen={isOpen} 
                title="Hapus Unit" 
                description="Konfirmasi aksi penghapusan" 
                isDangerous={true}
                onCancel={() => {setIsOpen(false)}} 
                onConfirm={onConfirmDelete}
            />
            
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
            <div className="grid grid-cols-5 w-full gap-4 mt-4">
                {filteredStockParents.map((item) => (
                    <div key={item.id} className="w-full rounded-xl bg-midground border border-stroke p-4 hover:shadow-lg transition-shadow">
                        
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
                                    {item.data.map((child, index) => (
                                        <tr key={index}>
                                            <td className="text-center w-1/3">{child.ram || '-'}</td>
                                            <td className="text-center w-1/3">{child.stok || '-'}</td>
                                            <td className="text-center w-1/3">{child.price || '-'}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-stroke mb-3"></div>

                        {/* Action Buttons */}
                        <div className="flex items-center justify-center gap-2">
                            <button 
                                onClick={() => {handleDelete(item.id)}} 
                                className="hover:bg-red-100 duration-200 cursor-pointer bg-foreground-2 p-1.5 rounded-lg border border-stroke transition-colors"
                            >
                                <Trash size={16} />
                            </button>
                            <button 
                                onClick={() => {router.push(`./stockParents/edit/${item.id}`)}} 
                                className="hover:bg-blue-100 duration-200 cursor-pointer bg-foreground-2 p-1.5 rounded-lg border border-stroke transition-colors"
                            >
                                <Edit size={16} />
                            </button>
                            <button 
                                onClick={() => {router.push(`./stockParents/edit/${item.id}`)}} 
                                className="hover:bg-blue-100 duration-200 cursor-pointer bg-foreground-2 p-1.5 rounded-lg border border-stroke transition-colors"
                            >
                                <ChevronRight size={16} />
                            </button>
                            <span className="border-stroke border rounded-xl p-1.5 flex-1 text-center text-sm bg-foreground-2 text-gray-600">13</span>
                        </div>
                    </div>
                ))}
            </div>
        </MainLayout>
    )
}