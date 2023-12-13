import CheckoutItems from "@/components/Checkout/CheckoutItems";
import PaymentBox from "@/components/Checkout/PaymentBox";
import PriceBox from "@/components/Checkout/PriceBox";
import MainWrapper from "@/components/layout/MainWrapper";

type Props = {};

const Checkout = (props: Props) => {
    return (
        <MainWrapper>
            <div className="w-2/3">
                <PaymentBox />
                <CheckoutItems />
            </div>
            <PriceBox />
        </MainWrapper>
    );
};

export default Checkout;
