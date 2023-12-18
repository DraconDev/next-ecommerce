"use client";

import { basketItems, itemsCost } from "@/state/jotai";
import { useAtom } from "jotai";
import Link from "next/link";

type Props = {};

const PriceBox = (props: Props) => {
    const [basket, _2] = useAtom(basketItems);

    const [price, _] = useAtom(itemsCost);

    return (
        <div className="flex flex-row items-end justify-end w-full text-xl">
            <div className="flex flex-col items-end p-1 gap-1">
                <div className="">Sum Total</div>
                <div className="">${price.toFixed(2)}</div>
                {basket.size !== 0 && (
                    <Link
                        href="/buy"
                        className={`font-bold p-2 bg-accent  rounded-lg  `}
                    >
                        Buy
                    </Link>
                )}
            </div>
        </div>
    );
};

export default PriceBox;
