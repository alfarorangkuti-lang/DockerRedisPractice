'use client'

import MainLayout from "@/app/components/mainLayout"
import BackButton from "@/app/components/backButton"
import { getSuppliers, deleteSupplier} from "@/app/services/suppliers"
import ConfirmationModal from "@/app/components/ConfirmationModal"
import { useRouter } from "next/navigation"
import { Search, Plus, Pencil, Trash } from "lucide-react"
import { useMemo, useState, useEffect } from "react"

export default function SuppliersPage() {
    type Supplier = {
        id: number
        name: string
    }

    const [searchTerm, setSearchTerm] = useState("")
    const [id, setId] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const [suppliers, setSuppliers] = useState<Supplier[]>([])
    const router = useRouter()

    const onClose = () => {
        setIsOpen(!isOpen)
    }

    const handleDelete = async() =>{
        const response = await deleteSupplier(id)
        if (response === 'berhasil') {
            onClose()
            setRefresh(!refresh)
        }
    }

    const filteredSuppliers = useMemo(
        () => suppliers.filter((supplier) =>
            supplier.name.toLowerCase().includes(searchTerm.toLowerCase())
        ),
        [suppliers,searchTerm]
    )

    const fetchSuppliers = async () => {
        const data = await getSuppliers()
        setSuppliers(data)
    }

        useEffect(() => {
        fetchSuppliers()
        setSearchTerm("")
    }, [refresh])

    return (
        <MainLayout button={<BackButton routeTo="/pages/stockItems" />} title="Suppliers">
            <ConfirmationModal 
                isOpen={isOpen} 
                title="Konfirmasi Hapus" 
                description="ingin menghapus supplier?"
                onCancel={onClose}
                onConfirm={handleDelete}

            />

            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-start mt-4 mb-4">
                
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-2 w-full md:w-auto">
                    <div className="relative flex-1 md:w-72">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Cari supplier"
                            className="w-full rounded-full bg-white border border-stroke p-2 pr-11 text-sm outline-stroke focus:outline-1 focus:ring-2 focus:ring-blue-500"
                        />
                        <Search size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                </div>

                <div className="inline-flex items-center gap-2 rounded-full bg-midground px-4 py-2 text-sm font-semibold text-gray-700 border border-stroke">
                    <span className="text-xs uppercase tracking-[0.2em] text-gray-500">Total</span>
                    <span>{suppliers.length}</span>
                </div>
                
                <button onClick={() => {router.push('./suppliers/create')}}className="cursor-pointer inline-flex items-center justify-center gap-2 rounded-full p-2 px-3 text-sm tracking-wider border border-stroke hover:opacity-80 duration-200">
                    <Plus size={16} />
                    Supplier baru
                </button>

                
            </div>

            <div className="overflow-x-auto rounded-xl border border-stroke bg-white shadow-sm">
                <table className="w-full min-w-150 text-left text-sm text-gray-600 border-collapse">
                    <thead className="bg-midground text-xs uppercase tracking-wide text-gray-500">
                        <tr>
                            <th className="px-6 py-4 w-16">No</th>
                            <th className="px-6 py-4">Supplier Name</th>
                            <th className="px-6 py-4 text-center">Goods Count</th>
                            <th className="px-6 py-4 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredSuppliers.map((supplier, index) => (
                            <tr key={supplier.id} className="border-t border-stroke hover:bg-slate-50 transition-colors">
                                <td className="px-6 py-4 font-semibold">{index + 1}</td>
                                <td className="px-6 py-4">{supplier.name}</td>
                                <td className="px-6 py-4 text-center font-semibold">0</td>
                                <td className="px-6 py-4 text-center">
                                    <div className="inline-flex items-center justify-center gap-2">
                                        <button onClick={() => { router.push(`./suppliers/edit/${supplier.id}`) }} className=" cursor-pointer rounded-xl bg-foreground-2 p-2 border border-stroke text-gray-600 hover:bg-blue-100 transition-colors">
                                            <Pencil size={16} />
                                        </button>
                                        <button onClick={() => {setId(supplier.id); setIsOpen(true)}} className="cursor-pointer rounded-xl bg-foreground-2 p-2 border border-stroke text-gray-600 hover:bg-red-100 transition-colors">
                                            <Trash size={16} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {filteredSuppliers.length === 0 && (
                            <tr>
                                <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                                    Tidak ada supplier yang cocok.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </MainLayout>
    )
}
