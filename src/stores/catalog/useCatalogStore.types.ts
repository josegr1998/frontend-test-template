import { GameCatalog } from "@/types/catalog";
import { Cache } from "@/types/cache";

type FetchGamesCatalogProps = {
  genre: string;
  cache?: Cache;
};

export type CatalogStore = {
  gamesCatalog: GameCatalog | null;
  isLoading: boolean;
  isLoadingNextPage: boolean;
  isNextPageAvailable: boolean;
  error: Error | null;
  fetchGamesCatalog: (props: FetchGamesCatalogProps) => Promise<void>;
  fetchNextCatalogPage: (props: FetchGamesCatalogProps) => Promise<void>;
  setGamesCatalog: (catalog: GameCatalog) => void;
};
