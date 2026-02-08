import type { Player } from "@/types/game";
import { PlayX } from "./PlayX";
import { Play0 } from "./Play0";

interface GameStatusProps {
  currentPlayer: Player;
}

export function GameStatus({ currentPlayer }: GameStatusProps) {
  return (
    <div className="flex items-center gap-3 bg-white rounded-full px-6 h-12 shadow-md">
      <span className="text-base text-gray-700">É a vez do jogador</span>
      <span className="flex">
        {currentPlayer.value === "X" ? (
          <PlayX withAnimation={false} width={24} height={24} />
        ) : (
          <Play0 withAnimation={false} width={24} height={24} />
        )}
      </span>
    </div>
  );
}
