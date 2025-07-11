import React from "react";
import type { BrowserExtension } from "../types";

interface ExtensionCardProps {
  extension: BrowserExtension;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}

const ExtensionCard: React.FC<ExtensionCardProps> = ({
  extension,
  onToggle,
  onRemove,
}) => {
  const { id, logo, name, description, isActive } = extension;

  const logoUrl = new URL(`../assets/images/${logo}`, import.meta.url).href;

  return (
    <div className="flex flex-col rounded-2xl border border-gray-300 bg-white p-4">
      <div className="mb-11 flex">
        <img src={logoUrl} alt={`${name} logo`} className="mr-4 h-14 w-14" />

        <div className="flex-1">
          <h3 className="text-lg font-bold mb-0.5">{name}</h3>
          <p className="text-sm font-medium text-gray-600">{description}</p>
        </div>
      </div>
      <div className="flex items-center justify-between mb-0.5">
        <button
          onClick={() => onRemove(id)}
          className="rounded-full border-2 border-gray-300 px-4 py-2 text-sm font-medium"
        >
          Remove
        </button>
        <label className="flex cursor-pointer items-center">
          <input
            type="checkbox"
            checked={isActive}
            onChange={() => onToggle(id)}
            className="sr-only"
          />
          <span
            className={`relative inline-block h-6 w-11 rounded-full transition ${
              isActive ? "bg-red-700" : "bg-gray-300"
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition-transform ${
                isActive ? "translate-x-5" : ""
              }`}
            />
          </span>
        </label>
      </div>
    </div>
  );
};

export default ExtensionCard;
