"use server";

import { GameCatalog } from "@/types/server/catalog";

//TODO: Add error handling

type Props = {
  page?: number;
  genre: string;
  cache?: "no-store" | "force-cache" | "no-cache" | "only-if-cached";
};

export const getGamesCatalog = async ({
  page = 1,
  genre,
  cache = "no-store",
}: Props): Promise<GameCatalog> => {
  const response = await fetch(
    `${process.env.GAMES_API_URL}/api/games?page=${page}&genre=${genre}`,
    { cache },
  );
  const data = await response.json();

  return data;
};
