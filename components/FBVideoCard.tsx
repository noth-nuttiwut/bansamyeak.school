"use client"
import { twMerge } from "tailwind-merge"
import ReactPlayer from "react-player"

type VideoProps = {
    videoUrl: string,
    videoName: string,
    videoCss?: string
}
export default function FBCard(props: VideoProps) {
    const divClass = twMerge(`flex flex-col w-full justify-center items-center sm:p-4 md:p-6 lg:p-10 gap-4 xs:p-2`, props.videoCss)
    return (
        <>
            <div className={divClass}>
                <div className="bg-orange-500 sm:text-nm lg:text-xl text-white p-2 px-10 rounded-sm break-words"> {props.videoName}</div>
                <div className="flex justify-center w-10/12">
                    <ReactPlayer
                        url={props.videoUrl}
                        controls
                        width="100%"
                        height="100%"
                        className="position sm:top-0 sm:left-0"
                    />
                </div>
            </div>
        </>
    )
}