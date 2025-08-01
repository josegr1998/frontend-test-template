import React from "react";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="flex h-[172px] flex-col items-center justify-center bg-neutral-700">
      <Image
        src="apply-digital.svg"
        alt="Apply Digital"
        width={170}
        height={44}
      />
    </footer>
  );
};
