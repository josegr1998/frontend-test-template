"use client";

import React from "react";
import { Typography } from "../Typography/Typography";
import { Select } from "../Select/Select";
import { cn } from "@/utils/cn";

type Props = {
  availableFilters: string[];
  className?: string;
};

export const Filter = ({ availableFilters, className }: Props) => {
  return (
    <div className={cn("flex items-center gap-x-6", className)}>
      <Typography variant="xl-bold" className="">
        <span className="border-primary-dark h-[22px] border-r px-6">
          Genre
        </span>
      </Typography>
      <Select
        options={availableFilters.map((filter) => ({
          label: filter,
          value: filter,
        }))}
        value={"All"}
        onChange={() => {}}
        placeholder="Select a genre"
      />
    </div>
  );
};
