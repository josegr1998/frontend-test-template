import { useCartStore } from "@/stores/cart/useCartStore";
import { Game } from "@/types/server/game";
import { MESSAGE_ADDED_TO_CART } from "@/utils/toast";
import { toastSuccess } from "@/utils/toast";
import { MESSAGE_REMOVED_FROM_CART } from "@/utils/toast";

type Props = {
  game: Game;
};

export const useGameCard = ({ game }: Props) => {
  const { items, removeItem, addItem } = useCartStore();

  const isAddedToCart = items.some(({ id }) => id === game.id);

  const handleAddToCart = () => {
    addItem(game);
    toastSuccess({ message: MESSAGE_ADDED_TO_CART });
  };

  const handleRemoveFromCart = () => {
    removeItem(game.id);
    toastSuccess({ message: MESSAGE_REMOVED_FROM_CART });
  };

  return {
    isAddedToCart,
    handleAddToCart,
    handleRemoveFromCart,
  };
};
