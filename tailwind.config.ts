import type { Config } from "tailwindcss";
const v = (n: string) => `rgb(var(--${n}) / <alpha-value>)`;
const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // Warna semantik (berubah otomatis di mode malam) + palet hijau/biru bertingkat (emerald, teal, sky, blue bawaan Tailwind)
      colors: {
        bg: v("bg"), surface: v("surface"), ink: v("ink"), muted: v("muted"), brand: v("brand"), onbrand: v("onbrand"),
        line: "rgb(var(--ink) / 0.12)",
        mint: { 200: "#BBF7D0", 300: "#86EFAC", 400: "#4ADE80" },
        navy: { 700: "#1E3A8A", 800: "#14306B", 900: "#0B1F4D" },
      },
      fontFamily: { sans: ["var(--font-sans)", "system-ui", "sans-serif"], mono: ["var(--font-mono)", "monospace"] },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-14px)" } },
        marquee: { to: { transform: "translateX(-50%)" } },
        blink: { "50%": { opacity: "0" } },
      },
      animation: { float: "float 6s ease-in-out infinite", marquee: "marquee 28s linear infinite", blink: "blink 1s step-end infinite" },
    },
  },
  plugins: [],
};
export default config;
