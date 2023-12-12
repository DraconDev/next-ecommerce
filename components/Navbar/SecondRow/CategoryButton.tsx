"use client";

import { productsQuery } from "@/components/ReactQuery/Queries";
import { useQueryClient } from "@tanstack/react-query";

const CategoryButton = ({ category }: { category: string }) => {
    const queryClient = useQueryClient();

    const fetchProducts = () => {
        // Here we are using `queryClient.fetchQuery` to fetch the data manually.
        queryClient.fetchQuery(productsQuery({ searchTerm: category }));
    };

    return <button onClick={fetchProducts}>{category}</button>;
};

export default CategoryButton;
