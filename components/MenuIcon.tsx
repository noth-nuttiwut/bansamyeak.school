
import Image from "next/image"
import Link from "next/link"

type MenuProps = {
    goTo: string,
    iconUrl: any,
    iconAlt: string
}

export default function MenuIcon(props: MenuProps) {
    return (
        <div className="card shadow-xl p-4 bg-orange-100">
            <Link href={props.goTo} target="_blank">
                <figure className="flex justify-center items-center">
                    <Image src={props.iconUrl} alt={props.iconUrl} className="rounded-xl" width={80} height={80} />
                </figure>
            </Link>
        </div>
    )
}