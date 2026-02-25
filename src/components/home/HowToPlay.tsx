"use client";
import { HelpCircle } from "lucide-react";
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
  }, []);

  return (
    <>
      <button
        className="flex items-center gap-2 bg-[#00bc7d] hover:bg-[#00a86e] text-white text-sm h-9 px-4 rounded-lg shadow-md hover:shadow-lg transition-all"
        onClick={() => setOpenModal(true)}
      >
        <HelpCircle size={16} />
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
            ? "fixed z-50 p-2 flex flex-col inset-0 h-dvh bg-black/50"
            : "hidden"
        }`}
      >
        <div className="m-auto max-w-xl w-full bg-white text-gray-800 rounded-xl overflow-auto px-6 py-8 relative shadow-2xl">
          <button
            className="absolute top-2 right-2 p-2 text-gray-400 hover:text-gray-600 transition-colors"
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
            className="mt-8 bg-[#00bc7d] hover:bg-[#00a86e] text-white text-sm px-4 py-2 rounded-lg transition-colors"
            onClick={() => setOpenModal(false)}
          >
            Fechar
          </button>
        </div>
      </div>
    </>
  );
};
