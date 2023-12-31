"use client"
import { twMerge } from "tailwind-merge"


type VideoProps = {
    videoUrl: string,
    videoName: string,
    videoCss?: string
}
export default function VideoCard(props: VideoProps) {
    const iframeStyle = {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: "100%",
        height: "100%",
        maxWidth: "1280px",
        maxHeight: "768px"
    }

    const divClass = twMerge(`flex card justify-center sm:p-4 md:p-6 lg:p-10 gap-4 round-xl`, props.videoCss)
    return (
        <div className={divClass}>
            <div className="bg-orange-500 sm:text-nm lg:text-xl text-white p-4 rounded-sm break-words"> {props.videoName}</div>
            <iframe 
                src={props.videoUrl}
                title={props.videoName}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen={true}
                className="w-full justify-center aspect-video p-4"
                style={iframeStyle}
            >
            </iframe>

        </div>
    )
}
