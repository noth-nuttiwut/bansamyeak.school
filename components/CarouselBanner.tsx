import Image from "next/image"
import Banner1 from "@/public/Banner-ITA.jpg"
import Banner2 from "@/public/Banner-school.jpg"

export default function CarouselBanner() {
    return (

        <div className="carousel">
            <div id="slide1" className="carousel-item relative w-full justify-center">
                <Image src={Banner1} 
                    alt="banner-1"
                    style={{
                        minHeight: "20vh"
                    }}
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full justify-center">
                <Image src={Banner2} 
                    alt="banner-2"
                    style={{
                        minHeight: "20vh"
                    }}
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    )

}
