"use client";
type Props = {};
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import MenuItem from "./MenuItem";
import MenuList from "./MenuList";

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
                <div className="fixed w-[250px] max-w-[75%] h-screen bg-white mt-2 md:mt-1 ml-[-4px] text-center text-black  border-secondary border-l-2 border-r-2 flex-col justify-between ">
                    <div className="w-full h-[90%] flex flex-col justify-between py-1">
                        <div className="w-full flex flex-col gap-2 ">
                            <MenuItem
                                category="Best sellers"
                                click={() => setVisible(!visible)}
                            />
                            <div className="h-[1px] w-full px-2 bg-tertiary"></div>
                            <MenuList click={() => setVisible(!visible)} />
                        </div>
                        <div className="text-sm p-2 flex ">
                            @2023 copyright all rights reserved
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Menu;
