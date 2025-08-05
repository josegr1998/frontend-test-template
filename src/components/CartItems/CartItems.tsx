"use client";

import { useCartStore } from "@/stores/cart/useCartStore";
import Image from "next/image";
import { Typography } from "../Typography/Typography";
import { NewBadge } from "../NewBadge/NewBadge";
import { MESSAGE_REMOVED_FROM_CART, toastSuccess } from "@/utils/toast";

export const CartItems = () => {
  const { items, removeItem } = useCartStore();

  const handleRemoveItem = (itemId: string) => {
    removeItem(itemId);
    toastSuccess({ message: MESSAGE_REMOVED_FROM_CART });
  };

  if (!items.length) {
    return (
      <div className="flex h-full items-center justify-center">
        <Typography variant="lg-bold">No items in your cart</Typography>
      </div>
    );
  }

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
              <NewBadge isNew={item.isNew} />
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
              onClick={() => handleRemoveItem(item.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
