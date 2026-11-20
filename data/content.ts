export type Lang = "id" | "en";
type L = Record<Lang, string>;

export const profile = {
  name: "Angelica Regina Irvan",
  email: "angelicareginairvan16@gmail.com",
  linkedin: "https://www.linkedin.com/in/angelicareginairvan/",
  // ✏️ Opsional: tambah github: "https://github.com/username-kamu"
};

export const skills: { group: L; items: string[] }[] = [
  { group: { id: "Mobile", en: "Mobile" }, items: ["Flutter", "Kotlin", "Jetpack Compose", "Java"] },
  { group: { id: "Web", en: "Web" }, items: ["HTML", "JavaScript", "TypeScript", "PHP"] },
  { group: { id: "Data & Backend", en: "Data & Backend" }, items: ["Python"] },
  { group: { id: "Database", en: "Database" }, items: ["MySQL", "Oracle SQL"] },
  { group: { id: "Desain", en: "Design" }, items: ["Figma", "Canva", "Adobe Illustrator"] },
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
  Python: dev("python"),
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
  slug?: string;                        // nama URL + nama folder gambar, contoh: "new-bsb"
  tagline?: L;                          // (tidak dipakai lagi di halaman detail, boleh dihapus)
  features?: L[];                       // daftar fitur (centang)
  youtube?: string;                     // OPSIONAL: ID video YouTube saja, contoh: "dQw4w9WgXcQ"
  shots?: string[];                     // OPSIONAL: galeri otomatis geser, contoh: ["/projects/slug/shot-1.png"]
  shotsVariant?: "web" | "mobile";      // web = 16:10 (default), mobile = 9:19.5
  image?: string;                       // cover kartu beranda DAN gambar di samping judul detail (4:3, satu gambar untuk keduanya)
  hero?: string;                        // opsional: isi hanya jika ingin gambar detail berbeda dari cover (4:3)
  link?: string;                        // link demo / GitHub / Figma
};

// Pakai slug kalau ada; kalau tidak, dibuat otomatis dari judul
export const slugOf = (p: Project) =>
  p.slug ?? p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// ✏️ Proyek TERBARU di paling atas. Salin satu blok { ... } untuk menambah proyek.
export const projects: Project[] = [
  {
    title: "New BSB Mobile Banking",
    slug: "new-bsb",
    desc: {
      id: "Aplikasi mobile banking Bank Sumsel Babel yang dibangun native dengan Kotlin dan Jetpack Compose. Sudah masuk tahap production dengan fitur login, transfer, dan mutasi rekening.",
      en: "A Bank Sumsel Babel mobile banking app built natively with Kotlin and Jetpack Compose. Already in production with login, transfer, and account statement features.",
    },
    tags: ["Kotlin", "Jetpack Compose", "Mobile"],
    features: [
      { id: "Login yang aman", en: "Secure login" },
      { id: "Transfer antar rekening", en: "Account transfers" },
      { id: "Mutasi rekening", en: "Account statements" },
      { id: "Terus dikembangkan, fitur baru menyusul", en: "Actively developed, more features coming" },
    ],
    shotsVariant: "mobile",
    // ✏️ Aktifkan baris di bawah satu per satu setelah filenya ada di public/projects/new-bsb/
    image: "/projects/new-bsb/cover.png",
    shots: ["/projects/new-bsb/shot-1.png", "/projects/new-bsb/shot-2.png", "/projects/new-bsb/shot-3.png", "/projects/new-bsb/shot-4.png"],
    youtube: "https://youtu.be/hTY4CcDYsi4?si=ds6QGK8VMul93PWU",
  },
  {
    title: "Catatan dan Analisis Kinerja Pegawai",
    slug: "kinerja-pegawai",
    desc: {
      id: "Platform digital untuk mencatat, menganalisis, dan memantau kinerja pegawai, lengkap dengan backoffice untuk admin cabang.",
      en: "A digital platform for recording, analyzing, and monitoring employee performance, with a backoffice for branch admins.",
    },
    tags: ["Backend", "Website", "Backoffice"],
    features: [
      { id: "Dashboard ringkasan kinerja per kantor cabang", en: "Performance summary dashboard per branch office" },
      { id: "Form aspek penilaian dengan sub-aspek dan poin indikator", en: "Evaluation aspect forms with sub-aspects and indicator points" },
      { id: "Sebaran unit kerja cabang", en: "Branch work unit distribution" },
      { id: "Periode evaluasi kinerja yang dapat dikelola", en: "Manageable evaluation periods" },
    ],
    // image: "/projects/kinerja-pegawai/cover.png",
    // shots: ["/projects/kinerja-pegawai/shot-1.png", "/projects/kinerja-pegawai/shot-2.png", "/projects/kinerja-pegawai/shot-3.png", "/projects/kinerja-pegawai/shot-4.png"],
  },
  {
    title: "Helpdesk Track – Sistem ETL & Dashboard Monitoring",
    slug: "track-etl",
    desc: {
      id: "Program yang mengambil data tiket helpdesk dari sebuah API, membersihkannya, lalu menampilkannya di dashboard web berisi grafik, peringkat petugas, dan lainnya.",
      en: "A program that pulls helpdesk ticket data from an API, cleans it, and shows it on a web dashboard with charts, agent rankings, and more.",
    },
    tags: ["Python", "HTML", "ETL"],
    features: [
      { id: "Mengambil data tiket helpdesk dari API", en: "Pulls helpdesk ticket data from an API" },
      { id: "Pembersihan dan transformasi data (ETL)", en: "Data cleaning and transformation (ETL)" },
      { id: "Grafik monitoring tiket", en: "Ticket monitoring charts" },
      { id: "Peringkat kinerja petugas", en: "Agent performance ranking" },
    ],
    image: "/projects/track-etl/cover.png",
    // shots: ["/projects/track-etl/shot-1.png", "/projects/track-etl/shot-2.png", "/projects/track-etl/shot-3.png"],
  },
  {
    title: "Redesign Aplikasi Mobile Banking",
    slug: "redesign-mobile-banking",
    desc: {
      id: "Mendesain ulang fitur dan UI/UX aplikasi mobile perbankan dengan Flutter sesuai kebutuhan bisnis, termasuk debugging, testing, dan optimasi.",
      en: "Redesigned features and UI/UX of a mobile banking app in Flutter to match business needs, including debugging, testing, and optimization.",
    },
    tags: ["Flutter", "UI/UX", "Mobile"],
    features: [
      { id: "Redesign beranda dan menu utama", en: "Redesigned home and main menu" },
      { id: "Alur login dan transaksi lebih sederhana", en: "Simpler login and transaction flow" },
      { id: "Debugging, testing, dan optimasi performa", en: "Debugging, testing, and performance tuning" },
      { id: "Dokumentasi alur fitur dan struktur kode", en: "Documented feature flows and code structure" },
    ],
    shotsVariant: "mobile",
    image: "/projects/redesign-mobile-banking/cover.png",
    // shots: ["/projects/redesign-mobile-banking/shot-1.png", "/projects/redesign-mobile-banking/shot-2.png", "/projects/redesign-mobile-banking/shot-3.png"],
  },
  {
    title: "Sistem Informasi KPU (Mobile)",
    slug: "kpu-mobile",
    desc: {
      id: "Sistem informasi KPU berbasis aplikasi mobile.",
      en: "A mobile-based information system for KPU (election commission).",
    },
    tags: ["Android", "Firebase"],
    shotsVariant: "mobile",
  },
  {
    title: "Arsip SK Piutang Pajak (BAPENDA)",
    slug: "arsip-sk-bapenda",
    desc: {
      id: "Aplikasi web pengarsipan SK penghapusan dan pengurangan piutang pajak; membantu digitalisasi lebih dari 100 arsip.",
      en: "Web app for archiving tax receivable write-off decrees; helped digitize 100+ archives.",
    },
    tags: ["Web", "PHP", "MySQL"],
  },
  {
    title: "Pendaftaran SMK Jalur Prestasi",
    slug: "pendaftaran-smk",
    desc: {
      id: "Aplikasi web pendaftaran SMK di Palembang melalui jalur prestasi.",
      en: "Web app for vocational high school admissions via the achievement track in Palembang.",
    },
    tags: ["Web", "PHP", "MySQL"],
  },
  {
    title: "Pendaftaran Pekan Olahraga POLSRI (POP)",
    slug: "pop-polsri",
    desc: {
      id: "Sistem informasi pendaftaran Pekan Olahraga POLSRI berbasis web.",
      en: "Web-based registration system for the POLSRI sports week.",
    },
    tags: ["Web", "Laravel"],
  },
  {
    title: "Sistem Informasi Pramuka PRASDUPA",
    slug: "prasdupa",
    desc: {
      id: "Sistem informasi organisasi Pramuka PRASDUPA berbasis web.",
      en: "Web-based information system for the PRASDUPA scout organization.",
    },
    tags: ["Web"],
  },
  {
    title: "Robot Penghindar Hambatan",
    slug: "robot-penghindar-hambatan",
    desc: { id: "Robot yang mendeteksi dan menghindari rintangan secara otomatis.", en: "A robot that detects and avoids obstacles automatically." },
    tags: ["Embedded", "Hardware"],
  },
  {
    title: "Go Laundry & Basis Data Rental Online",
    slug: "go-laundry",
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
    email: "Kirim email", old: "Portofolio lama", view: "Lihat detail", cv: "Unduh CV", stats: ["Proyek", "Sertifikat BNSP"], nowT: "Sedang dikerjakan", now: "Magang Mobile Application & Technology di Bank Sumsel Babel: membangun dan menyempurnakan aplikasi mobile banking dengan Kotlin.", back: "Kembali ke proyek", overview: "Ringkasan", featT: "Fitur utama", techT: "Teknologi yang dipakai", videoT: "Video demo", shotsT: "Tampilan aplikasi", play: "Putar video demo", next: "Proyek berikutnya", repo: "Buka tautan proyek",
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
    email: "Send email", old: "Previous portfolio", view: "View details", cv: "Download CV", stats: ["Projects", "BNSP certificates"], nowT: "Currently", now: "Mobile Application & Technology intern at Bank Sumsel Babel: building and refining a mobile banking app with Kotlin.", back: "Back to projects", overview: "Overview", featT: "Key features", techT: "Technologies used", videoT: "Demo video", shotsT: "App screens", play: "Play demo video", next: "Next project", repo: "Open project link",
  },
};
