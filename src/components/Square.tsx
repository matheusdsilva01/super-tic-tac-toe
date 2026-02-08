import type { Player } from "@/types/game";
import { PlayX } from "./PlayX";
import { Play0 } from "./Play0";

interface SquareProps {
  value: Player | null;
  isAboutToExpire: boolean;
  disabled: boolean;
  onClick: () => void;
}

export function Square({
  value,
  isAboutToExpire,
  disabled,
  onClick,
}: SquareProps) {
  return (
    <button
      disabled={disabled}
      className={`w-28 h-28 md:w-36 md:h-36 bg-white border-2 rounded-2xl shadow-sm flex items-center justify-center transition-all hover:shadow-md ${
        isAboutToExpire
          ? "border-red-400 animate-pulse shadow-red-200"
          : "border-gray-100"
      }`}
      onClick={onClick}
    >
      {value?.value === "X" ? (
        <PlayX width={48} height={48} />
      ) : value?.value === "0" ? (
        <Play0 width={48} height={48} />
      ) : null}
    </button>
  );
}
