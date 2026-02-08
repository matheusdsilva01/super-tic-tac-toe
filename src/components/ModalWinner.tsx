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
      className="fixed z-50 inset-0 h-dvh bg-black/50 flex items-center justify-center"
      onClick={closeModal}
    >
      <div
        className="relative bg-white rounded-xl w-md max-w-[90vw] px-6 py-6 shadow-[0px_25px_50px_rgba(0,0,0,0.25)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors opacity-70"
          onClick={closeModal}
          aria-label="Fechar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
        <div className="flex items-center justify-center gap-2">
          <h2 className="text-xl md:text-2xl font-bold text-gray-700 uppercase">
            Vitória do jogador
          </h2>
          <span>
            {winner === "X" ? (
              <PlayX withAnimation={false} width={32} height={32} />
            ) : (
              <Play0 withAnimation={false} width={32} height={32} />
            )}
          </span>
          <span className="text-2xl">🏆</span>
        </div>
        <div className="flex justify-center mt-4">
          <button
            className="bg-[#00bc7d] hover:bg-[#00a86e] text-white text-sm px-4 h-9 rounded-lg transition-colors"
            onClick={closeModal}
          >
            Jogar novamente
          </button>
        </div>
      </div>
    </div>
  );
}
