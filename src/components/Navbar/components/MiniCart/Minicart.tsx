// Minicart.tsx (CSS-only hover)
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Typography } from "@/components/Typography/Typography";
import { cn } from "@/utils/cn";
import { useMinicart } from "./Minicart.hooks";

export const Minicart = () => {
  const { items, numberOfItems, totalPrice, isHydrated } = useMinicart();

  return (
    <div className="group relative inline-block h-6">
      <div className="relative inline-flex">
        <Link href="/cart" className="relative" aria-label="Open mini-cart">
          <Image src="cart-icon.svg" alt="GamerShop" width={24} height={24} />
          <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-primary-light)] text-xs text-white">
            {isHydrated ? numberOfItems : ""}
          </span>
        </Link>
      </div>

      <div
        className={cn(
          "absolute right-0 top-full z-50 w-72 min-w-[320px] -translate-y-1 transform-gpu opacity-0",
          "pointer-events-none rounded-lg border border-[var(--color-primary-light)] bg-white px-4 pb-4 shadow-lg",
          "transition-all duration-150 ease-in-out",
          "lg:group-hover:pointer-events-auto lg:group-hover:translate-y-0 lg:group-hover:opacity-100",
        )}
      >
        {items.length === 0 && isHydrated ? (
          <Typography variant="ag-regular" asChild className="pt-4">
            <p>Your cart is empty</p>
          </Typography>
        ) : (
          <>
            <div>
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 border-b border-[var(--color-primary-light)] py-3"
                >
                  <div className="relative h-14 w-20 flex-shrink-0 overflow-hidden rounded-md">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col">
                    <Typography variant="ag-bold" asChild>
                      <p className="truncate" title={item.name}>
                        {item.name}
                      </p>
                    </Typography>
                    <Typography variant="ag-regular" asChild>
                      <p>${item.price}</p>
                    </Typography>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-col gap-2">
              <div className="mb-2 flex justify-between">
                <Typography variant="ag-medium" asChild>
                  <p>Subtotal</p>
                </Typography>
                <Typography variant="ag-medium" asChild>
                  <p>${totalPrice}</p>
                </Typography>
              </div>

              <Link
                href="/cart"
                className="block w-full rounded-md bg-[var(--color-primary)] py-2 text-center text-white"
              >
                View all ({numberOfItems})
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
