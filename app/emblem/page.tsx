
import ITABanner from "@/components/ITA/ITABanner";
import Image from "next/image";
import SchoolEmblem from "@/public/logo.gif"

export default function History() {
  return (
    <div>
      <div className="flex flex-col items-center gap-10 bg-gradient-to-b from-purple-300 to-slate-50">
        <ITABanner title="" />

        <div className="p-8 bg-pink-600 text-white font-bold rounded-md text-2xl">
          ปรัชญา โรงเรียนบ้านสามแยก
        </div>

        <div className="flex justify-center min-h-screen">
          <Image
            src={SchoolEmblem}
            alt="school emblem"
            style={{ objectFit: "scale-down", height: "30vh" }}
          >
          </Image>
        </div>
      </div>
    </div>
  )
}
