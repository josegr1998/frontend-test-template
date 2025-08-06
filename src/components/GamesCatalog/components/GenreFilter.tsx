"use client";

import { Select } from "@/components/Select/Select";
import { Typography } from "@/components/Typography/Typography";
import { cn } from "@/utils/cn";

type Props = {
  availableFilters: string[];
  className?: string;
  selectedGenre: string;
  handleChange: (genre: string) => void;
};

export const GenreFilter = ({
  availableFilters,
  className,
  selectedGenre,
  handleChange,
}: Props) => (
  <div
    className={cn(
      "flex w-full items-center justify-between gap-x-6 md:w-auto md:justify-end",
      className,
    )}
  >
    <Typography variant="xl-bold" asChild>
      <span className="h-[22px] border-r border-[var(--color-primary-dark)] pr-6">
        Genre
      </span>
    </Typography>
    <Select
      options={availableFilters.map((filterName) => ({
        label: filterName,
        value: filterName,
      }))}
      value={selectedGenre}
      onChange={handleChange}
      placeholder="Select a genre"
      className="flex-1"
    />
  </div>
);
