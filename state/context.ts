import { createContext } from "react";

const context = {
    categories: [
        "All",
        "Electronics",
        "Jewelry",
        "Men's clothing",
        "Women's clothing",
    ],
};

const state = {
    ...context,
};

const MyContext = createContext(state);

export default MyContext;
