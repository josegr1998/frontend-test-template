import { Typography } from "@/components/Typography/Typography";
import React from "react";

type Props = {
  isNew: boolean;
};

export const NewBadge = ({ isNew }: Props) => {
  if (!isNew) return null;

  return (
    <div className="absolute left-3 top-3 rounded-sm bg-stone-100 px-3 py-2 text-white">
      <Typography variant="ag-bold" as="p">
        New
      </Typography>
    </div>
  );
};
