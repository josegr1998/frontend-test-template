import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Game } from "@/types/server/game";

type CartItem = Game & { quantity: number };

type CartStore = {
  items: CartItem[];
  numberOfItems: number;
  totalPrice: number;
  addItem: (game: Game) => void;
  removeItem: (gameId: string) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      numberOfItems: 0,
      totalPrice: 0,
      addItem: (game) => {
        const existingItem = get().items.find((item) => item.id === game.id);
        const newItems = existingItem
          ? get().items.map((item) =>
              item.id === game.id
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            )
          : [...get().items, { ...game, quantity: 1 }];

        const totalQuantity = newItems.reduce(
          (acc, item) => acc + item.quantity,
          0,
        );

        set({
          items: newItems,
          numberOfItems: totalQuantity,
          totalPrice: newItems.reduce((acc, item) => acc + item.price, 0),
        });
      },
      removeItem: (gameId) => {
        const filteredItems = get().items.filter((item) => item.id !== gameId);
        const totalQuantity = filteredItems.reduce(
          (acc, item) => acc + item.quantity,
          0,
        );

        set({
          items: filteredItems,
          numberOfItems: totalQuantity,
          totalPrice: filteredItems.reduce((acc, item) => acc + item.price, 0),
        });
      },
      clearCart: () => set({ items: [], numberOfItems: 0 }),
    }),
    {
      name: "cart-storage",
      partialize: (state) => ({
        items: state.items,
        numberOfItems: state.numberOfItems,
        totalPrice: state.totalPrice,
      }),
    },
  ),
);
