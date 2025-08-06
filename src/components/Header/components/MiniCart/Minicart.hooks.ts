import { useCartStore } from "@/stores/cart/useCartStore";
import { sortCartItems } from "@/utils/cart";

export const useMinicart = () => {
  const { items, numberOfItems, totalPrice, isHydrated } = useCartStore();

  return {
    items: sortCartItems(items).slice(0, 2),
    numberOfItems,
    totalPrice,
    isHydrated,
    isEmpty: items.length === 0 && isHydrated,
  };
};
