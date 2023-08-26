import ITABanner from "@/components/ITA/ITABanner"
import O9Banner from "@/public/ITABanner/B-O9.jpg"
import Link from "next/link"
import { FaFacebook } from "react-icons/fa"
import QRCodeCPE from "@/public/qrcode_CPE.png"
import QRCodeBSY from "@/public/qrcode_BSY.png"
import Image from "next/image"
export default async function O9Page() {

  return (
    <div className="flex flex-col items-center gap-4 justify-center w-full bg-gradient-to-b from-red-200 to-red-100">
      <ITABanner title="" customBanner={O9Banner} bgGradient="bg-gradient-to-r from-red-900 via-red-600 to-red-50" />
      <div className="flex flex-col gap-10 py-10 items-center">
        <Link href={"https://www.facebook.com/bansamyeak"} target="_blank">
          <div className="flex justify-center items-center link gap-6 text-xl font-bold text-white w-[70vw] md:w-[60vw] xl:w-[40vw] h-40 p-6 bg-gradient-to-r from-orange-700 to-yellow-500 rounded-xl">
            <FaFacebook />  โรงรียนบ้านสามแยก

          </div>
        </Link>
        <Image src={QRCodeBSY} alt="fb.com/bansamyeak"
          width={0}
          height={0}
          sizes="80vw"
          className="w-[50vw] h-auto md:w-[20vw] lg:w-[25vw]" />


        <Link href={"https://www.facebook.com/profile.php?id=100076660265075"} target="_blank">

          <div className="flex justify-center items-center gap-6 text-xl link font-bold text-white w-[70vw] md:w-[60vw] xl:w-[40vw] h-40 p-6 bg-gradient-to-r from-teal-700 to-green-500 rounded-xl">
            <FaFacebook /> สำนักงานเขตพื้นที่การศึกษาประถมศึกษา ชลบุรี เขต 2
          </div>
        </Link>

        <Image src={QRCodeCPE} alt="fb.com/100076660265075"
          width={0}
          height={0}
          sizes="80vw"
          className="w-[50vw] h-auto md:w-[20vw] lg:w-[25vw]" />
      </div>

    </div>
  )
}

