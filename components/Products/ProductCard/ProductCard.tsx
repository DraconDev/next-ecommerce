"use client";
import { basketItems, currentProduct } from "@/state/jotai";
import { ProductType } from "@/types/types";
import { useAtom } from "jotai";
import Image from "next/image";
import Link from "next/link";
import Rating from "./Rating";

const ProductCard = ({ product }: { product: ProductType }) => {
    const [itemsMap, setItemsMap] = useAtom(basketItems);
    const [curProduct, setCurProduct] = useAtom(currentProduct);

    const updateItem = (item: ProductType) => {
        // Create a new Map instance with updated values
        const updatedMap = new Map(itemsMap);

        const existingItem = updatedMap.get(item.id);

        updatedMap.set(item.id, {
            product: item,
            quantity: existingItem ? existingItem.quantity + 1 : 1,
        });

        // Trigger an update with the new Map instance
        setItemsMap(updatedMap);
    };

    return (
        <div className="flex flex-col   items-center justify-between text-center p-1 flex-shrink-0 grow bg-primary rounded-xl z-20">
            <Link
                href="/product"
                onClick={() => setCurProduct(product)}
                className="flex flex-col w-[255px] h-[610px] items-center justify-between text-center p-1 flex-shrink-0 grow bg-primary rounded-xl max-w-[700px]"
            >
                <div className="flex items-center h-[55%]">
                    <Image
                        src={product.image}
                        alt={product.title}
                        width={270}
                        height={300}
                        className="max-h-[300px] max-w-[300px] object-contain"
                    />
                </div>
                <div className="h-[45%] flex flex-col justify-between">
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
                </div>
            </Link>
            <button
                className=" w-full h-10 bg-accent text-primary font-bold p-1 rounded-lg"
                onClick={() => updateItem(product)}
            >
                Add to basket
            </button>
        </div>
    );
};

export default ProductCard;
