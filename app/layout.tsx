import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import BannerPic from '../public/Banner-school_0.jpg'
import SideBar from '@/components/SideBar'
import SYFooter from '@/components/SYFooter'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'โรงเรียนบ้านสามแยก อำเภอเกาะจันทร์',
  description: `40 หมู่ 5 ตำบล ท่าบุญมี อำเภอ เกาะจันทร์ จังหวัด ชลบุรี 20240 เขตพื้นที่การศึกษา ที่ 2`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="corporate">
      <body className="flex flex-col">
        <div className="flex justify-center">
          <Link href={"/"}>
            <Image
              src={BannerPic}
              alt="Top Banner"
              priority={true}
              height={330}
            />
          
          </Link>


        </div>

        <div className='flex justify-center'>
          <div className=''>
            <SideBar />
          </div>
          <div className=''>
            {children}
          </div>
        </div>
        < SYFooter />
      </body>
    </html>
  )
}
