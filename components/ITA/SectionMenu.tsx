"use client"
import Link from "next/link"
import { twMerge } from 'tailwind-merge'
type MenuType = {
    code: string
    title: string
    goto: string

}

type SectionProps = {
    sectionName: string
    bgGradient?: string
    items: MenuType[]
}

const SectionMenu = (props: SectionProps) => {

    const menuCss = twMerge(`flex justify-center items-center
    text-white text-lg lg:text-xl text-center font-bold p-8 bg-gradient-to-r 
     from-violet-700 to-pink-500 w-60 h-30 lg:w-80 lg:h-40 break-words rounded-r-xl rounded-b-xl`, props?.bgGradient ?? "")
    
    const codeCss = `flex justify-center items-center
    text-white text-xl text-center font-bold p-6 bg-slate-700 w-6 h-6 rounded-l-xl`
    return (
        <div className="px-10">
            <div className="divider text-base text-slate-600 font-semibold sm:text-lg md:text-lg xl:text-lg 2xl:text-xl">{props.sectionName}</div>
            <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
                {
                    props.items.map(item => {
                        return (
                            <Link href={item.goto} key={item.title} >
                                <div className="flex ">
                                    <div className={codeCss}>
                                        {item.code}
                                    </div>
                                    <div className={menuCss}>
                                        {item.title}
                                    </div>
                                </div>

                            </Link>

                        )

                    })
                }
            </div>
            <div className="divider"></div>
        </div>
    );
};

export default SectionMenu;