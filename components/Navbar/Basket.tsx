"use client";
type Props = {};
import { itemCount } from "@/state/jotai";
import { useAtom } from "jotai";
import { BsBasket3 } from "react-icons/bs";

const Basket = (props: Props) => {
    const [count, setCount] = useAtom(itemCount);
    return (
        <div className="flex items-center gap-1 text-lg text-accent relative">
            <BsBasket3 className="w-9 h-9" />
            <span className="absolute top-0 right-0 text-xs">{count}</span>
        </div>
    );
};

export default Basket;
