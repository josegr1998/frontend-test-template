import { getGamesCatalog } from "@/services/catalog";
import { GameCatalog } from "@/types/server/catalog";
import { create } from "zustand";

type CatalogStore = {
  catalog: GameCatalog | null;
  isLoading: boolean;
  isLoadingNextPage: boolean;
  error: Error | null;
  fetchGames: (genre: string) => Promise<void>;
  fetchNextPage: (genre: string) => Promise<void>;
  setCatalog: (catalog: GameCatalog) => void;
};

export const useCatalogStore = create<CatalogStore>((set, get) => ({
  catalog: null,
  currentPage: 1,
  isLoading: false,
  isLoadingNextPage: false,
  error: null,
  fetchGames: async (genre: string) => {
    const newUrl = `/?genre=${genre}`;

    set({ isLoading: true, error: null });
    try {
      const catalog = await getGamesCatalog({ genre, cache: "force-cache" });
      window.history.replaceState(null, "", newUrl);
      set({ catalog });
    } catch (err) {
      set({ error: err as Error });
    } finally {
      set({ isLoading: false });
    }
  },

  fetchNextPage: async (genre: string) => {
    set({ isLoadingNextPage: true, error: null });
    const { catalog } = get();

    if (!catalog) return;

    try {
      const newCatalog = await getGamesCatalog({
        genre,
        cache: "force-cache",
        page: catalog.currentPage + 1,
      });
      set({
        catalog: {
          ...newCatalog,
          games: [...catalog.games, ...newCatalog.games],
        },
      });
    } catch (err) {
      set({ error: err as Error });
    } finally {
      set({ isLoadingNextPage: false });
    }
  },

  setCatalog: (catalog) => set({ catalog }),
}));
