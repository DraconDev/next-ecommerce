"use client";

import { bestSellers } from "@/components/ReactQuery/Queries";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import MenuItemUI from "./MenuItemUI";

const MenuItemSpecial = ({
    category,
    click,
}: {
    category: string;
    click: () => void;
}) => {
    const queryClient = useQueryClient();
    const router = useRouter();

    const fetchProducts = () => {
        // queryClient.invalidateQueries({ queryKey: ["products"] });
        queryClient.fetchQuery(bestSellers());
        click();
        router.push("/products");
    };

    return (
        <MenuItemUI
            action={fetchProducts}
            category={category}
        />
    );
};

export default MenuItemSpecial;
