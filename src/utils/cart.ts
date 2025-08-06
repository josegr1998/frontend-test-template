import { CartItem } from "@/stores/cart/useCartStore.types";

export const sortCartItems = (items: CartItem[]) =>
  items.sort((a, b) => b.dateAdded - a.dateAdded);
