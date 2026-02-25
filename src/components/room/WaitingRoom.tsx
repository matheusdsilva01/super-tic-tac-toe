"use client";

import { useState } from "react";
import type { ConnectionStatus } from "@/types/multiplayer";

interface WaitingRoomProps {
  roomId: string;
  mySymbol: "X" | "0" | null;
  connectionStatus: ConnectionStatus;
}

export function WaitingRoom({
  roomId,
  mySymbol,
  connectionStatus,
}: WaitingRoomProps) {
  const [copied, setCopied] = useState(false);

  const roomUrl = `http://localhost:3000/room/${roomId}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(roomUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      alert("Falha ao copiar o link. Por favor, copie manualmente: " + roomUrl);
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-6 px-4">
      <div className="flex flex-col items-center gap-2">
        <div className="relative flex items-center justify-center w-16 h-16">
          <div className="absolute w-16 h-16 border-4 border-gray-200 rounded-full" />
          <div className="absolute w-16 h-16 border-4 border-t-violet-500 rounded-full animate-spin" />
        </div>
        <h2 className="text-xl font-bold text-gray-800 mt-4">
          Aguardando oponente...
        </h2>
        <p className="text-sm text-gray-500">
          Compartilhe o link abaixo para alguém entrar na sala
        </p>
      </div>

      {mySymbol && (
        <div className="flex items-center gap-2 bg-violet-50 border border-violet-200 rounded-lg px-4 py-2">
          <span className="text-sm text-violet-700">
            Você é o jogador
            <strong className="text-violet-900">{mySymbol}</strong>
          </span>
        </div>
      )}

      <div className="flex flex-col items-center gap-3 w-full max-w-md">
        <div className="flex items-center gap-2 w-full bg-white border border-gray-200 rounded-lg px-4 py-3 shadow-sm">
          <span className="flex-1 text-sm text-gray-600 truncate font-mono">
            {roomUrl}
          </span>
          <button
            onClick={handleCopy}
            className="shrink-0 flex items-center gap-1.5 bg-violet-600 hover:bg-violet-700 text-white text-sm px-3 py-1.5 rounded-md transition-colors"
          >
            {copied ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Copiado!
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                </svg>
                Copiar
              </>
            )}
          </button>
        </div>

        {connectionStatus === "connecting" && (
          <span className="text-sm text-green-500">Conectando...</span>
        )}
      </div>
    </div>
  );
}
