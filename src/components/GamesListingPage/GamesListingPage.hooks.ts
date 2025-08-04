import { useCatalogStore } from "@/stores/catalog/useCatalogeStore";
import { DEFAULT_SELECTED_GENRE } from "@/consts";
import { GameCatalog } from "@/types/server/catalog";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

type Props = {
  initialCatalog: GameCatalog;
};

export const useFilters = ({ initialCatalog }: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedGenre = searchParams.get("genre") || DEFAULT_SELECTED_GENRE;

  const {
    isLoading,
    catalog,
    isLoadingNextPage,
    error,
    fetchGames,
    fetchNextPage,
    setCatalog,
  } = useCatalogStore();

  useEffect(() => {
    setCatalog(initialCatalog);
  }, [initialCatalog, setCatalog]);

  const handleViewMore = async () => {
    fetchNextPage(selectedGenre);
  };

  const handleGenreChange = async (genre: string) => {
    fetchGames(genre);

    const newUrl = `/?genre=${genre}`;
    window.history.replaceState(null, "", newUrl);
  };

  const handleResetErrorBoundary = () => {
    router.refresh();
  };

  return {
    gamesCatalog: catalog,
    selectedGenre,
    isLoading,
    isLoadingNextPage,
    error,
    handleViewMore,
    handleGenreChange,
    handleResetErrorBoundary,
  };
};
