import { useCatalogStore } from "@/stores/catalog/useCatalogeStore";
import { ALL_GAMES_FILTER } from "@/consts";
import { GameCatalog } from "@/types/server/catalog";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

type Props = {
  initialCatalog: GameCatalog;
};

export const useGamesCatalog = ({ initialCatalog }: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedGenre = searchParams.get("genre") || ALL_GAMES_FILTER;

  const {
    isLoading,
    catalog: filteredGamesCatalog,
    isLoadingNextPage,
    isNextPageAvailable,
    error,
    fetchGames,
    fetchNextPage,
    setCatalog,
  } = useCatalogStore();

  useEffect(() => {
    setCatalog(initialCatalog);
  }, [initialCatalog, setCatalog]);

  const handleViewMore = async () => fetchNextPage(selectedGenre);

  const handleGenreChange = async (genre: string) => fetchGames(genre);

  const handleResetErrorBoundary = () => router.refresh();

  return {
    filteredGamesCatalog: filteredGamesCatalog || initialCatalog,
    selectedGenre,
    isLoading,
    isLoadingNextPage,
    error,
    isNextPageAvailable,
    handleViewMore,
    handleGenreChange,
    handleResetErrorBoundary,
  };
};
