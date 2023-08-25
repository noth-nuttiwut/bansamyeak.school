import CarouselImage from "@/components/CarouselImage"
import GGDriveIframe from "@/components/ITA/GGDriveIframe"
import ITABanner from "@/components/ITA/ITABanner"

import { getUrlsFrom } from "@/libs/googleDrive"

export default async function O6Page () {
  const {
    PdfUrls,
    ImageUrls
  } = await getUrlsFrom("O6 กฎหมายที่เกี่ยวข้อง")
 
  return (
    <div className="flex flex-col items-center gap-4 justify-center w-full">
      <ITABanner title="" />
      {
        ImageUrls ? <CarouselImage images={ImageUrls}/>
        : <></>
      }

      {
        PdfUrls ? PdfUrls.map((pdfUrl) => {
          return <GGDriveIframe url={`https://drive.google.com/file/d/${pdfUrl.id}/preview`} name={pdfUrl.name} key={pdfUrl.id} />
        })
        : <></>
      }
      
    </div>
  )
}