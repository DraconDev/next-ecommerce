import { ProductType } from "@/types/types";
import Image from "next/image";
import Rating from "./Rating";

const ProductCard = ({ product }: { product: ProductType }) => {
    return (
        <div className="flex flex-col w-[255px] h-full max-h-[630px] items-center justify-center text-center p-1">
            <Image
                src={product.image}
                alt={product.title}
                width={255}
                height={255}
            />
            <p className="font-bold text-lg">{product.title}</p>
            <p className="">
                {product.description.length > 100
                    ? `${product.description.slice(0, 100)}...`
                    : product.description}
            </p>
            <Rating rating={product.rating} />
            <p className="font-bold text-xl">{`$${product.price}`}</p>
        </div>
    );
};

export default ProductCard;
