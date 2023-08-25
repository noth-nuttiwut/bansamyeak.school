
import Image from "next/image"

import VideoCard from "@/components/VideoCard"
import MenuIcon from "@/components/MenuIcon"
import SideBar from '@/components/SideBar'
import SimpleMap from '@/components/SimpleGGMap';

import iconCPE from "@/public/CPE.png"
import iconESerice from "@/public/e-Service.png"
import iconEbook from "@/public/ebook-icon.png"
import iconAMSS from "@/public/AMSS-1.png"
import iconFacebook from "@/public/facebook.png"
import iconCamera from "@/public/Camera.png"
import iconITA from "@/public/ITALogo_2.png"
import Banner1 from "@/public/Banner-ITA.jpg"


export default function Home() {
  return (
    <div className="flex flex-col gap-2 justify-center bg-gradient-to-t from-orange-100 to-slate-100">
      <div className="flex justify-center items-center">
        <Image src={Banner1}
          alt="banner-1"
          objectFit="cover"
        />
      </div>
      <div className="flex justify-center">
        <div className="flex w-2/12">
          <SideBar />
        </div>
        <div >
          <div className="flex flex-col items-center p-4 gap-6">
            <MenuIcon iconAlt="ITA" iconUrl={iconITA} goTo={"/ITA/home"} menu="TA โรงเรียนบ้านสามแยก จังหวัดชลบุรี" width={600} height={600} />

            <VideoCard
              videoName="VTR การติดตาม ตรวจสอบ ประเมินผล และนิเทศการศึกษา โรงเรียนบ้านสามแยก"
              videoUrl="https://www.youtube.com/watch?v=dLy_uAuOiTE"
            />
            <VideoCard
              videoName="VTR โรงเรียนคุณธรรม สพฐ. ระดับ 2 ดาว โรงเรียนบ้านสามแยก"
              videoUrl="https://youtu.be/fwuONkQF9JA"
            />


            <SimpleMap />

            <div className="w-full py-4">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center items-end">
                <MenuIcon iconAlt="facebook-5" iconUrl={iconFacebook} goTo={"https://www.facebook.com/bansamyeak"} menu="FB: bansamyeak" />
                <MenuIcon iconAlt="Camera-6" iconUrl={iconCamera} goTo={"https://www.facebook.com/bansamyeak/photos"} menu="ภาพกิจกรรม" />
                <MenuIcon iconAlt="ebook-3" iconUrl={iconEbook} goTo={""} menu="ข่าวสารบ้านสามแยก" />

                <MenuIcon iconAlt="CPE-1" iconUrl={iconCPE} goTo={""} menu="สำนักงานเขตพื้นที่การศึกษาประถมศึกษา ชลบุรี เขต 2" height={400} />
                <MenuIcon iconAlt="AMSS-1" iconUrl={iconAMSS} goTo={""} menu="รับ-ส่งหนังสือราชการ" />
                <MenuIcon iconAlt="Eservice" iconUrl={iconESerice} goTo={""} menu="E-Service" />

              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}
