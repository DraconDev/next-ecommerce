import { basketItems } from "@/state/jotai";
import { ProductType } from "@/types/types";
import { useAtom } from "jotai";

export const useUpdateItem = () => {
    const [itemsMap, setItemsMap] = useAtom(basketItems);

    // This function will be returned by the hook and can be used to update the item.
    const updateItem = (item: ProductType, amount?: number) => {
        if (amount === 0) {
            const updatedMap = new Map(itemsMap);
            updatedMap.delete(item.id);
            setItemsMap(updatedMap);
            return;
        }
        // Create a new Map instance with updated values
        const updatedMap = new Map(itemsMap);

        const existingItem = updatedMap.get(item.id);

        updatedMap.set(item.id, {
            product: item,
            quantity: amount
                ? amount
                : existingItem
                ? existingItem.quantity + 1
                : 1,
        });

        // Trigger an update with the new Map instance
        setItemsMap(updatedMap);
    };

    // Return the update function from the hook
    return updateItem;
};
