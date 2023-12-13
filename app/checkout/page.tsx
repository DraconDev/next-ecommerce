import CheckoutList from "@/components/Checkout/CheckoutList";
import PaymentBox from "@/components/Checkout/PaymentBox";
import PriceBox from "@/components/Checkout/PriceBox";
import MainWrapper from "@/components/layout/MainWrapper";

type Props = {};

const Checkout = (props: Props) => {
    return (
        <MainWrapper>
            <div className="">
                <PaymentBox />
                <CheckoutList />
            </div>
            <PriceBox />
        </MainWrapper>
    );
};

export default Checkout;
