"use client"
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

type GGResponeType = {
    kind: string
    mimeType: string
    id: string
    name: string

}
type carouselImageSetType = {
    images: GGResponeType[]
    showThumbnails?: boolean
}


export default function ImageGalleryComp(props: carouselImageSetType) {

    const items = props.images.map(item => {
        return {
            original : `https://drive.google.com/uc?id=${item.id}`,
            thumbnail : `https://drive.google.com/uc?id=${item.id}`
        }
    })

    return (
        <div className="w-[80vw] h-auto lg:w-[70vw] xl:w-[60vw] py-8">
            <ImageGallery items={items} infinite={true} autoPlay={true} slideInterval={8000} thumbnailPosition={"top"} showThumbnails={props.showThumbnails ?? false}/>
        </div>
    )
}