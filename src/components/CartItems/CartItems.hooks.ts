import { useCartStore } from "@/stores/cart/useCartStore";
import { MESSAGE_REMOVED_FROM_CART } from "@/consts";
import { useToastStore } from "@/stores/toast/toastStore";
import { sortCartItems } from "@/utils/cart";

export const useCartItems = () => {
  const { items, removeItem, isHydrated } = useCartStore();
  const { showToast } = useToastStore();

  const handleRemoveItem = (itemId: string) => {
    removeItem(itemId);
    showToast({
      type: "success",
      title: MESSAGE_REMOVED_FROM_CART,
      message: itemId,
    });
  };

  return { items: sortCartItems(items), handleRemoveItem, isHydrated };
};
