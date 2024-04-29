
import ITABanner from "@/components/ITA/ITABanner";


export default  function FlashPlayer() {
  const canvasStyle = {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: "100%",
    height: "100%"
  }

  const filePath = `/flash-player/ตัวเปิด.swf`

  console.log(filePath)
  return (
    <div>
      <script src="/ruffle-nightly/ruffle.js" async></script>

      <div className="flex flex-col items-center gap-10 bg-gradient-to-b from-purple-300 to-slate-50">
        <ITABanner title="" />

        <div className="p-8 bg-pink-600 text-white font-bold rounded-md text-2xl">
        นวัตกรรมเรื่อง FlowChart
        </div>

        <div className="flex justify-center min-h-screen">
          <object className="h-screen w-[90vw] px-2 pb-2 md:px-8 md:pb-8">
            <embed src={filePath} width="100%" height="100%" 
              title=""
              className="w-full aspect-video"
              style={canvasStyle}
              />
          </object>
        </div>
      </div>
    </div>
  )
}
