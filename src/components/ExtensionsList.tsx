import type { BrowserExtension } from "../types";
import ExtensionCard from "./ExtensionCard";

interface ExtensionsListProps {
  extensions: BrowserExtension[];
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}

const ExtensionsList: React.FC<ExtensionsListProps> = ({
  extensions,
  onToggle,
  onRemove,
}) => (
  <div className="grid grid-cols-1 justify-items-center gap-3 md:grid-cols-2 lg:grid-cols-3">
    {extensions.map((ext) => (
      <ExtensionCard
        key={ext.id}
        extension={ext}
        onToggle={onToggle}
        onRemove={onRemove}
      />
    ))}
  </div>
);

export default ExtensionsList;
