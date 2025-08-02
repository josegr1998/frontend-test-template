import { getGamesCatalog } from "@/services/catalog";

import { GamesListingPage } from "@/components/GamesListingPage/GamesListingPage";

type Props = {
  searchParams: {
    genre?: string;
  };
};

export default async function Home({ searchParams }: Props) {
  const { genre = "All" } = searchParams;

  const {
    availableFilters,
    currentPage,
    games: gamesByGenre,
    totalPages,
  } = await getGamesCatalog({ genre });

  //TODO: Check if the key hack can be removed

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-32">
      <div className="max-w-7xl">
        <GamesListingPage
          availableFilters={availableFilters}
          games={gamesByGenre}
          totalPages={totalPages}
          currentPage={currentPage}
          key={genre}
        />
      </div>
    </main>
  );
}
