export type WSMessage =
  | { type: "move"; index: number }
  | { type: "reset" }
  | { type: "player-joined" }
  | {
      type: "sync-state";
    };

export type ConnectionStatus = "connecting" | "connected" | "disconnected";
