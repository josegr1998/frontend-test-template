"use client";

import { Filter } from "@/components/Filter/Filter";
import { GamesList } from "@/components/GamesList/GamesList";
import { Typography } from "@/components/Typography/Typography";
import { ViewMore } from "@/components/ViewMore/ViewMore";
import { usePagination } from "./GamesListingPage.hooks";
import { Game } from "@/types/server/game";

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
  const { paginatedGames, handleViewMore } = usePagination({
    games,
    currentPage,
  });

  return (
    <>
      <Typography variant="2xl-bold" as="h1" className="my-12">
        Top Sellers
      </Typography>
      <div className="flex justify-end">
        <Filter availableFilters={availableFilters} className="mb-12" />
      </div>
      {/* TODO:Report Figma design error */}
      <div className="my-12 mr-11">
        <GamesList games={paginatedGames} />
      </div>
      <ViewMore
        totalPages={totalPages}
        currentPage={currentPage}
        onClick={handleViewMore}
      />
    </>
  );
};
