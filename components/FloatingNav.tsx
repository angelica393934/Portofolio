"use client";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import type { Lang } from "@/data/content";
import ThemeSwitch from "./ThemeSwitch";
import { Avatar } from "./Photo";

type Props = { lang: Lang; onLang: (l: Lang) => void; links?: { href: string; label: string }[]; back?: { href: string; label: string } };

// Navbar lonjong yang melayang dan mengikuti layar, dengan garis progres scroll di dasarnya
export default function FloatingNav({ lang, onLang, links, back }: Props) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  return (
    <motion.header initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-3 z-50 px-3 md:top-5">
      <nav className="relative mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-2 overflow-hidden rounded-3xl border border-line bg-surface/70 px-3 py-2 shadow-lg shadow-sky-500/10 backdrop-blur-xl md:rounded-full md:px-4">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <Avatar /><span>Angelica<span className="text-sky-500">.dev</span></span>
        </Link>
        {links ? (
          <ul className="order-last flex w-full gap-1 overflow-x-auto text-sm md:order-none md:w-auto">
            {links.map((l) => (
              <li key={l.href}><a href={l.href} className="whitespace-nowrap rounded-full px-3 py-1.5 text-muted transition hover:bg-sky-400/15 hover:text-ink">{l.label}</a></li>
            ))}
          </ul>
        ) : back ? (
          <Link href={back.href} className="rounded-full px-3 py-1.5 text-sm font-medium text-brand hover:bg-sky-400/15">{back.label}</Link>
        ) : null}
        <div className="flex items-center gap-2">
          <div className="flex rounded-full border border-line p-0.5 text-xs font-semibold" role="group" aria-label="Language">
            {(["id", "en"] as Lang[]).map((l) => (
              <button key={l} onClick={() => onLang(l)} aria-pressed={lang === l}
                className={`rounded-full px-3 py-1 transition ${lang === l ? "bg-brand text-onbrand" : "text-muted"}`}>{l.toUpperCase()}</button>
            ))}
          </div>
          <ThemeSwitch />
        </div>
        <motion.span style={{ scaleX }} className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-gradient-to-r from-emerald-400 via-sky-400 to-blue-600" />
      </nav>
    </motion.header>
  );
}
