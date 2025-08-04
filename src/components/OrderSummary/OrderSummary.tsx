"use client";

import { Typography } from "../Typography/Typography";
import { useCartStore } from "@/stores/cart/useCartStore";

export const OrderSummary = () => {
  const { items, numberOfItems, totalPrice } = useCartStore();
  return (
    <div className="rounded-lg border border-[var(--color-primary-light)] px-6 py-8">
      <Typography variant="xl-bold" className="mb-3">
        Order Summary
      </Typography>
      <Typography variant="lg-regular" className="mb-8">
        {numberOfItems} Items
      </Typography>

      <div>
        {items.map((item) => (
          <div
            className="flex justify-between gap-y-3 last:border-b last:border-[var(--color-primary-light)] last:pb-6"
            key={item.id}
          >
            <Typography variant="lg-regular">{item.name}</Typography>
            <Typography variant="lg-regular">${item.price}</Typography>
          </div>
        ))}
      </div>

      <div className="mb-5 mt-6 flex justify-between">
        <Typography variant="xl-bold">Order Total</Typography>
        <Typography variant="xl-bold">${totalPrice}</Typography>
      </div>
    </div>
  );
};
