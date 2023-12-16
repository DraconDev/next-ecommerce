"use client";
import { CartItem } from "@/types/payment";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect } from "react";
import CheckoutForm from "./CheckoutForm";
import { generatePaymentIntentWithCart } from "./helper";

const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? ""
);

const PaymentBox = ({ children }: { children?: React.ReactNode }) => {
    const [clientSecret, setClientSecret] = React.useState("");

    useEffect(() => {
        let dummyCartItems: CartItem[] = [
            {
                id: "1",
                name: "Item 1",
                price: 2000,
                quantity: 1,
                currency: "USD",
            },
        ];

        generatePaymentIntentWithCart(dummyCartItems).then((secret) => {
            setClientSecret(secret);
        });
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
