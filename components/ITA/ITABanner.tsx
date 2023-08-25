"use client"
import Image from "next/image";
import BannerImage from "@/public/SchoolNameBanner.jpg"
import Link from "next/link";
import { twMerge } from "tailwind-merge";
type MenuProps = {
    title: string
    imageTitle? : string
    customBanner? : any
    bgGradient? : string
}

const ITABanner = (props: MenuProps) => {
    const divClass = twMerge(`flex sm:h-[50vh] md:h-[35vh] bg-gradient-to-r from-violet-900 via-purple-600 to-pink-50`, props.bgGradient)
    return (
        <div className="flex flex-col items-center justify-center">
            <Link href={"/ITA/home"}>
                <div className={divClass}>
                    <Image
                        src={ props.customBanner ?? BannerImage}
                        alt={ props.imageTitle ?? "ita-banner"}
                        style={{ objectFit: "scale-down" }}
                    />
                </div>
            </Link>

            <div className="flex bg-orange-500 text-xl text-white p-4 w-full justify-center break-words sm: text-center">
                {props.title}
            </div>
        </div>
    );
};

export default ITABanner;