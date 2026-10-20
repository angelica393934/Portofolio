"use client";
import { motion } from "framer-motion";

const phoneCode = ["class Home extends StatelessWidget {", "  Widget build(ctx) {", "    return Scaffold(", "      body: Hero(),  // hello", "    );", "  }", "}"];
const laptopCode = [
  "@Composable",
  "fun HomeScreen() {",
  "  Column {",
  "    Text(\"Hello, World\")",
  "    Button(onClick = { }) {",
  "      Text(\"Run\")",
  "    }",
  "  }",
  "}",
];
const sceneChips = [
  { name: "Kotlin", l: 0, t: 290 },
  { name: "Flutter", l: 100, t: 340 },
  { name: "Firebase", l: 6, t: 390 },
  { name: "Figma", l: 120, t: 428 },
];

function PhoneCode() {
  return (
    <div className="relative h-[420px] w-[240px] animate-float">
      <div className="absolute inset-0 rounded-[36px] border-[6px] border-navy-900 bg-navy-900 shadow-2xl shadow-sky-400/40 dark:border-sky-200/30 dark:bg-slate-900">
        <div className="h-full overflow-hidden rounded-[28px] bg-gradient-to-b from-emerald-200 via-white to-sky-200 p-4 dark:from-emerald-900 dark:via-slate-900 dark:to-blue-950">
          <div className="mx-auto mb-4 h-1.5 w-14 rounded-full bg-navy-900/80 dark:bg-white/40" />
          <pre className="font-mono text-[10.5px] leading-5 text-navy-800 dark:text-sky-200">
            {phoneCode.map((line, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 + i * 0.35 }}>{line}</motion.div>
            ))}
            <span className="inline-block h-3 w-1.5 animate-blink bg-navy-800 align-middle dark:bg-sky-200" />
          </pre>
          <div className="mt-5 space-y-2"><div className="h-14 rounded-2xl bg-white/80 shadow dark:bg-white/10" /><div className="h-14 rounded-2xl bg-white/60 shadow dark:bg-white/5" /></div>
        </div>
      </div>
    </div>
  );
}

function LaptopCode() {
  return (
    <div className="w-[300px] animate-float [animation-delay:1.5s]">
      <div className="rounded-t-2xl border-[6px] border-navy-900 bg-navy-900 shadow-2xl shadow-sky-400/40 dark:border-sky-200/30 dark:bg-slate-900">
        <div className="h-[190px] overflow-hidden rounded-md bg-slate-950 p-3">
          <div className="mb-3 flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-red-400" /><span className="h-2 w-2 rounded-full bg-yellow-300" /><span className="h-2 w-2 rounded-full bg-emerald-400" />
          </div>
          <pre className="font-mono text-[10.5px] leading-[18px] text-emerald-300">
            {laptopCode.map((line, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.3 }}>
                <span className="mr-3 select-none text-slate-500">{i + 1}</span>{line}
              </motion.div>
            ))}
            <span className="ml-6 inline-block h-3 w-1.5 animate-blink bg-emerald-300 align-middle" />
          </pre>
        </div>
      </div>
      <div className="relative -mx-4 h-3 rounded-b-2xl bg-gradient-to-b from-slate-300 to-slate-400 shadow-lg dark:from-slate-600 dark:to-slate-800">
        <span className="absolute left-1/2 top-0 h-1 w-16 -translate-x-1/2 rounded-b-md bg-slate-500/50" />
      </div>
    </div>
  );
}

// Laptop + HP jadi satu adegan
export default function DevScene() {
  return (
    <div className="relative mx-auto h-[470px] w-[480px] origin-top scale-[0.72] sm:scale-100 -mb-32 sm:mb-0">
      <div className="absolute left-0 top-0"><LaptopCode /></div>
      <div className="absolute bottom-0 right-0"><PhoneCode /></div>
      {sceneChips.map((c, i) => (
        <motion.span key={c.name} animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4 + i, delay: i * 0.5 }}
          className="absolute rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs shadow-md"
          style={{ left: c.l, top: c.t }}>{c.name}</motion.span>
      ))}
    </div>
  );
}