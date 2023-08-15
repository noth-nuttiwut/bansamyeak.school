import VideoCard from "@/components/VideoCard"
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
      </div>
    </main>
  )
}
