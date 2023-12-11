"use client";
import MyContext from "@/state/context";
import { useContext } from "react";
import CategoryButton from "./CategoryButton";

type Props = {};

const CategoryList = (props: Props) => {
    const state = useContext(MyContext);
    return (
        <div className="flex w-full gap-3 items-center">
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
