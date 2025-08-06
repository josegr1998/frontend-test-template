import { allGames, availableFilters, delay } from "@/utils/endpoint";
import { ALL_GAMES_FILTER } from "@/consts";

const ITEMS_PER_PAGE = 12;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const genre = searchParams.get("genre");
  const currentPage = parseInt(searchParams.get("page") ?? "1");

  const isValidGenre = genre && genre !== ALL_GAMES_FILTER;

  const gamesByGenre = isValidGenre
    ? allGames.filter(
        (game) => game.genre.toLowerCase() === genre.toLowerCase(),
      )
    : allGames;

  const fromIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const toIndex = currentPage * ITEMS_PER_PAGE;

  const paginatedGames = gamesByGenre.slice(fromIndex, toIndex);

  const totalPages = Math.ceil(gamesByGenre.length / ITEMS_PER_PAGE);

  // Mock a delay to simulate a real API
  await delay(2000);

  return Response.json({
    games: paginatedGames,
    availableFilters: [ALL_GAMES_FILTER, ...availableFilters],
    totalPages,
    currentPage,
  });
}
