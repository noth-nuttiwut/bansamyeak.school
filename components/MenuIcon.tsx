
import Image from "next/image"
import Link from "next/link"
import { twMerge } from "tailwind-merge"

type MenuProps = {
    goTo: string,
    iconUrl: any,
    iconAlt: string
    menu: string
    imageCss?: string
}

export default function MenuIcon(props: MenuProps) {
    const imgCss = twMerge("w-full h-auto", props.imageCss)
    return (
        <div className="flex flex-col gap-2">
            <div className="card shadow-xl p-4 bg-orange-100 flex justify-center items-center">
                <Link href={props.goTo} target="_blank">
                    <figure className="flex justify-center items-center">
                        <Image
                            src={props.iconUrl}
                            alt={props.iconAlt}
                            width="0"
                            height="0"
                            sizes="100vw"
                            className={imgCss}
                        />
                    </figure>
                </Link>

            </div>
            <div className="text-black text-center p-2 bg-orange-200 rounded-md">
                {props.menu}
            </div>
        </div>
    )
}