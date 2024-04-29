import SchoolBanner from "@/public/SchoolNameBanner.jpg"
import ITABanner from "@/components/ITA/ITABanner"
import { getUrlsFrom, GGResponeType } from "@/libs/googleDrive"
import StaffCard from "@/components/StaffCard"

export default async function AcademicPage() {
  const {
    PdfUrls,
    ImageUrls
  }  = await getUrlsFrom("งานวิชาการ")

  const headImage = ImageUrls?.filter((p : GGResponeType) => p.name?.includes("สุพัตรา"))[0]
  const headInfo = headImage?.name?.replace(".jpg", "").split("_") ?? ["", "", ""]
  const memberImages = ImageUrls.filter((p : GGResponeType) => !p.name?.includes("สุพัตรา"))
  const newOrderImages : GGResponeType | any = ["อัยรินทร์"].map(name => memberImages.find((i : GGResponeType) => i.name?.includes(name)) )
  return (
    <div className="flex flex-col items-center gap-4 justify-center w-full bg-gradient-to-b from-purple-300 to-slate-100">
      <ITABanner title="งานวิชาการ" customBanner={SchoolBanner} customGoto="/"/>

      <div className="flex flex-col flex-wrap p-6 justify-center items-center gap-10">
        <StaffCard name={headInfo[0]} id={headImage?.id} jobTile={headInfo[1]} role={headInfo[2]} key={headImage?.id}/>
        <div className="flex flex-wrap justify-center gap-6"> 
        {
          newOrderImages ? newOrderImages.map((staffInfo : GGResponeType) => {
            const staffInfoSplitted = staffInfo?.name?.replace(".jpg", "").split("_") ?? ["", "", ""]
            return (
              <StaffCard name={staffInfoSplitted[0]} id={staffInfo?.id} jobTile={staffInfoSplitted[1]} role={staffInfoSplitted[2]} key={staffInfo?.id}/>
            )
          }) : <></>
        }
          
          
        </div>
      </div>
     

    </div>
  )
}


