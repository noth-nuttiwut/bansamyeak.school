"use client"
import VideoCard from "@/components/VideoCard";
import FBVideoCard from "@/components/FBVideoCard";
import { usePathname, useSearchParams } from 'next/navigation'
import Breadcrumbs from "@/components/Breadcrumbs";

export default function ShowSingleVideo({ params }: { params: { sname: string , vurl: string} }) {
  const pathName = usePathname();
  const subject = decodeURI(params.sname)
  const vInfo = new URLSearchParams(pathName)

  const vName = vInfo.get("name") ?? ""
  const vUrl = vInfo.get("url") ?? ""
  return (
    <div>
      <div className="w-full flex justify-start items-start px-24 xs:px-4 md:px-8 lg:px-10">
        <Breadcrumbs />
      </div>
      <div className="flex flex-col items-center gap-10 bg-gradient-to-b from-rose-200 to-rose-100 min-h-[500px] xl:min-h-screen p-2">
        {
          
          vUrl?.includes("facebook") 
          ? <FBVideoCard videoName={`${subject} : ${vName}`} videoUrl={vUrl} key={vName}/>
          : <VideoCard videoName={`${subject} : ${vName}`} videoUrl={vUrl} key={vName} videoCss="w-full xl: w-10/12" />
         
        }
          
       
      </div>
    </div>
  )
}