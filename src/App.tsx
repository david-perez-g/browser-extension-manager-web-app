import { useEffect, useState } from "react";
import type { BrowserExtension } from "./types";
import extensionData from "./data.json";
import AppBar from "./components/AppBar";
import FilterTabs, { type FilterOption } from "./components/FilterTabs";
import ExtensionsList from "./components/ExtensionsList";

function App() {
  const [extensions, setExtensions] = useState<BrowserExtension[]>([]);
  const [filter, setFilter] = useState<FilterOption>("all");
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load data.json on mount
  useEffect(() => {
    const loaded = (extensionData as Omit<BrowserExtension, "id">[]).map(
      (ext, idx) => ({
        ...ext,
        id: String(idx),
      }),
    );
    setExtensions(loaded);
  }, []);

  // Handlers
  const handleToggle = (id: string) =>
    setExtensions((exts) =>
      exts.map((ext) =>
        ext.id === id ? { ...ext, isActive: !ext.isActive } : ext,
      ),
    );

  const handleRemove = (id: string) =>
    setExtensions((exts) => exts.filter((ext) => ext.id !== id));

  const handleFilterChange = (newFilter: FilterOption) => {
    setFilter(newFilter);
  };

  const handleToggleTheme = () => {
    setIsDarkMode((d) => !d);
    document.documentElement.classList.toggle("dark");
  };

  // Compute visible list
  const visible = extensions.filter((ext) => {
    if (filter === "all") return true;
    if (filter === "active") return ext.isActive;
    return !ext.isActive;
  });

  return (
    <div className="bg-light-gradient dark:bg-dark-gradient">
      <main className="mx-auto min-h-screen max-w-[var(--breakpoint-lg)] p-6">
        <AppBar onToggleTheme={handleToggleTheme} isDarkMode={isDarkMode} />
        <section className="flex h-48 flex-col items-center justify-center md:mt-6 md:h-24 md:flex-row md:items-center md:justify-between">
          <h2 className="flex justify-center text-4xl font-bold dark:text-white">
            Extensions List
          </h2>
          <FilterTabs current={filter} onChange={handleFilterChange} />
        </section>

        <ExtensionsList
          extensions={visible}
          onToggle={handleToggle}
          onRemove={handleRemove}
        />
      </main>
    </div>
  );
}

export default App;
