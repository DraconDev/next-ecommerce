import ImageCarousel from "./ImageCarousel";

const Home = () => {
    const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

    return (
        <div>
            <ImageCarousel images={images} />
        </div>
    );
};

export default Home;
