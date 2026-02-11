"use client";

import { Board } from "@/components/home/Board";
import { GameControls } from "@/components/home/GameControls";
import { ModalWinner } from "@/components/home/ModalWinner";
import { Header } from "@/components/layout/Header";
import { MultiplayerGameStatus } from "@/components/room/MultiplayerGameStatus";
import { WaitingRoom } from "@/components/room/WaitingRoom";
import { useMultiplayerGame } from "@/hooks/useMultiplayerGame";

interface RoomPageProps {
  params: { id: string };
}

export default function RoomPage({ params }: RoomPageProps) {
  const { id: roomId } = params;

  const {
    board,
    winner,
    currentPlayer,
    mySymbol,
    isMyTurn,
    opponentConnected,
    connectionStatus,
    play,
    resetBoard,
    getLowestMoveIndex,
  } = useMultiplayerGame(roomId);

  const showGame = opponentConnected && mySymbol;

  return (
    <main
      className="min-h-dvh flex flex-col"
      style={{
        backgroundImage:
          "linear-gradient(150deg, rgb(239,246,255) 0%, rgb(245,243,255) 50%, rgb(253,242,248) 100%)",
      }}
    >
      <Header />

      {!showGame ? (
        <WaitingRoom
          roomId={roomId}
          mySymbol={mySymbol}
          connectionStatus={connectionStatus}
        />
      ) : (
        <section className="flex-1 flex flex-col items-center justify-center gap-8 pb-12">
          <MultiplayerGameStatus
            currentPlayer={currentPlayer}
            mySymbol={mySymbol}
            isMyTurn={isMyTurn}
          />
          <Board
            board={board}
            lowestMoveIndex={getLowestMoveIndex()}
            onSquareClick={play}
            disabled={!isMyTurn || !opponentConnected}
          />
          <GameControls onReset={resetBoard} />
        </section>
      )}

      {winner && <ModalWinner winner={winner} closeModal={resetBoard} />}
    </main>
  );
}
