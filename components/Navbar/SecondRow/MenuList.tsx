import MyContext from "@/state/context";
import { useContext } from "react";
import MenuItem from "./MenuItem";

type Props = {
    click: () => void;
};

const MenuList = (props: Props) => {
    const state = useContext(MyContext);
    return (
        <div
            className={`flex w-full flex-col gap-2 items-center text-sm  md:text-lg `}
        >
            {state.categories.slice(1).map((category) => (
                <MenuItem
                    key={category}
                    category={category}
                    click={props.click}
                />
            ))}
        </div>
    );
};

export default MenuList;
