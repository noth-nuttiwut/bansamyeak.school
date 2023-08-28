import CarouselImage from "@/components/CarouselImage"
import GGDriveIframe from "@/components/ITA/GGDriveIframe"
import ITABanner from "@/components/ITA/ITABanner"
import { getUrlsFrom } from "@/libs/googleDrive"
import O15Banner from "@/public/ITABanner/B-O15.jpg"

export default async function O15Page() {
  const {
    PdfUrls,
    ImageUrls
  } = await getUrlsFrom("O15 ")

  return (
    <div className="flex flex-col items-center gap-4 justify-center w-full bg-gradient-to-b purple-red-200 to-slate-100">
      <ITABanner title="" customBanner={O15Banner} />
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

export const revalidate = 300