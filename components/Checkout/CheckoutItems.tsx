"use client";
import { basketItems } from "@/state/jotai";
import { useAtom } from "jotai";

type Props = {};

const CheckoutItems = (props: Props) => {
    const [basket, _] = useAtom(basketItems);
    return (
        <div>
            {basket.map((item, index) => (
                <div
                    key={index}
                    className="flex justify-between text-xl w-2/3"
                >
                    <p>{item.title}</p>
                    <p className="">{`$${item.price}`}</p>
                </div>
            ))}
        </div>
    );
};

export default CheckoutItems;
