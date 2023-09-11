import Image from "next/image"
import DirectorP from "@/public/director-profile.png"

export default function DirectorCard() {
    return (
        <div className="card bg-slate-100 shadow-xl">
            <div className="card-body items-center text-center">
                <div className="flex bg-orange-500 font-bold w-full justify-center p-4 text-white">
                    <div>ผู้บริหาร</div>
                </div>

                <figure className="px-10">
                    <Image
                        src={DirectorP}
                        alt="DirectorP"
                        width="0"
                        height="0"
                        sizes="20vw"
                        className="w-[40vw] md:w-[35vw] lg:w-[25vw] xl:w-[25vw] 2xl:w-[15vw] h-auto"
                    />
                </figure>
                <div className="bg-orange-500 p-4">
                    <p>นางสาวสวิตตา  ประเสริฐสาร</p>
                    <p className="text-gray-700">ผู้อำนวยการโรงเรียนบ้านสามแยก</p>
                </div>
            </div>

        </div>
    )
}