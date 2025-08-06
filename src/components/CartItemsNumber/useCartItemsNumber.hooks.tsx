import { useCartStore } from "@/stores/cart/useCartStore";
import { getNumberOfItemsLabel } from "@/utils/cart";

export const useCartItemsNumber = () => {
  const { numberOfItems } = useCartStore();

  const numberOfItemsLabel = getNumberOfItemsLabel(numberOfItems);

  return {
    numberOfItemsLabel,
    numberOfItems,
  };
};
