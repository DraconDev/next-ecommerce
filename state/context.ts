import { ProductType } from "@/types/types";
import { createContext } from "react";

type ContextType = {
    categories: string[];
    currentItems: ProductType[];
};

const context: ContextType = {
    categories: [
        "All",
        "Electronics",
        "Jewelry",
        "Men's clothing",
        "Women's clothing",
    ],
    currentItems: [],
};

const state = {
    ...context,
};

const MyContext = createContext(state);

export default MyContext;
