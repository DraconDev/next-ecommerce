export type RatingType = {
    rate: number;
    count: number;
};

export type ProductType = {
    id: number; //
    title: string; //
    price: number;
    description: string; //
    category: string;
    image: string; //
    rating: RatingType; //
};

export type BasketItemType = {
    product: ProductType;
    quantity: number;
};

export type BasketItemTypes = Map<number, BasketItemType>;
