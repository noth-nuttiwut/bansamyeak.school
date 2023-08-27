"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"

const Breadcrumbs = () => {
    const pathname = usePathname()

    const paths = pathname.split("/")

    return (
        <div className="text-sm breadcrumbs">
            <ul>
                {
                    paths.map((p, i) => {
                        return <li key={i+999}><Link href={
                            i == 0 ? 
                            "/" : 
                            decodeURI(p).startsWith("O") ?
                            `/ITA/${decodeURI(p)}`
                            :`/${decodeURI(p)}`
                        }> 
                        {
                        i == 0 ? 
                        "home" : decodeURI(p)
                        } </Link></li>
                    })
                }
            </ul>
        </div>
    )
}

export default Breadcrumbs