import O1Banner from "@/public/ITABanner/B-O1.jpg"
import GGDriveIframe from "@/components/ITA/GGDriveIframe"
import ITABanner from "@/components/ITA/ITABanner"
import { getUrlsFrom, GGResponeType } from "@/libs/googleDrive"


export default async function O1Page() {
  const {
    PdfUrls,
    ImageUrls
  } = await getUrlsFrom("O1 ")

  return (
    <div className="flex flex-col items-center gap-4 justify-center w-full bg-gradient-to-b from-red-200 to-red-100">
      <ITABanner title="" customBanner={O1Banner} bgGradient="bg-gradient-to-r from-red-900 via-red-600 to-red-50"/>

      {
        PdfUrls ? PdfUrls.map((pdfUrl : GGResponeType) => {
          return <GGDriveIframe url={`https://drive.google.com/file/d/${pdfUrl.id}/preview`} name={pdfUrl.name} key={pdfUrl.id} />
        })
        : <></>
      }

    </div>
  )
}
export const revalidate = 300


