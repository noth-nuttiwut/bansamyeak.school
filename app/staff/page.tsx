import ITABanner from "@/components/ITA/ITABanner"
import SchoolBanner from "@/public/SchoolNameBanner.jpg"
import Image from "next/image"

export default async function StaffPage() {
    const image = 
    {
        id: "1Itn9SEUIcLzKCx_Sl98xFLgT4L3_JCn6",
        name: "Staff"
    }
    
    return (
        <div className="flex flex-col items-center gap-4 justify-center w-full bg-gradient-to-b from-purple-300 to-slate-100">
            <ITABanner title="" customBanner={SchoolBanner} />

            <div id={image.id} className="carousel-item w-full justify-center py-4" key={image.id}>
                <Image
                    src={`https://drive.google.com/uc?id=${image.id}`}
                    alt={"StaffPage-" + image.name}
                    width="100"
                    height="100"
                    sizes="60vw"
                    className="w-[80vw] md:w-[60vw] lg:w-[60vw] h-auto"
                />
            </div>


        </div>
    )
}