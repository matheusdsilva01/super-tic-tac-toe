"use client";

import { useRouter } from "next/navigation";
import { Header } from "@/components/layout/Header";

export default function MultiplayerPage() {
  const router = useRouter();

  const handleCreateRoom = () => {
    const roomId = crypto.randomUUID().slice(0, 6);
    router.push(`/room/${roomId}`);
  };

  return (
    <main
      className="min-h-dvh flex flex-col"
      style={{
        backgroundImage:
          "linear-gradient(150deg, rgb(239,246,255) 0%, rgb(245,243,255) 50%, rgb(253,242,248) 100%)",
      }}
    >
      <Header />
      <section className="flex-1 flex flex-col items-center justify-center gap-8 px-4">
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="flex items-center justify-center w-16 h-16 bg-violet-100 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-violet-600"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Jogar Online</h2>
          <p className="text-sm text-gray-500 max-w-xs">
            Crie uma sala e compartilhe o link com um amigo para jogar juntos em
            tempo real
          </p>
        </div>

        <button
          onClick={handleCreateRoom}
          className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-medium px-6 h-12 rounded-xl shadow-lg hover:shadow-xl transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
          Criar Sala
        </button>
      </section>
    </main>
  );
}
