import { Game } from "@/types/game";
import { Button } from "../Button/Button";
import Image from "next/image";
import React from "react";
import { Typography } from "../Typography/Typography";
import { NewBadge } from "../NewBadge/NewBadge";
import { useGameCard } from "./GameCard.hooks";

type Props = {
  game: Game;
};

export const GameCard = ({ game }: Props) => {
  const { isAddedToCart, handleAddToCart, handleRemoveFromCart } = useGameCard({
    game,
  });

  return (
    <div className="rounded-2xl border-[0.5px] border-[var(--color-primary-light)] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:shadow-lg">
      <div className="relative h-60 w-full">
        <Image
          src={game.image}
          alt={game.name}
          sizes="100vw"
          loading="lazy"
          fill
          className="rounded-t-2xl object-cover"
        />
        {game.isNew && <NewBadge />}
      </div>
      <Typography variant="ag-bold" className="mt-5" asChild>
        <h3>{game.genre.toUpperCase()}</h3>
      </Typography>
      <div className="mb-5 mt-3 flex items-center justify-between gap-x-2">
        <Typography variant="lg-bold" className="truncate" asChild>
          <p title={game.name}>{game.name}</p>
        </Typography>
        <Typography variant="xl-bold" asChild>
          <p>${game.price}</p>
        </Typography>
      </div>
      {isAddedToCart ? (
        <Button
          className="w-full"
          onClick={handleRemoveFromCart}
          aria-label="Remove from cart"
          data-testid="remove-from-cart-button"
        >
          REMOVE FROM CART
        </Button>
      ) : (
        <Button
          className="w-full"
          onClick={handleAddToCart}
          aria-label="Add to cart"
          data-testid="add-to-cart-button"
        >
          ADD TO CART
        </Button>
      )}
    </div>
  );
};
