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

export const GamesListingPage = ({
  availableFilters,
  games,
  totalPages,
  currentPage,
}: Props) => {
  const {
    filteredGames,
    handleViewMore,
    handleGenreChange,
    selectedGenre,
    isLoading,
  } = useFilters({
    games,
    currentPage,
  });

  return (
    <div className="mx-auto max-w-7xl ">
      <Typography variant="2xl-bold" as="h1" className="my-12">
        Top Sellers
      </Typography>
      <div className="flex justify-end">
        <Filter
          availableFilters={availableFilters}
          className="mb-12"
          selectedGenre={selectedGenre}
          handleChange={handleGenreChange}
        />
      </div>
      {/* TODO:Report Figma design error */}
      {isLoading ? (
        <div className="flex min-h-[439px] w-[80rem] items-center justify-center">
          <Loader className="h-full" />
        </div>
      ) : (
        <div className="my-12 mr-11">
          <GamesList games={filteredGames} />
        </div>
      )}
      <ViewMore
        totalPages={totalPages}
        currentPage={currentPage}
        onClick={handleViewMore}
      />
    </div>
  );
};
