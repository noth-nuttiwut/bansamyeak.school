import  GGDriveIframe from "@/components/ITA/GGDriveIframe";
import ITABanner from "@/components/ITA/ITABanner";
export default function VisionMission() {
  return (
    <div>
      <div className="flex flex-col items-center gap-10 bg-gradient-to-b from-rose-200 to-rose-100">
        <ITABanner title="" customGoto="/"/>
        <GGDriveIframe url="https://drive.google.com/file/d/1lATlrdCDbeDKkhBszyqcDlBIlbPLb43A/preview" name="วิสัยทัศน์และพันธกิจ" />

      </div>
    </div>
  )
}
