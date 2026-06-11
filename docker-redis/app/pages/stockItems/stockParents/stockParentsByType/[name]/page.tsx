'use client'
import { useParams } from "next/navigation"
import { StockParents } from "@/app/services/types"
import { getAllParentProductsByName, deleteParentProducts } from "@/app/services/parentProducts"
import { useRouter } from "next/navigation"
import MainLayout from "@/app/components/mainLayout"
import ConfirmationModal from "@/app/components/ConfirmationModal"
import BackButton from "@/app/components/backButton"
import { Trash, Edit, Eye, EyeClosed, Plus } from "lucide-react"
import { useState,useEffect } from "react"
export default function StockParentsByType() {
    const [parentProducts, setParentProducts] = useState<StockParents[]>([])
    const [isOpen, setIsOpen] = useState(false)
    const { name } = useParams()
    const router = useRouter()
    const [desc, setDesc] = useState("Yaking ingin menghapus?")
    const [selectedItem, setSelectedItem] = useState(0)
    const [selectedId, setSelectedId] = useState(0)
    const [refresh, setRefresh] = useState(false)
    const decodedName = decodeURIComponent(String(name))

    const handleDeleteButton = (id:number) => {
        setSelectedId(id)
        setIsOpen(true)
    }

    const handleDelete = async() => {
        const result = await deleteParentProducts(selectedId)
        if (result === "berhasil") {
            setIsOpen(false)
            setRefresh(!refresh)
        } else {
            setDesc(result)
        }
    }

    const getData = async() => {
        const data = await getAllParentProductsByName(String(name))
        console.log(data)
        setParentProducts(data)
    }
    
    useEffect(() => {
        getData()
    },[refresh])
    return (
        <MainLayout 
            button={<BackButton routeTo="/pages/stockItems/stockParents" />}
            title={decodedName}
        >
            <ConfirmationModal 
                isOpen={isOpen} 
                title="Konfirmasi hapus" 
                description="Ingin menghapus tipe?" 
                onConfirm={handleDelete}
                onCancel={() => setIsOpen(false)}
                isDangerous/>
            <div className="flex gap-2 w-full h-full mt-5 relative">
                <div className="w-full h-300 bg-midground border border-stroke rounded-xl">
                    a
                </div>

                <div className="w-4/10 h-full sticky top-2 right-0">

                    <table className="w-full border-separate border-spacing-x-0 border-spacing-y-1">
                        <thead>
                            <tr>
                                <th className="p-2 rounded-l-xl bg-midground border-y border-l border-stroke">Memory</th>
                                <th className="p-2 bg-midground border-y border-stroke">Harga DGI</th>
                                <th className="p-2 bg-midground border-y border-stroke">Stok</th>
                                <th className="p-2 rounded-r-xl bg-midground border-y border-r border-stroke">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {parentProducts.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="text-center p-2 rounded-l-xl bg-midground border-y border-l border-stroke">{item.memory}</td>
                                        <td className="text-center p-2 bg-midground border-y border-stroke">{item.dgi_price/1000}</td>
                                        <td className="text-center p-2 bg-midground border-y border-stroke">0</td>
                                        <td className="justify-center gap-1 items-center p-2 rounded-r-xl bg-midground border-y border-r border-stroke flex">
                                            <button onClick={() => handleDeleteButton(item.id)} className="p-1 rounded-lg cursor-pointer hover:opacity-70 border border-stroke bg-foreground-2"><Trash size={18}/></button>
                                            <button onClick={() => router.push(`/pages/stockItems/stockParents/edit/${item.id}`)} className="p-1 rounded-lg cursor-pointer hover:opacity-70 border border-stroke bg-foreground-2"><Edit size={18}/></button>
                                            <button onClick={() => setSelectedItem(item.id)} className="p-1 rounded-lg cursor-pointer hover:opacity-70 border border-stroke bg-foreground-2">{selectedItem === item.id ? <Eye size={18}/> : <EyeClosed size={18}/> }</button>
                                        </td>
                                    </tr>
                                )
                            })}
                            
                        </tbody>
                    </table>
                    <div className="flex gap-1">
                        <button onClick={() => router.push(`./${name}/edit`)} className="w-full mt-2 cursor-pointer hover:opacity-70 p-2 rounded-xl border-stroke border bg-midground flex justify-center items-center gap-x-2"><Edit size={18}/> Edit Nama Tipe</button>
                        <button onClick={() => router.push(`/pages/stockItems/stockParents/create?name=${name}`)} className="w-full mt-2 cursor-pointer hover:opacity-70 p-2 rounded-xl border-stroke border bg-midground flex justify-center items-center gap-x-2"><Plus size={18}/> Tambah Varian</button>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}