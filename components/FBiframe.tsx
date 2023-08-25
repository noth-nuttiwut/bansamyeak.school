

"use client"

import { twMerge } from "tailwind-merge";
import { useState } from "react"

type MenuProps = {
    url: string
    name: string
    imgCss?: string | ""
}


const FBiframe = (props: MenuProps) => {
    const [loading, setLoading] = useState(true)
    const iframeStyle = {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: "100%",
        height: "100%"
    }

    const divClass = twMerge(`h-[60vh] sm:w-10/12  md:w-8/12 md:h-[90vw] lg:w-6/12 lg:h-[80vw] xl:w-6/12 xl:h-[70vw] px-10 pb-10`, props.imgCss)
    return (
        <>
            <p> {props.name} </p>
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
                className="w-full justify-center aspect-video"
                style={iframeStyle}
                allowFullScreen={true} 
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
                </iframe>
            </div>
        </>
    );
};

export default FBiframe;

