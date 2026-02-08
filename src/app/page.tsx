"use client";

import { useGameState } from "@/hooks/useGameState";
import { Header } from "@/components/Header";
import { GameStatus } from "@/components/GameStatus";
import { Board } from "@/components/Board";
import { GameControls } from "@/components/GameControls";
import { ModalWinner } from "@/components/ModalWinner";

export default function Home() {
  const { board, winner, currentPlayer, play, resetBoard, getLowestMoveIndex } =
    useGameState();

  return (
    <main>
      <Header />
      <section className="mt-8 h-full min-h-130">
        <GameStatus currentPlayer={currentPlayer} />
        <Board
          board={board}
          lowestMoveIndex={getLowestMoveIndex()}
          onSquareClick={play}
        />
        <GameControls onReset={resetBoard} />
      </section>
      {winner && (
        <ModalWinner winner={winner} closeModal={resetBoard} />
      )}
    </main>
  );
}
