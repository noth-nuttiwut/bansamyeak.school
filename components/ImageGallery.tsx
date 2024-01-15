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
        // return {
        //     original : `https://drive.google.com/uc?id=${item.id}`,
        //     thumbnail : `https://drive.google.com/uc?id=${item.id}`
        // }
        return {
            original : `https://lh3.googleusercontent.com/d/${item.id}?authuser=0`,
            thumbnail : `https://lh3.googleusercontent.com/d/${item.id}?authuser=0`
        }


        
    })

    return (
        <div className="w-[85vw] h-auto md:w-[80vw] lg:w-[60vw] xl:w-[60vw] 2xl:w-[50vw] 3xl:w-[50vw] p-8">
            <ImageGallery items={items} infinite={true} autoPlay={true} slideInterval={props.slideInterval ?? 8000} thumbnailPosition={"top"} showThumbnails={props.showThumbnails ?? false}/>
        </div>
    )
}