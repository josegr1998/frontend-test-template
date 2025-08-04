import { getGamesCatalog } from "@/services/catalog";
import { GameCatalog } from "@/types/server/catalog";
import { create } from "zustand";

const DEFAULT_SELECTED_GENRE = "All";

type CatalogStore = {
  catalog: GameCatalog | null;
  isLoading: boolean;
  isLoadingNextPage: boolean;
  selectedGenre: string;
  //TODO: Add error handling
  error: unknown;
  fetchGames: (genre: string) => Promise<void>;
  fetchNextPage: (genre: string) => Promise<void>;
  setCatalog: (catalog: GameCatalog) => void;
  setSelectedGenre: (genre: string) => void;
};

export const useCatalogStore = create<CatalogStore>((set, get) => ({
  catalog: null,
  selectedGenre: DEFAULT_SELECTED_GENRE,
  currentPage: 1,
  isLoading: false,
  isLoadingNextPage: false,
  error: null,
  fetchGames: async (genre: string) => {
    set({ isLoading: true, error: null });
    try {
      const catalog = await getGamesCatalog({ genre, cache: "force-cache" });
      set({ catalog });
    } catch (err) {
      set({ error: err });
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
      set({ error: err });
    } finally {
      set({ isLoadingNextPage: false });
    }
  },

  setSelectedGenre: (genre: string) => set({ selectedGenre: genre }),
  setCatalog: (catalog) => set({ catalog }),
}));
