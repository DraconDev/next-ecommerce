"use client";
type Props = {};
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { productsQuery } from "../ReactQuery/Queries";

const SearchField = (props: Props) => {
    const queryClient = useQueryClient();
    const [searchField, setSearchField] = useState("");
    const fetchProducts = () => {
        queryClient.fetchQuery(productsQuery({ searchTerm: "cloth" }));
    };
    return (
        <div className="text-xl  w-full   border-2 border-accent rounded-xl flex grow text-black ">
            <input
                className=" grow rounded-lg rounded-r-none w-full p-1 px-2"
                placeholder="Search"
                value={searchField}
                onChange={(e) => setSearchField(e.target.value)}
            ></input>
            <button className="p-1 px-2  rounded-l-none rounded-lg bg-accent">
                <IoIosSearch className="w-7 h-7 text-black" />
            </button>
        </div>
    );
};

export default SearchField;
