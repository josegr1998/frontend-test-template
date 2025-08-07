import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex h-[172px] flex-col items-center justify-center bg-neutral-700">
      <Link href="/">
        <Image
          src="apply-digital-logo.svg"
          alt="Apply Digital"
          width={170}
          height={44}
        />
      </Link>
    </footer>
  );
};
