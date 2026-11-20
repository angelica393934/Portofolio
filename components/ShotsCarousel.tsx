"use client";
import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useMotionValue, useReducedMotion } from "framer-motion";

type Props = {
  shots: string[];
  title: string;
  variant?: "web" | "mobile"; // web = 16:10 (dengan bingkai browser), mobile = 9:19.5 (bingkai ponsel)
  interval?: number;          // ms per gambar
};

const GAP = 20;
const spring = { type: "spring", stiffness: 220, damping: 30 } as const;

export default function ShotsCarousel({ shots, title, variant = "web", interval = 5000 }: Props) {
  const wrap = useRef<HTMLDivElement>(null);
  const [w, setW] = useState(0);
  const [i, setI] = useState(0);
  const [hover, setHover] = useState(false);
  const [dragging, setDragging] = useState(false);
  const x = useMotionValue(0);
  const inView = useInView(wrap, { margin: "-15% 0px" });
  const reduce = useReducedMotion();
  const n = shots.length;

  // Lebar slide: web ~78% lebar kontainer (slide kiri/kanan mengintip), mobile tetap ramping
  const slideW = variant === "web" ? Math.min(w * 0.78, 880) : Math.min(230, w * 0.62);
  const target = (k: number) => (w - slideW) / 2 - k * (slideW + GAP);
  const playing = !reduce && inView && !hover && !dragging && n > 1;

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setW(el.clientWidth));
    ro.observe(el);
    setW(el.clientWidth);
    return () => ro.disconnect();
  }, []);

  // Geser ke slide aktif (juga saat ukuran layar berubah)
  useEffect(() => {
    if (!w) return;
    const c = animate(x, (w - slideW) / 2 - i * (slideW + GAP), spring);
    return () => c.stop();
  }, [i, w, slideW, x]);

  // Autoplay: pindah tiap `interval`, kembali ke awal di ujung
  useEffect(() => {
    if (!playing) return;
    const id = setTimeout(() => setI((p) => (p + 1) % n), interval);
    return () => clearTimeout(id);
  }, [playing, i, n, interval]);

  const onDragEnd = (_: unknown, info: { offset: { x: number }; velocity: { x: number } }) => {
    setDragging(false);
    const d = info.offset.x + info.velocity.x * 0.2;
    const next = d < -60 ? Math.min(n - 1, i + 1) : d > 60 ? Math.max(0, i - 1) : i;
    setI(next);
    animate(x, target(next), spring); // kembali rapi walau indeks tidak berubah
  };

  return (
    <div>
      <div
        ref={wrap}
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label={title}
        onPointerEnter={(e) => e.pointerType === "mouse" && setHover(true)}
        onPointerLeave={() => setHover(false)}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") setI((p) => Math.min(n - 1, p + 1));
          if (e.key === "ArrowLeft") setI((p) => Math.max(0, p - 1));
        }}
        className="overflow-hidden py-6 outline-none"
      >
        <motion.div
          drag="x"
          dragMomentum={false}
          dragElastic={0.12}
          onDragStart={() => setDragging(true)}
          onDragEnd={onDragEnd}
          style={{ x, gap: GAP, touchAction: "pan-y" }}
          className="flex w-max cursor-grab items-center active:cursor-grabbing"
        >
          {shots.map((s, k) => (
            <motion.div
              key={s}
              style={{ width: slideW || undefined }}
              animate={{ opacity: k === i ? 1 : 0.55, scale: k === i ? 1 : 0.94 }}
              transition={{ duration: 0.5 }}
              className="shrink-0"
              aria-hidden={k !== i}
            >
              {variant === "web" ? (
                <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-xl shadow-sky-400/20">
                  <div className="flex h-7 items-center gap-1.5 border-b border-line bg-ink/[0.04] px-3">
                    <span className="h-2 w-2 rounded-full bg-red-400" />
                    <span className="h-2 w-2 rounded-full bg-yellow-300" />
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  </div>
                  <div className="aspect-[16/10]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={s} alt={`${title} ${k + 1}`} draggable={false} loading={k < 2 ? "eager" : "lazy"} className="pointer-events-none h-full w-full select-none object-cover object-top" />
                  </div>
                </div>
              ) : (
                <div className="overflow-hidden rounded-[30px] border-[6px] border-navy-900 bg-surface shadow-xl shadow-sky-400/20 dark:border-sky-200/30">
                  <div className="aspect-[9/19.5]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={s} alt={`${title} ${k + 1}`} draggable={false} loading={k < 3 ? "eager" : "lazy"} className="pointer-events-none h-full w-full select-none object-cover" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Titik indikator: yang aktif memanjang dan terisi sesuai hitungan 5 detik */}
      {n > 1 && (
        <div className="mt-2 flex items-center justify-center gap-2" role="tablist" aria-label="Slide">
          {shots.map((_, k) => (
            <button key={k} role="tab" aria-selected={k === i} aria-label={`Slide ${k + 1}`} onClick={() => setI(k)}
              className={`relative h-2 overflow-hidden rounded-full bg-ink/20 transition-all duration-500 ${k === i ? "w-9" : "w-2 hover:bg-ink/40"}`}>
              {k === i && (
                <motion.span
                  key={`${i}-${playing}`}
                  className="absolute inset-y-0 left-0 rounded-full bg-brand"
                  initial={{ width: playing ? "0%" : "100%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: playing ? interval / 1000 : 0, ease: "linear" }}
                />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
