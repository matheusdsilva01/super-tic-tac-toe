import type { Player } from "@/types/game";
import { PlayX } from "./PlayX";
import { Play0 } from "./Play0";

interface GameStatusProps {
  currentPlayer: Player;
}

export function GameStatus({ currentPlayer }: GameStatusProps) {
  return (
    <p className="text-center mb-2 text-xl font-semibold flex justify-center items-center">
      É a vez do jogador{" "}
      <span className="flex">
        {currentPlayer.value === "X" ? (
          <PlayX withAnimation={false} width={32} height={32} />
        ) : (
          <Play0 withAnimation={false} width={32} height={32} />
        )}
      </span>
    </p>
  );
}
