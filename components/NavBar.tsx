
import Image from "next/image"
import Link from "next/link"
import Logo from "@/public/logo.png"

export default function Navbar() {
    return (

        <div className="navbar bg-orange-500 sticky top-0 z-[5000]">
            <div className="navbar-start">
                <div className="dropdown bg-orange-500">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-white rounded-box w-64  bg-orange-600">
                        <li className="p-2">
                            <Link href="/">หน้าหลัก</Link>
                        </li>
                        <li className="p-2">
                            <a>คณะผู้บริหาร</a>
                        </li>
                        <li>
                            <a>ข้อมูลพื้นฐาน</a>
                            <ul className="p-2 ">
                                <li><a> ประวัติโรงเรียน</a></li>
                                <li><a> ตราสัญลักษณ์</a></li>
                                <li><a> ปรัชญาโรงเรียน</a></li>
                                <li><a> วิสัยทัศน์และพันธกิจ</a></li>
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
                <Link href="/">
                    <div className='flex justify-center items-center'>
                        <Image
                            src={Logo}
                            alt="Footer Logo"
                            width={60}
                            height={60}
                        />
                        <a className="btn btn-ghost font-bold text-2xl text-white">โรงเรียนบ้านสามแยก</a>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white">
                    <li><Link href="/">หน้าหลัก</Link></li>
                    <li><a>คณะผู้บริหาร</a></li>
                    <li >
                        <details >
                            <summary>ข้อมูลพื้นฐาน</summary>
                            <ul className="p-2 bg-orange-400 w-40">
                                <li className="hover:bg-orange-500"><a> ประวัติโรงเรียน</a></li>
                                <li className="hover:bg-orange-500"><a> ตราสัญลักษณ์</a></li>
                                <li className="hover:bg-orange-500"><a> ปรัชญาโรงเรียน</a></li>
                                <li className="hover:bg-orange-500"><a> วิสัยทัศน์และพันธกิจ</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>ข่าวประชาสัมพันธ์</a></li>
                    <li><a>ภาพกิจกรรม</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn rounded-full bg-orange-500 border-orange-500 text-white hover:bg-orange-400 hover:border-orange-400 hover:text-slate-800"> ?</a>
            </div>
        </div>

    )
}