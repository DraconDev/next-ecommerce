"use client";

import { productQuery } from "@/components/ReactQuery/Queries";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const CategoryButton = ({ category }: { category: string }) => {
    const queryClient = useQueryClient();
    const router = useRouter();
    const fetchProducts = () => {
        // queryClient.invalidateQueries({ queryKey: ["products"] });
        queryClient.fetchQuery(productQuery({ searchTerm: category }));
        router.push("/products");
    };

    return (
        <button onClick={fetchProducts}>
            <p>{category}</p>
        </button>
    );
};

export default CategoryButton;
