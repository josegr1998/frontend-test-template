import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";
import type { HTMLAttributes } from "react";
import { createElement } from "react";

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "text-4xl font-bold",
      h2: "text-3xl font-semibold",
      h3: "text-2xl font-semibold",
      h4: "text-xl font-medium",
      body: "text-base",
      caption: "text-sm text-neutral-500",
      "ag-regular": "text-base font-normal leading-5 text-primary-dark",
      "ag-medium": "text-base font-medium leading-4 text-primary-dark",
      "ag-bold":
        "font-bold text-base leading-4 text-neutral-500 tracking-normal",
      "lg-regular":
        "text-lg font-normal leading-6 text-primary-dark tracking-wide-04",
      "lg-bold":
        "text-primary-dark font-bold text-lg leading-5 tracking-wide-04",
      "xl-regular":
        "text-primary-dark font-normal text-2xl leading-7 tracking-wide-04",
      "xl-bold":
        "text-primary-dark font-bold text-xl leading-6 tracking-wide-04",
      "area-normal":
        "text-primary font-bold text-2xl leading-6 tracking-wide-04",
      "2xl-bold":
        "text-primary-dark font-bold text-4xl leading-10 tracking-wide-04",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

export interface TypographyProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: keyof JSX.IntrinsicElements;
}

export const Typography = ({
  as: Tag = "p",
  className,
  variant,
  ...props
}: TypographyProps) => {
  return createElement(Tag, {
    className: cn(typographyVariants({ variant }), className),
    ...props,
  });
};
