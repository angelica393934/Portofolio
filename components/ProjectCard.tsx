import Link from "next/link";
import { Lang, Project, slugOf } from "@/data/content";
import ProjectArt from "./ProjectArt";

export default function ProjectCard({ p, i, lang, view }: { p: Project; i: number; lang: Lang; view: string }) {
  return (
    <Link
      href={`/projects/${slugOf(p)}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-400/25"
    >
      <div className="relative">
        <ProjectArt src={p.image ?? p.hero} alt={p.title} index={i} scatter />
        <span className="absolute left-3 top-3 rounded-full border border-line bg-surface/85 px-3 py-1 font-mono text-xs backdrop-blur">
          {String(i + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 pt-2">
        <h3 className="text-lg font-bold">{p.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.desc[lang]}</p>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {p.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-sky-400/15 px-2.5 py-0.5 font-mono text-xs">{tag}</span>
          ))}
        </div>
        {/* Lihat detail di sisi kanan kartu */}
        <div className="mt-5 flex justify-end border-t border-line pt-4">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand">
            {view}
            <span className="grid h-6 w-6 place-items-center rounded-full bg-brand text-onbrand transition group-hover:translate-x-1" aria-hidden>→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
