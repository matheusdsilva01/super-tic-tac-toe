import type { Board as BoardType } from "@/types/game";
import { Square } from "@/components/home/Square";

interface BoardProps {
  board: BoardType;
  lowestMoveIndex: number | null;
  onSquareClick: (index: number) => void;
}

export function Board({ board, lowestMoveIndex, onSquareClick }: BoardProps) {
  return (
    <div className="grid grid-cols-3 gap-3 w-fit">
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
