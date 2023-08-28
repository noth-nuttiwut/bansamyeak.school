import ImageGalleryComp from "@/components/ImageGallery"
import GGDriveIframe from "@/components/ITA/GGDriveIframe"
import ITABanner from "@/components/ITA/ITABanner"
import { getUrlsFrom } from "@/libs/googleDrive"
import O1Banner from "@/public/ITABanner/B-O41.jpg"

export default async function O41Page() {
  const {
    PdfUrls,
    ImageUrls
  } = await getUrlsFrom("O41 ")

  return (
    <div className="flex flex-col items-center gap-4 justify-center w-full bg-gradient-to-b from-yellow-100 to-red-100">
      <ITABanner title="" customBanner={O1Banner} bgGradient="bg-gradient-to-r from-amber-900 via-yellow-600 to-slate-50" />
      {
        ImageUrls ? <ImageGalleryComp images={ImageUrls}/>
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