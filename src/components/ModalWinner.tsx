"use client";
import React, { useEffect, useState } from "react";

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
      className={`modal ${
        openModal
          ? "fixed z-50 flex flex-col inset-0 h-dvh bg-zinc-700/50"
          : "hidden"
      }`}
    >
      <div className="m-auto max-w-56 w-full bg-zinc-600 rounded-lg px-4 py-6">
        <h2 className="text-lg text-whitetext-center">
          {winner === "X" ? "Jogador X" : "Jogador 0"} venceu!
        </h2>
        <button
          className="mt-4 bg-zinc-900 text-white font-mono px-4 py-2 rounded-lg"
          onClick={handleCloseModal}
        >
          Jogar novamente
        </button>
      </div>
    </div>
  );
};
