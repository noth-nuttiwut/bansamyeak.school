"use client"
import { twMerge } from "tailwind-merge"
import ReactPlayer from "react-player"

type VideoProps = {
    videoUrl: string,
    videoName: string,
    videoCss?: string
}
export default function VideoCard(props: VideoProps) {
    const divClass = twMerge(`card justify-center xs:p-2 sm:p-4 md:p-6 lg:p-10 gap-4`, props.videoCss)
    return (
        <>
            <div className={divClass}>
                <div className="bg-orange-500 sm:text-nm lg:text-xl text-white p-4 rounded-sm break-words"> {props.videoName}</div>
                <div className="relative xs:w-[250px] xs:p-2  sm:w-full">
                    <ReactPlayer
                        url={props.videoUrl}
                        controls
                        className="top-0 left-0 absolute"
                        width='100%'
                        height='100%'
                    />
                </div>
            </div>
        </>
    )
}