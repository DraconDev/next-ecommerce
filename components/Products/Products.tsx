"use client";

import { ProductType } from "@/types/types";
import useSWR from "swr";
import ProductCard from "./ProductCard/ProductCard";

type Props = {};

const Products = (props: Props) => {
    let { data } = useSWR<ProductType[]>(
        "https://fakestoreapi.com/products",
        () =>
            fetch("https://fakestoreapi.com/products").then((res) => res.json())
    );
    return (
        <div className="w-full p-3">
            {/* {JSON.stringify({ data })} */}
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
