import ITABanner from "@/components/ITA/ITABanner"
import O28Banner from "@/public/ITABanner/B-O28.jpg"
import GGFormiFrame from "@/components/GGFormiFrame"


export default async function O28Page() {

  return (
    <div className="flex flex-col items-center gap-4 justify-center w-full bg-gradient-to-b from-blue-100 to-slate-100">
      <ITABanner title="" customBanner={O28Banner} bgGradient="bg-gradient-to-r from-blue-900 via-sky-600 to-slate-50"/>
      <div className="flex flex-col gap-10 py-10">
        <GGFormiFrame url="https://docs.google.com/forms/d/e/1FAIpQLSd6PrtNT2ZN4GmG92yjgtUmKpNqIhWnS66JNRpelyCID_7AKA/viewform?embedded=true"
        name="Q&A"
        />

      </div>
     

    </div>
  )
}