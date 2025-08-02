"use client";

import { Game } from "@/types/server/game";
import { GameCard } from "../GameCard/GameCard";

type Props = {
  games: Game[];
};

export const GamesList = ({ games }: Props) => (
  <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
    {games.map((game) => (
      <GameCard key={game.id} game={game} />
    ))}
  </div>
);
