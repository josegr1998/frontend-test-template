"use client";

import { useCartStore } from "@/stores/useCartStore";
import Image from "next/image";

export const CartItems = () => {
  const { items } = useCartStore();

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <Image src={item.image} alt={item.name} width={100} height={100} />
        </div>
      ))}
    </div>
  );
};
