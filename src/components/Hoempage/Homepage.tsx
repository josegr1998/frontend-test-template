import { getGamesCatalog } from "@/services/catalog";
import { GamesListingPage } from "../GamesListingPage/GamesListingPage";

type Props = {
  genre: string;
};

export const Homepage = async ({ genre }: Props) => {
  const initialCatalog = await getGamesCatalog({ genre, cache: "no-store" });

  return (
    <div className="mx-auto w-full max-w-7xl">
      <GamesListingPage initialCatalog={initialCatalog} />
    </div>
  );
};
