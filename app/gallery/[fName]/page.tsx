import ITABanner from "@/components/ITA/ITABanner"
import ImageGalleryComp from "@/components/ImageGallery"
import { getUrlsFrom } from "@/libs/googleDrive"
import Banner from "@/public/SchoolNameBanner.jpg"

export default async function Page({ params }: { params: { fName: string } }) {
  const {
    PdfUrls,
    ImageUrls
  } = await getUrlsFrom(decodeURI(params.fName))


  return (
    <div className="flex flex-col items-center gap-4 justify-center w-full bg-gradient-to-b from-purple-200 to-slate-100">
      <ITABanner title="" customBanner={Banner} customGoto="/gallery" />
      {
        ImageUrls ? <ImageGalleryComp images={ImageUrls} showThumbnails={true} />
          : <></>
      }

    </div>
  )
}
export const revalidate = 300
