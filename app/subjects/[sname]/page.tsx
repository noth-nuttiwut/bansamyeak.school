"use client"
import { useSearchParams } from 'next/navigation'

export default function ShowSingleVideo({ params }: { params: { sname: string } }) {
  const subjectName = decodeURI(params.sname)
  const searchParams = useSearchParams()
  console.log("searchParams ::: ", searchParams)

  return (
    <div>
      <div className="flex flex-col items-center gap-10 bg-gradient-to-b from-rose-200 to-rose-100 px-20">
        {/* {
          vName?.includes("youtube") ? <VideoCard videoName={vName} videoUrl={vUrl} />
          : <FBVideoCard videoName={vName} videoUrl={vUrl} />
        }
           */}
       
      </div>
    </div>
  )
}
