import { RatingType } from "@/types/types";
import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa";
const Rating = ({ rating }: { rating: RatingType }) => {
    const fullStars = Math.floor(rating.rate);
    const hasHalfStar = rating.rate % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    return (
        <div className="flex justify-center items-center">
            {[...Array(fullStars)].map((_, index) => (
                <FaStar
                    key={index}
                    className="text-accent"
                />
            ))}
            {hasHalfStar && <FaStarHalf className="text-accent" />}
            {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map(
                (_, index) => (
                    <FaRegStar
                        key={index}
                        className="text-accent"
                    />
                )
            )}
        </div>
    );
};

export default Rating;
