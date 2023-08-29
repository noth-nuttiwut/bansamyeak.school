import ITABanner from "@/components/ITA/ITABanner"
import { getFolderByName } from "@/libs/googleDrive"
import Banner from "@/public/SchoolNameBanner.jpg"
import Link from "next/link"


export default async function PhotosPage() {
    const allFolder = await getFolderByName("ภาพกิจกรรม")

    return (
        <div className="flex flex-col items-center gap-4 justify-center w-full bg-gradient-to-b from-purple-200 to-slate-100">
            <ITABanner title="" customBanner={Banner} customGoto="/" />
            <div className="flex flex-wrap gap-6 p-8 sm:p-4 md:p-10 lg:p-20 xl:p-20 justify-start items-center">
                {
                    allFolder 
                    ? allFolder.map((fd, i) => {
                        return (
                            <Link href={`/gallery/${fd?.name}`} key={fd?.id}>
                                <div className="flex bg-gradient-to-r text-slate-900 from-yellow-500  to-yellow-300 h-40 w-80 p-8 text-center rounded-lg justify-center items-center font-bold break-words">
                                    {fd?.name}
                                </div>
                            </Link>
                        )
                    }) 
                    : <></>
                }

            </div>
        </div>
    )
}

export const revalidate = 300