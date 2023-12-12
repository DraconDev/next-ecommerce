import { ProductType } from "@/types/types";
import { queryOptions } from "@tanstack/react-query";

export function productsQuery({ searchTerm = "" }: { searchTerm: string }) {
    let searchTermLower = searchTerm.toLowerCase();

    if (searchTermLower === "" || searchTermLower === "all") {
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
        queryKey: ["products"],
        queryFn: () => {
            if (searchTermLower === "jewelery") {
                searchTermLower = "jewelry";
            }

            return fetch("https://fakestoreapi.com/products")
                .then((res) => res.json() as Promise<ProductType[]>)
                .then((data) => {
                    return data.filter((product) =>
                        product.category.toLowerCase().includes(searchTermLower)
                    );
                });
        },
        // staleTime: 5 * 1000,
    });
}
