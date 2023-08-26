import './globals.css'
import "react-calendar/dist/Calendar.css";
import "@/app/MiniCalendar.css";

import type { Metadata } from 'next'
import SYFooter from '@/components/SYFooter'
import Navbar from '@/components/NavBar';
import Head from 'next/head';



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
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <div className='flex flex-col'>
          <Navbar />
          {
            children
          }
          <div className='items-end'>
          < SYFooter />
          </div>
        </div>

      </body>
    </html>
  )
}
