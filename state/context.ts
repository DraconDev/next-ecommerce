import { ProductType } from "@/types/types";
import { createContext, useState } from "react";

type ContextType = {
    categories: string[];
    currentItems: ProductType[];
    setCurrentItems: React.Dispatch<React.SetStateAction<ProductType[]>>;
};

const [currentItems, setCurrentItems] = useState<ProductType[]>([]);

const context: ContextType = {
    categories: [
        "All",
        "Electronics",
        "Jewelry",
        "Men's clothing",
        "Women's clothing",
    ],
    currentItems: [],
    setCurrentItems: (data) => {},
};

const state = {
    ...context,
};

const MyContext = createContext(state);

export default MyContext;
