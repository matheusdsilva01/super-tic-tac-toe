"use client";

import { HowToPlay } from "@/components/HowToPlay";
import { ModalWinner } from "@/components/ModalWinner";
import { Play0 } from "@/components/Play0";
import { PlayX } from "@/components/PlayX";
import Link from "next/link";
import { useState } from "react";

interface Player {
  value: string;
  currentMove: number;
}

export default function Home() {
  const [board, setBoard] = useState<(Player | null)[]>(Array(9).fill(null));
  const [winner, setWinner] = useState<string | null>(null);
  const [currentPlayer, setCurrentPlayer] = useState({
    value: "X",
    currentMove: 0,
  });

  const getLowestMoveIndex = () => {
    const currentPlayerMoves = board.filter(
      (square) => square && square?.value === currentPlayer.value
    ) as Player[] | [];
    if (!winner && currentPlayerMoves.length >= 3) {
      const lowestMove = Math.min(
        ...currentPlayerMoves.map((move) => move.currentMove)
      );
      const lowestMoveIndex = board.findIndex(
        (move) => move && move.currentMove === lowestMove
      );
      return lowestMoveIndex;
    }
    return null;
  };

  const switchPlayer = () => {
    setCurrentPlayer((oldValue) => ({
      value: oldValue.value === "X" ? "0" : "X",
      currentMove: oldValue.currentMove + 1,
    }));
  };

  const numberOfMoves = () => {
    return board.filter((square) => square?.value === currentPlayer.value);
  };

  const play = (index: number) => {
    const newSquares = board.slice();
    const currentMoves = numberOfMoves();
    if (currentMoves.length >= 3) {
      const lowestMove = Math.min(
        ...currentMoves.map((move) => move!.currentMove)
      );
      const lowestMoveIndex = board.findIndex(
        (move) => move && move.currentMove === lowestMove
      );
      newSquares[lowestMoveIndex] = null;
    }
    newSquares[index] = currentPlayer;
    setBoard(newSquares);
    checkWinner(newSquares);
  };

  const checkWinner = (newSquares: (Player | null)[]) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    let roundWon = false;
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (
        newSquares[a]?.value &&
        newSquares[a]?.value === newSquares[b]?.value &&
        newSquares[a]?.value === newSquares[c]?.value
      ) {
        roundWon = true;
        break;
      }
    }

    if (roundWon) {
      setTimeout(() => {
        setWinner(currentPlayer.value);
      }, 800);
    }
    switchPlayer();
  };

  const onCloseModalWinner = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
  };

  return (
    <main>
      <header className="w-full flex justify-between bg-zinc-950 px-4 py-6">
        <h1 className="text-lg text-white font-mono">Super Jogo da Velha</h1>
        <Link
          href="https://github.com/matheusdsilva01"
          rel="noopener noreferrer"
          target="_blank"
        >
          <svg
            aria-hidden="true"
            role="img"
            viewBox="0 0 16 16"
            width="32"
            height="32"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
            ></path>
          </svg>
        </Link>
      </header>
      <section className="mt-8 h-full min-h-[520px]">
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
        <div className="grid m-auto grid-cols-3 gap-2 w-fit p-4 bg-zinc-700 rounded-md">
          {board.map((square, index) => (
            <button
              key={index}
              disabled={!!board[index]}
              className={`w-16 h-16 border border-slate-400 bg-slate-400 rounded shadow-md ${
                getLowestMoveIndex() === index
                  ? "border-red-500 animate-pulse"
                  : ""
              }`}
              onClick={() => play(index)}
            >
              {square?.value && (square?.value == "X" ? <PlayX /> : <Play0 />)}
            </button>
          ))}
        </div>
        <div className="mt-8 flex gap-x-4 text-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
            onClick={() => setBoard(Array(9).fill(null))}
          >
            Reiniciar jogo
          </button>
          <HowToPlay />
        </div>
      </section>
      {winner && (
        <ModalWinner
          open={!!winner}
          winner={winner}
          closeModal={onCloseModalWinner}
        />
      )}
    </main>
  );
}
