"use client";

import { Typography } from "../Typography/Typography";
import { Select } from "../Select/Select";
import { cn } from "@/utils/cn";

const ALL_GAMES_FILTER = "All";

type Props = {
  availableFilters: string[];
  className?: string;
  selectedGenre: string;
  handleChange: (genre: string) => void;
};

export const Filter = ({
  availableFilters,
  className,
  selectedGenre,
  handleChange,
}: Props) => {
  const filters = [ALL_GAMES_FILTER, ...availableFilters];

  return (
    <div
      className={cn(
        "flex w-full items-center justify-between gap-x-6 md:w-auto md:justify-end",
        className,
      )}
    >
      <Typography variant="xl-bold" className="">
        <span className="border-primary-dark h-[22px] border-r pr-6">
          Genre
        </span>
      </Typography>
      <Select
        options={filters.map((filter) => ({
          label: filter,
          value: filter,
        }))}
        value={selectedGenre}
        onChange={handleChange}
        placeholder="Select a genre"
        className="flex-1"
      />
    </div>
  );
};
