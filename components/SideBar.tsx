
"use client"
import Calendar from './Calendar';
import DirectorCard from './DirectorCard';
import MenuButton from './MenuButton';
import ChatbotButton from './ChatbotButton';

export default function SideBar() {
    return (
        <div className="flex flex-col gap-2 items-center p-4 ">
            <DirectorCard />

            <div className='flex flex-col justify-center items-center'>
                <div className='bg-orange-500 text-white text-2xl text-center px-10 py-4' > รายการหลัก</div>
                <ul className="menu w-80 rounded-box text-slate-200 visited:text-orange-400">
                    <MenuButton imgUrl='' iconUrl='' menu='ข้อมูลพื้นฐาน' goTo="/infomation" />
                    <MenuButton imgUrl='' iconUrl='' menu='บุคคลากร' goTo="/members" />
                    <MenuButton imgUrl='' iconUrl='' menu='กลุ่มบริหารงานบุคคลการเงินและสินทรัพย์' goTo="/hr-finance" />
                    <MenuButton imgUrl='' iconUrl='' menu='กลุ่มบริหารงานกิจการ' goTo="/activity" />
                    <MenuButton imgUrl='' iconUrl='' menu='กลุ่มบริหารงานทั่วไป' goTo="/general" />
                </ul>
            </div>


            <div className=''>
                <Calendar />
            </div>
            
            <div className='fixed z-[6000] bottom-10 right-8 '>
                <ChatbotButton />
            </div>
        </div>
    )
}
