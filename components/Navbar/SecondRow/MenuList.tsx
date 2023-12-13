import MyContext from "@/state/context";
import { useContext } from "react";
import CategoryButton from "./CategoryButton";

type Props = {};

const MenuList = (props: Props) => {
    const state = useContext(MyContext);
    return (
        <div
            className={`flex w-full flex-col gap-2 items-center text-sm  md:text-lg `}
        >
            {state.categories.slice(1).map((category) => (
                <CategoryButton
                    key={category}
                    category={category}
                />
            ))}
        </div>
    );
};

export default MenuList;
