import GGDriveIframe from "@/components/ITA/GGDriveIframe"
import ITABanner from "@/components/ITA/ITABanner"
import O6Banner from "@/public/ITABanner/B-O6.jpg"
import { getUrlsFrom } from "@/libs/googleDrive"

export default async function O6Page () {
  const {
    PdfUrls,
    ImageUrls
  } = await getUrlsFrom("O6 ")
 
  return (
    <div className="flex flex-col items-center gap-4 justify-center w-full">
      <ITABanner title="" customBanner={O6Banner} bgGradient="bg-gradient-to-r from-red-900 via-red-600 to-red-50"/>
      
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