
import Image from "next/image"
import Logo from "@/public/logo.png"
export default function Navbar() {
    return (

        <div className="navbar bg-orange-500">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-orange-400 text-white rounded-box w-64">
                        <li className="p-2">
                            <a>หน้าหลัก</a>
                        </li>
                        <li className="p-2">
                            <a>คณะผู้บริหาร</a>
                        </li>
                        <li className="p-2">
                            <a>ข่าวประชาสัมพันธ์</a>
                        </li>
                        <li className="p-2">
                            <a>ภาพกิจกรรม</a>
                        </li>
                        <li className="p-2">
                            <a>ถาม-ตอบ(Q&A)</a>
                        </li>
                        <li className="p-2">
                            <a>ติดต่อเรา</a>
                        </li>
                    </ul>
                </div>
                <div className='flex justify-center items-center'>
                    <Image
                        src={Logo}
                        alt="Footer Logo"
                        width={60}
                        height={60}
                    />
                    <a className="btn btn-ghost font-bold text-2xl text-white">โรงเรียนบ้านสามแยก</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white">
                    <li><a>หน้าหลัก</a></li>
                    <li><a>คณะผู้บริหาร</a></li>
                    <li><a>ข่าวประชาสัมพันธ์</a></li>
                    <li><a>ภาพกิจกรรม</a></li>
                    <li><a>ถาม-ตอบ(Q&A)</a></li>
                    <li><a>ติดต่อเรา</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-orange-500 border-orange-500 text-white"> เข้าสู่ระบบ</a>
            </div>
        </div>

    )
}