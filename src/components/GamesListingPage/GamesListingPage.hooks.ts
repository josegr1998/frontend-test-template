import { getGamesCatalog } from "@/services/catalog";
import { Game } from "@/types/server/game";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

type Props = {
  games: Game[];
  currentPage: number;
};

export const usePagination = ({ games, currentPage }: Props) => {
  const searchParams = useSearchParams();

  const genre = searchParams.get("genre") || "All";

  const [paginatedGames, setPaginatedGames] = useState(games);

  const handleViewMore = async () => {
    const { games: newGames } = await getGamesCatalog({
      page: currentPage + 1,
      genre,
    });

    setPaginatedGames([...paginatedGames, ...newGames]);
  };

  return { paginatedGames, handleViewMore };
};
