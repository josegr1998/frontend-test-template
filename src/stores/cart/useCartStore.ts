import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartStore } from "./useCartStore.types";
import {
  calculateNumberOfItems,
  calculateTotalPrice,
  mapCartItemsOnAdd,
  mapCartItemsOnRemove,
} from "./useCartStore.utils";

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      numberOfItems: 0,
      totalPrice: 0,
      isHydrated: false,
      addItem: (itemToAdd) => {
        const cartItems = get().items;

        const newItems = mapCartItemsOnAdd({ cartItems, itemToAdd });

        set({
          items: newItems,
          numberOfItems: calculateNumberOfItems(newItems),
          totalPrice: calculateTotalPrice(newItems),
        });
      },
      removeItem: (itemId) => {
        const cartItems = get().items;

        const newItems = mapCartItemsOnRemove({ cartItems, itemId });

        set({
          items: newItems,
          numberOfItems: calculateNumberOfItems(newItems),
          totalPrice: calculateTotalPrice(newItems),
        });
      },
      clearCart: () => set({ items: [], numberOfItems: 0, totalPrice: 0 }),
    }),
    {
      name: "cart-storage",
      partialize: (state) => ({
        items: state.items,
        numberOfItems: state.numberOfItems,
        totalPrice: state.totalPrice,
      }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.isHydrated = true;
        }
      },
    },
  ),
);
