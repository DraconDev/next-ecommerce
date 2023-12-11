import { Product } from "@/types/types";
import Image from "next/image";

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <div className="flex flex-col w-[255px] h-full max-h-[630px] items-center justify-center text-center">
            <Image
                src={product.image}
                alt={product.title}
                width={255}
                height={255}
            />
            <p className="">{product.title}</p>
            <p className="">{product.description}</p>
        </div>
    );
};

export default ProductCard;
