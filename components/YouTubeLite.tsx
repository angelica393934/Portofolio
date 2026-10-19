"use client";
import { useState } from "react";

// Video baru dimuat saat diklik, jadi halaman tetap ringan.
export default function YouTubeLite({ id, title, label }: { id: string; title: string; label: string }) {
  const [on, setOn] = useState(false);
  return (
    <div className="relative aspect-video overflow-hidden rounded-2xl bg-navy-900 shadow-xl shadow-sky-300/40">
      {on ? (
        <iframe className="absolute inset-0 h-full w-full" title={title}
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen />
      ) : (
        <button onClick={() => setOn(true)} aria-label={label} className="group absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" loading="lazy" className="h-full w-full object-cover" />
          <span className="absolute inset-0 grid place-items-center bg-navy-900/30 transition group-hover:bg-navy-900/10">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-white shadow-xl transition group-hover:scale-110">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#1E3A8A" aria-hidden><path d="M8 5v14l11-7z" /></svg>
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
