"use client"
import GoogleMapReact from 'google-map-react';

export default function SimpleMap() {
    const defaultProps = {
        center: {
            lat: 13.3829901,
            lng: 101.3183004
        },
        zoom: 16
    };

    return (
        <div style={{ height: '40vh', width: '90%' }} className='flex flex-col gap-4'>
            <div className='p-2 bg-orange-500 text-center text-white py-4 rounded-sm'>
                แผนที่ตั้งพิกัดโรงเรียนบ้านสามแยก  อำเภอเกาะจันทร์  จังหวัดชลบุรี
            </div>
            <GoogleMapReact
                defaultCenter={defaultProps.center}
                center={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                zoom={defaultProps.zoom}
            >
            </GoogleMapReact>
        </div>
    );
}
