"use client";
type Props = {};
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { FaAnglesDown } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { productQuery } from "../ReactQuery/Queries";
import DropdownOption from "./DropdownOption";

const SearchField = (props: Props) => {
    const queryClient = useQueryClient();
    const [searchField, setSearchField] = useState("");
    const [dropMenuState, setDropMenuState] = useState(false);
    const [searchSetting, setSearchSetting] = useState("titles");
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const fetchProducts = () => {
        if (searchField.length <= 2) return;
        // queryClient.invalidateQueries({ queryKey: ["products"] });
        queryClient.fetchQuery(
            productQuery({
                searchTerm: searchField,
                searchType: searchSetting,
            })
        );
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            fetchProducts();
        }
    };

    const handleMouseDown = (event: MouseEvent) => {
        // Close the dropdown if the click is outside of it
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node)
        ) {
            setDropMenuState(false);
        }
    };

    useEffect(() => {
        // Add event listener when the component mounts
        document.addEventListener("mousedown", handleMouseDown);

        // Remove event listener when the component unmounts
        return () => {
            document.removeEventListener("mousedown", handleMouseDown);
        };
    }, []); // Empty dependency array ensures this effect runs only once

    return (
        <div className="text-xl  w-full   border-2 border-accent rounded-xl flex grow text-black ">
            <button
                className="p-2 bg-tertiary text-accent rounded-lg rounded-r-none "
                onClick={() => setDropMenuState(!dropMenuState)}
            >
                <FaAnglesDown className="w-5 h-5" />
                <div
                    className="relative "
                    ref={dropdownRef}
                >
                    {dropMenuState && (
                        <div className="bg-secondary text-white rounded-lg  flex flex-col absolute top-3 left-[-10px] p-1 border-2 border-accent">
                            <DropdownOption
                                option="titles"
                                setSearchSetting={setSearchSetting}
                                searchSetting={searchSetting}
                            />
                            <DropdownOption
                                option="categories"
                                setSearchSetting={setSearchSetting}
                                searchSetting={searchSetting}
                            />
                        </div>
                    )}
                </div>
            </button>

            <input
                className=" grow  w-full p-1 px-2"
                placeholder="Search"
                value={searchField}
                onChange={(e) => setSearchField(e.target.value)}
                onKeyDown={handleKeyDown}
            ></input>
            <button
                className="p-1 px-2  rounded-l-none rounded-lg bg-accent"
                onClick={fetchProducts}
            >
                <IoIosSearch className="w-7 h-7 text-black" />
            </button>
        </div>
    );
};

export default SearchField;
