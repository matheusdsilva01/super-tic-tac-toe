export interface Player {
  value: string;
  currentMove: number;
}

export type Board = (Player | null)[];
