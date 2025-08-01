import React from "react";
import { Typography } from "../Typography/Typography";
import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="bg-surface-secondary flex items-center justify-center py-5">
      <nav className="flex w-full max-w-7xl items-center justify-between">
        <Typography variant="area-normal">GamerShop</Typography>
        <Image src="cart-icon.svg" alt="GamerShop" width={24} height={24} />
      </nav>
    </div>
  );
};
