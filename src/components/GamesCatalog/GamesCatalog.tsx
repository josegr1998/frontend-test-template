"use client";

import { GamesList } from "@/components/GamesList/GamesList";
import { Typography } from "@/components/Typography/Typography";
import { useGamesCatalog } from "./GamesCatalog.hooks";
import { Loader } from "../Loader/Loader";
import { GameCatalog } from "@/types/server/catalog";
import { Error } from "../Error/Error";
import { GenreFilter } from "./components/GenreFilter";
import { DEFAULT_SELECTED_GENRE } from "@/consts";
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
      <Error error={error} resetErrorBoundary={handleResetErrorBoundary} />
    );
  }

  return (
    <div className="mx-auto max-w-7xl">
      <Typography variant="2xl-bold" className="my-8 lg:my-12" asChild>
        <h1>Top Sellers</h1>
      </Typography>
      <div className="flex md:justify-end">
        <GenreFilter
          //TODO: Return this from API
          availableFilters={[
            DEFAULT_SELECTED_GENRE,
            ...filteredGamesCatalog.availableFilters,
          ]}
          className="mb-8 lg:mb-12"
          selectedGenre={selectedGenre}
          handleChange={handleGenreChange}
        />
      </div>
      {isLoading ? (
        <div className="flex min-h-[439px] w-[80rem] items-center justify-center">
          <Loader className="h-full" />
        </div>
      ) : (
        <div className="my-8 lg:my-12">
          <GamesList
            games={filteredGamesCatalog.games}
            isLoadingNextPage={isLoadingNextPage}
          />
        </div>
      )}
      {isNextPageAvailable ? (
        <Button
          variant="secondary"
          className="mb-12 w-full md:w-auto"
          onClick={handleViewMore}
          aria-label="See more"
        >
          SEE MORE
        </Button>
      ) : null}
    </div>
  );
};
