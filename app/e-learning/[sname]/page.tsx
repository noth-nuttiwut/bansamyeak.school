import Breadcrumbs from '@/components/Breadcrumbs'
import VideoItem from '@/components/VideoItem'
import { getFolderByName, getVideoUrlFromSpreadSheet } from '@/libs/googleDrive'
import { cssStorage } from '../page'

export default async function ShowSingleVideo({ params }: { params: { sname: string } }) {
  const subjectName = decodeURI(params.sname)
  const subject_folder_name: any = (await getFolderByName("บทเรียนออนไลน์")).filter(el => el.name == subjectName)
  const allUrls = await Promise.all(subject_folder_name.map(async (subject_info: any) => {
    let urls = await getVideoUrlFromSpreadSheet(subject_info?.name)
    return {
      subject: subject_info?.name,
      urls
    }
  }))

  return (
    <div className="flex flex-col items-center gap-10 bg-gradient-to-b from-rose-200 to-rose-100 xs:px-5 md:px-20 min-h-[1000px]">
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

