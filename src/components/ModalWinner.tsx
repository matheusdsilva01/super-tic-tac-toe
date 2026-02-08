"use client";

import { useCallback, useEffect } from "react";
import { PlayX } from "./PlayX";
import { Play0 } from "./Play0";

interface ModalWinnerProps {
  winner: string;
  closeModal: () => void;
}

export function ModalWinner({ closeModal, winner }: ModalWinnerProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    },
    [closeModal],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div
      className="fixed flex flex-col z-50 inset-0 h-dvh bg-zinc-700/50 p-2"
      onClick={closeModal}
    >
      <div
        className="m-auto max-w-5xl w-full bg-zinc-600/70 rounded-lg px-4 py-28 text-center border border-blue-400 shadow-blue-300"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl md:text-2xl font-bold flex justify-center items-center font-mono uppercase mb-4">
          Vitória do jogador{" "}
          <span>
            {winner === "X" ? (
              <PlayX withAnimation={false} width={28} height={28} />
            ) : (
              <Play0 withAnimation={false} width={28} height={28} />
            )}
          </span>
          !🏆
        </h2>
        <button
          className="mt-8 bg-green-500 hover:bg-green-700 text-white font-mono px-4 py-2 rounded-lg transition-colors"
          onClick={closeModal}
        >
          Jogar novamente
        </button>
      </div>
    </div>
  );
}
