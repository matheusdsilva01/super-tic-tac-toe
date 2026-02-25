import { HowToPlay } from "@/components/home/HowToPlay";
import { RotateCcw } from "lucide-react";

interface GameControlsProps {
  onReset: () => void;
}

export function GameControls({ onReset }: GameControlsProps) {
  return (
    <div className="flex gap-3 items-center justify-center">
      <button
        className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 text-sm h-9 px-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
        onClick={onReset}
      >
        <RotateCcw size={16} />
        Reiniciar jogo
      </button>
      <HowToPlay />
    </div>
  );
}
