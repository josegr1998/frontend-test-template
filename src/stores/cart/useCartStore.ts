import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartStore } from "./useCartStore.types";
import {
  calculateNumberOfItems,
  calculateTotalPrice,
  cartUtils,
} from "./useCartStore.utils";

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      numberOfItems: 0,
      totalPrice: 0,
      addItem: (itemToAdd) => {
        const cartItems = get().items;

        const isItemInCart = cartItems.some(({ id }) => id === itemToAdd.id);

        const { addItem, updateItemQuantity } = cartUtils(cartItems);

        const newItems = isItemInCart
          ? updateItemQuantity(itemToAdd)
          : addItem(itemToAdd);

        set({
          items: newItems,
          numberOfItems: calculateNumberOfItems(newItems),
          totalPrice: calculateTotalPrice(newItems),
        });
      },
      removeItem: (itemId) => {
        const cartItems = get().items;

        const { removeItem } = cartUtils(cartItems);

        const newItems = removeItem(itemId);

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
    },
  ),
);
