"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useGameState } from "@/hooks/useGameState";
import { useWebSocket } from "@/hooks/useWebSocket";
import type { WSMessage } from "@/types/multiplayer";

export function useMultiplayerGame(roomId: string) {
  const { board, winner, currentPlayer, play, resetBoard, getLowestMoveIndex } =
    useGameState();
  const { sendMessage, lastMessage, connectionStatus } = useWebSocket(roomId);

  const [mySymbol, setMySymbol] = useState<"X" | "0" | null>(null);
  const [opponentConnected, setOpponentConnected] = useState(false);

  const processedMessageRef = useRef<WSMessage | null>(null);
  const hasAnnouncedRef = useRef(false);

  useEffect(() => {
    if (connectionStatus === "connected" && !hasAnnouncedRef.current) {
      sendMessage({ type: "player-joined" });
      hasAnnouncedRef.current = true;
    }
  }, [connectionStatus, sendMessage]);

  useEffect(() => {
    if (!lastMessage || lastMessage === processedMessageRef.current) return;
    processedMessageRef.current = lastMessage;

    switch (lastMessage.type) {
      case "player-joined": {
        setOpponentConnected(true);

        if (!mySymbol) {
          setMySymbol("X");
        }

        sendMessage({
          type: "sync-state",
        });
        break;
      }

      case "sync-state": {
        if (!mySymbol) {
          setMySymbol("0");
        }
        setOpponentConnected(true);
        break;
      }

      case "move": {
        play(lastMessage.index);
        break;
      }

      case "reset": {
        resetBoard();
        break;
      }
    }
  }, [lastMessage, mySymbol, sendMessage, play, resetBoard]);

  const multiplayerPlay = useCallback(
    (index: number) => {
      // Só permite jogar se for minha vez
      const isMyTurn = currentPlayer.value === mySymbol;
      if (!isMyTurn || !opponentConnected) return;

      play(index);
      sendMessage({ type: "move", index });
    },
    [currentPlayer.value, mySymbol, opponentConnected, play, sendMessage],
  );

  const multiplayerReset = useCallback(() => {
    resetBoard();
    sendMessage({ type: "reset" });
  }, [resetBoard, sendMessage]);

  const isMyTurn = currentPlayer.value === mySymbol;

  return {
    board,
    winner,
    currentPlayer,
    mySymbol,
    isMyTurn,
    opponentConnected,
    connectionStatus,
    play: multiplayerPlay,
    resetBoard: multiplayerReset,
    getLowestMoveIndex,
  };
}
