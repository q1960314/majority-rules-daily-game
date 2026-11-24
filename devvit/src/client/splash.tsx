import './index.css';

import { context, requestExpandedMode } from '@devvit/web/client';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { todayDilemma, todayStr } from '../shared/dilemmas';

export const Splash = () => {
  const dilemma = todayDilemma();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#f6f1e8] px-4 py-6 text-gray-900">
      <div className="w-full max-w-md rounded-2xl border border-gray-300 bg-white p-5 text-center">
        <h1 className="text-3xl font-bold">Majority Rules</h1>
        <p className="mt-1 text-sm text-gray-600">
          One dilemma a day. Guess what most people would pick.
        </p>
        <p className="mt-3 text-left text-xs uppercase tracking-wider text-gray-400">
          Today · {todayStr()}
        </p>
        <p className="mt-1 text-left text-lg leading-snug font-semibold">
          {dilemma.q}
        </p>
        <p className="mt-2 text-left text-sm text-gray-600">
          A · {dilemma.a} — or — B · {dilemma.b}
        </p>
        <button
          className="mt-5 cursor-pointer rounded-full bg-[#d93900] px-5 py-2.5 text-white transition-colors hover:bg-[#c23300]"
          onClick={(e) => requestExpandedMode(e.nativeEvent, 'game')}
        >
          Tap to Play
        </button>
        <p className="mt-3 text-xs text-gray-500">
          Hey {context.username ?? 'user'} — your streak is waiting.
        </p>
      </div>
    </div>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Splash />
  </StrictMode>
);
