"use client"

export default function SimpleMap() {
    const iframeStyle = {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: "100%",
        height: "100%"
    }


    return (
        <div className='flex flex-col gap-4 sm:p-4 md:p-6 lg:p-8'>
            <div className='p-2 bg-orange-500 text-center text-white py-4 rounded-sm'>
                แผนที่ตั้งพิกัดโรงเรียนบ้านสามแยก  อำเภอเกาะจันทร์  จังหวัดชลบุรี
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.4723603899415!2d101.31572857631551!3d13.383051686971452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d298af158d1fd%3A0x51710f20f04c5c9c!2sBan%20Sam%20Yaek%20School!5e0!3m2!1sen!2sth!4v1692944742258!5m2!1sen!2sth"
                style={iframeStyle}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full justify-center aspect-video"
            >
            </iframe>
        </div>
    );
}
