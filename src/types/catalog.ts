import { Game } from "./game";

export type GameCatalog = {
  games: Game[];
  availableFilters: string[];
  totalPages: number;
  currentPage: number;
};
