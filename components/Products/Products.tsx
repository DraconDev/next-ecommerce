"use client";

import { useQuery } from "@tanstack/react-query";
import { productQuery } from "../ReactQuery/Queries";
import ProductCard from "./ProductCard/ProductCard";

type Props = {};

const Products = (props: Props) => {
    const { data } = useQuery(productQuery({ searchTerm: "all" }));
    return (
        <div className="w-full p-3">
            <div className="flex flex-wrap gap-4 justify-center">
                {data?.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </div>
    );
};

export default Products;
