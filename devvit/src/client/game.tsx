import './index.css';

import { showToast } from '@devvit/web/client';
import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { DILEMMAS, dilemmaAt, seededIndex, todayStr, type Dilemma } from '../shared/dilemmas';

type Pick = 'A' | 'B';

const loadNumber = (key: string): number => {
  try {
    const v = localStorage.getItem(key);
    return v === null ? 0 : Number(JSON.parse(v));
  } catch {
    return 0;
  }
};

const saveNumber = (key: string, v: number): void => {
  try {
    localStorage.setItem(key, JSON.stringify(v));
  } catch {
    /* storage unavailable; streak just won't persist */
  }
};

export const App = () => {
  const date = todayStr();
  const daily = dilemmaAt(seededIndex(date));
  const [practice, setPractice] = useState<Dilemma | null>(null);
  const [picked, setPicked] = useState<Pick | null>(null);
  const [streak, setStreak] = useState(() => loadNumber('mr-streak'));
  const [score, setScore] = useState(() => loadNumber('mr-score'));
  const [copied, setCopied] = useState(false);

  const dilemma = practice ?? daily;
  const pctA = dilemma.pctA;
  const pctB = 100 - pctA;
  const pickedMajority =
    picked !== null &&
    ((picked === 'A' && pctA >= 50) || (picked === 'B' && pctB > 50));

  const onPick = (p: Pick) => {
    if (picked !== null) return;
    setPicked(p);
    const majority = (p === 'A' && pctA >= 50) || (p === 'B' && pctB > 50);
    if (majority) {
      const s = streak + 1;
      setStreak(s);
      saveNumber('mr-streak', s);
      const sc = score + 1;
      setScore(sc);
      saveNumber('mr-score', sc);
    } else {
      setStreak(0);
      saveNumber('mr-streak', 0);
    }
  };

  const shareText = `Majority Rules ${date}: I picked ${picked === 'A' ? dilemma.a : dilemma.b} (${picked === 'A' ? pctA : pctB}% agreed). Streak ${streak}.`;

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      showToast('Result card copied — paste it in the comments.');
    } catch {
      showToast('Copy failed — long-press the text to copy it.');
    }
  };

  const onPractice = () => {
    let n = Math.floor(Math.random() * DILEMMAS.length);
    if (DILEMMAS.length > 1 && dilemmaAt(n) === dilemma) {
      n = (n + 1) % DILEMMAS.length;
    }
    setPractice(dilemmaAt(n));
    setPicked(null);
    setCopied(false);
  };

  return (
    <div className="flex min-h-screen flex-col items-center gap-4 bg-[#f6f1e8] px-4 py-6 text-gray-900">
      <header className="text-center">
        <h1 className="text-3xl font-bold">Majority Rules</h1>
        <p className="text-sm text-gray-600">
          One dilemma a day. Guess what most people would pick.
        </p>
        <p className="mt-1 text-xs text-gray-500">
          {date} · Streak: {streak} · Score: {score}
        </p>
      </header>

      <section className="w-full max-w-md rounded-2xl border border-gray-300 bg-white p-5">
        <p className="text-xs uppercase tracking-wider text-gray-400">
          {practice ? 'Practice dilemma' : "Today's dilemma"}
        </p>
        <h2 className="mt-2 text-xl leading-snug font-semibold">{dilemma.q}</h2>

        <div className="mt-4 grid gap-2">
          <button
            className="cursor-pointer rounded-xl border-2 border-gray-900 bg-white px-4 py-3 text-left text-base hover:bg-amber-100 disabled:opacity-60"
            disabled={picked !== null}
            onClick={() => onPick('A')}
          >
            A · {dilemma.a}
          </button>
          <button
            className="cursor-pointer rounded-xl border-2 border-gray-900 bg-white px-4 py-3 text-left text-base hover:bg-amber-100 disabled:opacity-60"
            disabled={picked !== null}
            onClick={() => onPick('B')}
          >
            B · {dilemma.b}
          </button>
        </div>

        {picked === null && (
          <p className="mt-3 text-sm text-gray-500">
            Pick a side. No wrong answers — only the majority.
          </p>
        )}

        {picked !== null && (
          <div className="mt-4">
            <div className="space-y-3 text-sm">
              <div>
                <div className="flex justify-between">
                  <span>A · {dilemma.a}</span>
                  <b>{pctA}%</b>
                </div>
                <div className="mt-1 h-3.5 overflow-hidden rounded-full bg-gray-200">
                  <div className="h-full bg-orange-500" style={{ width: `${pctA}%` }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <span>B · {dilemma.b}</span>
                  <b>{pctB}%</b>
                </div>
                <div className="mt-1 h-3.5 overflow-hidden rounded-full bg-gray-200">
                  <div className="h-full bg-blue-500" style={{ width: `${pctB}%` }} />
                </div>
              </div>
            </div>
            <p className="mt-3 font-medium">
              {pickedMajority
                ? `You sided with the majority. Streak: ${streak}.`
                : 'You went against the majority this time. Streak reset.'}
            </p>
            <p className="mt-2 rounded-lg bg-[#f6f1e8] p-2.5 text-sm">{shareText}</p>
            <div className="mt-3 flex gap-2">
              <button
                className="cursor-pointer rounded-lg border border-gray-400 bg-white px-3 py-2 text-sm"
                onClick={onCopy}
              >
                {copied ? 'Copied!' : 'Copy result card'}
              </button>
              <button
                className="cursor-pointer rounded-lg border border-gray-400 bg-white px-3 py-2 text-sm"
                onClick={onPractice}
              >
                Practice another one
              </button>
            </div>
          </div>
        )}
      </section>

      <footer className="max-w-md text-center text-xs text-gray-500">
        Daily puzzle, seeded by date — everyone gets the same dilemma today.
        Splits are the game&apos;s baked-in answer key for this build; a live
        version tallies real votes.
      </footer>
    </div>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
