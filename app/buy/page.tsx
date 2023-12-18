"use client";
import PaymentBox from "@/components/Payment/PaymentBox";
import { basketItems } from "@/state/jotai";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

type Props = {};

const BuyPage = (props: Props) => {
    const [basket, _] = useAtom(basketItems);
    const router = useRouter();

    useEffect(() => {
        if (basket.size === 0) {
            router.push("/");
        }
    });

    return (
        <div className="w-full h-[80vh] p-1 flex justify-center items-center">
            <PaymentBox />
        </div>
    );
};

export default BuyPage;
