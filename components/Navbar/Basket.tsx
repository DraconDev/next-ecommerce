"use client";
type Props = {};
import { BsBasket3 } from "react-icons/bs";

const Basket = (props: Props) => {
    return (
        <div className="flex items-center gap-1 text-lg text-accent">
            <BsBasket3 className="w-9 h-9" />
            {/* <span className=""></span> */}
        </div>
    );
};

export default Basket;
