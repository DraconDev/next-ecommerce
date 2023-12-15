"use client";
import { basketItems } from "@/state/jotai";
import { BasketItemType } from "@/types/types";
import { useAtom } from "jotai";
import ItemQuantity from "./ItemQuantity";

type Props = {};

const CheckoutItems = (props: Props) => {
    const [basket, _] = useAtom<Map<number, BasketItemType>>(basketItems);

    return (
        <div className="w-full gap-3 flex flex-col p-2">
            {/* Iterate over the values of the basket map */}
            {Array.from(basket.values()).map((item, index) => (
                <div
                    key={index}
                    className="flex justify-between text-xl w-full"
                >
                    {/* Access properties from the BasketItemType */}
                    <p className="flex flex-wrap w-1/2 ">
                        {item.product.title}
                    </p>
                    <div className="flex justify-between gap-4 w-1/6">
                        <div className="flex ">{`$${item.product.price}`}</div>
                        <ItemQuantity item={item} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CheckoutItems;
