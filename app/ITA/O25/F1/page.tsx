import GGDriveIframe from "@/components/ITA/GGDriveIframe"
import ITABanner from "@/components/ITA/ITABanner"
import { getUrlsFrom } from "@/libs/googleDrive"
import O25F1Banner from "@/public/ITABanner/B-O25.jpg"

export default async function O25F1Page() {
  const {
    PdfUrls,
    ImageUrls
  } = await getUrlsFrom("1. การสรรหาและคัดเลือกบุคลากร")

  return (
    <div className="flex flex-col items-center gap-4 justify-center w-full bg-gradient-to-b from-red-200 to-red-100">
      <ITABanner title="" customBanner={O25F1Banner} bgGradient="bg-gradient-to-r from-red-900 via-red-600 to-red-50" customGoto="/ITA/O25"/>

      {
        PdfUrls ? PdfUrls.map((pdfUrl) => {
          return <GGDriveIframe url={`https://drive.google.com/file/d/${pdfUrl.id}/preview`} name={pdfUrl.name} key={pdfUrl.id} />
        })
        : <></>
      }

    </div>
  )
}

