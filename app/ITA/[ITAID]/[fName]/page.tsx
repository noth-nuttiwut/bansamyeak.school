import GGDriveIframe from "@/components/ITA/GGDriveIframe"
import ITABanner from "@/components/ITA/ITABanner"
import ImageGalleryComp from "@/components/ImageGallery"
import { getUrlsFrom } from "@/libs/googleDrive"
import { twMerge } from "tailwind-merge"
type cssStorageType = {
  OIndex: string
  bgGradient: string
  contentBgColor: string
}

const cssStorage: cssStorageType [] = [
  {
    OIndex : "O1",
    bgGradient: "bg-gradient-to-r from-red-900 via-red-600 to-red-50",
    contentBgColor: "bg-gradient-to-b from-rose-100 to-slate-50"
  },
  {
    OIndex : "O2",
    bgGradient: "bg-gradient-to-r from-red-900 via-red-600 to-red-50",
    contentBgColor: "bg-gradient-to-b from-rose-100 to-slate-50"
  },
  {
    OIndex : "O3",
    bgGradient: "bg-gradient-to-r from-red-900 via-red-600 to-red-50",
    contentBgColor: "bg-gradient-to-b from-rose-100 to-slate-50"
  },
  {
    OIndex : "O4",
    bgGradient: "bg-gradient-to-r from-red-900 via-red-600 to-red-50",
    contentBgColor: "bg-gradient-to-b from-rose-100 to-slate-50"
  },
  {
    OIndex : "O5",
    bgGradient: "bg-gradient-to-r from-red-900 via-red-600 to-red-50",
    contentBgColor: "bg-gradient-to-b from-rose-100 to-slate-50"
  },
  {
    OIndex : "O6",
    bgGradient: "bg-gradient-to-r from-red-900 via-red-600 to-red-50",
    contentBgColor: "bg-gradient-to-b from-rose-100 to-slate-50"
  },
  {
    OIndex : "O7",
    bgGradient: "bg-gradient-to-r from-red-900 via-red-600 to-red-50",
    contentBgColor: "bg-gradient-to-b from-orange-100 to-slate-50"
  },
  {
    OIndex : "O8",
    bgGradient: "bg-gradient-to-r from-red-900 via-red-600 to-red-50",
    contentBgColor: "bg-gradient-to-b from-rose-100 to-slate-50"
  },
  {
    OIndex : "O9",
    bgGradient: "bg-gradient-to-r from-red-900 via-red-600 to-red-50",
    contentBgColor: "bg-gradient-to-b from-rose-100 to-slate-50"
  },
  {
    OIndex : "O10",
    bgGradient: "bg-gradient-to-r from-red-900 via-red-600 to-red-50",
    contentBgColor: "bg-gradient-to-b from-rose-100 to-slate-50"
  },
  {
    OIndex : "O11",
    bgGradient: "",
    contentBgColor: "bg-gradient-to-b from-purple-100 to-slate-50"
  },
  {
    OIndex : "O12",
    bgGradient: "",
    contentBgColor: "bg-gradient-to-b from-purple-100 to-slate-50"
  },
  {
    OIndex : "O13",
    bgGradient: "",
    contentBgColor: "bg-gradient-to-b from-purple-100 to-slate-50"
  },
  {
    OIndex : "O14",
    bgGradient: "",
    contentBgColor: "bg-gradient-to-b from-purple-100 to-slate-50"
  },
  {
    OIndex : "O15",
    bgGradient: "",
    contentBgColor: "bg-gradient-to-b from-purple-100 to-slate-50"
  },
  {
    OIndex : "O16",
    bgGradient: "",
    contentBgColor: "bg-gradient-to-b from-purple-100 to-slate-50"
  },
  {
    OIndex : "O17",
    bgGradient: "",
    contentBgColor: "bg-gradient-to-b from-purple-100 to-slate-50"
  },
  {
    OIndex : "O18",
    bgGradient: "",
    contentBgColor: "bg-gradient-to-b from-purple-100 to-slate-50"
  },
  {
    OIndex : "O19",
    bgGradient: "bg-gradient-to-r from-lime-600 via-yellow-300 to-slate-50",
    contentBgColor: "bg-gradient-to-b from-lime-100 to-slate-50"
  },
  {
    OIndex : "O20",
    bgGradient: "bg-gradient-to-r from-lime-600 via-yellow-300 to-slate-50",
    contentBgColor: "bg-gradient-to-b from-lime-100 to-slate-50"
  },
  {
    OIndex : "O21",
    bgGradient: "bg-gradient-to-r from-lime-600 via-yellow-300 to-slate-50",
    contentBgColor: "bg-gradient-to-b from-lime-100 to-slate-50"
  },
  {
    OIndex : "O22",
    bgGradient: "bg-gradient-to-r from-lime-600 via-yellow-300 to-slate-50",
    contentBgColor: "bg-gradient-to-b from-lime-100 to-slate-50"
  },
  {
    OIndex : "O23",
    bgGradient: "bg-gradient-to-r from-pink-600 via-red-300 to-slate-50",
    contentBgColor: "bg-gradient-to-b from-pink-100 to-slate-50"
  },
  {
    OIndex : "O24",
    bgGradient: "bg-gradient-to-r from-pink-600 via-red-300 to-slate-50",
    contentBgColor: "bg-gradient-to-b from-pink-100 to-slate-50"
  },
  {
    OIndex : "O25",
    bgGradient: "bg-gradient-to-r from-pink-600 via-red-300 to-slate-50",
    contentBgColor: "bg-gradient-to-b from-pink-100 to-slate-50"
  },
  {
    OIndex : "O26",
    bgGradient: "bg-gradient-to-r from-pink-600 via-red-300 to-slate-50",
    contentBgColor: "bg-gradient-to-b from-pink-100 to-slate-50"
  },
  {
    OIndex : "O27",
    bgGradient: "bg-gradient-to-r from-blue-800 via-sky-300 to-slate-50",
    contentBgColor: "bg-gradient-to-b from-sky-100 to-slate-50"
  },
  {
    OIndex : "O28",
    bgGradient: "bg-gradient-to-r from-blue-800 via-sky-300 to-slate-50",
    contentBgColor: "bg-gradient-to-b from-sky-100 to-slate-50"
  },
  {
    OIndex : "O29",
    bgGradient: "bg-gradient-to-r from-blue-800 via-sky-300 to-slate-50",
    contentBgColor: "bg-gradient-to-b from-sky-100 to-slate-50"
  },
  {
    OIndex : "O30",
    bgGradient: "bg-gradient-to-r from-blue-800 via-sky-300 to-slate-50",
    contentBgColor: "bg-gradient-to-b from-sky-100 to-slate-50"
  }
]


export default async function ShowFilePage({ params }: { params: { fName: string , ITAID: string } }) {
  const {
    PdfUrls,
    ImageUrls
  } = await getUrlsFrom(decodeURI(params.fName))
  const cssObject = cssStorage.filter(el => el.OIndex == params.ITAID)[0] ?? {
    OIndex : "O31",
    bgGradient: "bg-gradient-to-r from-amber-700 via-yellow-300 to-slate-50",
    contentBgColor: "bg-gradient-to-b from-yellow-100 to-slate-50"
  }
  
  const contentBgColor = twMerge("flex flex-col items-center gap-4 justify-center w-full bg-gradient-to-b from-yellow-100 to-yellow-50", cssObject.contentBgColor)
  const bgGradient = cssObject.bgGradient


  return (
    <div className={contentBgColor}>
      <ITABanner title="" customBanner={`/ITABanner/B-${params.ITAID}.jpg`} bgGradient={bgGradient} customGoto={`/ITA/${params.ITAID}`} />
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