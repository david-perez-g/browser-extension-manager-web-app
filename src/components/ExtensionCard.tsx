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
    <Card className="space-y-4">
      {/* Header */}
      <div className="flex items-start mb-11">
        <img
          src={logoUrl}
          alt={`${name} logo`}
          className="mr-4 h-14 w-14 flex-shrink-0"
        />
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-0.5">{name}</h3>
          <p className="text-sm font-medium text-gray-600">{description}</p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between">
        <Button variant="outline" onClick={() => onRemove(id)}>
          Remove
        </Button>

        <ToggleSwitch
          on={isActive}
          onChange={() => onToggle(id)}
        />
      </div>
    </Card>
  );
};

export default ExtensionCard;
