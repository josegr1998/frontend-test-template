import { Game } from "@/types/server/game";

export type CartItem = Game & { quantity: number };

export type CartStore = {
  items: CartItem[];
  numberOfItems: number;
  totalPrice: number;
  addItem: (itemToAdd: Game) => void;
  removeItem: (gameId: string) => void;
  clearCart: () => void;
};
