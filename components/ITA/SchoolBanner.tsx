"use client"
import Image from "next/image";
import BannerImage from "@/public/SchoolInfoBanner.jpg"
import Link from "next/link";

type MenuProps = {
    title: string
}

const SchoolBanner = (props: MenuProps) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <Link href={"/history"}>
                <div className="flex h-[30vh] bg-gradient-to-r from-rose-950 via-red-600 to-red-50">
                    <Image
                        src={BannerImage}
                        alt="ita-banner"
                        style={{ objectFit: "scale-down" }}
                    />
                </div>
            </Link>
        </div>
    );
};

export default SchoolBanner;