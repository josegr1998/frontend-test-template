"use server";

import { Cache } from "@/types/cache";
import { GameCatalog } from "@/types/catalog";

type Props = {
  page?: number;
  genre: string;
  cache?: Cache;
};

export const getGamesCatalog = async ({
  page = 1,
  genre,
  cache = "no-store",
}: Props): Promise<GameCatalog> => {
  try {
    const response = await fetch(
      `${process.env.GAMES_API_URL}/api/games?page=${page}&genre=${genre}`,
      { cache },
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
