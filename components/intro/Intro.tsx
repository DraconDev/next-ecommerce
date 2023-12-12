import ImageCarousel from "./ImageCarousel";

const Intro = () => {
    const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

    return (
        <div
            className={
                "max-w-6xl w-full   text-black flex  items-center flex-col"
            }
        >
            <ImageCarousel images={images} />
        </div>
    );
};

export default Intro;
