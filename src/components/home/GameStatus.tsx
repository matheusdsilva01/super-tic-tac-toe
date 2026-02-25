import type { Player } from "@/types/game";
import { PlayX } from "@/components/home/PlayX";
import { Play0 } from "@/components/home/Play0";

interface GameStatusProps {
  currentPlayer: Player;
}

export function GameStatus({ currentPlayer }: GameStatusProps) {
  return (
    <div className="flex items-center gap-3 bg-white rounded-full px-6 h-12 shadow-md">
      <span className="text-base text-gray-700">É a vez do jogador</span>
      <span className="flex">
        {currentPlayer.value === "X" ? (
          <PlayX size={24} />
        ) : (
          <Play0 size={24} />
        )}
      </span>
    </div>
  );
}
