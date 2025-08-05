import { useCartStore } from "@/stores/cart/useCartStore";

export const useOrderSummary = () => {
  const { items, totalPrice, numberOfItems } = useCartStore();

  return {
    orderItems: items.map((item) => ({
      name: item.name,
      price: item.price,
    })),
    totalPrice,
    numberOfItems,
  };
};
