// A generic button with optional outline variant
import React from "react";
import type { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline";
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "solid",
  children,
  className = "",
  ...props
}) => {
  const base = "px-5 py-2 text-sm font-medium rounded-full transition";

  const styles =
    variant === "outline"
      ? "border-2 border-gray-300 bg-white text-gray-800 hover:bg-gray-100 dark:bg-neutral-700 dark:text-white dark:border dark:border-neutral-500"
      : "bg-red-500 text-white hover:bg-red-800 dark:text-black";

  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
