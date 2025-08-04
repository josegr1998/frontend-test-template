"use client";

import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import { Error } from "../Error/Error";
import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

export const ErrorBoundary = ({ children }: Props) => {
  const [error, setError] = useState<Error | null>(null);
  const router = useRouter();

  const handleError = (error: Error) => {
    setError(error);
  };

  const resetErrorBoundary = () => {
    //TODO: Check if this is correct
    router.refresh();
  };

  return (
    <ReactErrorBoundary
      onError={handleError}
      fallbackRender={() => (
        <div className="flex h-screen flex-col items-center justify-center">
          <Error error={error} resetErrorBoundary={resetErrorBoundary} />
        </div>
      )}
      onReset={resetErrorBoundary}
    >
      {children}
    </ReactErrorBoundary>
  );
};
