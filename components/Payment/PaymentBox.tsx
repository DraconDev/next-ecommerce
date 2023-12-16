"use client";

import { basketItems } from "@/state/jotai";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useAtom } from "jotai";
import React, { useEffect } from "react";
import CheckoutForm from "./CheckoutForm";
import { convertBasketToCart, generatePaymentIntentWithCart } from "./helper";

const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? ""
);

const PaymentBox = ({ children }: { children?: React.ReactNode }) => {
    const [clientSecret, setClientSecret] = React.useState("");

    const [items, _] = useAtom(basketItems);

    useEffect(() => {
        generatePaymentIntentWithCart(convertBasketToCart(items)).then(
            (secret) => {
                setClientSecret(secret);
            }
        );
    }, []);

    const appearance = {
        theme: "stripe",
    };
    const options = {
        clientSecret,
    };

    return (
        <div className="">
            {clientSecret && (
                <Elements
                    options={options}
                    stripe={stripePromise}
                >
                    <CheckoutForm />
                    {children && children}
                </Elements>
            )}
        </div>
    );
};

export default PaymentBox;
