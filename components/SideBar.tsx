
"use client"
import MiniCalendar from './Calendar';
import DirectorCard from './DirectorCard';
import MenuButton from './MenuButton';
import ChatbotButton from './ChatbotButton';


export default function SideBar() {
    return (
        <div className="flex flex-col gap-2 items-center px-8 py-4">
            <DirectorCard />

            <div className='flex flex-col justify-center items-center'>
                <div className='bg-orange-500 text-white text-2xl text-center px-10 py-4' > รายการหลัก</div>
                <ul className="menu w-80 rounded-box text-slate-200 visited:text-orange-400 gap-2">
                    <MenuButton imgUrl='' iconUrl='' menu='ทำเนียบบุคลากร' goTo="/staff" />
                    <MenuButton imgUrl='' iconUrl='' menu='งานวิชาการ' goTo="/academic" />
                    <MenuButton imgUrl='' iconUrl='' menu='งานงบประมาณ' goTo="/budget" />
                    <MenuButton imgUrl='' iconUrl='' menu='งานบุคคล' goTo="/human" />
                    <MenuButton imgUrl='' iconUrl='' menu='งานบริหารทั่วไป' goTo="/general-management" />
                </ul>
            </div>


            <div className='flex justify-center'>
                <MiniCalendar />
            </div>
            
            <div className='fixed z-[6000] bottom-10 right-8 '>
                <ChatbotButton />
            </div>
        </div>
    )
}
