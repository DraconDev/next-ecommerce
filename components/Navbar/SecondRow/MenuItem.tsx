"use client";

import { productQuery } from "@/components/ReactQuery/Queries";
import { useQueryClient } from "@tanstack/react-query";

const CategoryButton = ({
    category,
    click,
}: {
    category: string;
    click: () => void;
}) => {
    const queryClient = useQueryClient();

    const fetchProducts = () => {
        // queryClient.invalidateQueries({ queryKey: ["products"] });
        queryClient.fetchQuery(productQuery({ searchTerm: category }));
        click();
    };

    return (
        <button onClick={fetchProducts}>
            <p>{category}</p>
        </button>
    );
};

export default CategoryButton;
