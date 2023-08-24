import ITABanner from "@/components/ITA/ITABanner";
import Image from "next/image";
import BoardImage from "@/public/BoardOfDirectors.jpg"

export default function Members() {
  return (
    <div>
      <div className="flex flex-col items-center gap-10 bg-gradient-to-b from-purple-300 to-slate-50">
        <ITABanner title="" />

        <div className="p-8 bg-pink-600 text-white font-bold rounded-md text-2xl">
          รายชื่อคณะผู้บริหาร
        </div>

        <div className="flex justify-center py-8">
          <Image
            src={BoardImage}
            alt="school emblem"
            style={{ objectFit: "scale-down", height: "70vh" }}
          >
          </Image>
        </div>
      </div>
    </div>
  )
}