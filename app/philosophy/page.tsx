
import ITABanner from "@/components/ITA/ITABanner";
export default function Philosophy() {
  return (
    <div>
      <div className="flex flex-col items-center gap-10 bg-gradient-to-b from-purple-300 to-slate-50">
        <ITABanner title="" />
        <div className="flex flex-col justify-center items-center py-14 gap-10">
          <div className="p-8 bg-pink-600 text-white font-bold rounded-md text-2xl">
            ปรัชญา โรงเรียนบ้านสามแยก
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="p-8 bg-pink-400 text-white font-bold rounded-md text-xl">
              ปญฺญา นรนํ รตนํ

            </div>
            <div className="p-8 bg-pink-300 text-black font-bold rounded-md">
              ปัญญาเป็นแก้วของนรชน
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
