export type ToastType = "success" | "error" | "info";

export type ToastItem = {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
  duration?: number;
};

export type ToastStore = {
  toasts: ToastItem[];
  showToast: (toast: Omit<ToastItem, "id">) => void;
  removeToast: (id: string) => void;
};
