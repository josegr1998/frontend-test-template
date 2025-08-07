import { useCatalogStore } from "@/stores/catalog/useCatalogeStore";
import { ALL_GAMES_FILTER } from "@/consts";
import { GameCatalog } from "@/types/catalog";
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
    gamesCatalog: filteredGamesCatalog,
    isLoadingNextPage,
    isNextPageAvailable,
    error,
    fetchGamesCatalog,
    fetchNextCatalogPage,
    setGamesCatalog,
  } = useCatalogStore();

  useEffect(() => {
    setGamesCatalog(initialCatalog);
  }, [initialCatalog, setGamesCatalog]);

  const handleViewMore = async () =>
    fetchNextCatalogPage({ genre: selectedGenre, cache: "force-cache" });

  const handleGenreChange = async (genre: string) => {
    await fetchGamesCatalog({ genre, cache: "force-cache" });
    router.push(`?genre=${genre}`);
  };

  const handleResetErrorBoundary = () =>
    fetchGamesCatalog({ genre: selectedGenre, cache: "no-store" });

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
