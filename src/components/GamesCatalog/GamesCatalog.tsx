"use client";

import { GamesList } from "@/components/GamesList/GamesList";
import { Typography } from "@/components/Typography/Typography";
import { useGamesCatalog } from "./GamesCatalog.hooks";
import { Loader } from "../Loader/Loader";
import { GameCatalog } from "@/types/catalog";
import { Error } from "../Error/Error";
import { GenreFilter } from "./components/GenreFilter";
import { Button } from "../Button/Button";

type Props = {
  initialCatalog: GameCatalog;
};

export const GamesCatalog = ({ initialCatalog }: Props) => {
  const {
    filteredGamesCatalog,
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
        <GenreFilter
          availableFilters={filteredGamesCatalog.availableFilters}
          selectedGenre={selectedGenre}
          handleChange={handleGenreChange}
          disabled={isLoading}
          className="mb-8 lg:mb-12"
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
