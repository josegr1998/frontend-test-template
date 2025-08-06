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
        <Typography variant="xl-bold" className="mb-3" asChild>
          <h2>Order Summary</h2>
        </Typography>
        <Typography variant="lg-regular" className="mb-8" asChild>
          <p>{numberOfItems} Items</p>
        </Typography>

        <div>
          {orderItems.map((item) => (
            <OrderItem key={item.name} item={item} />
          ))}
        </div>

        <div className="mb-5 mt-6 flex justify-between">
          <Typography variant="xl-bold" asChild>
            <p>Order Total</p>
          </Typography>
          <Typography variant="xl-bold" asChild>
            <p>${totalPrice}</p>
          </Typography>
        </div>
      </div>
      {orderItems.length ? (
        <Button
          className="mb-8 w-full"
          variant="secondary"
          aria-label="Checkout"
        >
          Checkout
        </Button>
      ) : null}
    </>
  );
};
