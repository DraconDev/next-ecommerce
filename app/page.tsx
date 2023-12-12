"use client";
import Intro from "@/components/Products/Intro";
import Products from "@/components/Products/Products";

export default function Home() {
    return (
        <main className="flex w-full h-full  items-center justify-center  ">
            <div className="max-w-6xl w-full h-full  text-black">
                <Intro />
                <Products />
            </div>
        </main>
    );
}
