'use client'
import MainLayout from "@/app/components/mainLayout"
import BackButton from "@/app/components/backButton"
import { useState, useEffect } from "react"
import { editCategory, getCategoryById } from "@/app/services/categories"
import { useRouter } from "next/navigation"
import { useParams } from "next/navigation"
export default function EditCategory(){
    
    const router = useRouter()
    const { id } = useParams()
    const [namaKategori, setNamaKategori] = useState<string | undefined>('')
    const [deskripsiKategori, setDeskripsiKategori] = useState<string | undefined>('')
    const [idCategory, setIdCategory] = useState(0)
    const [message, setMessage] = useState<string | undefined>(undefined)

    const getDataById = async() => {
        const data = await getCategoryById(Number(id))
        setNamaKategori(data.category)
        setDeskripsiKategori(data.description)
        setIdCategory(data.id)
    }

    useEffect(() => {
        getDataById()
    }, [])

    const handleSubmit = async() => {
        const result = await editCategory(idCategory, namaKategori,deskripsiKategori)
        setMessage(result)
        if (result === 'berhasil') {
                setTimeout(() => {
                router.push('/pages/stockItems/categories')
            }, 1000)
        }
    }

    return(
        <MainLayout button = {<BackButton routeTo="/pages/stockItems/categories" />} title = "Kategori Baru">
            <div className="w-full h-screen rounded-xl bg-midground border border-stroke flex justify-center mt-4 py-4">
                <div className="h-fit w-1/3 bg-white px-3 py-5 items-center justify-center rounded-xl border border-stroke space-y-2">
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="kategori">Kategori</label>                   
                        <input required value={namaKategori} onChange={(e) => {setNamaKategori(e.target.value)}} placeholder="Masukan nama kategori" type="text" className=" placeholder:text-sm outline-stroke focus:outline-1 outline-none py-2 px-2 border border-stroke rounded-xl" />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="kategori">Deskripsi</label>                   
                        <input required value={deskripsiKategori} onChange={(e) => {setDeskripsiKategori(e.target.value)}} placeholder="Masukan deskripsi kategori" type="text" className=" placeholder:text-sm outline-stroke focus:outline-1 outline-none py-2 px-2 border border-stroke rounded-xl" />
                    </div>
                    
                    <div className="flex flex-col w-full justify-center  mt-3 space-y-4">
                        <span className="text-center">{message}</span>
                        <button onClick={handleSubmit} className="p-2 bg-black hover:opacity-70 duration-200 cursor-pointer text-white rounded-xl">
                            Simpan
                        </button>
                    </div>
                </div>

            </div>
            
            
        </MainLayout>
    )
}