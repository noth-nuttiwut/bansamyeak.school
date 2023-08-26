
import Image from "next/image"
import { twMerge } from "tailwind-merge"
type MenuProps = {
    id: string
    name: string
    jobTile: string
    role: string
    imgCss?: string | ""
}


const StaffCard = (props: MenuProps) => {
    const imageCss = twMerge(`card w-[80vw] md:w-[20vw] bg-base-100 shadow-xl`, props.imgCss)
    return (
        <div className="card w-[80vw] md:w-[40vw] bg-base-100 shadow-xl">
            <figure className="bg-gradient-to-r from-green-900 to-green-600 ">
                <img
                    src={`https://drive.google.com/uc?id=${props.id}`}
                    alt={"PF-" + props.id}
                    width={"300"}
                    height={"600"}
                    className={"h-auto w-auto lg:w-[100vw] sm:w-[100vw] lg:h-auto"}
                />
            </figure>
            <div className="card-body items-center bg-gradient-to-r from-orange-500 to-orange-300">
                <h2 className="card-title text-center sm:text-lg lg:text-xl"> {props.name.replace(".jpg", "")} </h2>
                <p className="text-center">ตำแหน่ง {props.jobTile}</p>
                <p className="text-center">{props.role}</p>
            </div>
        </div>

    )
}

export default StaffCard