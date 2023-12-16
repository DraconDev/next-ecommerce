import CheckoutItems from "@/components/Checkout/CheckoutItems";

import PriceBox from "@/components/Checkout/PriceBox";
import PaymentBox from "@/components/Payment/PaymentBox";
import MainWrapper from "@/components/layout/MainWrapper";

type Props = {};

const Checkout = (props: Props) => {
    return (
        <MainWrapper>
            <div className="w-2/3">
                <PaymentBox />
                <CheckoutItems />
                <PriceBox />
            </div>
        </MainWrapper>
    );
};

export default Checkout;
