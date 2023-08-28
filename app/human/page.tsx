import SchoolBanner from "@/public/SchoolNameBanner.jpg"
import ITABanner from "@/components/ITA/ITABanner"
import { getUrlsFrom, GGResponeType } from "@/libs/googleDrive"
import StaffCard from "@/components/StaffCard"

export default async function HRPage() {
  const {
    PdfUrls,
    ImageUrls
  } = await getUrlsFrom("งานบุคคล")

  const headImage = ImageUrls.filter(p => p.name.includes("อริศ"))[0]
  const headInfo = headImage.name.replace(".jpg", "").split("_")
  const memberImages = ImageUrls.filter(p => !p.name.includes("อริศ"))
  return (
    <div className="flex flex-col items-center gap-4 justify-center w-full bg-gradient-to-b from-purple-300 to-slate-100">
      <ITABanner title="งานบุคคล" customBanner={SchoolBanner} customGoto="/"/>

      <div className="flex flex-col flex-wrap p-6 justify-center items-center gap-10">
        <StaffCard name={headInfo[0]} id={headImage.id} jobTile={headInfo[1]} role={headInfo[2]} key={headImage.id}/>
        <div className="flex flex-wrap justify-center gap-6"> 
        {
          memberImages ? memberImages.map((staffInfo : GGResponeType) => {
            const staffInfoSplitted = staffInfo.name.replace(".jpg", "").split("_")

            return (
              <StaffCard name={staffInfoSplitted[0]} id={staffInfo.id} jobTile={staffInfoSplitted[1]} role={staffInfoSplitted[2]} key={staffInfo.id} />
            )
          }) : <></>
        }
          
          
        </div>
      </div>
     

    </div>
  )
}



