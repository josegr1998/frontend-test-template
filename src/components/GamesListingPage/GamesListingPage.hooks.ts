import { getGamesCatalog } from "@/services/catalog";
import { Game } from "@/types/server/game";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

type Props = {
  games: Game[];
  currentPage: number;
};

export const useFilters = ({ games, currentPage }: Props) => {
  const searchParams = useSearchParams();

  const defaultGenre = searchParams.get("genre") || "All";

  const [filteredGames, setFilteredGames] = useState(games);
  const [selectedGenre, setSelectedGenre] = useState(defaultGenre);
  const [isLoading, setIsLoading] = useState(false);

  const handleViewMore = async () => {
    setIsLoading(true);
    const { games: newGames } = await getGamesCatalog({
      page: currentPage + 1,
      genre: selectedGenre,
    });

    setFilteredGames([...filteredGames, ...newGames]);
    setIsLoading(false);
  };

  const handleGenreChange = async (genre: string) => {
    setSelectedGenre(genre);
    setIsLoading(true);
    const { games: newGames } = await getGamesCatalog({
      page: 1,
      genre,
    });

    setFilteredGames(newGames);

    const newUrl = `/?genre=${genre}`;
    window.history.replaceState(null, "", newUrl);
    setIsLoading(false);
  };

  return {
    filteredGames,
    handleViewMore,
    handleGenreChange,
    selectedGenre,
    isLoading,
  };
};
