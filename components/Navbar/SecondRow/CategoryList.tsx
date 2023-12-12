"use client";
import MyContext from "@/state/context";
import { useContext } from "react";
import CategoryButton from "./CategoryButton";

type Props = {
    start?: number;
    align?: string;
};

const CategoryList = ({ start = 0, align = "row" }: Props) => {
    const state = useContext(MyContext);
    return (
        <div className={`flex w-full flex-${align} gap-3 items-center`}>
            {state.categories.slice(start).map((category) => (
                <CategoryButton
                    key={category}
                    category={category}
                />
            ))}
        </div>
    );
};

export default CategoryList;
