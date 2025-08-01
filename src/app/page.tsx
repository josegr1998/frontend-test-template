import { getGamesCatalog } from "@/services/catalog";
import { GameCard } from "@/components/GameCard/GameCard";
import { Typography } from "@/components/Typography/Typography";
import { Filter } from "@/components/Filter/Filter";
import { Button } from "@/components/Button/Button";

export default async function Home() {
  const { availableFilters, currentPage, games, totalPages } =
    await getGamesCatalog();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-32">
      <div className="max-w-7xl">
        <Typography variant="2xl-bold" as="h1" className="my-12">
          Top Sellers
        </Typography>
        <div className="flex justify-end">
          <Filter availableFilters={availableFilters} className="mb-12" />
        </div>
        {/* TODO:Report Figma design error */}
        <div className="my-12 mr-11">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {games.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
        <Button variant="secondary" className="mb-12">
          SEE MORE
        </Button>
      </div>
    </main>
  );
}
