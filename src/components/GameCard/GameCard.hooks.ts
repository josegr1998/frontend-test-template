import { useCartStore } from "@/stores/cart/useCartStore";
import { Game } from "@/types/game";
import { MESSAGE_ADDED_TO_CART, MESSAGE_REMOVED_FROM_CART } from "@/consts";
import { useToastStore } from "@/stores/toast/useToastStore";

type Props = {
  game: Game;
};

export const useGameCard = ({ game }: Props) => {
  const { items, removeItem, addItem } = useCartStore();
  const { showToast } = useToastStore();

  const isAddedToCart = items.some(({ id }) => id === game.id);

  const handleAddToCart = () => {
    addItem(game);
    showToast({
      type: "success",
      title: MESSAGE_ADDED_TO_CART,
      message: game.name,
    });
  };

  const handleRemoveFromCart = () => {
    removeItem(game.id);
    showToast({
      type: "success",
      title: MESSAGE_REMOVED_FROM_CART,
      message: game.name,
    });
  };

  return {
    isAddedToCart,
    handleAddToCart,
    handleRemoveFromCart,
  };
};
