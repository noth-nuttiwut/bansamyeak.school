import ImageGalleryComp from "@/components/ImageGallery"
import GGDriveIframe from "@/components/ITA/GGDriveIframe"
import ITABanner from "@/components/ITA/ITABanner"
import O4Banner from "@/public/ITABanner/B-O4.jpg"
import { getUrlsFrom } from "@/libs/googleDrive"

export default async function O4Page () {
  const {
    PdfUrls,
    ImageUrls
  } = await getUrlsFrom("O4 ")
 
  return (
    <div className="flex flex-col items-center gap-4 justify-center w-full bg-gradient-to-b from-red-200 to-red-100">
      <ITABanner title=""  customBanner={O4Banner} bgGradient="bg-gradient-to-r from-red-900 via-red-600 to-red-50"/>
      {
        ImageUrls.length > 1 ? <ImageGalleryComp images={ImageUrls}/>
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