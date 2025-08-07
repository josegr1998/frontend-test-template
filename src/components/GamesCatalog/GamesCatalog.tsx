"use client";

import { GamesList } from "@/components/GamesList/GamesList";
import { Typography } from "@/components/Typography/Typography";
import { useGamesCatalog } from "./GamesCatalog.hooks";
import { Loader } from "../Loader/Loader";
import { GameCatalog } from "@/types/catalog";
import { Error } from "../Error/Error";
import { Button } from "../Button/Button";
import { Select } from "../Select/Select";

type Props = {
  initialCatalog: GameCatalog;
};

export const GamesCatalog = ({ initialCatalog }: Props) => {
  const {
    filteredGamesCatalog,
    genreFilterOptions,
    selectedGenre,
    isLoading,
    isLoadingNextPage,
    error,
    isNextPageAvailable,
    handleViewMore,
    handleGenreChange,
    handleResetErrorBoundary,
  } = useGamesCatalog({ initialCatalog });

  if (error) {
    return (
      <div className="flex min-h-[calc(100vh-236px)] w-full items-center justify-center">
        <Error error={error} resetErrorBoundary={handleResetErrorBoundary} />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl">
      <Typography variant="2xl-bold" className="my-8 lg:my-12" asChild>
        <h1>Top Sellers</h1>
      </Typography>
      <div className="flex md:justify-end">
        <Select
          label="Genre"
          name="genre"
          options={genreFilterOptions}
          disabled={isLoading}
          value={selectedGenre}
          onChange={handleGenreChange}
          placeholder="Select a genre"
          className="mb-8 flex w-full items-center justify-between gap-x-6 md:w-auto md:justify-end lg:mb-12"
        />
      </div>
      {isLoading ? (
        <div className="flex min-h-[589px] w-full items-center justify-center">
          <Loader className="h-full" />
        </div>
      ) : (
        <div className="py-8 lg:py-12">
          <GamesList
            games={filteredGamesCatalog.games}
            isLoadingNextPage={isLoadingNextPage}
          />
        </div>
      )}
      {isNextPageAvailable && (
        <Button
          variant="filled"
          className="mb-12 w-full md:w-auto"
          onClick={handleViewMore}
          aria-label="See more"
          disabled={isLoadingNextPage}
        >
          SEE MORE
        </Button>
      )}
    </div>
  );
};
