
import Image from "next/image"
type GGResponeType = {
    kind: string
    mimeType: string
    id: string
    name: string

}


type carouselImageSetType = {
    images: GGResponeType[]
}

export default function CarouselImage(props: carouselImageSetType) {
    return (
        <div>
            <div className="flex justify-center w-full p-4 gap-2 mx-6">
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
                                <img 
                                    src={`https://drive.google.com/uc?id=${image.id}`}
                                    alt={"carousel-image-" + image.name}
                                    width="100"
                                    height="100"
                                    sizes="60vw"
                                    className="w-[80vw] h-full md:w-[40vw] lg:w-[60vw]"
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