"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { animate, motion, useInView, useScroll, useTransform } from "framer-motion";
import { useLang } from "@/lib/useLang";
import { profile, skills, projects, experience, certs, slugOf, t } from "@/data/content";
import FloatingNav from "./FloatingNav";
import { Photo } from "./Photo";
import DevScene from "./DevScene";
import SkillIcon from "./SkillIcon";

const ids = ["about", "skills", "projects", "experience", "contact"];
const strip = ["App Design", "Website Development", "Mobile Development", "Database", "UI/UX"];
const groupColor = ["from-blue-400 to-blue-600", "from-emerald-400 to-teal-600", "from-sky-400 to-blue-500", "from-teal-300 to-emerald-500"];
const ease = [0.22, 1, 0.36, 1] as const;

function Reveal({ children, delay = 0, y = 36, className = "" }: { children: React.ReactNode; delay?: number; y?: number; className?: string }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.75, delay, ease }}>{children}</motion.div>
  );
}

function Counter({ to, dec = 0 }: { to: number; dec?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const a = animate(0, to, { duration: 1.6, ease: "easeOut", onUpdate: setV });
    return () => a.stop();
  }, [inView, to]);
  return <span ref={ref}>{v.toFixed(dec)}</span>;
}

function Section({ id, title, children, className = "" }: { id: string; title: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative scroll-mt-4 ${className}`}>
      <div className="mx-auto max-w-6xl px-5 py-20">
        <Reveal className="mb-10">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">{title}</h2>
          <div className="mt-3 h-1.5 w-20 rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-blue-600" />
        </Reveal>
        {children}
      </div>
    </section>
  );
}

export default function Portfolio() {
  const [lang, setLang] = useLang();
  const c = t[lang];
  const { scrollY } = useScroll();
  const wmY = useTransform(scrollY, [0, 700], [0, 140]);
  const links = ids.map((id, i) => ({ href: `#${id}`, label: c.nav[i] }));
  const stats: [number, number, string][] = [[projects.length, 0, c.stats[0]], [certs.length, 0, c.stats[1]], ];
  const btn1 = "rounded-full bg-brand px-6 py-3 font-semibold text-onbrand shadow-lg shadow-sky-500/20 transition hover:-translate-y-0.5";
  const btn2 = "rounded-full border border-ink/25 bg-surface/60 px-6 py-3 font-semibold backdrop-blur transition hover:-translate-y-0.5 hover:border-ink";

  return (
    <main className="relative overflow-x-clip">
      <FloatingNav lang={lang} onLang={setLang} links={links} />

      {/* HERO: nama kiri, foto tengah, deskripsi kanan */}
      <section className="relative isolate overflow-hidden" style={{ background: "linear-gradient(108deg, rgb(var(--hl)) 0 46%, rgb(var(--hr)) 46% 100%)" }}>
        {/* PORTFOLIO - fokus utama */}
        <motion.div
          style={{ y: wmY }}
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-20 px-6 select-none text-center text-[15vw] font-black leading-none text-white/70 dark:text-white/10"
        >
          PORTFOLIO
        </motion.div>

        {/* PORTFOLIO - bayangan bawah */}
        <motion.div
          style={{ y: wmY }}
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-[8rem] px-6 select-none text-center text-[15vw] font-black leading-none text-white/20 dark:text-white/[0.025]"
        >
          PORTFOLIO
        </motion.div>

          <svg
            className="pointer-events-none absolute inset-0 -z-0 h-full w-full text-white/80 dark:text-white/15"
            viewBox="0 0 1200 700"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden
          >
            <motion.path
              d="M-20 600 C 180 520, 280 420, 450 450 S 700 520, 820 380 S 1000 200, 1220 80"
              fill="none"
              stroke="currentColor"
              strokeWidth="9"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.5, delay: 0.4, ease: "easeInOut" }}
            />
          </svg>
        <div className="pointer-events-none absolute -left-20 top-1/3 h-72 w-72 animate-float rounded-full bg-emerald-300/40 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute right-0 top-10 h-80 w-80 animate-float rounded-full bg-blue-400/30 blur-3xl [animation-delay:2s]" aria-hidden />
        
        <div className="relative mx-auto grid min-h-[100svh] max-w-6xl translate-y-10 items-center gap-10 px-4 pb-20 pt-36 lg:translate-y-0 lg:items-stretch lg:gap-10 lg:px-4 lg:pb-0 lg:pt-36 lg:grid-cols-[1fr_auto_1fr]">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, ease }} className="order-2 lg:order-1 lg:pt-40 lg:pb-12">
            <h1 className="text-5xl lg:pt-8 font-extrabold leading-[1.1] tracking-tight text-ink/80 md:text-6xl">{profile.name},</h1>
            <p className="mt-12 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-3xl font-extrabold text-transparent dark:from-emerald-300 dark:to-sky-300 md:text-4xl">{c.role}</p>
          </motion.div>
          <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.15, ease }}
              className="order-1 mx-auto lg:order-2 lg:self-end"
            >
            <Photo className="w-60 animate-float md:w-72 lg:w-[420px]" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.3, ease }} className="order-3 lg:self-end lg:pt-12 lg:pb-8">
            <p className="max-w-sm text-lg leading-relaxed text-muted">{c.hero}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className={btn1}>{c.cta1}</a><a href="#contact" className={btn2}>{c.cta2}</a>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Pita berjalan dengan efek overlapping */}
      <div className="relative isolate">
        {/* Pita solid miring di belakang */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 translate-y-2 -rotate-1 scale-x-[1.02] bg-emerald-500 dark:bg-emerald-950"
        />

        {/* Pita utama */}
        <div
          className="relative overflow-hidden bg-gradient-to-r from-emerald-300 via-teal-300 to-sky-400 py-4 text-navy-900 dark:from-emerald-800 dark:via-teal-800 dark:to-blue-800 dark:text-white"
          aria-hidden
        >
          <div className="flex w-max animate-marquee gap-10 whitespace-nowrap text-2xl font-extrabold md:text-3xl">
            {[0, 1].map((k) => (
              <div key={k} className="flex gap-10">
                {strip.map((s) => (
                  <span key={s} className="flex items-center gap-10">
                    {s}
                    <span className="opacity-60">✱</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TENTANG: bento */}
      <Section id="about" title={c.aboutT}>
        <div className="grid gap-5 md:grid-cols-3">
          <Reveal className="md:col-span-2 md:row-span-2">
            <div className="relative h-full overflow-hidden rounded-[2rem] border border-line bg-gradient-to-br from-emerald-100 via-surface to-sky-100 p-8 shadow-sm dark:from-emerald-950 dark:via-surface dark:to-blue-950 md:p-10">
              <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-sky-400/25 blur-2xl" aria-hidden />
              <p className="relative max-w-xl text-xl leading-relaxed md:text-2xl">{c.about}</p>
              <a href="/CV-Angelica-Regina-Irvan.pdf" download className={`${btn1} relative mt-8 inline-flex items-center gap-2`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" /></svg>{c.cv}
              </a>
            </div>
          </Reveal>
          {stats.map(([n, d, label], i) => (
            <Reveal key={label} delay={0.1 + i * 0.08} className={i > 1 ? "md:col-span-1" : ""}>
              <div className="h-full rounded-[2rem] border border-line bg-surface p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-300/30">
                <p className="bg-gradient-to-br from-emerald-500 to-blue-600 bg-clip-text text-5xl font-extrabold text-transparent"><Counter to={n} dec={d} /></p>
                <p className="mt-1 text-sm text-muted">{label}</p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.2} className="md:col-span-3">
            <div className="flex items-start gap-4 rounded-[2rem] border border-line bg-surface p-6">
              <span className="relative mt-1.5 flex h-3 w-3 shrink-0"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" /><span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" /></span>
              <div><p className="font-semibold">{c.nowT}</p><p className="text-muted">{c.now}</p></div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* KEAHLIAN + laptop & ponsel */}
      <Section id="skills" title={c.skillsT} className="bg-gradient-to-b from-transparent via-emerald-200/30 to-transparent dark:via-emerald-900/20">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div className="space-y-8">
            {skills.map((g, gi) => (
              <Reveal key={g.group.en} delay={gi * 0.08}>
                <h3 className="mb-4 text-lg font-bold">{g.group[lang]}</h3>
                <div className="flex flex-wrap gap-4">
                  {g.items.map((it, k) => (
                    <motion.div key={it} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: k * 0.07, type: "spring", stiffness: 200, damping: 16 }}
                      whileHover={{ y: -8 }} className="flex w-28 flex-col items-center gap-3 rounded-[2.2rem] border border-line bg-surface/80 px-3 py-5 shadow-sm backdrop-blur">
                      <SkillIcon name={it} color={groupColor[gi % 4]} />
                      <span className="text-center text-sm font-semibold leading-tight">{it}</span>
                    </motion.div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="lg:-mt-10"><DevScene /></Reveal>
        </div>
      </Section>

      {/* PROYEK */}
      <Section id="projects" title={c.projectsT}>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.1}>
              <Link href={`/projects/${slugOf(p)}`} className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-400/25">
                {/* Slot gambar proyek: rasio 4:3 */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-emerald-200 via-teal-200 to-sky-300 dark:from-emerald-900 dark:via-teal-900 dark:to-blue-900">
                  {p.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  ) : (
                    <span className="absolute inset-0 grid place-items-center text-8xl font-black text-white/50" aria-hidden>{String(i + 1).padStart(2, "0")}</span>
                  )}
                  <span className="absolute left-3 top-3 rounded-full bg-surface/85 px-3 py-1 font-mono text-xs backdrop-blur">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-bold">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.desc[lang]}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {p.tags.map((tag) => <span key={tag} className="rounded-full bg-sky-400/15 px-2.5 py-0.5 font-mono text-xs">{tag}</span>)}
                  </div>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand">{c.view}
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-brand text-onbrand transition group-hover:translate-x-1" aria-hidden>→</span></span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* PENGALAMAN */}
      <Section id="experience" title={c.expT} className="bg-gradient-to-b from-transparent via-sky-200/30 to-transparent dark:via-blue-900/20">
        <ol className="relative space-y-8 pl-9 before:absolute before:left-[11px] before:top-2 before:h-[calc(100%-1rem)] before:w-0.5 before:bg-gradient-to-b before:from-emerald-400 before:to-blue-600">
          {experience.map((e, i) => (
            <li key={e.org} className="relative">
              <span className="absolute -left-9 top-6 grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-emerald-400 to-blue-600 ring-4 ring-bg"><span className="h-2 w-2 rounded-full bg-white" /></span>
              <Reveal delay={i * 0.1} y={28}>
                <div className="rounded-3xl border border-line bg-surface p-6 shadow-sm transition hover:shadow-xl hover:shadow-sky-300/20 md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div><h3 className="text-xl font-bold md:text-2xl">{e.org}</h3><p className="font-medium text-brand">{e.role[lang]}</p></div>
                    <span className="rounded-full bg-gradient-to-r from-emerald-400/20 to-blue-500/20 px-4 py-1.5 font-mono text-xs font-medium">{e.period[lang]}</span>
                  </div>
                  <ul className="mt-5 grid gap-3 md:grid-cols-2">
                    {e.points.map((pt) => (
                      <li key={pt.en} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500" />{pt[lang]}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <Reveal><div className="h-full rounded-3xl bg-gradient-to-br from-blue-700 to-blue-500 p-7 text-white shadow-lg">
            <h3 className="mb-2 text-lg font-bold">{c.eduT}</h3><p className="text-white/90">{c.edu}</p></div></Reveal>
          <Reveal delay={0.1}><div className="h-full rounded-3xl border border-line bg-surface p-7">
            <h3 className="mb-4 text-lg font-bold">{c.certT}</h3>
            <ul className="space-y-3">{certs.map((x) => (
              <li key={x} className="flex items-center gap-3"><span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 text-sm text-white">✓</span>{x}</li>
            ))}</ul></div></Reveal>
        </div>
      </Section>

      {/* KONTAK */}
      <Section id="contact" title={c.contactT}>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-800 via-blue-600 to-emerald-500 p-8 text-white shadow-2xl shadow-blue-500/30 md:p-14">
            <div className="absolute -right-16 -top-16 h-64 w-64 animate-float rounded-full bg-white/15 blur-2xl" aria-hidden />
            <p className="relative max-w-xl text-xl md:text-2xl">{c.contact}</p>
            <div className="relative mt-8 flex flex-wrap gap-3 text-navy-900">
              <a href={`mailto:${profile.email}`} className="rounded-full bg-white px-6 py-3 font-semibold transition hover:-translate-y-0.5">{c.email}</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded-full bg-white/90 px-6 py-3 font-semibold transition hover:-translate-y-0.5">LinkedIn</a>
            </div>
          </div>
        </Reveal>
      </Section>

      <footer className="border-t border-line py-8 text-center text-sm text-muted">© {new Date().getFullYear()} {profile.name}</footer>
    </main>
  );
}