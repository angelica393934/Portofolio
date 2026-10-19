"use client";
import { useState } from "react";

// ✏️ Taruh fotomu di public/me.jpg (rasio 4:5). Sebelum ada file, tampil inisial "AR".
export function Photo({ className = "" }: { className?: string }) {
  const [ok, setOk] = useState(true);
  return (
    <div className={`relative ${className}`}>
      {ok ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src="/nobg.PNG" alt="Angelica Regina Irvan" onError={() => setOk(false)} className="h-full w-full object-cover" />
        ) : (
          <span className="absolute inset-0 grid place-items-center text-6xl font-bold text-navy-800/40">AR</span>
        )}
      </div>
  );
}

export function Avatar() {
  const [ok, setOk] = useState(true);
  return (
    <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-full bg-gradient-to-br from-emerald-300 to-sky-400 text-xs font-bold text-navy-900">
      {ok ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src="/me.jpg" alt="" onError={() => setOk(false)} className="h-full w-full object-cover" />
      ) : "AR"}
    </span>
  );
}
