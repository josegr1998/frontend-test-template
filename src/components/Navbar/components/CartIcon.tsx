"use client";

import { useCartStore } from "@/stores/cart/useCartStore";
import Image from "next/image";
import Link from "next/link";

export const CartIcon = () => {
  const { numberOfItems, items } = useCartStore();

  return (
    <Link href="/cart" className="relative">
      <Image src="cart-icon.svg" alt="GamerShop" width={24} height={24} />
      <span className="bg-primary-light absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full text-xs text-white">
        {numberOfItems}
      </span>
    </Link>
  );
};
