import { getFolderByName, getVideoUrlFromSpreadSheet } from "@/libs/googleDrive"
import VideoItem from "@/components/VideoItem"
import Breadcrumbs from "@/components/Breadcrumbs"


type SubjectFolder = {
  bgGradient: string
  contentBgColor: string

}
type googleDriveResp = {
  kind: string
  mimeType: string
  id: string
  name: string
}

const cssStorage: SubjectFolder[] = [

  {
    bgGradient: "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500",
    contentBgColor: "bg-gradient-to-b from-rose-100 to-slate-50"
  },
  {
    bgGradient: "bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900",
    contentBgColor: "bg-gradient-to-b from-purple-100 to-slate-50"
  },

  {
    bgGradient: "bg-gradient-to-r from-rose-700 to-pink-600",
    contentBgColor: "bg-gradient-to-b from-lime-100 to-slate-50"
  },

  {
    bgGradient: "bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500",
    contentBgColor: "bg-gradient-to-b from-pink-100 to-slate-50"
  },
  {
    bgGradient: "bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900",
    contentBgColor: "bg-gradient-to-b from-sky-100 to-slate-50"
  },
  {
    bgGradient: "bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900",
    contentBgColor: "bg-gradient-to-b from-sky-100 to-slate-50"
  },
  {
    bgGradient: "bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600",
    contentBgColor: "bg-gradient-to-b from-sky-100 to-slate-50"
  },
  {
    bgGradient: "bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800",
    contentBgColor: "bg-gradient-to-b from-sky-100 to-slate-50"
  },
  {
    bgGradient: "bg-gradient-to-r from-yellow-600 to-red-600",
    contentBgColor: "bg-gradient-to-b from-sky-100 to-slate-50"
  },





]

export default async function Subjects() {
  const subject_folder_name: any = await getFolderByName("บทเรียนออนไลน์")
  const allUrls = await Promise.all(subject_folder_name.map(async (subject_info: any) => {
    let urls = await getVideoUrlFromSpreadSheet(subject_info?.name)
    return {
      subject: subject_info?.name,
      urls
    }
  }))

  return (
    <div className="flex flex-col items-center min-h-fit gap-4 bg-gradient-to-b from-orange-100 to-orange-50">
      <div className="w-full flex justify-start items-start px-24 xs:px-4 md:px-8 lg:px-10">
        <Breadcrumbs />
      </div>
      {
        allUrls.map((el: any, index: number) => {
          const subject_detail = el.urls.map((url: any) => {
            return {
              code: "",
              title: `${url.name}`,
              goto: `/e-learning/${el?.subject}/&${new URLSearchParams(url).toString()}`
            }
          })

          return <VideoItem key={el?.id} items={subject_detail} sectionName={el?.subject} bgGradient={cssStorage[index]?.bgGradient} />
        })
      }
      

    </div>
  )
}
export const revalidate = 300
