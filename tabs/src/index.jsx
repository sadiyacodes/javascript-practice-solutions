import React, { useState } from "react";
export default function Tabs({ items, defaultValue }) {
  const [value, setValue] = useState(defaultValue ?? items[0].value);
  return (
    <div className="tabs">
      <div className="tabs-list">
        {items.map(({ label, value: itemValue }) => {
          const isActive = itemValue === value;

          return (
            <button
              type="button"
              key={itemValue}
              className={[
                "tabs-list-item",
                isActive && "tabs-list-item--active",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() => {
                setValue(itemValue);
              }}
            >
              {label}
            </button>
          );
        })}
      </div>

      <div>
        {items.map(({ panel, value: itemValue }) => (
          <div key={itemValue} hidden={itemValue !== value}>
            {panel}
          </div>
        ))}
      </div>
    </div>
  );
}
