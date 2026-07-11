"use client";

import { useEffect, useState } from "react";

type Parts = { days: number; hours: number; minutes: number; seconds: number };

function diff(target: number): Parts {
  const now = Date.now();
  const delta = Math.max(0, target - now);
  const days = Math.floor(delta / 86400000);
  const hours = Math.floor((delta % 86400000) / 3600000);
  const minutes = Math.floor((delta % 3600000) / 60000);
  const seconds = Math.floor((delta % 60000) / 1000);
  return { days, hours, minutes, seconds };
}

export default function Countdown({ date }: { date?: string }) {
  const target = date ? new Date(date).getTime() : null;
  const [parts, setParts] = useState<Parts | null>(null);

  useEffect(() => {
    if (!target) return;
    setParts(diff(target));
    const id = setInterval(() => setParts(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  if (!target || !parts) return null;

  const items = [
    { label: "Days", value: parts.days },
    { label: "Hours", value: parts.hours },
    { label: "Minutes", value: parts.minutes },
    { label: "Seconds", value: parts.seconds },
  ];

  return (
    <div className="flex flex-wrap items-center gap-3">
      {items.map((item) => (
        <div
          key={item.label}
          className="flex min-w-[68px] flex-col items-center rounded-2xl border border-line/70 glass px-4 py-3"
        >
          <span className="font-display text-2xl font-semibold tabular-nums text-cream sm:text-3xl">
            {String(item.value).padStart(2, "0")}
          </span>
          <span className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-muted">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
