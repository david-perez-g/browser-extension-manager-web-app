import React from "react";
import type { ReactNode, HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children, className = "", ...props }) => (
  <div
    className={`flex flex-col rounded-2xl border border-gray-300 bg-white p-4 ${className}`}
    {...props}
  >
    {children}
  </div>
);

export default Card;
