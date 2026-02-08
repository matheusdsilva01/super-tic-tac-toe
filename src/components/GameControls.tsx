import { HowToPlay } from "./HowToPlay";

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
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>
        Reiniciar jogo
      </button>
      <HowToPlay />
    </div>
  );
}
