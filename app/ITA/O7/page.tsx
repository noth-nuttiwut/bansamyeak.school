import ITABanner from "@/components/ITA/ITABanner"
import ImageGalleryComp from "@/components/ImageGallery"
import { getUrlsFrom } from "@/libs/googleDrive"
import O7Banner from "@/public/ITABanner/B-O7.jpg"


export default async function O7Page() {
  const {
    PdfUrls,
    ImageUrls
  } = await getUrlsFrom("O7 ")

  return (
    <div className="flex flex-col items-center gap-4 justify-center w-full bg-gradient-to-b from-red-200 to-red-100">
      <ITABanner title="" customBanner={O7Banner} bgGradient="bg-gradient-to-r from-red-900 via-red-600 to-red-50" />
      {
        ImageUrls.length > 1 ? <ImageGalleryComp images={ImageUrls} />
          : <></>
      }

    </div>
  )
}

export const revalidate = 300