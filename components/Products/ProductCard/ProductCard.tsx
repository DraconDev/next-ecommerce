"use client";
import { basketItems } from "@/state/jotai";
import { ProductType } from "@/types/types";
import { useAtom } from "jotai";
import Image from "next/image";
import Rating from "./Rating";

const ProductCard = ({ product }: { product: ProductType }) => {
    const [itemsMap, setItemsMap] = useAtom(basketItems);

    const updateItem = (item: ProductType) => {
        // Mutate the map directly
        const elem = itemsMap.get(item.id);
        itemsMap.set(item.id, {
            product: item,
            quantity: elem ? elem.quantity + 1 : 1,
        });

        // Trigger an update with the same map reference
        setItemsMap(itemsMap);
    };

    return (
        <div className="flex flex-col w-[255px] h-[620px] items-center justify-between text-center p-1 flex-shrink-0 grow bg-primary rounded-xl max-w-[700px] z-20">
            <div className="flex items-center h-3/5">
                <Image
                    src={product.image}
                    alt={product.title}
                    width={230}
                    height={300}
                    className="max-h-[300px] max-w-[230px] object-contain"
                />
            </div>
            <div className="h-2/5 flex flex-col justify-between">
                <div className="flex flex-col justify-between h-full py-1">
                    <div className="font-bold text-lg h-full">
                        {product.title.length > 60
                            ? `${product.title.slice(0, 60)}...`
                            : product.title}
                    </div>
                    <div className="h-full">
                        {product.description.length > 100
                            ? `${product.description.slice(0, 100)}...`
                            : product.description}
                    </div>
                </div>
                <div className="">
                    <Rating rating={product.rating} />
                    <p className="font-bold text-xl">{`$${product.price}`}</p>
                </div>
                <button
                    className="w-full h-10 bg-accent text-primary font-bold p-1 rounded-lg"
                    onClick={() => updateItem(product)}
                >
                    Add to basket
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
