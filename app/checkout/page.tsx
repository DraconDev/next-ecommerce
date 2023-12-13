import CheckoutList from "@/components/Checkout/CheckoutList";
import MainWrapper from "@/components/layout/MainWrapper";

type Props = {};

const Checkout = (props: Props) => {
    return (
        <MainWrapper>
            <CheckoutList />
        </MainWrapper>
    );
};

export default Checkout;
