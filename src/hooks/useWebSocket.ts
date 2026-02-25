"use client";

import type { ConnectionStatus, WSMessage } from "@/types/multiplayer";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

const WS_URL = process.env.NEXT_PUBLIC_WS_URL || "ws://localhost:8080/ws";

interface UseWebSocketReturn {
  sendMessage: (msg: WSMessage) => void;
  lastMessage: WSMessage | null;
  connectionStatus: ConnectionStatus;
}

export function useWebSocket(roomId: string): UseWebSocketReturn {
  const wsRef = useRef<WebSocket | null>(null);

  const [lastMessage, setLastMessage] = useState<WSMessage | null>(null);
  const [connectionStatus, setConnectionStatus] =
    useState<ConnectionStatus>("connecting");

  const router = useRouter();

  const onOpen = useCallback(() => {
    setConnectionStatus("connected");
  }, []);

  const onMessage = useCallback((event: MessageEvent) => {
    try {
      const data: WSMessage = JSON.parse(event.data);

      setLastMessage(data);
    } catch {
      wsRef.current?.close(
        1003,
        "Client closed connection due to invalid message",
      );
    }
  }, []);

  const onClose = useCallback(() => {
    setConnectionStatus("disconnected");

    router.push("/");
  }, [router]);

  function onError() {
    wsRef.current?.close(1000, "Client closed connection due to error");
  }

  useEffect(() => {
    if (wsRef.current?.readyState === WebSocket.OPEN) return;

    const ws = new WebSocket(`${WS_URL}?id=${roomId}`);
    wsRef.current = ws;

    ws.addEventListener("open", onOpen);
    ws.addEventListener("message", onMessage);
    ws.addEventListener("close", onClose);
    ws.addEventListener("error", onError);

    return () => {
      ws.removeEventListener("open", onOpen);
      ws.removeEventListener("message", onMessage);
      ws.removeEventListener("close", onClose);
      ws.removeEventListener("error", onError);
      ws.close(1000, "Client closed connection");
      wsRef.current = null;
    };
  }, [roomId, onOpen, onMessage, onClose]);

  const sendMessage = useCallback((msg: WSMessage) => {
    if (!wsRef.current) return;
    if (wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify(msg));
    }
  }, []);

  return { sendMessage, lastMessage, connectionStatus };
}
