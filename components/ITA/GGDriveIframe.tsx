"use client"
import { twMerge } from "tailwind-merge";
import { useState } from "react"

type MenuProps = {
    url: string
    name: string
    imgCss?: string | ""
}


const GGDriveIframe = (props: MenuProps) => {
    const [loading, setLoading] = useState(true)
    const iframeStyle = {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: "100%",
        height: "100%"
    }

    const divClass = twMerge(`h-[65vh] sm:w-10/12  md:w-8/12 md:h-[90vw] lg:w-6/12 lg:h-[80vw] xl:w-6/12 xl:h-[70vw] px-10 pb-10`, props.imgCss)
    return (
        <>
            <div> {props.name} </div>
            <div className={divClass} key={props.url}>
                {
                    loading
                        ?
                        <div className="flex justify-center items-center">
                            <span className="loading loading-bars loading-lg"></span>
                        </div>
                        : <></>
                }
                <iframe src={props.url}
                    allow="autoplay"
                    title={props.name}
                    className="w-full aspect-video"
                    style={iframeStyle}
                    onLoad={() => setLoading(false)}
                >
                </iframe>
            </div>
        </>
    );
};

export default GGDriveIframe;