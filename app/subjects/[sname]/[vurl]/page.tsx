"use client"
import VideoCard from "@/components/VideoCard";
import FBVideoCard from "@/components/FBVideoCard";
import { usePathname, useSearchParams } from 'next/navigation'

export default function ShowSingleVideo({ params }: { params: { sname: string , vurl: string} }) {
  const pathName = usePathname();
  const vInfo = new URLSearchParams(pathName)

  const vName = vInfo.get("name") ?? ""
  const vUrl = vInfo.get("url") ?? ""
  return (
    <div>
      <div className="flex flex-col items-center gap-10 bg-gradient-to-b from-rose-200 to-rose-100">
        {
          vUrl?.includes("youtube") ? <VideoCard videoName={vName} videoUrl={vUrl} key={vName} videoCss="w-full xl: w-10/12" />
          : <FBVideoCard videoName={vName} videoUrl={vUrl} key={vName}/>
        }
          
       
      </div>
    </div>
  )
}