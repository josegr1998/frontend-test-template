"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Typography } from "@/components/Typography/Typography";

type Props = {
  label: string;
};

export const NavigateBackButton = ({ label }: Props) => {
  const router = useRouter();

  const handleGoBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <button
      type="button"
      onClick={handleGoBack}
      className="mb-8 flex items-center justify-start gap-x-4 py-4 xl:-mb-0 xl:py-6"
      aria-label="Go back to previous page"
    >
      <Image src="/arrow-left.svg" alt="Back" width={12} height={12} />
      <Typography variant="ag-medium" asChild>
        <span>{label}</span>
      </Typography>
    </button>
  );
};
