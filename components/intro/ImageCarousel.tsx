// components/ImageCarousel.js
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const ImageCarousel = ({ images }: { images: string[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000); // Change image every 5 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className="relative w-full h-[250px]">
            <div className="z-0 absolute  h-[420px]  w-full overflow-hidden e">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`${
                            index === currentIndex ? "" : "hidden"
                        } duration-700 ease-in-out absolute top-0 left-0 w-full `}
                    >
                        <Image
                            src={`/carousel/${image}`} // Adjust the path based on your folder structure
                            className="object-cover w-full h-full bg-gradient-fade-bottom bg-gradient-to-b"
                            alt={`${index + 1}`}
                            width={1920}
                            height={1080}
                        />
                    </div>
                ))}
                <button
                    type="button"
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 bg-black text-white rounded-r-full opacity-50 hover:opacity-75 "
                    onClick={prevSlide}
                >
                    <FaAngleDoubleLeft className="w-8 h-8" />
                </button>
                <button
                    type="button"
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 bg-black text-white rounded-l-full opacity-50 hover:opacity-75"
                    onClick={nextSlide}
                >
                    <FaAngleDoubleRight className="w-8 h-8" />
                </button>
            </div>
        </div>
    );
};

export default ImageCarousel;
