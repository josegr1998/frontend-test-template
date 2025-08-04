"use client";

import { useCartStore } from "@/stores/cart/useCartStore";
import Image from "next/image";
import { Typography } from "../Typography/Typography";

export const CartItems = () => {
  const { items, removeItem } = useCartStore();

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.id}
          className="border-b border-[var(--color-primary-light)] px-4 py-5 "
        >
          <div className="relative items-stretch gap-x-6 lg:flex">
            <div className="relative h-[156px] w-[256px] shrink-0">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex h-[156px] flex-col justify-between">
              <div>
                <Typography variant="ag-bold" className="mb-3">
                  {item.genre}
                </Typography>
                <Typography variant="xl-bold" className="mb-2">
                  {item.name}
                </Typography>
                <Typography variant="ag-regular">{item.description}</Typography>
              </div>

              <div className="flex justify-end">
                <Typography variant="xl-bold">${item.price}</Typography>
              </div>
            </div>

            <Image
              src="delete-icon.svg"
              alt="Delete Item"
              width={12}
              height={12}
              className="absolute right-0 top-0 cursor-pointer"
              onClick={() => removeItem(item.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
