'use client'

import MainLayout from "@/app/components/mainLayout"
import BackButton from "@/app/components/backButton"
import { editParentProducts, getParentProductsById} from "@/app/services/parentProducts"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useParams } from "next/navigation"

export default function EditStockParent(){
    const router = useRouter()
    const { id }= useParams()
    const [isLoading, setIsLoading] = useState(false)
    
    const fetchData = async() => {
        setIsLoading(true)
        const dataFetch = await getParentProductsById(Number(id))
        setName(dataFetch.name)
        setMemory(dataFetch.memory)
        setPrice(dataFetch.dgi_price)
        setBackName(dataFetch.name)
        setIsLoading(false)
    }

    const [name, setName] = useState<string>('')
    const [backName, setBackName] = useState<string>('')
    const [memory, setMemory] = useState<string>('')
    const [price, setPrice] = useState<number | "">("")
    const [message, setMessage] = useState<string>('')
    

    useEffect(() => {
        fetchData()
    },[])
    
    

    const handleSubmit = async () => {
        if (!name || !memory || !price) {
            setMessage('Semua field wajib diisi')
            return
        }
        setIsLoading(true)
        const result = await editParentProducts(Number(id),name, memory, price)
        setMessage(result as string)
        setIsLoading(false)
        if (result === "berhasil") {
            setTimeout(() => {
                router.push(`/pages/stockItems/stockParents/stockParentsByType/${backName}`)
            }, 1000)
        }
        
    }

    return (
        <MainLayout isLoading={isLoading} button={<BackButton routeTo={`/pages/stockItems/stockParents/stockParentsByType/${backName}`} />} title="Tipe Baru">
            <div className="w-full min-h-[80vh] rounded-xl bg-midground border border-stroke flex justify-center mt-4 py-4">
                <div className="h-fit w-full max-w-xl bg-white px-6 py-6 rounded-xl border border-stroke space-y-4">
                    <div className="flex flex-col space-y-2">
                        {backName}
                        <label htmlFor="name" className="text-sm font-medium">Nama Unit</label>
                        <input
                            id="name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Masukan nama unit"
                            type="text"
                            className="placeholder:text-sm outline-stroke focus:outline-1 outline-none py-2 px-2 border border-stroke rounded-xl"
                        />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="memory" className="text-sm font-medium">Memory</label>
                        <input
                            id="memory"
                            required
                            value={memory}
                            onChange={(e) => setMemory(e.target.value)}
                            placeholder="Masukan memory (misal 8/128GB)"
                            type="text"
                            className="placeholder:text-sm outline-stroke focus:outline-1 outline-none py-2 px-2 border border-stroke rounded-xl"
                        />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="price" className="text-sm font-medium">Harga</label>
                        <input
                            id="price"
                            required
                            value={price}
                            onChange={(e) => setPrice(e.target.value === "" ? "" : Number(e.target.value))}
                            placeholder="Masukan harga"
                            type="number"
                            pattern="[0-9]*"
                            className="placeholder:text-sm outline-stroke focus:outline-1 outline-none py-2 px-2 border border-stroke rounded-xl [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
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
