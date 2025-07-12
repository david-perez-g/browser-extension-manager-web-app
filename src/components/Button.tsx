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
      ? "border border-gray-300 hover:border-transparent hover:bg-gray-200 dark:hover:bg-red-500 bg-white text-gray-800 dark:bg-neutral-700 dark:text-white dark:border dark:border-neutral-500"
      : "bg-red-500 text-white dark:text-black";

  return (
    <div className="rounded-full border-2 border-transparent p-px focus:border-red-700">
      <button className={`${base} ${styles} ${className}`} {...props}>
        {children}
      </button>
    </div>
  );
};

export default Button;
