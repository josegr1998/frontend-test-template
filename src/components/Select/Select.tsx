"use client";

import { cn } from "@/utils/cn";
import React from "react";
import { Typography } from "../Typography/Typography";

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
  disabled?: boolean;
};

export const Select: React.FC<SelectProps> = ({
  label,
  name,
  options,
  value,
  onChange,
  placeholder = "Select an option",
  className = "",
  disabled,
}) => {
  return (
    <div className={cn(className)}>
      {label && (
        <Typography variant="xl-bold" asChild>
          <label
            htmlFor={name}
            className="h-[22px] border-r border-[var(--color-primary-dark)] pr-6"
          >
            {label}
          </label>
        </Typography>
      )}
      <select
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="focus:border-primary-dark focus:ring-primary-dark text-xl focus:outline-none focus:ring-2"
        disabled={disabled}
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
