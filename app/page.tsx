
import Image from "next/image"

import VideoCard from "@/components/VideoCard"
import MenuIcon from "@/components/MenuIcon"
import SideBar from '@/components/SideBar'
import SimpleMap from '@/components/SimpleGGMap';
import ImageGalleryComp from "@/components/ImageGallery";

import iconCPE from "@/public/CPE.png"
import iconESerice from "@/public/e-Service.png"
import iconEbook from "@/public/ebook-icon.png"
import iconAMSS from "@/public/AMSS-1.png"
import iconFacebook from "@/public/facebook.png"
import iconCamera from "@/public/Camera.png"
import iconITA from "@/public/ITALogo_2.png"
import Banner1 from "@/public/Banner-ITA.jpg"
import { getUrlsFrom, getVideoUrlFromSpreadSheet } from "@/libs/googleDrive";



type videoInfo = {
  url: string
  name: string
}

export default async function Home() {
  const VideoUrls = await getVideoUrlFromSpreadSheet("วิดีโอโฮมเพจ")
  const ImageUrls = await getUrlsFrom("รูปภาพโฮมเพจ") 
  
  return (
    <main className="flex flex-col gap-2 justify-center items-center sm:p-0 md:px-18 md:pb-18 lg:px-24  lg:pb-24 bg-gradient-to-t from-orange-100 to-slate-100">
      <div className={"flex w-full justify-center items-center px-2 bg-gradient-to-r from-orange-50 via-orange-600 to-orange-50"}>
        <Image
          src={Banner1}
          alt="Banner1"
          width="2560"
          height="600"
          className="w-full h-auto 3xl:w-[70vw] 2xl:w-[70vw]"
        />
      </div>

      <div className="flex flex-wrap lg:flex-nowrap w-full justify-center px-12">
        <SideBar />
        <div className="flex flex-col items-center gap-10">
          <MenuIcon iconAlt="ITA" iconUrl={iconITA} goTo={"/ITA"} menu="ITA โรงเรียนบ้านสามแยก จังหวัดชลบุรี" imageCss="w-[80vw] md:w-[60vw] lg:w-[50vw] xl:w-[40vw] 2xl:w-[35vw] 3xl:w-[35vw]"/>

          <ImageGalleryComp  images={ImageUrls.ImageUrls} showThumbnails={false} slideInterval={5000}/>

          {/* videos section  */}
          {
            VideoUrls.map((videoInfo : videoInfo)=> {
              return (
                <VideoCard
                  key={videoInfo.url}
                  videoName={videoInfo.name}
                  videoUrl={videoInfo.url}
                />
              )
            })
          }
        
          <SimpleMap />

          <div className="flex p-4">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 justify-evenly items-baseline gap-6">
              <MenuIcon iconAlt="facebook-5" iconUrl={iconFacebook} goTo={"https://www.facebook.com/bansamyeak"} menu="FB: bansamyeak" imageCss="w-[15vw] xs:w-[22vw] md:w-[10vw] lg:w-[100px] xl:w-[100px]" />
              <MenuIcon iconAlt="Camera-6" iconUrl={iconCamera} goTo={"/gallery"} menu="ภาพกิจกรรม" imageCss="w-[15vw] xs:w-[22vw] md:w-[10vw] lg:w-[100px] xl:w-[100px]" />
              <MenuIcon iconAlt="ebook-3" iconUrl={iconEbook} goTo={"/ITA/O7"} menu="ข่าวสารบ้านสามแยก" imageCss="w-[15vw] xs:w-[22vw] md:w-[10vw] lg:w-[100px] xl:w-[100px]" />

              <MenuIcon iconAlt="CPE-1" iconUrl={iconCPE} goTo={"https://www.facebook.com/profile.php?id=100076660265075"} menu="สำนักงานเขตพื้นที่การศึกษาประถมศึกษา ชลบุรี เขต 2" imageCss="w-[15vw] xs:w-[22vw] md:w-[10vw] lg:w-[100px] xl:w-[100px]" />
              <MenuIcon iconAlt="AMSS-1" iconUrl={iconAMSS} goTo={"http://122.154.112.21/amssplus/"} menu="รับ-ส่งหนังสือราชการ" imageCss="w-[15vw] xs:w-[22vw] md:w-[10vw] lg:w-[100px] xl:w-[100px]" />
              <MenuIcon iconAlt="Eservice" iconUrl={iconESerice} goTo={"/ITA/O18"} menu="E-Service" imageCss="w-[15vw] xs:w-[22vw] md:w-[10vw] lg:w-[100px] xl:w-[100px]" />

            </div>
          </div>


        </div>
      </div>
    </main>
  )
}
export const dynamic = "force-dynamic"