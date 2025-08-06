import { create } from "zustand";
import { ToastStore } from "./useToastStore.types";

const TOAST_DEFAULT_DURATION = 2000;

export const useToastStore = create<ToastStore>((set) => ({
  toasts: [],
  showToast: (toast) => {
    const id = Math.random().toString(36).slice(2);
    set((state) => ({
      toasts: [...state.toasts, { id, ...toast }],
    }));

    setTimeout(() => {
      set((state) => ({
        toasts: state.toasts.filter((toast) => toast.id !== id),
      }));
    }, toast.duration ?? TOAST_DEFAULT_DURATION);
  },
  removeToast: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    })),
}));
