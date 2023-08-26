
import ITABanner from "@/components/ITA/ITABanner"

import O1Banner from "@/public/ITABanner/B-O18.jpg"
import Link from "next/link"

export default async function O18Page() {
  return (
    <div className="flex flex-col items-center gap-4 justify-center w-full bg-gradient-to-b from-purple-300 to-slate-100 py-6">
      <ITABanner title="" customBanner={O1Banner} />

      <Link href={"http://122.154.112.21/amssplus/"} target="_blank">
        <div className="flex justify-center items-center link gap-6 text-xl font-bold text-white w-[70vw] md:w-[60vw] xl:w-[40vw] h-40 p-6 bg-gradient-to-r from-orange-700 to-yellow-500 rounded-xl">
        AMSS++


        </div>
      </Link>

      <Link href={"http://chon2.ksom.net/money/index.php"} target="_blank">
        <div className="flex justify-center items-center link gap-6 text-xl font-bold text-white w-[70vw] md:w-[60vw] xl:w-[40vw] h-40 p-6 bg-gradient-to-r from-green-700 to-green-500 rounded-xl">
        ระบบ E-Money


        </div>
      </Link>

    </div>
  )
}

