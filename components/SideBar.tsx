
"use client"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import DirectorCard from './DirectorCard';
import MenuButton from './MenuButton';
import SimpleMap from './SimpleGGMap';
// import ChatbotButton from './ChatbotButton';

export default function SideBar() {
    return (
        <div className="flex flex-col gap-4">
            <DirectorCard />

            <div>
                <div className='bg-orange-500 text-white text-2xl text-center p-4' > รายการหลัก</div>
                <ul className="menu w-80 rounded-box text-slate-200 visited:text-orange-400">
                    <MenuButton imgUrl='' iconUrl='' menu='ข้อมูลพื้นฐาน' goTo="/infomation" />
                    <MenuButton imgUrl='' iconUrl='' menu='บุคคลากร' goTo="/members" />
                    <MenuButton imgUrl='' iconUrl='' menu='กลุ่มบริหารงานบุคคลการเงินและสินทรัพย์' goTo="/hr-finance" />
                    <MenuButton imgUrl='' iconUrl='' menu='กลุ่มบริหารงานกิจการ' goTo="/activity" />
                    <MenuButton imgUrl='' iconUrl='' menu='กลุ่มบริหารงานทั่วไป' goTo="/general" />
                </ul>
            </div>


            <div className='m-6'>
                <Calendar />
            </div>
            <SimpleMap />
            {/* <div className='fixed z-90 bottom-10 right-8 '>
                <ChatbotButton />
            </div> */}
        </div>
    )
}
