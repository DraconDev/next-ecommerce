import CheckoutItems from "@/components/Checkout/CheckoutItems";

import PriceBox from "@/components/Checkout/PriceBox";
import MainWrapper from "@/components/layout/MainWrapper";

type Props = {};

const Checkout = (props: Props) => {
    return (
        <MainWrapper>
            <div className="w-full p-1">
                <CheckoutItems />
                <PriceBox />
                {/* <PaymentBox /> */}
            </div>
        </MainWrapper>
    );
};

export default Checkout;
