import React from "react";
import { Typography } from "../Typography/Typography";
import Link from "next/link";
import { CartIcon } from "./components/CartIcon";

//TODO: Rename to header
export const Navbar = () => {
  return (
    <div className="bg-surface-secondary flex items-center justify-center px-6 py-5 lg:px-0">
      <nav className="flex w-full max-w-7xl items-center justify-between">
        <Link href="/">
          <Typography variant="area-normal">GamerShop</Typography>
        </Link>
        <CartIcon />
      </nav>
    </div>
  );
};
