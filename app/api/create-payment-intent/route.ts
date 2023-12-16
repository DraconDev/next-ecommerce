import { zeroDecimalCurrencies } from "@/components/Payment/consts";
import { CartItem } from "@/types/payment";
import { NextRequest, NextResponse } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const calculateOrderAmount = (items: CartItem[], currency: string) => {
    let sum = 0;
    if (items.length === 0) {
        return 0;
    }
    for (const item of items) {
        sum += item.price * item.quantity;
    }
    return currency in zeroDecimalCurrencies ? sum : sum * 100;
};

export async function POST(req: NextRequest, res: NextResponse) {
    const { cartItems, currency }: { cartItems: CartItem[]; currency: string } =
        await req.json();

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: calculateOrderAmount(cartItems, currency),
            currency: currency,
            // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
            automatic_payment_methods: {
                enabled: true,
            },
        });
        return NextResponse.json({ clientSecret: paymentIntent.client_secret });
    } catch (err) {
        console.log(err);
        return NextResponse.json({
            error: "Error creating checkout session",
        });
    }
}
