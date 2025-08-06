import React from "react";
import { Typography } from "../Typography/Typography";
import Link from "next/link";
import { Minicart } from "./components/MiniCart/Minicart";

export const Header = () => {
  return (
    <div className="fixed left-0 right-0 top-0 z-50 flex items-center justify-center bg-[var(--color-surface-secondary)] px-6 py-5 lg:px-32">
      <nav className="flex w-full max-w-7xl items-center justify-between">
        <Link href="/">
          <Typography variant="area-normal">GamerShop</Typography>
        </Link>
        <Minicart />
      </nav>
    </div>
  );
};
