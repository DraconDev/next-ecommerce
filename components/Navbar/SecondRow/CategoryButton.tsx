"use client";
import { ProductType } from "@/types/types";
import useSWR from "swr";

const CategoryButton = ({ category }: { category: string }) => {
    let { data } = useSWR<ProductType[]>(
        "https://fakestoreapi.com/products",
        () =>
            fetch("https://fakestoreapi.com/products").then((res) => res.json())
    );

    return <div>CategoryButton</div>;
};

export default CategoryButton;
