import { BasketItemType } from "@/types/types";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";

type Props = {};

const ItemQuantity = ({ item }: { item: BasketItemType }) => {
    const [dropdownState, setDropdownState] = useState(false);
    const amount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const dropdownRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        // Close the dropdown if the click is outside of it and not on the button
        if (
            dropdownRef.current &&
            buttonRef.current &&
            !dropdownRef.current.contains(event.target as Node) &&
            !buttonRef.current.contains(event.target as Node)
        ) {
            setDropdownState(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    
    return (
        <div className="relative">
            <button
                className="flex items-center gap-1 "
                onClick={() => setDropdownState(!dropdownState)}
                ref={buttonRef}
            >
                <div className="">{item.quantity}</div>
                <div className="">
                    <IoIosArrowDropdown className="w-6 h-6" />
                </div>
            </button>
            {dropdownState && (
                <div
                    className="absolute top-10 right-0 bg-primary border-2 rounded-lg  p-1"
                    ref={dropdownRef}
                >
                    {amount.map((amount) => (
                        <button
                            key={amount}
                            className="w-8 h-8 flex justify-center items-center hover:bg-accent rounded-lg"
                        >
                            {amount}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ItemQuantity;
