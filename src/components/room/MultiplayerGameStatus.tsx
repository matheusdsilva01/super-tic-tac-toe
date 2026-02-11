import type { Player } from "@/types/game";
import { PlayX } from "@/components/home/PlayX";
import { Play0 } from "@/components/home/Play0";

interface MultiplayerGameStatusProps {
  currentPlayer: Player;
  mySymbol: "X" | "0";
  isMyTurn: boolean;
}

export function MultiplayerGameStatus({
  currentPlayer,
  mySymbol,
  isMyTurn,
}: MultiplayerGameStatusProps) {
  return (
    <div className="flex items-center gap-3 bg-white rounded-full px-6 h-12 shadow-md">
      <span className="text-base text-gray-700">
        {isMyTurn ? "Sua vez" : "Vez do oponente"}
      </span>
      <span className="flex">
        {currentPlayer.value === "X" ? (
          <PlayX withAnimation={false} width={24} height={24} />
        ) : (
          <Play0 withAnimation={false} width={24} height={24} />
        )}
      </span>
      <span className="text-xs text-gray-400 ml-1">(Você: {mySymbol})</span>
    </div>
  );
}
