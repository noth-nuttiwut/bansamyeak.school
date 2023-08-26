import Image from "next/image"
import Link from "next/link"
import Logo from "@/public/logo.png"

export default function Navbar() {
    return (

        <div className="navbar bg-orange-500 sticky top-0 z-[5000] w-full">
            <div className="navbar-start">
                <div className="dropdown bg-orange-500">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-white rounded-box w-64  bg-orange-600">
                        <li className="p-2">
                            <Link href="/">หน้าหลัก</Link>
                        </li>
                        <li className="p-2">
                            <Link href="/board-of-directors">คณะผู้บริหาร</Link>
                        </li>
                        <li>
                            <a>ข้อมูลพื้นฐาน</a>
                            <ul className="p-2 ">
                                <li><Link href="/history"> ประวัติโรงเรียน</Link></li>
                                <li><Link href="/emblem"> ตราสัญลักษณ์</Link></li>
                                <li><Link href="/philosophy"> ปรัชญาโรงเรียน</Link></li>
                                <li><Link href="/vision-mission"> วิสัยทัศน์และพันธกิจ</Link></li>
                            </ul>
                        </li>
                        <li className="p-2">
                            <a>ข่าวประชาสัมพันธ์</a>
                        </li>
                        <li className="p-2">
                            <a>ภาพกิจกรรม</a>
                        </li>
                    </ul>
                </div>


                <Link href="/" className="btn btn-ghost font-bold text-lg md:text-lg lg:text-2xl xl:text-2xl text-white">
                    <Image
                        src={Logo}
                        alt="School Logo"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-[10vw] lg:w-[40px] md:w-[40px] h-auto"
                    />
                    โรงเรียนบ้านสามแยก

                </Link>

            </div>
            <div className="navbar-center hidden lg:flex xl:navbar-end">
                <ul className="menu menu-horizontal px-1 text-white">
                    <li><Link href="/">หน้าหลัก</Link></li>
                    <li><Link href="/board-of-directors">คณะผู้บริหาร</Link></li>
                    <li tabIndex={0}>
                        <details >
                            <summary>ข้อมูลพื้นฐาน</summary>
                            <ul className="p-2 bg-orange-400 w-40">
                                <li className="hover:bg-orange-500"><Link href="/history"> ประวัติโรงเรียน </Link></li>
                                <li className="hover:bg-orange-500"><Link href="/emblem"> ตราสัญลักษณ์</Link></li>
                                <li className="hover:bg-orange-500"><Link href="/philosophy"> ปรัชญาโรงเรียน</Link></li>
                                <li className="hover:bg-orange-500"><Link href="/vision-mission"> วิสัยทัศน์และพันธกิจ</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>ข่าวประชาสัมพันธ์</a></li>
                    <li><a>ภาพกิจกรรม</a></li>
                </ul>
            </div>
    
        </div>

    )
}