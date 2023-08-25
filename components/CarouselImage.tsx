
import Image from "next/image"
import { GGResponeType } from "@/libs/googleDrive"


type carouselImageSetType = {
    images: GGResponeType[]
}

export default function CarouselImage(props: carouselImageSetType) {
    return (
        <div>
            <div className="flex justify-center w-full py-2 gap-2">
                {
                    props.images.map((image, index) => {
                        return (
                            <a key={"top-indicator-"+index} href={"#" + image.id} className="btn btn-circle bg-slate-600 text-white text-lg"> {index + 1}</a>
                        )
                    })
                }
            </div>
            <div className="carousel">

                {
                    props.images.map((image, index) => {
                        return (
                            <div id={image.id} className="carousel-item w-full justify-center" key={image.id}>

                                <Image src={`https://drive.google.com/uc?id=${image.id}`}
                                    alt={"carousel-image-" + image.name}
                                    quality={100}
                                    width={800}
                                    height={600}
                                    style={{ objectFit: "scale-down" }}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                        )
                    })
                }
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                {
                    props.images.map((image, index) => {
                        return (
                            <a key={"bot-indicator-"+index} href={"#" + image.id} className="btn btn-circle bg-slate-600 text-white text-lg"> {index + 1}</a>
                        )
                    })
                }
            </div>
        </div>
    )

}