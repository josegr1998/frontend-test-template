"use client";
import { Typography } from "../Typography/Typography";
import { useCartStore } from "@/stores/cart/useCartStore";

export const CartItemsNumber = () => {
  const { numberOfItems } = useCartStore();

  if (numberOfItems === 0) return null;

  return (
    <Typography variant="xl-regular" asChild>
      <p>
        {numberOfItems} {numberOfItems === 1 ? "Item" : "Items"}
      </p>
    </Typography>
  );
};
