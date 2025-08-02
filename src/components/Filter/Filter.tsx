"use client";

import React, { useState } from "react";
import { Typography } from "../Typography/Typography";
import { Select } from "../Select/Select";
import { cn } from "@/utils/cn";
import { useRouter, useSearchParams } from "next/navigation";

const ALL_GAMES_FILTER = "All";

type Props = {
  availableFilters: string[];
  className?: string;
};

export const Filter = ({ availableFilters, className }: Props) => {
  const searchParams = useSearchParams();
  const defaultGenre = searchParams.get("genre") || ALL_GAMES_FILTER;

  const filters = [ALL_GAMES_FILTER, ...availableFilters];

  const [genre, setGenre] = useState(defaultGenre);
  const router = useRouter();

  const handleChange = (value: string) => {
    setGenre(value);
    router.push(`/?genre=${value}`);
  };

  return (
    <div className={cn("flex items-center gap-x-6", className)}>
      <Typography variant="xl-bold" className="">
        <span className="border-primary-dark h-[22px] border-r px-6">
          Genre
        </span>
      </Typography>
      <Select
        options={filters.map((filter) => ({
          label: filter,
          value: filter,
        }))}
        value={genre}
        onChange={handleChange}
        placeholder="Select a genre"
      />
    </div>
  );
};
