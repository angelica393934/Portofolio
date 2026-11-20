"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects, slugOf, t } from "@/data/content";
import { useLang } from "@/lib/useLang";
import YouTubeLite from "./YouTubeLite";
import FloatingNav from "./FloatingNav";
import ShotsCarousel from "./ShotsCarousel";
import ProjectArt from "./ProjectArt";

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-10">
      <h2 className="text-2xl font-bold text-ink">{title}</h2>
      <div className="mb-6 mt-2 h-1 w-14 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400" />
      {children}
    </section>
  );
}

export default function ProjectDetail({ slug }: { slug: string }) {
  const [lang, setLang] = useLang();
  const c = t[lang];
  const i = projects.findIndex((p) => slugOf(p) === slug);
  const p = projects[i];
  if (!p) return null;
  const next = projects[(i + 1) % projects.length];
  const cover = p.image ?? p.hero; // cover & hero memakai gambar yang sama (4:3)

  return (
    <main className="relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-x-0 top-0 h-[700px]" aria-hidden />
      <div className="pointer-events-none absolute -right-20 top-20 h-80 w-80 animate-float rounded-full bg-sky-300/50 blur-3xl" aria-hidden />

      <FloatingNav lang={lang} onLang={setLang} back={{ href: "/#projects", label: c.back }} />

      {/* HERO: judul + deskripsi di bawahnya (kiri), gambar utama 4:3 (kanan) */}
      <section className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pb-8 pt-32 md:grid-cols-[1.05fr_1fr]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h1 className="break-words text-4xl font-extrabold leading-[1.1] tracking-tight text-ink md:text-5xl lg:text-6xl">{p.title}</h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{p.desc[lang]}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {p.tags.map((x) => <span key={x} className="rounded-full border border-sky-400/50 bg-sky-400/15 px-4 py-1.5 text-sm">{x}</span>)}
          </div>
          {p.link && <a href={p.link} target="_blank" rel="noreferrer" className="mt-6 inline-block rounded-full bg-brand px-6 py-3 font-medium text-onbrand shadow-lg shadow-sky-500/20 transition hover:-translate-y-0.5">{c.repo}</a>}
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="mx-auto w-full max-w-[580px] md:ml-auto md:mr-0">
          {/* tanpa kotak/garis batas: gambar utuh di atas bulatan gradasi lembut */}
          <ProjectArt src={cover} alt={p.title} index={i} clip={false} pad="p-2" />
        </motion.div>
      </section>

      {/* GALERI: otomatis jalan, bisa digeser (opsional) */}
      {p.shots && p.shots.length > 0 && (
        <Block title={c.shotsT}>
          <ShotsCarousel shots={p.shots} title={p.title} variant={p.shotsVariant ?? "web"} />
        </Block>
      )}

      {/* VIDEO YouTube (opsional) */}
      {p.youtube && (
        <Block title={c.videoT}>
          <div className="mx-auto max-w-3xl"><YouTubeLite id={p.youtube} title={p.title} label={c.play} /></div>
        </Block>
      )}

      {p.features && (
        <Block title={c.featT}>
          <ul className="grid gap-4 md:grid-cols-2">
            {p.features.map((f) => (
              <li key={f.en} className="flex items-start gap-3 rounded-2xl border border-line bg-surface p-5 text-muted">
                <svg className="mt-0.5 shrink-0" width="22" height="22" viewBox="0 0 24 24" aria-hidden><circle cx="12" cy="12" r="11" fill="#38BDF8" /><path d="M7 12.5l3.2 3.2L17 9" stroke="#fff" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
                {f[lang]}
              </li>
            ))}
          </ul>
        </Block>
      )}

      <section className="mx-auto max-w-6xl px-5 pb-20 pt-10">
        <Link href={`/projects/${slugOf(next)}`} className="flex items-center justify-between rounded-2xl border border-line bg-surface p-6 transition hover:border-sky-400">
          <span><span className="block text-sm text-muted">{c.next}</span><span className="text-xl font-semibold">{next.title}</span></span>
          <span className="rounded-full bg-emerald-200 px-4 py-2 text-sm font-medium text-navy-900">{c.view}</span>
        </Link>
      </section>
    </main>
  );
}