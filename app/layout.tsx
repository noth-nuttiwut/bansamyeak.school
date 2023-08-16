import './globals.css'
import type { Metadata } from 'next'
import SideBar from '@/components/SideBar'
import SYFooter from '@/components/SYFooter'
import Navbar from '@/components/NavBar'
import CarouselBanner from '@/components/CarouselBanner'


export const metadata: Metadata = {
  title: 'โรงเรียนบ้านสามแยก อำเภอเกาะจันทร์',
  description: `40 หมู่ 5 ตำบล ท่าบุญมี อำเภอ เกาะจันทร์ จังหวัด ชลบุรี 20240 เขตพื้นที่การศึกษา ที่ 2`,
  viewport: { width: "device-width", initialScale: 1 }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="corporate">
      <body className="flex flex-col gap-2">
        <Navbar />
        <div className="flex justify-center">
          <CarouselBanner />
        </div>
        <div className='flex justify-center flex-wrap'>
          <SideBar />
          {children}
        </div>
        < SYFooter />
      </body>
    </html>
  )
}
