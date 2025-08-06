import { GamesCatalog } from "@/components/GamesCatalog/GamesCatalog";
import { getGamesCatalog } from "@/services/catalog";

type Props = {
  searchParams: Promise<{
    genre?: string;
  }>;
};

export const metadata = {
  title: "GamerShop - Top Sellers",
  description: "Browse and buy the most popular games from our catalog",
};

export default async function Home({ searchParams }: Props) {
  const { genre = "All" } = await searchParams;

  const initialCatalog = await getGamesCatalog({ genre, cache: "force-cache" });

  return (
    <main className="min-h-screen px-6 pt-16 lg:px-32">
      <div className="mx-auto w-full max-w-7xl">
        <GamesCatalog initialCatalog={initialCatalog} />
      </div>
    </main>
  );
}
