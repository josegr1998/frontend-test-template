"use client";

import React from "react";
import { Button } from "../Button/Button";

type Props = {
  totalPages: number;
  currentPage: number;
  onClick: () => void;
};
export const ViewMore = ({ totalPages, currentPage, onClick }: Props) => {
  if (currentPage >= totalPages) return null;

  return (
    <Button
      variant="secondary"
      className="mb-12 w-full md:w-auto"
      onClick={onClick}
    >
      SEE MORE
    </Button>
  );
};
