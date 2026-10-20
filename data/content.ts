export type Lang = "id" | "en";
type L = Record<Lang, string>;

export const profile = {
  name: "Angelica Regina Irvan",
  email: "angelicareginairvan16@gmail.com",
  linkedin: "https://www.linkedin.com/in/angelicareginairvan/",
  // ✏️ Opsional: tambah github: "https://github.com/username-kamu"
};

export const skills: { group: L; items: string[] }[] = [
  { group: { id: "Mobile", en: "Mobile" }, items: ["Flutter", "Kotlin", "Java"] },
  { group: { id: "Web", en: "Web" }, items: ["HTML", "JavaScript", "TypeScript", "PHP", ] },
  { group: { id: "Database", en: "Database" }, items: ["MySQL", "Oracle SQL"] },
  { group: { id: "Desain", en: "Design" }, items: ["Figma", "Canva", "Adobe Illustrator",] },
];

const dev = (n: string, v = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${n}/${n}-${v}.svg`;
const si = (n: string) => `https://cdn.simpleicons.org/${n}`;

export const skillIcons: Record<string, string> = {
  Kotlin: dev("kotlin"),
  "Jetpack Compose": si("jetpackcompose"),
  Flutter: dev("flutter"),
  Firebase: dev("firebase"),
  HTML: dev("html5"),
  CSS: dev("css3"),
  JavaScript: dev("javascript"),
  PHP: dev("php"),
  Laravel: dev("laravel"),
  Bootstrap: dev("bootstrap"),
  MySQL: dev("mysql"),
  "Oracle SQL": dev("oracle"),
  Figma: dev("figma"),
  Canva: dev("canva"),
  "Adobe Illustrator": dev("illustrator", "plain"),
  CapCut: si("capcut"),
};

export type Project = {
  title: string;
  desc: L;
  tags: string[];
  tagline?: L;
  role?: L;
  period?: L;
  features?: L[];                       // daftar fitur (centang)
  tech?: { name: string; note?: string }[];
  youtube?: string;                     // ID video YouTube saja, contoh: "dQw4w9WgXcQ"
  shots?: string[];                     // screenshot aplikasi: ["/projects/a1.png", ...]
  hero?: string;                        // gambar besar di halaman detail
  image?: string; // taruh gambar di /public/projects/nama.png lalu tulis "/projects/nama.png"
  link?: string;  // link demo / GitHub / Figma
};

// ✏️ ============ TAMBAH PROJECT KAMU DI SINI ============
// Salin satu blok { ... }, tempel di bawahnya, lalu ganti isinya.
export const slugOf = (p: Project) => p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const projects: Project[] = [
  {
    title: "Redesign Aplikasi Mobile Banking",
    desc: {
      id: "Mendesain ulang fitur dan UI/UX aplikasi mobile perbankan dengan Flutter sesuai kebutuhan bisnis, termasuk debugging, testing, dan optimasi.",
      en: "Redesigned features and UI/UX of a mobile banking app in Flutter to match business needs, including debugging, testing, and optimization.",
    },
    tags: ["Flutter", "UI/UX", "Mobile"],
    // ✏️ Contoh halaman detail lengkap. Isi sama untuk proyek lain; semua field di bawah opsional.
    tagline: { id: "Pengalaman perbankan yang lebih bersih, pintar, dan intuitif.", en: "A cleaner, smarter, more intuitive banking experience." },
    role: { id: "Mobile Developer (Magang)", en: "Mobile Developer (Intern)" },
    period: { id: "Jul 2025 – Sekarang", en: "Jul 2025 – Present" },
    features: [
      { id: "Redesign beranda dan menu utama", en: "Redesigned home and main menu" },
      { id: "Alur login dan transaksi lebih sederhana", en: "Simpler login and transaction flow" },
      { id: "Debugging, testing, dan optimasi performa", en: "Debugging, testing, and performance tuning" },
      { id: "Dokumentasi alur fitur dan struktur kode", en: "Documented feature flows and code structure" },
    ],
    tech: [{ name: "Flutter", note: "Cross-platform" }, { name: "Dart", note: "Language" }, { name: "Figma", note: "UI/UX" }],
    // youtube: "ID_VIDEO_YOUTUBE_KAMU",
    // hero: "/projects/banking-hero.png",
    // shots: ["/projects/banking-1.png", "/projects/banking-2.png", "/projects/banking-3.png"],
    // image: "/projects/banking.png",
    // link: "https://github.com/...",
  },
  {
    title: "Sistem Informasi KPU (Mobile)",
    desc: {
      id: "Sistem informasi KPU berbasis aplikasi mobile.",
      en: "A mobile-based information system for KPU (election commission).",
    },
    tags: ["Android", "Firebase"],
  },
  {
    title: "Arsip SK Piutang Pajak (BAPENDA)",
    desc: {
      id: "Aplikasi web pengarsipan SK penghapusan dan pengurangan piutang pajak; membantu digitalisasi lebih dari 100 arsip.",
      en: "Web app for archiving tax receivable write-off decrees; helped digitize 100+ archives.",
    },
    tags: ["Web", "PHP", "MySQL"],
  },
  {
    title: "Pendaftaran SMK Jalur Prestasi",
    desc: {
      id: "Aplikasi web pendaftaran SMK di Palembang melalui jalur prestasi.",
      en: "Web app for vocational high school admissions via the achievement track in Palembang.",
    },
    tags: ["Web", "PHP", "MySQL"],
  },
  {
    title: "Pendaftaran Pekan Olahraga POLSRI (POP)",
    desc: {
      id: "Sistem informasi pendaftaran Pekan Olahraga POLSRI berbasis web.",
      en: "Web-based registration system for the POLSRI sports week.",
    },
    tags: ["Web", "Laravel"],
  },
  {
    title: "Sistem Informasi Pramuka PRASDUPA",
    desc: {
      id: "Sistem informasi organisasi Pramuka PRASDUPA berbasis web.",
      en: "Web-based information system for the PRASDUPA scout organization.",
    },
    tags: ["Web"],
  },
  {
    title: "Robot Penghindar Hambatan",
    desc: { id: "Robot yang mendeteksi dan menghindari rintangan secara otomatis.", en: "A robot that detects and avoids obstacles automatically." },
    tags: ["Embedded", "Hardware"],
  },
  {
    title: "Go Laundry & Basis Data Rental Online",
    desc: {
      id: "Aplikasi Go Laundry (Visual Studio) dan model basis data rental online dengan Oracle SQL.",
      en: "Go Laundry app (Visual Studio) and an online rental database model in Oracle SQL.",
    },
    tags: ["Oracle SQL", "Desktop"],
  },
];

export const experience: { role: L; org: string; period: L; points: L[] }[] = [
  {
    role: { id: "Magang Mobile Application & Technology", en: "Mobile Application & Technology Intern" },
    org: "Bank Sumsel Babel",
    period: { id: "Jul 2025 – Sekarang", en: "Jul 2025 – Present" },
    points: [
      { id: "Redesign fitur dan UI/UX aplikasi mobile perbankan dengan Flutter.", en: "Redesigned banking mobile app features and UI/UX with Flutter." },
      { id: "Debugging, testing, dan optimasi agar aplikasi berjalan optimal.", en: "Debugged, tested, and optimized the app." },
      { id: "Berkolaborasi dengan tim backend, QA, dan UI/UX.", en: "Collaborated with backend, QA, and UI/UX teams." },
      { id: "Mendokumentasikan alur fitur, struktur kode, dan perubahan sistem.", en: "Documented feature flows, code structure, and system changes." },
    ],
  },
  {
    role: { id: "Magang", en: "Intern" },
    org: "BAPENDA Kota Palembang",
    period: { id: "Agu – Nov 2023", en: "Aug – Nov 2023" },
    points: [
      { id: "Memverifikasi data dan menyusun alur permohonan sertifikat hingga legalisasi.", en: "Verified data and mapped the certificate request flow through legalization." },
      { id: "Membantu digitalisasi lebih dari 100 arsip SK piutang pajak.", en: "Helped digitize 100+ tax receivable decrees." },
      { id: "Merancang aplikasi web pengarsipan SK berbasis web.", en: "Designed and built a web app for archiving decrees." },
    ],
  },
];

export const certs = ["Junior Mobile Programmer", "Junior Graphic Designer", "Database Programming"];

export const t = {
  id: {
    nav: ["Tentang", "Keahlian", "Proyek", "Pengalaman", "Kontak"],
    role: "Software Developer",
    hero: "Saya membangun software yang rapi, cepat, dan enak dipakai, dengan keahlian khusus di aplikasi mobile.",
    cta1: "Lihat proyek", cta2: "Hubungi saya",
    aboutT: "Tentang saya",
    about: "Saya berpengalaman mengerjakan sistem informasi untuk organisasi dan instansi, dari aplikasi mobile sampai web dan basis data. Saya teliti, proaktif, cepat beradaptasi, dan nyaman bekerja mandiri maupun dalam tim. Saya terus belajar mengikuti perkembangan teknologi.",
    skillsT: "Keahlian", projectsT: "Proyek", expT: "Pengalaman",
     aboutInfo: [
      { label: "Bahasa", value: "Indonesia (aktif), Inggris (pasif)" },
      { label: "Terbuka untuk", value: "Software, Mobile, Web" },
      { label: "Fokus", value: "Flutter & UI/UX mobile" },
    ],
    eduT: "Pendidikan & sertifikat",
    edu: "D3 Teknik Komputer, Politeknik Negeri Sriwijaya (2021–2024), IPK 3.37/4.00",
    certT: "Sertifikat kompetensi BNSP",
    contactT: "Mari bekerja sama",
    contact: "Punya peluang atau proyek? Kirim pesan, saya balas secepatnya.",
    email: "Kirim email", old: "Portofolio lama", view: "Lihat detail", cv: "Unduh CV", stats: ["Proyek", "Sertifikat BNSP", ], nowT: "Sedang dikerjakan", now: "Magang Mobile Application & Technology di Bank Sumsel Babel: membangun dan menyempurnakan aplikasi mobile banking dengan Kotlin.", back: "Kembali ke proyek", overview: "Ringkasan", techT: "Teknologi yang dipakai", videoT: "Video demo", shotsT: "Tampilan aplikasi", play: "Putar video demo", next: "Proyek berikutnya", repo: "Buka tautan proyek",
  },
  en: {
    nav: ["About", "Skills", "Projects", "Experience", "Contact"],
    role: "Software Developer",
    hero: "I build software that is clean, fast, and pleasant to use, with a special focus on mobile apps.",
    cta1: "See projects", cta2: "Contact me",
    aboutT: "About me",
    about: "I have built information systems for organizations and government agencies, from mobile apps to web and databases. I'm detail-oriented, proactive, quick to adapt, and comfortable working solo or in a team. I keep learning as technology evolves.",
    skillsT: "Skills", projectsT: "Projects", expT: "Experience",
    aboutInfo: [
      { label: "Languages", value: "Indonesian (active), English (passive)" },
      { label: "Open to", value: "Software, Mobile, Web" },
      { label: "Focus", value: "Flutter & mobile UI/UX" },
    ],
    eduT: "Education & certifications",
    edu: "D3 Computer Engineering, Politeknik Negeri Sriwijaya (2021–2024), GPA 3.37/4.00",
    certT: "BNSP competency certificates",
    contactT: "Let's work together",
    contact: "Have an opportunity or a project? Send a message and I'll reply soon.",
    email: "Send email", old: "Previous portfolio", view: "View details", cv: "Download CV", stats: ["Projects", "BNSP certificates", ], nowT: "Currently", now: "Mobile Application & Technology intern at Bank Sumsel Babel: building and refining a mobile banking app with Kotlin.", back: "Back to projects", overview: "Overview", techT: "Technologies used", videoT: "Demo video", shotsT: "App screens", play: "Play demo video", next: "Next project", repo: "Open project link",
  },
};
