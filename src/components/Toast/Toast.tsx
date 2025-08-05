"use client";

import { useToastStore } from "@/stores/toast/toastStore";
import type { ToastItem } from "@/stores/toast/toastStore";

export const ToastContainer = () => {
  const { toasts, removeToast } = useToastStore();

  return (
    <div className="fixed right-4 top-4 z-[9999] flex flex-col items-end gap-3">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          toast={toast}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
};

const Toast = ({
  toast,
  onClose,
}: {
  toast: ToastItem;
  onClose: () => void;
}) => {
  return (
    <div
      role="status"
      aria-live="polite"
      className="animate-slide-in flex w-80 max-w-full gap-3 rounded-lg border border-[var(--color-primary-light)] bg-[var(--color-secondary)] p-4 text-[var(--color-primary-dark)] shadow-md"
    >
      <div
        className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-[var(--color-primary-light)] text-[var(--color-secondary)]"
        aria-hidden
      >
        {toast.type === "success" && "✓"}
        {toast.type === "error" && "✕"}
        {toast.type === "info" && "ℹ"}
      </div>

      <div className="min-w-0 flex-1">
        <div className="text-sm font-semibold">{toast.title}</div>
        {toast.message && (
          <div className="text-sm text-[var(--color-primary-dark)]">
            {toast.message}
          </div>
        )}
      </div>

      <button
        onClick={onClose}
        aria-label="Dismiss notification"
        className="ml-3 text-[var(--color-primary-dark)] opacity-80 hover:opacity-100"
      >
        ✕
      </button>
    </div>
  );
};
