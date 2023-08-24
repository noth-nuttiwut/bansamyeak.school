"use client"
import ReactPlayer from 'react-player'


type VideoProps = {
    videoUrl: string,
    videoName: string,
}
export default function VideoCard(props: VideoProps) {
    return (
        <div className="card shadow-xl">
            <div className="flex flex-col justify-center items-center p-4 gap-2">
                <div className="bg-orange-500 text-xl text-white py-4 px-2"> {props.videoName}</div>
                <ReactPlayer url={props.videoUrl} controls={true}/>
            </div>
            
        </div>
    )
}
