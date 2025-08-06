import { cn } from "@/utils/cn";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Container = ({ children, className }: Props) => {
  return <div className={cn("w-full max-w-7xl", className)}>{children}</div>;
};
