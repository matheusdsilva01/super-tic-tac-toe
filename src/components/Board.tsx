import type { Board as BoardType } from "@/types/game";
import { Square } from "./Square";

interface BoardProps {
  board: BoardType;
  lowestMoveIndex: number | null;
  onSquareClick: (index: number) => void;
}

export function Board({ board, lowestMoveIndex, onSquareClick }: BoardProps) {
  return (
    <div className="grid m-auto grid-cols-3 gap-2 w-fit p-4 bg-zinc-700 rounded-md">
      {board.map((square, index) => (
        <Square
          key={index}
          value={square}
          isAboutToExpire={lowestMoveIndex === index}
          disabled={!!square}
          onClick={() => onSquareClick(index)}
        />
      ))}
    </div>
  );
}
