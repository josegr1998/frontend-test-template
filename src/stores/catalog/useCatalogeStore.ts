import { getGamesCatalog } from "@/services/catalog";
import { create } from "zustand";
import { CatalogStore } from "./useCatalogStore.types";
import { updateUrl } from "./useCatalogStore.utils";

export const useCatalogStore = create<CatalogStore>((set, get) => ({
  gamesCatalog: null,
  currentPage: 1,
  isLoading: false,
  isLoadingNextPage: false,
  isNextPageAvailable: false,
  error: null,
  fetchGamesCatalog: async ({ genre, cache = "no-store" }) => {
    set({ isLoading: true, error: null });
    try {
      const catalog = await getGamesCatalog({ genre, cache });
      const isNextPageAvailable = catalog.currentPage < catalog.totalPages;

      updateUrl({ newUrl: `?genre=${genre}` });

      set({
        gamesCatalog: catalog,
        isNextPageAvailable,
      });
    } catch (err) {
      set({ error: err as Error });
    } finally {
      set({ isLoading: false });
    }
  },

  fetchNextCatalogPage: async ({ genre, cache = "no-store" }) => {
    set({ isLoadingNextPage: true, error: null });
    const { gamesCatalog } = get();

    if (!gamesCatalog) return;

    try {
      const nextCatalogPage = await getGamesCatalog({
        genre,
        cache,
        page: gamesCatalog.currentPage + 1,
      });

      const isNextPageAvailable =
        nextCatalogPage.currentPage < nextCatalogPage.totalPages;

      set({
        gamesCatalog: {
          ...nextCatalogPage,
          games: [...gamesCatalog.games, ...nextCatalogPage.games],
        },
        isNextPageAvailable,
      });
    } catch (err) {
      set({ error: err as Error });
    } finally {
      set({ isLoadingNextPage: false });
    }
  },

  setGamesCatalog: (gamesCatalog) => {
    const isNextPageAvailable =
      gamesCatalog.currentPage < gamesCatalog.totalPages;

    set({
      gamesCatalog,
      isNextPageAvailable,
    });
  },
}));
