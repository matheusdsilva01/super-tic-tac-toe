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
      className={`w-16 h-16 border border-slate-400 bg-slate-400 rounded shadow-md ${
        isAboutToExpire ? "border-red-500 animate-pulse" : ""
      }`}
      onClick={onClick}
    >
      {value?.value === "X" ? (
        <PlayX />
      ) : value?.value === "0" ? (
        <Play0 />
      ) : null}
    </button>
  );
}
