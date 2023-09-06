import Image from "next/image";
import BannerImage from "@/public/SchoolNameBanner.jpg"
import Link from "next/link";
import { twMerge } from "tailwind-merge";

import Breadcrumbs from "@/components/Breadcrumbs"

type MenuProps = {
    title: string
    imageTitle?: string
    customBanner?: any
    bgGradient?: string
    customGoto?: string
}

const ITABanner = (props: MenuProps) => {
    const divClass = twMerge(`flex pt-8 xl:pt-4 sm:h-[50vh] md:h-[35vh] bg-gradient-to-r from-violet-900 via-purple-600 to-pink-50`, props.bgGradient)
    const titleDiv = twMerge(`flex text-xl text-white p-4 sm:p-1 w-full justify-center break-words sm: text-center bg-gradient-to-r from-violet-900 via-purple-600 to-pink-50`, props.bgGradient)
    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <Link href={props.customGoto ?? "/ITA"}>
                    <div className={divClass}>
                        <Image
                            src={props.customBanner ?? BannerImage}
                            alt={props.imageTitle ?? "ita-banner"}
                            style={{ objectFit: "scale-down"}}
                            width={"2560"}
                            height={"600"}
                        />
                    </div>
                </Link>

                <div className={props.title == "" ? titleDiv : "flex bg-orange-500 text-xl text-white p-4 sm:p-1 w-full justify-center break-words sm: text-center"}>
                    {props.title}
                </div>

            </div>
            <div className="w-full flex justify-start items-start px-24 xs:px-4 md:px-8 lg:px-10">
                <Breadcrumbs />
            </div>
        </>
    );
};

export default ITABanner;