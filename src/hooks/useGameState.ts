"use client";

import { useState, useCallback } from "react";
import type { Player, Board } from "@/types/game";
import { WINNING_COMBINATIONS, INITIAL_BOARD } from "@/constants/game";

export function useGameState() {
  const [board, setBoard] = useState<Board>([...INITIAL_BOARD]);
  const [winner, setWinner] = useState<string | null>(null);
  const [currentPlayer, setCurrentPlayer] = useState<Player>({
    value: "X",
    currentMove: 0,
  });

  const getPlayerMoves = useCallback(
    (playerValue: string) =>
      board.reduce<{ player: Player; index: number }[]>((acc, square, i) => {
        if (square && square.value === playerValue) {
          acc.push({ player: square, index: i });
        }
        return acc;
      }, []),
    [board],
  );

  const getLowestMoveIndex = useCallback((): number | null => {
    if (winner) return null;
    const moves = getPlayerMoves(currentPlayer.value);
    if (moves.length < 3) return null;

    const lowestMove = Math.min(...moves.map((m) => m.player.currentMove));
    return moves.find((m) => m.player.currentMove === lowestMove)!.index;
  }, [winner, currentPlayer.value, getPlayerMoves]);

  const checkWinner = (newBoard: Board, player: Player) => {
    const won = WINNING_COMBINATIONS.some(([a, b, c]) => {
      return (
        newBoard[a]?.value &&
        newBoard[a]?.value === newBoard[b]?.value &&
        newBoard[a]?.value === newBoard[c]?.value
      );
    });

    if (won) {
      setTimeout(() => setWinner(player.value), 800);
    }
  };

  const play = (index: number) => {
    const newBoard = board.slice();
    const moves = getPlayerMoves(currentPlayer.value);

    if (moves.length >= 3) {
      const lowestMove = Math.min(...moves.map((m) => m.player.currentMove));
      const oldest = moves.find(
        (m) => m.player.currentMove === lowestMove,
      )!.index;
      newBoard[oldest] = null;
    }

    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    checkWinner(newBoard, currentPlayer);
    setCurrentPlayer((prev) => ({
      value: prev.value === "X" ? "0" : "X",
      currentMove: prev.currentMove + 1,
    }));
  };

  const resetBoard = () => {
    setBoard([...INITIAL_BOARD]);
    setWinner(null);
    setCurrentPlayer({ value: "X", currentMove: 0 });
  };

  return {
    board,
    winner,
    currentPlayer,
    play,
    resetBoard,
    getLowestMoveIndex,
  };
}
