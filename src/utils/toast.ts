import { toast } from "react-toastify";

type Props = {
  message: string;
  options?: {
    autoClose?: number;
  };
};

export const MESSAGE_ADDED_TO_CART = "Game added to cart";
export const MESSAGE_REMOVED_FROM_CART = "Game removed from cart";

const TOSAT_AUTO_CLOSE_DEFAULT = 1500;

export const toastSuccess = ({
  message,
  options: { autoClose = TOSAT_AUTO_CLOSE_DEFAULT } = {},
}: Props) => {
  toast.success(message, {
    autoClose,
    theme: "light",
  });
};
