import VideoCard from "@/components/VideoCard"
import MenuIcon from "@/components/MenuIcon"


import iconMenu1 from "@/public/ITALogo_2.png"
import iconMenu2 from "@/public/icon_report.png" 
import iconMenu3 from "@/public/ebook-icon.png"
import iconMenu4 from "@/public/AMSS-1.png"
import iconMenu5 from "@/public/facebook.png" 
import iconMenu6 from "@/public/Camera.png" 

export default function Home() {
  return (
    <main>
      <div className="flex min-h-screen flex-col items-center p-4 gap-6">
        <VideoCard 
          videoName="VTR การติดตาม ตรวจสอบ ประเมินผล และนิเทศการศึกษา โรงเรียนบ้านสามแยก"
          videoUrl="https://www.youtube.com/watch?v=dLy_uAuOiTE" 
        />
        <VideoCard 
          videoName="VTR โรงเรียนคุณธรรม สพฐ. ระดับ 2 ดาว โรงเรียนบ้านสามแยก"
          videoUrl="https://youtu.be/fwuONkQF9JA" 
        />

        <div className="grid md:grid-cols-3 gap-6">
          <MenuIcon iconAlt="ITALogo-1" iconUrl={iconMenu1} goTo={""}/>
          <MenuIcon iconAlt="icon_report-2" iconUrl={iconMenu2} goTo={""}/>
          <MenuIcon iconAlt="ebook-3" iconUrl={iconMenu3} goTo={""}/>
          <MenuIcon iconAlt="AMSS-4" iconUrl={iconMenu4} goTo={""}/>
          <MenuIcon iconAlt="facebook-5" iconUrl={iconMenu5} goTo={"https://www.facebook.com/bansamyeak"}/>
          <MenuIcon iconAlt="Camera-6" iconUrl={iconMenu6} goTo={"https://www.facebook.com/bansamyeak/photos"}/>
        </div>
      </div>


    </main>
  )
}
