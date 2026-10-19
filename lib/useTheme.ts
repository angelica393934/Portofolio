"use client";
import { useEffect, useState } from "react";

export function useTheme(): [boolean, () => void] {
  const [dark, setDark] = useState(false);
  useEffect(() => setDark(document.documentElement.classList.contains("dark")), []);
  const toggle = () => {
    const n = !dark;
    setDark(n);
    document.documentElement.classList.toggle("dark", n);
    try { localStorage.setItem("theme", n ? "dark" : "light"); } catch {}
  };
  return [dark, toggle];
}
