import { HowToPlay } from "./HowToPlay";

interface GameControlsProps {
  onReset: () => void;
}

export function GameControls({ onReset }: GameControlsProps) {
  return (
    <div className="mt-8 flex gap-x-4 text-center justify-center">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-sm transition-colors"
        onClick={onReset}
      >
        Reiniciar jogo
      </button>
      <HowToPlay />
    </div>
  );
}
