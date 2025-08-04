"use client";

import { Filter } from "@/components/Filter/Filter";
import { GamesList } from "@/components/GamesList/GamesList";
import { Typography } from "@/components/Typography/Typography";
import { ViewMore } from "@/components/ViewMore/ViewMore";
import { useFilters } from "./GamesListingPage.hooks";
import { Loader } from "../Loader/Loader";
import { GameCatalog } from "@/types/server/catalog";

type Props = {
  initialCatalog: GameCatalog;
};

export const GamesListingPage = ({ initialCatalog }: Props) => {
  const {
    gamesCatalog,
    selectedGenre,
    handleViewMore,
    handleGenreChange,
    isLoading,
    isLoadingNextPage,
  } = useFilters({ initialCatalog });

  return (
    <div className="mx-auto max-w-7xl">
      <Typography variant="2xl-bold" as="h1" className="my-8 lg:my-12">
        Top Sellers
      </Typography>
      <div className="flex md:justify-end">
        <Filter
          availableFilters={
            gamesCatalog?.availableFilters || initialCatalog.availableFilters
          }
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
            games={gamesCatalog?.games || initialCatalog.games}
            isLoadingNextPage={isLoadingNextPage}
          />
        </div>
      )}
      <ViewMore
        totalPages={gamesCatalog?.totalPages || initialCatalog.totalPages}
        currentPage={gamesCatalog?.currentPage || initialCatalog.currentPage}
        onClick={handleViewMore}
      />
    </div>
  );
};
