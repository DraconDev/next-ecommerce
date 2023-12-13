import { BasketItemType } from "@/types/types";
import { atom } from "jotai";

// export const basketItems = atom<ProductType[]>([]);

export const basketItems = atom<Map<number, BasketItemType>>(new Map());

export const itemCount = atom((get) => {
    const itemsMap = get(basketItems);
    let totalQuantity = 0;

    itemsMap.forEach((item) => {
        // Access each item and its properties here
        // For example: const product = item.product;
        totalQuantity += item.quantity;
    });

    return totalQuantity;
});
