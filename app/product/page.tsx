"use client";
import Rating from "@/components/Products/ProductCard/Rating";
import MainWrapper from "@/components/layout/MainWrapper";
import { basketItems, currentProduct } from "@/state/jotai";
import { ProductType } from "@/types/types";
import { useAtom } from "jotai";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ProductPage = () => {
    const [itemsMap, setItemsMap] = useAtom(basketItems);
    const [product, setProduct] = useAtom(currentProduct);

    const router = useRouter();

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

    if (!product) {
        router.push("/");
    }

    return (
        product && (
            <MainWrapper>
                <div className={` flex md:flex-row flex-col p-3 px-1`}>
                    <div className="flex w-full md:w-2/3 bg-primary justify-center items-center grow">
                        <Image
                            src={product.image}
                            alt={product.title}
                            width={700}
                            height={700}
                            className="object-contain max-h-[700px] max-w-full md:max-w-[700px] rounded-lg"
                        />
                    </div>
                    <div className=" flex flex-col justify-between text-center gap-3 p-3 w-full">
                        <div className="flex flex-col  h-full py-1 gap-6">
                            <div className="font-bold text-2xl ">
                                {product.title}
                            </div>
                            <div className=" text-lg">
                                {product.description}
                            </div>
                        </div>
                        <div className="">
                            <Rating rating={product.rating} />
                            <p className="font-bold text-xl">{`$${product.price}`}</p>
                        </div>
                        <button
                            className=" h-10 bg-accent text-primary font-bold p-1 rounded-lg"
                            onClick={() => updateItem(product)}
                        >
                            Add to basket
                        </button>
                    </div>
                </div>
            </MainWrapper>
        )
    );
};

export default ProductPage;
