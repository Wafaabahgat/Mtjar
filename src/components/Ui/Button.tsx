import React, { ButtonHTMLAttributes, FC } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  text?: string;
}
const buttonVariants = cva(
  "border-2 lg:px-10 md:px-4 py-2 rounded-full font-bold mt-4",
  {
    variants: {
      variant: {
        default: "text-white hover:bg-white hover:text-main",
      },
    },
  }
);

const Button: FC<ButtonProps> = ({
  className,
  variant,
  type,
  size,
  text,
  children,
  link,
  onClick,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariants({ variant, className }))}
      onClick={onClick}
    >
      {children}
      {text}
    </button>
  );
};

export default Button;
