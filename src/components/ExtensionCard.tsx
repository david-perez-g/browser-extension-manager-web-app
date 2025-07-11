import React from 'react';
import type { BrowserExtension } from '../types';

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
    <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
      <img
        src={logoUrl}
        alt={`${name} logo`}
        className="w-12 h-12 mr-4"
      />

      <div className="flex-1">
        <h3 className="text-lg font-medium">{name}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <p className="mt-1 text-xs">
          Status: <strong>{isActive ? 'Active' : 'Inactive'}</strong>
        </p>
      </div>

      <div className="flex flex-col space-y-2 ml-4">
        <button
          onClick={() => onToggle(id)}
          className="px-2 py-1 text-xs font-medium border rounded"
        >
          {isActive ? 'Deactivate' : 'Activate'}
        </button>
        <button
          onClick={() => onRemove(id)}
          className="px-2 py-1 text-xs font-medium text-red-600 border border-red-600 rounded"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default ExtensionCard;
