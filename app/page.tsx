"use client";

import Products from "@/components/Products/Products";
import Intro from "@/components/intro/Intro";

export default function Home() {
    return (
        <main className="flex w-full h-full  items-center justify-center  ">
            <div className="max-w-6xl w-full h-full  text-black flex  items-center flex-col">
                <Intro />
                <Products />
            </div>
        </main>
    );
}
