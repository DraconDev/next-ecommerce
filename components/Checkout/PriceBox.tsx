"use client";

import { itemsCost } from "@/state/jotai";
import { useAtom } from "jotai";

type Props = {};

const PriceBox = (props: Props) => {
    const [price, _] = useAtom(itemsCost);
    return (
        <div className="flex flex-row items-end justify-end w-full text-xl">
            <div className="flex flex-col items-end p-1 gap-1">
                <div className="">Sum Total</div>
                <div className="">${price.toFixed(2)}</div>
                {/* <button className="font-bold p-2 bg-accent rounded-lg">
                    Buy
                </button> */}
            </div>
        </div>
    );
};

export default PriceBox;
