"use client";
import { Typography } from "../Typography/Typography";
import { useCartStore } from "@/stores/cart/useCartStore";

export const CartItemsNumber = () => {
  const { numberOfItems } = useCartStore();
  return <Typography variant="xl-regular">{numberOfItems} Items</Typography>;
};
