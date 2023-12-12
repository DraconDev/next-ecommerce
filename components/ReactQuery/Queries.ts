// import { queryOptions } from "@tanstack/react-query";

// function groupOptions(id: number) {
//     return queryOptions({
//         queryKey: ["groups", id],
//         queryFn: () => {},
//         // staleTime: 5 * 1000,
//     });
// }

import { ProductType } from "@/types/types";
import { queryOptions } from "@tanstack/react-query";

export function productsQuery() {
    return queryOptions({
        queryKey: ["products"],
        queryFn: () =>
            fetch("https://fakestoreapi.com/products").then(
                (res) => res.json() as Promise<ProductType[]>
            ),
        // staleTime: 5 * 1000,
    });
}
