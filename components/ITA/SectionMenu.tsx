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
    text-white text-xl text-center font-bold p-8 bg-gradient-to-r 
     from-violet-700 to-pink-500 w-80 h-40 break-words rounded-r-xl rounded-b-xl`, props?.bgGradient ?? "")
    
    const codeCss = `flex justify-center items-center
    text-white text-xl text-center font-bold p-8 bg-slate-700 w-8 h-8 rounded-l-xl`
    return (
        <div>
            <div className="divider text-lg">{props.sectionName}</div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {
                    props.items.map(item => {
                        return (
                            <Link href={item.goto} key={item.code} >
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