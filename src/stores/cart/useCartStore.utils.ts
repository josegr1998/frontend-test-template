import { Game } from "@/types/game";
import { CartItem } from "./useCartStore.types";

const cartMappers = (cartItems: CartItem[]) => {
  const addItem = (itemToAdd: Game) => [
    ...cartItems,
    { ...itemToAdd, quantity: 1, dateAdded: Date.now() },
  ];

  const updateItemQuantity = (itemToAdd: Game) =>
    cartItems.map((item) =>
      item.id === itemToAdd.id
        ? { ...item, quantity: item.quantity + 1, dateAdded: Date.now() }
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

export const mapCartItemsOnAdd = ({
  cartItems,
  itemToAdd,
}: {
  cartItems: CartItem[];
  itemToAdd: Game;
}) => {
  const isItemInCart = cartItems.some(({ id }) => id === itemToAdd.id);

  const { updateItemQuantity, addItem } = cartMappers(cartItems);

  const mappedItems = isItemInCart
    ? updateItemQuantity(itemToAdd)
    : addItem(itemToAdd);

  return mappedItems;
};

export const mapCartItemsOnRemove = ({
  cartItems,
  itemId,
}: {
  cartItems: CartItem[];
  itemId: string;
}) => cartItems.filter(({ id }) => id !== itemId);

export const calculateNumberOfItems = (cartItems: CartItem[]) =>
  cartItems.reduce((acc, { quantity }) => acc + quantity, 0);

export const calculateTotalPrice = (cartItems: CartItem[]) =>
  cartItems.reduce((acc, { price, quantity }) => acc + price * quantity, 0);
