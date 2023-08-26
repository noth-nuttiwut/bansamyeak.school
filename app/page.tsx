
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
    <main className="flex flex-col gap-2 w-full justify-between sm:p-0 md:px-18 md:pb-18 lg:px-24  lg:pb-24 bg-gradient-to-t from-orange-100 to-slate-100">
      <div className={"flex w-full justify-center items-center px-2"}>
        <Image
          src={Banner1}
          alt="Banner1"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto lg:w-auto lg:h-[350px]"
        />
      </div>

      <div className="flex flex-wrap lg:flex-nowrap w-full justify-center px-10">
        <SideBar />
        <div className="flex flex-col items-center p-4 gap-6">
          <MenuIcon iconAlt="ITA" iconUrl={iconITA} goTo={"/ITA/home"} menu="TA โรงเรียนบ้านสามแยก จังหวัดชลบุรี" imageCss="w-[80vw] md:w-[50vw] lg:w-[30vw]"/>
          <VideoCard
            videoName="VTR การติดตาม ตรวจสอบ ประเมินผล และนิเทศการศึกษา โรงเรียนบ้านสามแยก"
            videoUrl="https://www.youtube.com/embed/WQXd7ichTSc?si=4w3A2f5DjnjYoxfN"
          />
          <VideoCard
            videoName="VTR โรงเรียนคุณธรรม สพฐ. ระดับ 2 ดาว โรงเรียนบ้านสามแยก"
            videoUrl="https://www.youtube.com/embed/WQXd7ichTSc?si=4w3A2f5DjnjYoxfN"
          />
          
          <SimpleMap />

          <div className="flex p-4">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center items-end">
              <MenuIcon iconAlt="facebook-5" iconUrl={iconFacebook} goTo={"https://www.facebook.com/bansamyeak"} menu="FB: bansamyeak" imageCss="w-[15vw] md:w-[10vw] lg:w-[100px] xl:w-[100px]" />
              <MenuIcon iconAlt="Camera-6" iconUrl={iconCamera} goTo={"https://www.facebook.com/bansamyeak/photos"} menu="ภาพกิจกรรม" imageCss="w-[15vw] md:w-[10vw] lg:w-[100px] xl:w-[100px]" />
              <MenuIcon iconAlt="ebook-3" iconUrl={iconEbook} goTo={""} menu="ข่าวสารบ้านสามแยก" imageCss="w-[15vw] md:w-[10vw] lg:w-[100px] xl:w-[100px]" />

              <MenuIcon iconAlt="CPE-1" iconUrl={iconCPE} goTo={""} menu="สำนักงานเขตพื้นที่การศึกษาประถมศึกษา ชลบุรี เขต 2" imageCss="w-[15vw] md:w-[10vw] lg:w-[100px] xl:w-[100px]" />
              <MenuIcon iconAlt="AMSS-1" iconUrl={iconAMSS} goTo={""} menu="รับ-ส่งหนังสือราชการ" imageCss="w-[15vw] md:w-[10vw] lg:w-[100px] xl:w-[100px]" />
              <MenuIcon iconAlt="Eservice" iconUrl={iconESerice} goTo={""} menu="E-Service" imageCss="w-[15vw] md:w-[10vw] lg:w-[100px] xl:w-[100px]" />

            </div>
          </div>


        </div>
      </div>
    </main>
  )
}
