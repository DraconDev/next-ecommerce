"use client";
type Props = {};
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import CategoryButton from "./CategoryButton";
import CategoryList from "./CategoryList";

const Menu = (props: Props) => {
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <button
                className="flex items-center"
                onClick={() => setVisible(!visible)}
            >
                <IoMenu className="w-8 h-8" />
            </button>
            {visible && (
                <div className="fixed w-[250px] max-w-[75%] h-screen bg-white mt-1 text-center text-black ">
                    <div className="w-full flex flex-col gap-3 ">
                        <CategoryButton category="Best sellers" />
                        <CategoryList
                            start={1}
                            align={"col"}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Menu;
