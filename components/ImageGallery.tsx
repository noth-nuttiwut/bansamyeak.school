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
    slideInterval?: number
}


export default function ImageGalleryComp(props: carouselImageSetType) {

    const items = props.images.map(item => {
        return {
            original : `https://drive.google.com/uc?id=${item.id}`,
            thumbnail : `https://drive.google.com/uc?id=${item.id}`
        }
    })

    return (
        <div className="w-[85vw] h-auto  lg:w-[50vw] xl:w-[50vw] py-8">
            <ImageGallery items={items} infinite={true} autoPlay={true} slideInterval={props.slideInterval ?? 8000} thumbnailPosition={"top"} showThumbnails={props.showThumbnails ?? false}/>
        </div>
    )
}