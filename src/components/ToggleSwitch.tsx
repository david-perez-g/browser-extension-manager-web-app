import React from "react";
import type { InputHTMLAttributes } from "react";

interface ToggleSwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  on: boolean;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  on,
  className = "",
  ...props
}) => (
  <label
    className={`flex cursor-pointer items-center rounded-full border-2 border-transparent p-px focus:border-red-700 ${className}`}
  >
    <input type="checkbox" checked={on} {...props} className="sr-only" />
    <span
      className={`transition-color relative inline-block h-6 w-11 rounded-full ${
        on ? "bg-red-700" : "bg-gray-300 dark:bg-gray-500"
      }`}
    >
      <span
        className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition-transform ${
          on ? "translate-x-5" : ""
        }`}
      />
    </span>
  </label>
);

export default ToggleSwitch;
