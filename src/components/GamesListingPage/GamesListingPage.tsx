"use client";

import { Filter } from "@/components/Filter/Filter";
import { GamesList } from "@/components/GamesList/GamesList";
import { Typography } from "@/components/Typography/Typography";
import { ViewMore } from "@/components/ViewMore/ViewMore";
import { useFilters } from "./GamesListingPage.hooks";
import { Game } from "@/types/server/game";
import { Loader } from "../Loader/Loader";

type Props = {
  availableFilters: string[];
  games: Game[];
  totalPages: number;
  currentPage: number;
};

export const GamesListingPage = (props: Props) => {
  const {
    gamesCatalog,
    handleViewMore,
    handleGenreChange,
    selectedGenre,
    isLoading,
    isLoadingNextPage,
  } = useFilters({ gameCatalog: { ...props } });

  return (
    <div className="mx-auto max-w-7xl">
      <Typography variant="2xl-bold" as="h1" className="my-8 lg:my-12">
        Top Sellers
      </Typography>
      <div className="flex md:justify-end">
        <Filter
          availableFilters={gamesCatalog.availableFilters}
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
            games={gamesCatalog.games}
            isLoadingNextPage={isLoadingNextPage}
          />
        </div>
      )}
      <ViewMore
        totalPages={gamesCatalog.totalPages}
        currentPage={gamesCatalog.currentPage}
        onClick={handleViewMore}
      />
    </div>
  );
};
