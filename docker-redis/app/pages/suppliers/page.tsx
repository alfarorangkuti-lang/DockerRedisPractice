'use client'

import MainLayout from "@/app/components/mainLayout"
import BackButton from "@/app/components/backButton"
import { Search } from "lucide-react"
import { useMemo, useState } from "react"

export default function SuppliersPage() {
    type Supplier = {
        id: number
        name: string
        goodsCount: number
    }

    const [searchTerm, setSearchTerm] = useState("")

    const suppliers: Supplier[] = [
        { id: 1, name: "PT. Sinar Abadi", goodsCount: 16 },
        { id: 2, name: "CV. Mandiri Jaya", goodsCount: 9 },
        { id: 3, name: "PT. Global Elektronik", goodsCount: 24 },
        { id: 4, name: "Distributor Ponsel Nusantara", goodsCount: 12 },
        { id: 5, name: "UD. Mitra Stok", goodsCount: 7 },
    ]

    const filteredSuppliers = useMemo(
        () => suppliers.filter((supplier) =>
            supplier.name.toLowerCase().includes(searchTerm.toLowerCase())
        ),
        [searchTerm]
    )

    return (
        <MainLayout button={<BackButton routeTo="/pages/stockItems" />} title="Suppliers">
            <div className="w-full mt-4 rounded-xl bg-midground border border-stroke p-5">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                        <span className="text-sm text-gray-500">Total Suppliers</span>
                        <p className="text-3xl font-semibold">{suppliers.length}</p>
                    </div>
                    <div className="relative w-full md:w-1/3">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search supplier"
                            className="w-full rounded-xl bg-white border border-stroke px-4 py-3 pr-11 text-sm outline-stroke focus:outline-1 focus:ring-2 focus:ring-blue-500"
                        />
                        <Search size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                </div>

                <div className="overflow-x-auto rounded-xl border border-stroke bg-white">
                    <table className="w-full min-w-140 text-left text-sm text-gray-600">
                        <thead className="bg-midground text-xs uppercase tracking-wide text-gray-500">
                            <tr>
                                <th className="px-6 py-4">Supplier Name</th>
                                <th className="px-6 py-4 text-center">Goods Count</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredSuppliers.map((supplier) => (
                                <tr key={supplier.id} className="border-t border-stroke hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4">{supplier.name}</td>
                                    <td className="px-6 py-4 text-center font-semibold">{supplier.goodsCount}</td>
                                </tr>
                            ))}
                            {filteredSuppliers.length === 0 && (
                                <tr>
                                    <td colSpan={2} className="px-6 py-8 text-center text-gray-500">
                                        Tidak ada supplier yang cocok.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </MainLayout>
    )
}
