import { Game } from "@/types/server/game";
import { CartItem } from "./useCartStore.types";

export const cartUtils = (cartItems: CartItem[]) => {
  const addItem = (itemToAdd: Game) => [
    ...cartItems,
    { ...itemToAdd, quantity: 1 },
  ];

  const updateItemQuantity = (itemToAdd: Game) =>
    cartItems.map((item) =>
      item.id === itemToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item,
    );

  const removeItem = (itemId: string) =>
    cartItems.filter(({ id }) => id !== itemId);

  return {
    addItem,
    updateItemQuantity,
    removeItem,
  };
};

export const calculateNumberOfItems = (cartItems: CartItem[]) =>
  cartItems.reduce((acc, { quantity }) => acc + quantity, 0);

export const calculateTotalPrice = (cartItems: CartItem[]) =>
  cartItems.reduce((acc, { price, quantity }) => acc + price * quantity, 0);
