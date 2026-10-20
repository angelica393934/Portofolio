"use client";
import { useState } from "react";
import { skillIcons } from "@/data/content";

export default function SkillIcon({ name, color }: { name: string; color: string }) {
  const [ok, setOk] = useState(true);
  const src = skillIcons[name];
  return ok && src ? (
    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white p-2.5 shadow-lg ring-1 ring-black/5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={name} loading="lazy" onError={() => setOk(false)} className="h-full w-full object-contain" />
    </span>
  ) : (
    <span className={`grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br ${color} text-lg font-extrabold text-white shadow-lg`}>{name.slice(0, 2)}</span>
  );
}