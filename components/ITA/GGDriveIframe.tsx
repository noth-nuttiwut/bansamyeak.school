"use client"

import { twMerge } from "tailwind-merge";
import { useState } from "react"

type MenuProps = {
    url: string
    name: string
    wCss?: string | ""
    hCss?: string | ""
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

    const divClass = twMerge(`w-6/12 h-screen`, props.wCss, props.hCss)
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
                <iframe src={props.url}
                    allow="autoplay"
                    title={props.name}
                    className="w-full aspect-auto"
                    style={iframeStyle}
                    onLoad={() => setLoading(false)}
                >
                </iframe>
            </div>
        </>
    );
};

export default GGDriveIframe;