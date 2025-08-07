"use client";

import { Game } from "@/types/game";
import { GameCard } from "../GameCard/GameCard";
import { Loader } from "../Loader/Loader";

type Props = {
  games: Game[];
  isLoadingNextPage: boolean;
};

export const GamesList = ({ games, isLoadingNextPage }: Props) => (
  <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
    {games.map((game) => (
      <GameCard key={game.id} game={game} />
    ))}
    {isLoadingNextPage && (
      <div className="col-span-full flex justify-center">
        <Loader className="h-full" />
      </div>
    )}
  </div>
);
