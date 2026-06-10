'use client'
import { useParams } from "next/navigation"
import MainLayout from "@/app/components/mainLayout"
import { editParentProductsName } from "@/app/services/parentProducts"
import BackButton from "@/app/components/backButton"
import { useState } from "react"
import { useRouter } from "next/navigation"
export default function EditStockParentName() {
    const { name } = useParams()
    const router = useRouter()
    const decodedName = decodeURIComponent(String(name))
    const [inputVal,setInputVal] = useState(decodedName)
    const [message, setMessage] = useState("")
    const handleSubmit = async() => {
        const result = await editParentProductsName(decodedName, inputVal)
        setMessage(result)
        if (result === "berhasil") {
            setTimeout(() => {
                router.push(`/pages/stockItems/stockParents/stockParentsByType/${inputVal}`)
            },1000)
        }
    }
    return (
        <MainLayout 
            button={<BackButton routeTo={`/pages/stockItems/stockParents/stockParentsByType/${name}`} />}
            title={`EDIT NAMA TIPE`}
        >
            <div className="w-full h-screen rounded-xl bg-midground border border-stroke flex justify-center mt-4 py-4">

                <div className="h-fit w-1/3 bg-white px-3 py-5 items-center justify-center rounded-xl border border-stroke space-y-2">
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="nama_tipe">Nama Tipe</label>                   
                        <input required value={inputVal} onChange={(e) => setInputVal(e.target.value)} placeholder="Masukan nama nama tipe" type="text" className=" placeholder:text-sm outline-stroke focus:outline-1 outline-none py-2 px-2 border border-stroke rounded-xl" />
                    </div>
                    
                    <div className="flex flex-col w-full justify-center  mt-3 space-y-4">
                        <span className="text-center">{message}</span>
                        <button onClick={() => handleSubmit()} className="p-2 bg-black hover:opacity-70 duration-200 cursor-pointer text-white rounded-xl">
                            Simpan
                        </button>
                    </div>
                </div>

            </div>
        </MainLayout>
    )
}