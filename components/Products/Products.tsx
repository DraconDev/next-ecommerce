"use client";

import { ProductType } from "@/types/types";
import useSWR from "swr";
import ProductCard from "./ProductCard/ProductCard";

type Props = {};

const Products = (props: Props) => {
    const { data } = useSWR<ProductType[]>(
        "https://fakestoreapi.com/products",
        () =>
            fetch("https://fakestoreapi.com/products").then((res) => res.json())
    );
    return (
        <div className=" w-full ">
            <div className="">testing</div>
            {JSON.stringify({ data })}
            {data?.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))}
        </div>
    );
};

export default Products;
