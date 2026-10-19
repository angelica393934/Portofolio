"use client";
import { useEffect, useState } from "react";
import type { Lang } from "@/data/content";

// Bahasa dibagi antar halaman lewat localStorage
export function useLang(): [Lang, (l: Lang) => void] {
  const [lang, setLang] = useState<Lang>("id");
  useEffect(() => {
    try { const s = localStorage.getItem("lang") as Lang | null; if (s) setLang(s); } catch {}
  }, []);
  const change = (l: Lang) => {
    setLang(l);
    document.documentElement.lang = l;
    try { localStorage.setItem("lang", l); } catch {}
  };
  return [lang, change];
}
