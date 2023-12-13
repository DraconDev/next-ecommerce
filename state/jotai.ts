import { ProductType } from "@/types/types";
import { atom } from "jotai";

export const basketItems = atom<ProductType[]>([]);

export const itemCount = atom((get) => get(basketItems).length);
