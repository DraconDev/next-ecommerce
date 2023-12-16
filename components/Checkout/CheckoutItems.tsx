"use client";
import { basketItems, currentProduct } from "@/state/jotai";
import { BasketItemType } from "@/types/types";
import { useAtom } from "jotai";
import Link from "next/link";
import ItemQuantity from "./ItemQuantity";

type Props = {};

const CheckoutItems = (props: Props) => {
    const [basket, _] = useAtom<Map<number, BasketItemType>>(basketItems);

    const [curProduct, setCurProduct] = useAtom(currentProduct);

    return (
        <div className="w-full gap-3 flex flex-col p-1">
            {/* Iterate over the values of the basket map */}
            {Array.from(basket.values()).map((item, index) => (
                <div
                    key={index}
                    className="flex justify-between text-xl w-full "
                >
                    <Link
                        href="/product"
                        onClick={() => setCurProduct(item.product)}
                        className="flex flex-wrap w-full  min-h-[40px] p-2 rounded-lg "
                    >
                        <div className="">{item.product.title}</div>
                    </Link>
                    <div className="flex justify-between gap-4 w-[150px] items-center">
                        <div className="flex ">{`$${item.product.price}`}</div>
                        <ItemQuantity item={item} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CheckoutItems;
