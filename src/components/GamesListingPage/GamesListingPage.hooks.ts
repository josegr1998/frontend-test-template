import { getGamesCatalog } from "@/services/catalog";
import { GameCatalog } from "@/types/server/catalog";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

type Props = {
  gameCatalog: GameCatalog;
};

export const useFilters = ({ gameCatalog }: Props) => {
  const searchParams = useSearchParams();

  const defaultGenre = searchParams.get("genre") || "All";

  const [gamesCatalog, setGamesCatalog] = useState<GameCatalog>(gameCatalog);
  const [selectedGenre, setSelectedGenre] = useState(defaultGenre);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingNextPage, setIsLoadingNextPage] = useState(false);

  const handleViewMore = async () => {
    setIsLoadingNextPage(true);
    const newGamesCatalog = await getGamesCatalog({
      page: gamesCatalog.currentPage + 1,
      genre: selectedGenre,
    });

    setGamesCatalog({
      ...gamesCatalog,
      games: [...gamesCatalog.games, ...newGamesCatalog.games],
    });
    setIsLoadingNextPage(false);
  };

  const handleGenreChange = async (genre: string) => {
    setSelectedGenre(genre);
    setIsLoading(true);
    const newGamesCatalog = await getGamesCatalog({
      page: 1,
      genre,
    });

    setGamesCatalog(newGamesCatalog);

    const newUrl = `/?genre=${genre}`;
    window.history.replaceState(null, "", newUrl);
    setIsLoading(false);
  };

  return {
    gamesCatalog,
    handleViewMore,
    handleGenreChange,
    selectedGenre,
    isLoading,
    isLoadingNextPage,
  };
};
