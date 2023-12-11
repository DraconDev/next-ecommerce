"use client";
import MyContext from "@/state/context";
import { useContext } from "react";

type Props = {};

const CategoryList = (props: Props) => {
    const state = useContext(MyContext);
    return (
        <div className="flex w-full gap-3 items-center">
            {state.categories.map((category) => (
                <button
                    key={category}
                    className="p-1"
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default CategoryList;
