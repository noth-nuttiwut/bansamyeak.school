

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import DirectorCard from './DirectorCard';

import SimpleMap from './SimpleGGMap';
export default function SideBar() {
    return (
        <div className="flex flex-col gap-4">
            <DirectorCard />
            <div className='m-4'>
                <Calendar />
            </div>
            <SimpleMap />
        </div>
    )
}
