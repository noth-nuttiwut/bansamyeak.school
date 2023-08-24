"use client"

import { Suspense } from "react";

type MenuProps = {
    url: string
    name: string
}


const GGDriveIframe = (props: MenuProps) => {

    const iframeStyle = {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: "100%",
        height: "100%"
    }


    return (
        <div className="w-8/12 h-screen">
            <Suspense fallback={<p>กำลังโหลดข้อมูล ....</p>}>
                <iframe src={props.url}
                    allow="autoplay"
                    title={props.name}
                    className="w-full aspect-video"
                    style={iframeStyle}
                >
                </iframe>
            </Suspense>
        </div>
    );
};

export default GGDriveIframe;