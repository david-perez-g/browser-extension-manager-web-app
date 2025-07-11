import React from "react";

interface AppBarProps {
  onToggleTheme: () => void;
  isDarkMode: boolean;
}

const AppBar: React.FC<AppBarProps> = ({ onToggleTheme, isDarkMode }) => {
  const logoUrl = new URL("../assets/images/logo.svg", import.meta.url).href;
  const iconDarkUrl = new URL("../assets/images/icon-moon.svg", import.meta.url)
    .href;
  const iconLightUrl = new URL("../assets/images/icon-sun.svg", import.meta.url)
    .href;

  return (
    <header className="mb-2 flex items-center justify-between rounded-xl border border-gray-300 bg-white px-3 py-2 shadow dark:bg-neutral-800">
      {/* Left: logo */}
      <div className="flex items-center">
        <img
          src={logoUrl}
          alt="Extension Manager logo"
          className="h-9 w-auto"
        />
      </div>

      {/* Right: theme toggle icon button */}
      <button
        onClick={onToggleTheme}
        aria-label="Toggle light/dark mode"
        className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 transition hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600"
      >
        <img
          src={isDarkMode ? iconLightUrl : iconDarkUrl}
          alt={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          className="h-5 w-5"
        />
      </button>
    </header>
  );
};

export default AppBar;
