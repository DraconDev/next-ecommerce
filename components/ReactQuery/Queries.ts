import { ProductType } from "@/types/types";
import { queryOptions } from "@tanstack/react-query";

type productsQueryType = {
    searchTerm: string;
    searchType?: string;
};

export function productsQuery({
    searchTerm = "",
    searchType = "categories",
}: productsQueryType) {
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

    if (searchType === "categories") {
        return queryOptions({
            queryKey: ["products"],
            queryFn: () => {
                // its mistypped on the api
                if (searchTermLower === "jewelry") {
                    searchTermLower = "jewelery";
                }

                return fetch("https://fakestoreapi.com/products")
                    .then((res) => res.json() as Promise<ProductType[]>)
                    .then((data) => {
                        return data.filter((product) =>
                            product.category
                                .toLowerCase()
                                .includes(searchTermLower)
                        );
                    });
            },
            // staleTime: 5 * 1000,
        });
    }

    return queryOptions({
        queryKey: ["products"],
        queryFn: () => {
            return fetch("https://fakestoreapi.com/products")
                .then((res) => res.json() as Promise<ProductType[]>)
                .then((data) => {
                    return data.filter((product) =>
                        product.title.toLowerCase().includes(searchTermLower)
                    );
                });
        },
        // staleTime: 5 * 1000,
    });
}
