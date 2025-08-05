"use client";

import { Error as ErrorComponent } from "@/components/Error/Error";

export default function Error({ error }: { error: Error }) {
  return <ErrorComponent error={error} resetErrorBoundary={() => {}} />;
}
