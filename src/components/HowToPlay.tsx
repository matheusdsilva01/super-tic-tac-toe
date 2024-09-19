import React from "react";

export const HowToPlay = () => {
  return (
    <div id="howToPlay" className="p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        Como jogar - Super Jogo da Velha
      </h2>
      <h3 className="text-xl font-semibold mb-2">Objetivo</h3>
      <p className="mb-4">
        Formar uma linha com 3 peças do mesmo jogador, podendo ser na
        horizontal, vertical ou diagonal.
      </p>
      <h3 className="text-xl font-semibold mb-2">Regras</h3>
      <p className="mb-4">
        Os jogadores se alternam, jogando uma peça por vez, o jogador que
        conseguir formar a linha primeiro, vence.
      </p>
      <h3 className="text-xl font-semibold mb-2">Regra especial</h3>
      <p>
        Cada jogador só pode ter no máximo 3 peças no tabuleiro, caso o jogador
        faça um quarto movimento, o movimento mais antigo será sinalizado no
        tabuleiro indicando que a peça será removida após o próximo movimento.
      </p>
    </div>
  );
};
