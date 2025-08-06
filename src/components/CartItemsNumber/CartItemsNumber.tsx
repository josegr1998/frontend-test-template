"use client";
import { Typography } from "../Typography/Typography";
import { useCartItemsNumber } from "./useCartItemsNumber.hooks";

export const CartItemsNumber = () => {
  const { numberOfItemsLabel, numberOfItems } = useCartItemsNumber();

  if (numberOfItems === 0) return null;

  return (
    <Typography variant="xl-regular" asChild>
      <p>{numberOfItemsLabel}</p>
    </Typography>
  );
};
