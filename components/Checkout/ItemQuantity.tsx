import { useHandleClickOutside } from "@/helpers/click/clickoutside";
import { useUpdateItem } from "@/helpers/shop/shop";
import { BasketItemType } from "@/types/types";
import { IoIosArrowDropdown } from "react-icons/io";

type Props = {};

const ItemQuantity = ({ item }: { item: BasketItemType }) => {
    const updateQuantity = useUpdateItem();

    const amount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const { dropdownRef, buttonRef, dropMenuState, setDropMenuState } =
        useHandleClickOutside();

    return (
        <div className="relative">
            <button
                className="flex items-center gap-1 "
                onClick={() => setDropMenuState(!dropMenuState)}
                ref={buttonRef}
            >
                <div className="">{item.quantity}</div>
                <div className="">
                    <IoIosArrowDropdown className="w-6 h-6" />
                </div>
            </button>
            {dropMenuState && (
                <div
                    className="absolute top-10 right-0 bg-primary border-2 rounded-lg  p-1 z-20"
                    ref={dropdownRef}
                >
                    {amount.map((amount) => (
                        <button
                            key={amount}
                            className="w-8 h-8 flex justify-center items-center hover:bg-accent rounded-lg"
                            onClick={() => updateQuantity(item.product, amount)}
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
