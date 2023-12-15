import { BasketItemType } from "@/types/types";
import { useRef, useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";

type Props = {};

const ItemQuantity = ({ item }: { item: BasketItemType }) => {
    const [dropdownState, setDropdownState] = useState(false);
    const amount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const dropdownRef = useRef(null);
    return (
        <button
            className="flex items-center gap-1 relative"
            onClick={() => setDropdownState(!dropdownState)}
            ref={dropdownRef}
        >
            <div className="">{item.quantity}</div>
            <div className="">
                <IoIosArrowDropdown className="w-6 h-6" />
            </div>
            {dropdownState && (
                <div className="absolute top-10 right-0 bg-primary border-2 rounded-lg  p-1">
                    {amount.map((amount) => (
                        <div
                            key={amount}
                            className="w-8 h-8 flex justify-center items-center hover:bg-accent rounded-lg"
                        >
                            {amount}
                        </div>
                    ))}
                </div>
            )}
        </button>
    );
};

export default ItemQuantity;
