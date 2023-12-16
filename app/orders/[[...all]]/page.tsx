"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

type Props = {};

const Orders = (props: Props) => {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            // The action you want to perform after 3 seconds
            router.push("/");
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex justify-center w-full h-full items-center flex-col">
            <div className="text-2xl">Order Successful</div>
            <div className="text-2xl">Redirecting to homepage...</div>
        </div>
    );
};

export default Orders;
