

"use client"

import { twMerge } from "tailwind-merge";
import { useState } from "react"

type MenuProps = {
    url: string
    name: string
    imgCss?: string | ""
}


const GGFormiFrame = (props: MenuProps) => {
    const [loading, setLoading] = useState(true)
    const iframeStyle = {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: "100%",
        height: "100%"
    }

    const divClass = twMerge(`h-screen w-[90vw] px-2 pb-2 md:px-8 md:pb-8`, props.imgCss)
    return (
        <>
            <div className={divClass} key={props.url}>
                {
                    loading
                        ?
                        <div className="flex justify-center items-center">
                            <span className="loading loading-bars loading-lg"></span>
                        </div>
                        : <></>
                }
                <iframe 
                    src={props.url}
                    width="0" height="0" 
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

export default GGFormiFrame;

