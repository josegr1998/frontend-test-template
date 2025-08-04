import { getGamesCatalog } from "@/services/catalog";
import { GamesListingPage } from "../GamesListingPage/GamesListingPage";

type Props = {
  genre: string;
};

export const Homepage = async ({ genre }: Props) => {
  const {
    availableFilters,
    currentPage,
    games: gamesByGenre,
    totalPages,
  } = await getGamesCatalog({ genre, cache: "force-cache" });

  //TODO: Check if the key hack can be removed

  return (
    <div className="mx-auto w-full max-w-7xl">
      <GamesListingPage
        availableFilters={availableFilters}
        games={gamesByGenre}
        totalPages={totalPages}
        currentPage={currentPage}
        key={genre}
      />
    </div>
  );
};
