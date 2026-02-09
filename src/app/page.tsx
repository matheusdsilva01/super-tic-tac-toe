"use client";

import { useGameState } from "@/hooks/useGameState";
import { Header } from "@/components/layout/Header";
import { GameStatus } from "@/components/home/GameStatus";
import { Board } from "@/components/home/Board";
import { GameControls } from "@/components/home/GameControls";
import { ModalWinner } from "@/components/home/ModalWinner";

export default function Home() {
  const { board, winner, currentPlayer, play, resetBoard, getLowestMoveIndex } =
    useGameState();

  return (
    <main
      className="min-h-dvh flex flex-col"
      style={{
        backgroundImage:
          "linear-gradient(150deg, rgb(239,246,255) 0%, rgb(250,245,255) 50%, rgb(253,242,248) 100%)",
      }}
    >
      <Header />
      <section className="flex-1 flex flex-col items-center justify-center gap-8 pb-12">
        <GameStatus currentPlayer={currentPlayer} />
        <Board
          board={board}
          lowestMoveIndex={getLowestMoveIndex()}
          onSquareClick={play}
        />
        <GameControls onReset={resetBoard} />
      </section>
      {winner && <ModalWinner winner={winner} closeModal={resetBoard} />}
    </main>
  );
}
