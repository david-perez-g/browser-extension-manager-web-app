import React from "react";
import Button from "./Button";

export type FilterOption = "all" | "active" | "inactive";

interface FilterTabsProps {
  current: FilterOption;
  onChange: (newFilter: FilterOption) => void;
}

const tabs: { label: string; value: FilterOption }[] = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Inactive", value: "inactive" },
];

const FilterTabs: React.FC<FilterTabsProps> = ({ current, onChange }) => (
  <nav className="my-4 flex space-x-4">
    {tabs.map(({ label, value }) => (
      <Button
        variant={current === value ? "solid" : "outline"}
        key={value}
        onClick={() => onChange(value)}
        className={`text-xl font-medium ${
          current === value
            ? "border-neutral-900 text-neutral-900"
            : "text-neutral-600"
        }`}
      >
        {label}
      </Button>
    ))}
  </nav>
);

export default FilterTabs;
