"use client";
import { useEffect, useRef, useState } from "react";
import { IoMenu } from "react-icons/io5";
import MenuItemSpecial from "./MenuItemSpecial";
import MenuList from "./MenuList";

const Menu = () => {
    const [visible, setVisible] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const handleClickOutside = (event: MouseEvent) => {
        // Close the dropdown if the click is outside of it and not on the button
        if (
            dropdownRef.current &&
            buttonRef.current &&
            !dropdownRef.current.contains(event.target as Node) &&
            !buttonRef.current.contains(event.target as Node)
        ) {
            setVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div>
            <button
                ref={buttonRef}
                className="flex items-center"
                onClick={() => setVisible(!visible)}
            >
                <IoMenu className="w-8 h-8" />
            </button>

            {visible && (
                <div
                    ref={dropdownRef}
                    className="fixed w-[250px] max-w-[75%] h-screen bg-white mt-2 md:mt-1 ml-[-4px] text-center text-black  border-secondary border-l-2 border-r-2 flex-col justify-between"
                >
                    <div className="w-full h-[90%] flex flex-col justify-between py-2">
                        <div className="w-full flex flex-col gap-2 ">
                            <MenuItemSpecial
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
