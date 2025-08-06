import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";
import type { ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center border rounded-lg text-base leading-4 tracking-wide-05 text-center focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none font-bold",
  {
    variants: {
      variant: {
        primary:
          "bg-white border-[var(--color-primary-dark)] text-[var(--color-primary-dark)]",
        secondary: "bg-[var(--color-primary)] text-white",
      },
      size: {
        default: "py-5 px-6",
        sm: "h-9 px-3",
        lg: "h-11 px-6",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = ({
  className,
  variant,
  size,
  type = "button",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      type={type}
      {...props}
    />
  );
};
