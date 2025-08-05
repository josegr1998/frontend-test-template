"use client";

import Link from "next/link";
import { Button } from "../Button/Button";
import { Typography } from "../Typography/Typography";
import { useOrderSummary } from "./useOrderSummary";
import { OrderItem } from "../OrderItem/OrderItem";

export const OrderSummary = () => {
  const { orderItems, numberOfItems, totalPrice } = useOrderSummary();

  return (
    <>
      <div className="rounded-lg border border-[var(--color-primary-light)] px-6 py-8">
        <Typography variant="xl-bold" className="mb-3">
          Order Summary
        </Typography>
        <Typography variant="lg-regular" className="mb-8">
          {numberOfItems} Items
        </Typography>

        <div>
          {orderItems.map((item) => (
            <OrderItem key={item.name} item={item} />
          ))}
        </div>

        <div className="mb-5 mt-6 flex justify-between">
          <Typography variant="xl-bold">Order Total</Typography>
          <Typography variant="xl-bold">${totalPrice}</Typography>
        </div>
      </div>
      {orderItems.length ? (
        <Link href="/checkout" className="mb-8">
          <Button className="w-full" variant="secondary">
            Checkout
          </Button>
        </Link>
      ) : null}
    </>
  );
};
