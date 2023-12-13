"use client";
type Props = {};
import { itemCount } from "@/state/jotai";
import { useAtom } from "jotai";
import Link from "next/link";
import { BsBasket3 } from "react-icons/bs";

const Basket = (props: Props) => {
    const [count, setCount] = useAtom(itemCount);
    return (
        <Link href="/checkout">
            <div className="flex items-center  text-lg text-accent relative justify-center">
                <BsBasket3 className="w-9 h-9" />
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[20%]  text-lg text-primary font-bold">
                    {count}
                </span>
            </div>
        </Link>
    );
};

export default Basket;
