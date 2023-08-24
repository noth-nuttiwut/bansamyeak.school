import './globals.css'
import "react-calendar/dist/Calendar.css";
import "@/app/MiniCalendar.css";

import type { Metadata } from 'next'
import SYFooter from '@/components/SYFooter'
import Navbar from '@/components/NavBar';



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
      <body>
        <Navbar />
        <div className='flex justify-center items-center'>
          {children}
        </div>
        < SYFooter />
      </body>
    </html>
  )
}
