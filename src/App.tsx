import { useEffect, useState } from "react";
import type { BrowserExtension } from "./types";
import extensionData from "./data.json";
import ExtensionsList from "./components/ExtensionsList";

function App() {
  const [extensions, setExtensions] = useState<BrowserExtension[]>([]);
  const [filter, setFilter] = useState<"all" | "active" | "inactive">("all");

  useEffect(() => {
    const loaded = (extensionData as Omit<BrowserExtension, "id">[]).map(
      (ext, idx) => ({
        ...ext,
        id: String(idx),
      }),
    );

    setExtensions(loaded);
  }, []);

  const handleToggle = (id: string) => {};
  const handleRemove = (id: string) => {};
  const handleFilter = (newFilter: "all" | "active" | "inactive") => {
    setFilter(newFilter);
  };

  const visible = extensions.filter((ext) => {
    if (filter === "all") return true;
    if (filter === "active") return ext.isActive;
    return !ext.isActive;
  });

  return (
    <main>
      <ExtensionsList
        extensions={visible}
        onToggle={handleToggle}
        onRemove={handleRemove}
      />
    </main>
  );
}

export default App;
