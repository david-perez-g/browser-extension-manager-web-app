import React from "react";
import type { BrowserExtension } from "../types";
import Card from "./Card";
import Button from "./Button";
import ToggleSwitch from "./ToggleSwitch";

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
    <Card className="max-lg:w-11/12 dark:bg-neutral-700">
      {/* Header */}
      <div className="mb-11 flex flex-1 items-start">
        <img
          src={logoUrl}
          alt={`${name} logo`}
          className="mr-4 h-14 w-14 flex-shrink-0"
        />
        <div className="flex-1">
          <h3 className="mb-0.5 text-lg font-bold dark:text-white">{name}</h3>
          <p className="line-clamp-3 text-sm text-gray-600 dark:text-white">
            {description}
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between">
        <Button variant="outline" onClick={() => onRemove(id)}>
          Remove
        </Button>

        <ToggleSwitch on={isActive} onChange={() => onToggle(id)} />
      </div>
    </Card>
  );
};

export default ExtensionCard;
