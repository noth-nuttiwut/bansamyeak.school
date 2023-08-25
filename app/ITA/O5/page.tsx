import ITABanner from "@/components/ITA/ITABanner"
import O5Banner from "@/public/ITABanner/B-O5.jpg"
import { FaMapMarked, FaEnvelope, FaPhoneVolume, FaFax, FaFacebook } from 'react-icons/fa';
import SimpleMap from "@/components/SimpleGGMap"

export default async function O5Page() {

  return (
    <div className="flex flex-col items-center gap-4 justify-center w-full bg-gradient-to-b from-red-200 to-red-100">
      <ITABanner title="" customBanner={O5Banner} bgGradient="bg-gradient-to-r from-red-900 via-red-600 to-red-50" />
      <div className="flex flex-col gap-4 justify-center items-center py-4">
        <div className="text-2xl text-slate-900 font-bold">
          โรงเรียนบ้านสามแยก
        </div>
        <div> สำนักงานเขตพื้นที่การศึกษาประถมศึกษาชลบุรี เขต 2</div>
        <ul className='flex flex-col gap-4'>
          <li>
            <div className='flex gap-4'>
              <FaMapMarked /><address> เลขที่ 40 หมู่ 5  ตำบลท่าบุญมี อำเภอเกาะจันทร์ จังหวัดชลบุรี, 20240</address>
            </div>
          </li>
          <li>
            <div className='flex gap-4'>
              <FaPhoneVolume /> <p> +66 (038) 209 086 </p>
            </div>
          </li>
          <li>
            <div className='flex gap-4'>
              <FaFax /> <p> +66 (038) 209 086 </p>
            </div>
          </li>
          <li>
            <div className='flex gap-4'>
              <FaEnvelope /> <p> bansamyeak2502@gmail.com </p>
            </div>
          </li>
          <li>
            <div className='flex gap-4'>
              <FaFacebook /> <p> https://www.facebook.com/bansamyeak </p>
            </div>
          </li>
        </ul>

        <SimpleMap />
      </div>
      

    </div>
  )
}