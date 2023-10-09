import React from "react";
import { Link } from "react-router-dom";
// import { cva, type VariantProps } from "class-variance-authority";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  text?: string;
}

const Button = ({
  className,
  variant,
  type,
  size,
  text,
  children,
  ...props
}) => {
  return (
    <button className="border-2 px-10 py-2 md:py-1 md:px-5 rounded-full text-white font-bold mt-4">
      <Link to="/signup"> {text}</Link>
    </button>
  );
};

export default Button;
