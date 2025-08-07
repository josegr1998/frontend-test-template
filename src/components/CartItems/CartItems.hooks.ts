import { useCartStore } from "@/stores/cart/useCartStore";
import { MESSAGE_REMOVED_FROM_CART } from "@/consts";
import { useToastStore } from "@/stores/toast/useToastStore";
import { sortCartItems } from "@/utils/cart";
import { Game } from "@/types/game";

export const useCartItems = () => {
  const { items, removeItem, isHydrated } = useCartStore();
  const { showToast } = useToastStore();

  const handleRemoveItem = ({ id, name }: Game) => {
    removeItem(id);
    showToast({
      type: "success",
      title: MESSAGE_REMOVED_FROM_CART,
      message: name,
    });
  };

  return { items: sortCartItems(items), handleRemoveItem, isHydrated };
};
