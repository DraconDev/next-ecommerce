import PaymentBox from "@/components/Payment/PaymentBox";

type Props = {};

const BuyPage = (props: Props) => {
    return (
        <div className="w-full h-full p-1 flex justify-center items-center">
            <PaymentBox />
        </div>
    );
};

export default BuyPage;
