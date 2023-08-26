import GGDriveIframe from "@/components/ITA/GGDriveIframe"
import ITABanner from "@/components/ITA/ITABanner"
import { getUrlsFrom } from "@/libs/googleDrive"
import O14Banner from "@/public/ITABanner/B-O14.jpg"

export default async function O14Page() {
  const {
    PdfUrls,
    ImageUrls
  } = await getUrlsFrom("O14 คู่มือหรือมาตรฐานการปฏิบัติงาน")

  return (
    <div className="flex flex-col items-center gap-4 justify-center w-full bg-gradient-to-b purple-red-200 to-slate-100">
      <ITABanner title="" customBanner={O14Banner} />

      {
        PdfUrls ? PdfUrls.map((pdfUrl) => {
          return <GGDriveIframe url={`https://drive.google.com/file/d/${pdfUrl.id}/preview`} name={pdfUrl.name} key={pdfUrl.id} />
        })
        : <></>
      }

    </div>
  )
}

