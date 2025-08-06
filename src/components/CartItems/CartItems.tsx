"use client";

import { Typography } from "../Typography/Typography";
import { CartItem } from "../CartItem/CartItem";
import { useCartItems } from "./CartItems.hooks";

export const CartItems = () => {
  const { items, handleRemoveItem, isHydrated } = useCartItems();

  if (!items.length && isHydrated) {
    return (
      <div className="flex h-full items-center justify-center">
        <Typography variant="lg-bold" asChild>
          <p>No items in your cart</p>
        </Typography>
      </div>
    );
  }

  return (
    <div>
      {items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          handleRemoveItem={handleRemoveItem}
        />
      ))}
    </div>
  );
};
