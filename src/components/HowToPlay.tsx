"use client";
import { useEffect, useState } from "react";

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
            ? "fixed z-50 p-2 flex flex-col inset-0 h-dvh bg-zinc-700/50"
            : "hidden"
        }`}
      >
        <div className="m-auto max-w-5xl w-full bg-zinc-600 rounded-lg overflow-auto px-4 py-6 relative">
          <button
            className="absolute top-0 right-0 p-2 text-white hover:text-gray-300 transition-colors"
            onClick={() => setOpenModal(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="text-current"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
          <h2 className="text-xl md:text-2xl font-bold mb-4 mt-2">
            Como jogar - Super Jogo da Velha
          </h2>
          <h3 className="text-lg md:text-xl font-semibold mb-2">Objetivo</h3>
          <p className="mb-4 font-light">
            Os jogadores se alternam, jogando uma peça por vez, o jogador que
            conseguir formar uma linha com 3 peças primeiro, podendo ser na
            horizontal, vertical ou diagonal, vence a partida.
          </p>
          <h3 className="text-lg md:text-xl font-semibold mb-2">
            Regra especial
          </h3>
          <p className="font-light">
            Cada jogador só pode ter no máximo 3 peças no tabuleiro, caso o
            jogador faça um quarto movimento, o movimento mais antigo será
            sinalizado no tabuleiro indicando que a peça será removida após o
            próximo movimento.
          </p>
          <video className="h-auto w-56 m-auto mt-4" autoPlay muted loop>
            <source src="/media/preview.webm" type="video/webm" />
            <source src="/media/preview.mp4" type="video/mp4" />
          </video>
          <button
            className="mt-8 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors"
            onClick={() => setOpenModal(false)}
          >
            Fechar
          </button>
        </div>
      </div>
    </>
  );
};
