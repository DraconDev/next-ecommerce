import { PiDiamondBold } from "react-icons/pi";

type Props = {
    category: string;
    // click: () => void;
    action: () => void;
};

const MenuItemUI = ({ category, action }: Props) => {
    return (
        <button
            onClick={action}
            className="w-full h-full text-left"
        >
            <div className="flex hover:text-accent h-full">
                <div className="w-1/4 flex justify-center items-center">
                    <PiDiamondBold />
                </div>
                <div className="w-3/4">{category}</div>
            </div>
        </button>
    );
};

export default MenuItemUI;
