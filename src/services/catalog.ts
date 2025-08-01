import { GameCatalog } from "@/types/server/catalog";

//TODO: Add error handling
export const getGamesCatalog = async (): Promise<GameCatalog> => {
  const games = await fetch(`${process.env.GAMES_API_URL}/api/games`);
  const data = await games.json();
  return data;
};
