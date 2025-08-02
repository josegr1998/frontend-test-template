"use server";

import { GameCatalog } from "@/types/server/catalog";

//TODO: Add error handling

type Props = {
  page?: number;
  genre: string;
};

export const getGamesCatalog = async ({
  page = 1,
  genre,
}: Props): Promise<GameCatalog> => {
  const response = await fetch(
    `${process.env.GAMES_API_URL}/api/games?page=${page}&genre=${genre}`,
    { cache: "no-store" },
  );
  const data = await response.json();

  return data;
};
