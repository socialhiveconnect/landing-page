"use client"
import Colmeia from '@/components/Colmeia';

export default function Home() {
  return (
    <div>
      <div className="absolute top-60 left-20 -translate-x-1/2 -translate-y-1/2 z-0">
        <Colmeia treeLevels={[7, 6, 5, 4, 3]} />
      </div>
      <div className="relative container mx-auto mt-16 px-8 py-10 text-center min-h-screen overflow-hidden">
        <h2 className="relative z-10 text-4xl font-semibold mb-6 text-gray-100">
          "Uma comunidade de todos para todos"
        </h2>
        <h1 className="relative z-10 text-7xl font-black text-white drop-shadow-2xl">
          Hive Connect
        </h1>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .container {
            text-align: center;
            padding-left: 4rem;
          }
        }
      `}</style>
    </div>
  );
}