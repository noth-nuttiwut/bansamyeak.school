import ITABanner from "@/components/ITA/ITABanner"
import O8Banner from "@/public/ITABanner/B-O8.jpg"

export default async function O8Page() {

  return (
    <div className="flex flex-col items-center gap-4 justify-center w-full bg-gradient-to-b from-red-200 to-red-100">
      <ITABanner title="" customBanner={O8Banner} bgGradient="bg-gradient-to-r from-red-900 via-red-600 to-red-50"/>

     

    </div>
  )
}