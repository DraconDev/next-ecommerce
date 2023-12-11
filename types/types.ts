import Rating from "@/components/Products/ProductCard/Rating";

export type RatingType = {
    rate: number;
    count: number;
};

export type ProductType = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
};
