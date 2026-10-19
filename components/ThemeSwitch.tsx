"use client";
import { useTheme } from "@/lib/useTheme";

// Saklar siang/malam: awan + matahari <-> bintang + bulan
export default function ThemeSwitch() {
  const [dark, toggle] = useTheme();
  const off = "translate-y-6 opacity-0";
  return (
    <button role="switch" aria-checked={dark} aria-label="Dark mode" onClick={toggle}
      className={`relative h-8 w-16 shrink-0 overflow-hidden rounded-full shadow-inner transition-colors duration-500 ${dark ? "bg-gradient-to-r from-navy-900 to-blue-900" : "bg-gradient-to-r from-sky-300 to-sky-500"}`}>
      <span className={`absolute right-2 top-1.5 h-3 w-6 rounded-full bg-white/90 transition-all duration-500 ${dark ? off : ""}`} />
      <span className={`absolute right-5 top-4 h-2.5 w-5 rounded-full bg-white/70 transition-all duration-500 ${dark ? off : ""}`} />
      {[[10, 8], [22, 19], [30, 7], [16, 23]].map(([x, y]) => (
        <span key={x} style={{ left: x, top: y }} className={`absolute h-1 w-1 rounded-full bg-white transition-all duration-500 ${dark ? "opacity-100" : "-translate-y-3 opacity-0"}`} />
      ))}
      <span style={{ transform: `translateX(${dark ? 32 : 0}px)` }}
        className={`absolute left-1 top-1 h-6 w-6 rounded-full transition-all duration-500 ${dark ? "bg-slate-100" : "bg-yellow-300 shadow-[0_0_12px_#FDE047]"}`}>
        <span className={`absolute right-1 top-1 h-2 w-2 rounded-full bg-slate-300 transition-opacity ${dark ? "opacity-100" : "opacity-0"}`} />
      </span>
    </button>
  );
}
