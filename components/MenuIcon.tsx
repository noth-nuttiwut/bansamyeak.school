
import Image from "next/image"
import Link from "next/link"

type MenuProps = {
    goTo: string,
    iconUrl: any,
    iconAlt: string
    menu: string
    width?: number 
    height?: number
}

export default function MenuIcon(props: MenuProps) {
    return (
        <div className="flex flex-col gap-2">
            <div className="card shadow-xl p-4 bg-orange-100 flex justify-center items-center">
                <Link href={props.goTo} target="_blank">
                    <figure className="flex justify-center items-center">
                        <Image src={props.iconUrl} alt={props.iconUrl} className="rounded-xl" width={props.width ?? 100} height={props.height ?? 100} />
                    </figure>
                </Link>

            </div>
            <div className="text-black text-center p-2 bg-orange-200 rounded-md">
                {props.menu}
            </div>
        </div>
    )
}