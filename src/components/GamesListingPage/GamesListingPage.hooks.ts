import { useCatalogStore } from "@/stores/catalog/useCatalogeStore";
import { GameCatalog } from "@/types/server/catalog";
import { useEffect } from "react";

type Props = {
  initialCatalog: GameCatalog;
};

export const useFilters = ({ initialCatalog }: Props) => {
  const {
    isLoading,
    catalog,
    selectedGenre,
    isLoadingNextPage,
    fetchGames,
    fetchNextPage,
    setSelectedGenre,
    setCatalog,
  } = useCatalogStore();

  useEffect(() => {
    setCatalog(initialCatalog);
  }, [initialCatalog, setCatalog]);

  const handleViewMore = async () => {
    fetchNextPage(selectedGenre);
  };

  const handleGenreChange = async (genre: string) => {
    setSelectedGenre(genre);
    fetchGames(genre);

    const newUrl = `/?genre=${genre}`;
    window.history.replaceState(null, "", newUrl);
  };

  return {
    gamesCatalog: catalog,
    handleViewMore,
    handleGenreChange,
    selectedGenre,
    isLoading,
    isLoadingNextPage,
  };
};
