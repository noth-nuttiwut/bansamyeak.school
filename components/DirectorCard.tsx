import Image from "next/image"
import DirectorP from "@/public/director-profile.png"

export default function DirectorCard() {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">

            <div className="card-body items-center text-center">
                <div className="flex bg-orange-500 font-bold w-full justify-center p-4 text-white">
                    <div>ผู้บริหาร</div>
                </div>

                <figure className="px-10">
                    <Image
                        src={DirectorP}
                        alt="Director profile"
                    />
                </figure>
                <p>นางสาวสวิตตา  ประเสริฐสาร</p>
            </div>

        </div>
    )
}