import { Typography } from "@/components/Typography/Typography";
import React from "react";

export const NewBadge = () => {
  return (
    <div
      className="absolute left-3 top-3 rounded-sm bg-stone-100 px-3 py-2 text-white"
      data-testid="new-badge"
    >
      <Typography variant="ag-bold" asChild>
        <span>New</span>
      </Typography>
    </div>
  );
};
