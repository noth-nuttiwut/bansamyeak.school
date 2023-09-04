import ITABanner from "@/components/ITA/ITABanner"
import O1Banner from "@/public/ITABanner/B-O41.jpg"
import { getFolderByName } from "@/libs/googleDrive"
import Link from "next/link"

export default async function O41Page() {
  const allFolder = await getFolderByName("O41 ")
  const newOrderImages = ["1", "2", "3", "4", "5"].map(id => allFolder?.find(el => el.name?.startsWith(id)))
  return (
    <div className="flex flex-col items-center gap-4 justify-center w-full bg-gradient-to-b from-red-200 to-red-100">
      <ITABanner title="" customBanner={O1Banner} bgGradient="bg-gradient-to-r from-red-900 via-red-600 to-red-50"/>

      <div className="flex flex-wrap gap-6 p-8 sm:p-4 md:p-10 lg:p-20 xl:p-20 justify-center items-center">
        {
          newOrderImages.map((fd, i) => {
            return (
              <Link href={`/ITA/O41/${fd?.name}`} key={fd?.id}>
                  <div className="flex bg-gradient-to-r text-slate-900 from-yellow-500  to-yellow-300 h-40 w-80 p-8 text-center rounded-lg justify-center items-center font-bold break-words">
                    { fd?.name }
                  </div>
              </Link>
            )
          })
        }

      </div>
      

    </div>
  )
}

export const revalidate = 300

