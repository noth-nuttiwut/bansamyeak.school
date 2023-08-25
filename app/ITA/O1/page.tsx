import GGDriveIframe from "@/components/ITA/GGDriveIframe"
import ITABanner from "@/components/ITA/ITABanner"
import { getUrlsFrom } from "@/libs/googleDrive"


export default async function O1Page() {
  const urls = await getUrlsFrom("O1 โครงสร้าง")
  return (
    <div className="flex flex-col items-center gap-4 justify-center w-full">
      <ITABanner title="" />
      {
        urls.map((pdfUrl) => {
          return <GGDriveIframe url={`https://drive.google.com/file/d/${pdfUrl.id}/preview`} name={pdfUrl.name} key={pdfUrl.id} />
        })

      }

    </div>
  )
}

