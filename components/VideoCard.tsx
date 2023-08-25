"use client"
import ReactPlayer from 'react-player'


type VideoProps = {
    videoUrl: string,
    videoName: string,
}
export default function VideoCard(props: VideoProps) {
    return (
        <div className="card shadow-xl">
            <div className="bg-orange-500 text-xl text-white p-4 rounded-sm"> {props.videoName}</div>
            <div className="flex flex-col justify-center items-center py-4">
                
                <ReactPlayer url={props.videoUrl} controls={true}/>
            </div>
            
        </div>
    )
}
