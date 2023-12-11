"use client";
import useSWR from "swr";

type Props = {};

const Products = (props: Props) => {
    const { data } = useSWR("https://fakestoreapi.com/products", () =>
        fetch("https://fakestoreapi.com/products").then((res) => res.json())
    );
    return (
        <div className=" w-full ">
            <div className="">testing</div>
            {JSON.stringify({ data })}
        </div>
    );
};

export default Products;
