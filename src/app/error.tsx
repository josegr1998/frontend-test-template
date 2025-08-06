"use client";

import { useRouter } from "next/navigation";
import { Error } from "@/components/Error/Error";

export default function ErrorPage({ error }: { error: Error }) {
  const router = useRouter();

  const resetErrorBoundary = () => router.refresh();

  return (
    <div
      className="flex h-screen flex-col items-center justify-center"
      data-testid="error-boundary"
    >
      <Error error={error} resetErrorBoundary={resetErrorBoundary} />
    </div>
  );
}
