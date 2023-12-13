"use client";
import MyContext from "@/state/context";
import { useContext } from "react";
import CategoryButton from "./CategoryButton";

const CategoryList = () => {
    const state = useContext(MyContext);
    return (
        <div
            className={`flex w-full flex-row gap-2 items-center text-sm  md:text-lg `}
        >
            {state.categories.map((category) => (
                <CategoryButton
                    key={category}
                    category={category}
                />
            ))}
        </div>
    );
};

export default CategoryList;
