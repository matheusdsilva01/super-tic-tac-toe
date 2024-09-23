"use client";
import React, { useEffect, useState } from "react";

export const HowToPlay = () => {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenModal(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors"
        onClick={() => setOpenModal(true)}
      >
        Como jogar
      </button>
      <div
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setOpenModal(false);
          }
        }}
        className={`modal ${
          openModal
            ? "fixed z-50 flex flex-col inset-0 h-dvh bg-zinc-700/50"
            : "hidden"
        }`}
      >
        <div className="m-auto max-w-5xl w-full bg-zinc-600 rounded-lg px-4 py-6">
          <h2 className="text-2xl font-bold mb-4">
            Como jogar - Super Jogo da Velha
          </h2>
          <h3 className="text-xl font-semibold mb-2">Objetivo</h3>
          <p className="mb-4">
            Os jogadores se alternam, jogando uma peça por vez, o jogador que
            conseguir formar uma linha com 3 peças primeiro, podendo ser na
            horizontal, vertical ou diagonal, vence a partida.
          </p>
          <h3 className="text-xl font-semibold mb-2">Regra especial</h3>
          <p>
            Cada jogador só pode ter no máximo 3 peças no tabuleiro, caso o
            jogador faça um quarto movimento, o movimento mais antigo será
            sinalizado no tabuleiro indicando que a peça será removida após o
            próximo movimento.
          </p>
        </div>
      </div>
    </>
  );
};
