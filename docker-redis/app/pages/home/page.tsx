import MainLayout from "@/app/components/mainLayout"
import { Plus, ChevronRight, Edit, Trash } from "lucide-react"
export default function Home(){
    type Kategori = {
        namaKategori: String,
        deskripsi: String
    }

    const kategoris: Kategori[] = [
        {namaKategori : "JB", deskripsi: "unit jadi baru"},
        {namaKategori : "2ND", deskripsi: "unit bekas"},
        {namaKategori : "Batangan", deskripsi: "unit tanpa kelengkapan"},
    ]

    return(
        <MainLayout title = "Dashboard">
            <div className="w-full h-1/2 rounded-xl bg-midground border border-stroke flex mt-4 py-2">

                <div className="max-w-24 max-h-24 h-full w-full flex items-center justify-center">
                    <div className="bg-foreground-2 px-3 py-2.5 flex items-center justify-center m-4 w-fit rounded-xl border border-stroke">
                        <Plus />
                    </div>
                </div>

            </div>
            
            
        </MainLayout>
    )
}