"use client";

import { productQuery } from "@/components/ReactQuery/Queries";
import { useQueryClient } from "@tanstack/react-query";

const CategoryButton = ({ category }: { category: string }) => {
    const queryClient = useQueryClient();

    const fetchProducts = () => {
        // queryClient.invalidateQueries({ queryKey: ["products"] });
        queryClient.fetchQuery(productQuery({ searchTerm: category }));
    };

    return <button onClick={fetchProducts}>{category}</button>;
};

export default CategoryButton;
