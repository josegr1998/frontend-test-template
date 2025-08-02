import { Game } from "@/types/server/game";
import { Button } from "../Button/Button";
import Image from "next/image";
import React from "react";
import { Typography } from "../Typography/Typography";
import { useCartStore } from "@/stores/useCartStore";

type Props = {
  game: Game;
};

export const GameCard = ({ game }: Props) => {
  const { addItem } = useCartStore();

  return (
    <div className="border-0.5 border-primary-light rounded-2xl p-6">
      {/* TODO: Check if this is correct, check size of the button */}
      <Image
        src={game.image}
        alt={game.name}
        width={0}
        height={0}
        sizes="100vw"
        className="h-60 w-full rounded-t-2xl object-cover"
      />
      <Typography variant="ag-bold" as="h3" className="mt-5">
        {game.genre.toUpperCase()}
      </Typography>
      <div className="mb-5 mt-3 flex items-center justify-between">
        <Typography variant="lg-bold" as="p" className="truncate">
          {game.name}
        </Typography>
        <Typography variant="xl-bold" as="p">
          {game.price}
        </Typography>
      </div>
      <Button className="w-full" onClick={() => addItem(game)}>
        ADD TO CART
      </Button>
    </div>
  );
};
