'use client'

import MainLayout from "@/app/components/mainLayout"
import BackButton from "@/app/components/backButton"
import { createSupplier } from "@/app/services/suppliers"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function CreateSupplier() {
    const router = useRouter()
    const [name, setName] = useState<string>("")
    const [isLoading, setIsLoading] = useState(false)
    const [isSubmitting, setisSubmitting] = useState(false)
    const [message, setMessage] = useState<string>("")

    const handleSubmit = async () => {
        if (!name.trim()) {
            setMessage('Nama supplier wajib diisi')
            return
        }
        setIsLoading(true)
        
        try {
            await createSupplier(name)
            setisSubmitting(false)
            setMessage('Supplier berhasil ditambahkan')
        } catch (error) {
            setMessage('Gagal menambahkan supplier')
        } finally{
            setisSubmitting(false)
            setIsLoading(false)
        }

        setTimeout(() => {
            router.push('/pages/stockItems/suppliers')
        }, 1000)
    }

    return (
        <MainLayout isLoading={isLoading} button={<BackButton routeTo="/pages/stockItems/suppliers" />} title="Tambah Supplier">
            <div className="w-full h-screen rounded-xl bg-midground border border-stroke flex justify-center mt-4 py-4">
                <div className="h-fit w-full max-w-lg bg-white px-6 py-6 rounded-xl border border-stroke space-y-6">
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="supplier-name" className="text-sm font-medium">Nama Supplier</label>
                        <input
                            id="supplier-name"
                            disabled={isSubmitting}
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Masukan nama supplier"
                            type="text"
                            className="placeholder:text-sm outline-stroke focus:outline-1 outline-none p-3  border border-stroke rounded-xl"
                        />
                    </div>
                    <div className="flex flex-col w-full justify-center mt-3 space-y-4">
                        {message ? <span className="text-center text-sm text-gray-600">{message}</span> : null}
                        <button
                            onClick={handleSubmit}
                            className="w-full p-2 bg-black hover:opacity-80 duration-200 cursor-pointer text-white rounded-xl"
                        >
                            Simpan
                        </button>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}
