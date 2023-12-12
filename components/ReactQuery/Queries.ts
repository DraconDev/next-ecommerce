import { ProductType } from "@/types/types";
import { queryOptions } from "@tanstack/react-query";

export function productsQuery({ searchTerm = "" }: { searchTerm: string }) {
    const searchTermLower = searchTerm.toLowerCase();
    if (searchTerm === "" || searchTermLower !== "all") {
        return queryOptions({
            queryKey: ["products"],
            queryFn: () =>
                fetch("https://fakestoreapi.com/products").then(
                    (res) => res.json() as Promise<ProductType[]>
                ),
            // staleTime: 5 * 1000,
        });
    }

    return queryOptions({
        queryKey: ["products", searchTerm],
        queryFn: () =>
            fetch("https://fakestoreapi.com/products")
                .then((res) => res.json() as Promise<ProductType[]>)
                .then((data) => {
                    return data.filter((product) =>
                        product.title.toLowerCase().includes(searchTermLower)
                    );
                }),
        // staleTime: 5 * 1000,
    });
}