import { allGames, availableFilters, delay } from "@/utils/endpoint";

const ITEMS_PER_PAGE = 12;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const genre = searchParams.get("genre");
  let page = parseInt(searchParams.get("page") ?? "1");

  let games = allGames;

  //TODO: Ask if i can edit this file
  if (genre && genre !== "All") {
    games = games.filter(
      (game) => game.genre.toLowerCase() === genre.toLowerCase(),
    );
  }

  const totalPages = Math.ceil(games.length / ITEMS_PER_PAGE);

  if (page < 1 || isNaN(page)) page = 1;

  // Mock a delay to simulate a real API
  await delay(2000);

  const fromIndex = (page - 1) * ITEMS_PER_PAGE;
  const toIndex = page * ITEMS_PER_PAGE;
  games = games.slice(fromIndex, toIndex);

  const currentPage = page;

  return Response.json({ games, availableFilters, totalPages, currentPage });
}
