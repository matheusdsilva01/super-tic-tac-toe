"use client";
import React, { useEffect, useState } from "react";
import { PlayX } from "./PlayX";
import { Play0 } from "./Play0";

interface ModalWinnerProps {
  open: boolean;
  winner: string;
  closeModal: () => void;
}

export const ModalWinner = ({ closeModal, open, winner }: ModalWinnerProps) => {
  const [openModal, setOpenModal] = useState(open);
  const handleCloseModal = () => {
    closeModal();
    setOpenModal(false);
  };

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={
        openModal
          ? "fixed flex flex-col z-50 inset-0 h-dvh bg-zinc-700/50 p-2"
          : "hidden"
      }
    >
      <div className="m-auto max-w-5xl w-full bg-zinc-600/70 rounded-lg px-4 py-28 text-center border border-blue-400 shadow-blue-300">
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
          onClick={handleCloseModal}
        >
          Jogar novamente
        </button>
      </div>
    </div>
  );
};
