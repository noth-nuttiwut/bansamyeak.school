"use client"
import Image from "next/image"
import { GGResponeType } from "@/libs/googleDrive"


type carouselImageSetType = {
    images: GGResponeType[]
}


export default function CarouselSlide(props: carouselImageSetType) {
    return (
        <div className="flex justify-center px-10 py-8">
            <div className="carousel w-full" data-carousel="slide">

                {
                    props.images.map((image, index) => {
                        return (
                            <div key={image.id} id={"GGImage-" + index} className="carousel-item relative w-full justify-center" data-carousel-item>
                                <Image src={`https://drive.google.com/uc?id=${image.id}`}
                                    alt={"carousel-image-" + image.name}
                                    quality={100}
                                    width={800}
                                    height={600}
                                    style={{ objectFit: "scale-down" }}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />

                                {
                                    index == 0 ? // first Item
                                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                            <a href={`#GGImage-${index}`} className="btn btn-circle bg-transparent hover:bg-slate-400" data-carousel-prev>❮</a>
                                            <a href={`#GGImage-${index + 1}`} className="btn btn-circle bg-transparent hover:bg-slate-400" data-carousel-next>❯</a>
                                        </div>
                                    : index + 1 == props.images.length ?   // last Item

                                        < div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                            <a href={`#GGImage-${index - 1}`} className="btn btn-circle bg-transparent hover:bg-slate-400" data-carousel-prev>❮</a>
                                            <a href={`#GGImage-0`} className="btn btn-circle bg-transparent hover:bg-slate-400" data-carousel-next>❯</a>
                                        </div>
                                    : // normal item
                                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                            <a href={`#GGImage-${index - 1}`} className="btn btn-circle bg-transparent hover:bg-slate-400" data-carousel-prev>❮</a>
                                            <a href={`#GGImage-${index + 1}`} className="btn btn-circle bg-transparent hover:bg-slate-400" data-carousel-next>❯</a>
                                        </div>
                                }

                            </div>

                        )
                    })
                }

            </div>

        </div >
    )
}