"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Lang, projects, slugOf, t } from "@/data/content";
import { useLang } from "@/lib/useLang";
import YouTubeLite from "./YouTubeLite";
import FloatingNav from "./FloatingNav";

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-10">
      <h2 className="text-2xl font-bold text-ink">{title}</h2>
      <div className="mb-6 mt-2 h-1 w-14 rounded-full bg-sky-400" />
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
  const cover = p.hero ?? p.image;

  return (
    <main className="relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-x-0 top-0 h-[700px]" aria-hidden />
      <div className="pointer-events-none absolute -right-20 top-20 h-80 w-80 animate-float rounded-full bg-sky-300/50 blur-3xl" aria-hidden />

      <FloatingNav lang={lang} onLang={setLang} back={{ href: "/#projects", label: c.back }} />

      {/* Hero halaman detail */}
      <section className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pb-12 pt-32 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-ink md:text-6xl">{p.title}</h1>
          {p.tagline && <p className="mt-5 max-w-md text-lg text-muted">{p.tagline[lang]}</p>}
          <div className="mt-6 flex flex-wrap gap-2">
            {p.tags.map((x) => <span key={x} className="rounded-full border border-sky-400/50 bg-sky-400/15 px-4 py-1.5 text-sm">{x}</span>)}
          </div>
          {(p.role || p.period) && (
            <p className="mt-5 text-sm text-muted">{p.role?.[lang]}{p.role && p.period ? " | " : ""}{p.period?.[lang]}</p>
          )}
          {p.link && <a href={p.link} target="_blank" rel="noreferrer" className="mt-6 inline-block rounded-full bg-brand px-6 py-3 font-medium text-onbrand hover:opacity-90">{c.repo}</a>}
        </motion.div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-mint-200 to-sky-200" aria-hidden />
          {cover ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={cover} alt={p.title} className="relative w-full rounded-3xl object-cover" />
          ) : (
            <div className="relative aspect-[16/10] rounded-3xl bg-gradient-to-br from-mint-300/60 to-sky-300/70" aria-hidden />
          )}
        </div>
      </section>

      <Block title={c.overview}>
        <div className="grid gap-8 md:grid-cols-2">
          <p className="text-lg leading-relaxed text-muted">{p.desc[lang]}</p>
          {p.features && (
            <ul className="space-y-3">
              {p.features.map((f) => (
                <li key={f.en} className="flex items-start gap-3 text-muted">
                  <svg className="mt-0.5 shrink-0" width="22" height="22" viewBox="0 0 24 24" aria-hidden><circle cx="12" cy="12" r="11" fill="#38BDF8" /><path d="M7 12.5l3.2 3.2L17 9" stroke="#fff" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  {f[lang]}
                </li>
              ))}
            </ul>
          )}
        </div>
      </Block>

      {p.tech && (
        <Block title={c.techT}>
          <div className="flex flex-wrap gap-4">
            {p.tech.map((x) => (
              <div key={x.name} className="flex items-center gap-3 rounded-2xl border border-line bg-surface px-5 py-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-mint-200 font-bold text-ink">{x.name[0]}</span>
                <div><p className="font-semibold">{x.name}</p>{x.note && <p className="text-sm text-muted">{x.note}</p>}</div>
              </div>
            ))}
          </div>
        </Block>
      )}

      {p.youtube && (
        <Block title={c.videoT}>
          <div className="mx-auto max-w-3xl"><YouTubeLite id={p.youtube} title={p.title} label={c.play} /></div>
        </Block>
      )}

      {p.shots && p.shots.length > 0 && (
        <Block title={c.shotsT}>
          <div className="-mx-5 flex snap-x gap-6 overflow-x-auto px-5 pb-4">
            {p.shots.map((s, k) => (
              <div key={s} className="w-[210px] shrink-0 snap-center overflow-hidden rounded-[30px] border-[6px] border-navy-900 bg-surface shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s} alt={`${p.title} ${k + 1}`} loading="lazy" className="w-full" />
              </div>
            ))}
          </div>
        </Block>
      )}

      <section className="mx-auto max-w-6xl px-5 pb-20 pt-10">
        <Link href={`/projects/${slugOf(next)}`} className="flex items-center justify-between rounded-2xl border border-line bg-surface p-6 transition hover:border-sky-400">
          <span><span className="block text-sm text-muted">{c.next}</span><span className="text-xl font-semibold">{next.title}</span></span>
          <span className="rounded-full bg-mint-200 px-4 py-2 text-sm font-medium text-ink">{c.view}</span>
        </Link>
      </section>
    </main>
  );
}
