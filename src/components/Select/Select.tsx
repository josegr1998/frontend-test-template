"use client";

import React from "react";

type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  label?: string;
  name?: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
};

export const Select: React.FC<SelectProps> = ({
  label,
  name,
  options,
  value,
  onChange,
  placeholder = "Select an option",
  className = "",
}) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <select
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="text-xl focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {placeholder && (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
