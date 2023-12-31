"use client"
import Link from "next/link"
import { twMerge } from 'tailwind-merge'
type MenuType = {
    code: string
    title: string
    goto: string

}

type VideoSectionProps = {
    sectionName: string
    bgGradient?: string
    items: MenuType[]
}

export default function VideoItem(props: VideoSectionProps) {

    const menuCss = twMerge(`card w-60 h-28 rounded-md shadow-xl text-white`, props?.bgGradient ?? "")

    const codeCss = `flex justify-center items-center
    text-white text-xl text-center font-bold p-6 bg-slate-700 w-6 h-6 rounded-l-xl`
    return (
        <div>
            <div className="divider text-base text-slate-600 font-semibold sm:text-lg md:text-lg xl:text-lg 2xl:text-xl ">{props.sectionName}</div>
            <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
                {
                    props.items.map((item) => {
                        return (
                            <Link key={item.goto} href={item.goto} className="bg-white text-black" >
                                <div className={menuCss}>
                                    <div className={"card-body"}>
                                        <div className="text-gray-100 text-lg text-center drop-shadow-md font-semibold"> {item.title} </div>
                                    </div>
                                </div>
                            </Link>
                        )

                    })
                }
            </div>
            <div className="divider"></div>
        </div >
    );
}
