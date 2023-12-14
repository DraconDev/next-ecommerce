"use client";

import { itemsCost } from "@/state/jotai";
import { useAtom } from "jotai";

type Props = {};

const PriceBox = (props: Props) => {
    const [price, _] = useAtom(itemsCost);
    return (
        <div className="flex flex-row justify-between">
            <div className="">Total: </div>
            <div className="">${price.toFixed(2)}</div>
        </div>
    );
};

export default PriceBox;
