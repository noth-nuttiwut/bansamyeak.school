"use client"
import Image from "next/image";
import BannerImage from "@/public/SchoolNameBanner.jpg"
import Link from "next/link";

type MenuProps = {
    title: string
}

const ITABanner = (props: MenuProps) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <Link href={"/ITA/home"}>
                <div className="flex h-[35vh] bg-gradient-to-r from-violet-600 to-slate-100">
                    <Image
                        src={BannerImage}
                        alt="ita-banner"
                        style={{ objectFit: "scale-down" }}
                    />
                </div>
            </Link>

            <div className="flex  bg-orange-500 text-xl text-white py-4 w-full justify-center break-words ">
                {props.title}
            </div>
        </div>
    );
};

export default ITABanner;