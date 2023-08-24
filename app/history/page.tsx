import SchoolBanner from "@/components/ITA/SchoolBanner";
import  GGDriveIframe from "@/components/ITA/GGDriveIframe";
export default function Emblem() {
  return (
    <div>
      <div className="flex flex-col items-center gap-10 bg-gradient-to-b from-rose-200 to-rose-100">
        <SchoolBanner title="" />
        <GGDriveIframe url="https://drive.google.com/file/d/1RumnZ4IhOUKeYnaNgH4BP11XC6btu4is/preview" name="history" />
      </div>
    </div>
  )
}
