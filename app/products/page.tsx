"use client";
import Products from "@/components/Products/Products";

export default function ProductsPage() {
    return (
        <div className="flex w-full h-full  items-center justify-center  ">
            <div className="max-w-6xl w-full h-full  text-black flex  items-center flex-col">
                <Products />
            </div>
        </div>
    );
}
