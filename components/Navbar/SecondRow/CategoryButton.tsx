import { ProductType } from "@/types/types";
import useSWR from "swr";

const CategoryButton = ({ category }: { category: string }) => {
    let { data } = useSWR<ProductType[]>(
        "https://fakestoreapi.com/products",
        () =>
            fetch("https://fakestoreapi.com/products").then((res) => res.json())
    );
    data = data?.filter((product) => product.category === category);
    return <div>CategoryButton</div>;
};

export default CategoryButton;
