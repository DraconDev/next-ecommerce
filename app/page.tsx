"use client";

import Products from "@/components/Products/Products";
import Intro from "@/components/intro/Intro";
import MainWrapper from "@/components/layout/MainWrapper";

export default function Home() {
    return (
        <MainWrapper>
            <Intro />
            <Products />
        </MainWrapper>
    );
}
