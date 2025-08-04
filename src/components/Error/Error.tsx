"use client";

import { FallbackProps } from "react-error-boundary";
import { Button } from "../Button/Button";
import { Typography } from "../Typography/Typography";

export function Error({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg bg-[var(--color-surface-secondary)] px-8 py-12 text-center text-[var(--color-primary-dark)]">
      <Typography variant="2xl-bold">Oops! Something went wrong.</Typography>
      <Typography variant="ag-regular" className="my-5">
        We encountered an unexpected error. Please try refreshing the page or
        contact support if the problem persists.
      </Typography>
      <Typography variant="ag-regular" className="mb-5 text-red-600">
        {error?.message}
      </Typography>
      <Button onClick={resetErrorBoundary}>Try Again</Button>
    </div>
  );
}
