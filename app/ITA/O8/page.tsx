import ITABanner from "@/components/ITA/ITABanner"
import O8Banner from "@/public/ITABanner/B-O8.jpg"
import GGFormiFrame from "@/components/GGFormiFrame"

// "https://docs.google.com/forms/d/e/1FAIpQLSd6PrtNT2ZN4GmG92yjgtUmKpNqIhWnS66JNRpelyCID_7AKA/viewform?embedded=true" 
export default async function O8Page() {

  return (
    <div className="flex flex-col items-center gap-4 justify-center w-full bg-gradient-to-b from-red-200 to-red-100">
      <ITABanner title="" customBanner={O8Banner} bgGradient="bg-gradient-to-r from-red-900 via-red-600 to-red-50"/>
      <div className="flex flex-col gap-10 py-10">
        <GGFormiFrame url="https://docs.google.com/forms/d/e/1FAIpQLScK8lEpJIA1eps9Qt-p9cEdvxsYerkS5nQcBa6_wGnDSLW9Ig/viewform?embedded=true"
        name="Q&A"
        />

      </div>
     

    </div>
  )
}