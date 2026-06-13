'use client'
import MainLayout from "@/app/components/mainLayout"
import ConfirmationModal from "@/app/components/ConfirmationModal"
import { getCategories, deleteCategory } from "@/app/services/categories"
import { Plus, ChevronRight, Edit, Trash } from "lucide-react"
import BackButton from "@/app/components/backButton"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
export default function Categories(){

    type Kategori = {
        id:number,
        category: String,
        description: String
    }
    
    const [kategoris, setKategoris] = useState<Kategori[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [deleteId, setDeleteId] = useState<number | undefined>(undefined)
    const [isOpen, setIsOpen] = useState(false)
    const [isRefresh, setIsRefresh] = useState(true)
    const button = <BackButton routeTo="/pages/stockItems" />
    const router = useRouter()
    

    const getCategoriesData = async() => {
        setIsLoading(true)
        const data = await getCategories()
        setKategoris(data)
        setIsLoading(false)
    }

    const handleDelete = async(id:number) =>{
        setDeleteId(id)
        setIsOpen(true)
    }

    const onConfirmDelete = async() => {
        setIsLoading(true)
        const data = await deleteCategory(deleteId)
        setIsLoading(false)
        if (data === 'berhasil') {
            setIsOpen(false)
            setIsRefresh(!isRefresh)
        }
    }

    useEffect(() => {
        getCategoriesData()
    }, [isRefresh])

    return(
        <MainLayout button={button} title = "Daftar Kategori" isLoading={isLoading}>
            <ConfirmationModal isOpen={isOpen} title="Hapus Kategori" description="Konfirmasi aksi" onCancel={() => {setIsOpen(!isOpen)}} onConfirm={onConfirmDelete}/>
            <button onClick={() => router.push('./categories/create')} className="w-1/4 hover:bg-gray-100/70 duration-150 cursor-pointer rounded-xl bg-midground border border-stroke flex mt-4 py-2">

                <div className="max-w-24 max-h-24 h-full w-full flex items-center justify-center">
                    <div className="bg-foreground-2 px-3 py-2.5 flex items-center justify-center m-4 w-fit rounded-xl border border-stroke">
                        <Plus />
                    </div>
                </div>

                <div className="flex-1 flex items-center justify-center space-x-8">
                    <span className="tracking-wide">Kategori Baru</span>
                    <ChevronRight />
                </div>

            </button>
            
            <div className="flex w-full bg-stroke h-0.5 mt-4"></div>

            <div className="grid grid-cols-4 w-full flex-1 gap-2">
                {kategoris.map((kategori, index) => (
                    <div key={kategori.id} className="w-full rounded-xl bg-midground border border-stroke flex mt-4 py-6">

                        <div className="w-1/2 h-full flex-1 flex items-center justify-center">
                            <div className="flex flex-col justify-center items-center space-y-2">
                                <span className="tracking-wide font-semibold">{kategori.category}</span>
                                <span className="tracking-wide text-xs text-gray-400">{kategori.description}</span>
                            </div>
                        </div>

                        <div className="w-1/2 h-full flex items-center justify-center space-x-2">
                            <button onClick={() => {handleDelete(kategori.id)}} className="hover:bg-gray-200 duration-200 cursor-pointer bg-foreground-2 px-1.5 py-1.5 flex items-center justify-center w-fit rounded-xl border border-stroke">
                                <Trash />
                            </button>
                            <button onClick={() => {router.push(`./categories/edit/${kategori.id}`)}} className="hover:bg-gray-200 duration-200 cursor-pointer bg-foreground-2 px-1.5 py-1.5 flex items-center justify-center w-fit rounded-xl border border-stroke">
                                <Edit />
                            </button>
                            <div className="bg-foreground-2 px-1.5 py-1.5 flex items-center justify-center w-fit rounded-xl border border-stroke">
                                <ChevronRight />
                            </div>
                        </div>
                    
                    </div>
                        )
                    )
                }

            </div>
        </MainLayout>
    )
}