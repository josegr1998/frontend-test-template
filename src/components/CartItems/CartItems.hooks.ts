import { useCartStore } from "@/stores/cart/useCartStore";
import { MESSAGE_REMOVED_FROM_CART } from "@/utils/toast";
import { toastSuccess } from "@/utils/toast";

export const useCartItems = () => {
  const { items, removeItem } = useCartStore();

  const handleRemoveItem = (itemId: string) => {
    removeItem(itemId);
    toastSuccess({ message: MESSAGE_REMOVED_FROM_CART });
  };

  return { items, handleRemoveItem };
};
