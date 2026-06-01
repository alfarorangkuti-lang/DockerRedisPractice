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
        <MainLayout title = "Daftar Kategori">
            <div className="w-1/4 rounded-xl bg-midground border border-stroke flex mt-4 py-2">

                <div className="max-w-24 max-h-24 h-full w-full flex items-center justify-center">
                    <div className="bg-foreground-2 px-3 py-2.5 flex items-center justify-center m-4 w-fit rounded-xl border border-stroke">
                        <Plus />
                    </div>
                </div>

                <div className="flex-1 flex items-center justify-center space-x-8">
                    <span className="tracking-wide">Kategori Baru</span>
                    <ChevronRight />
                </div>

            </div>
            
            <div className="flex w-full bg-stroke h-0.5 mt-4"></div>

            <div className="grid grid-cols-4 w-full flex-1 gap-2">

                {kategoris.map((kategori, index) => (
                    <div key={index} className="w-full rounded-xl bg-midground border border-stroke flex mt-4 py-6">

                        <div className="w-1/2 h-full flex-1 flex items-center justify-center">
                            <div className="flex flex-col justify-center items-center space-y-2">
                                <span className="tracking-wide font-semibold">{kategori.namaKategori}</span>
                                <span className="tracking-wide text-xs text-gray-400">{kategori.deskripsi}</span>
                            </div>
                        </div>

                        <div className="w-1/2 h-full flex items-center justify-center space-x-2">
                            <div className="bg-foreground-2 px-1.5 py-1.5 flex items-center justify-center w-fit rounded-xl border border-stroke">
                                <Trash />
                            </div>
                            <div className="bg-foreground-2 px-1.5 py-1.5 flex items-center justify-center w-fit rounded-xl border border-stroke">
                                <Edit />
                            </div>
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