type Props = {
  src?: string;
  alt: string;
  index?: number;      // angka latar saat gambar belum ada
  scatter?: boolean;   // true = tambah 2 bulatan kecil acak (untuk kartu)
  pad?: string;        // padding di sekeliling gambar (kelas Tailwind)
  clip?: boolean;      // true = potong di tepi (kartu), false = menyatu dengan halaman (hero)
  className?: string;
};

// Satu tampilan untuk cover kartu dan gambar di samping judul: rasio 4:3, gambar utuh (tidak terpotong).
// Latar mengikuti tema (putih saat terang, gelap saat gelap), bukan warna solid.
// Bulatan gradasi lembut hanya muncul kalau gambar sudah ada; kalau belum, latar bersih dengan angka.
export default function ProjectArt({ src, alt, index, scatter = false, clip = true, pad = "p-9", className = "" }: Props) {
  return (
    <div className={`relative isolate aspect-[4/3] ${clip ? "overflow-hidden bg-surface" : ""} ${className}`}>
      {src ? (
        <>
          <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
            <div className="absolute left-1/2 top-1/2 h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-emerald-300/35 via-teal-200/25 to-sky-400/35 blur-3xl dark:from-emerald-500/15 dark:via-teal-500/10 dark:to-sky-500/20" />
            {scatter && (
              <>
                <div className="absolute -left-10 -top-10 h-[36%] w-[36%] rounded-full bg-emerald-200/40 blur-2xl dark:bg-emerald-400/10" />
                <div className="absolute -bottom-10 -right-8 h-[40%] w-[40%] rounded-full bg-sky-300/35 blur-2xl dark:bg-sky-400/10" />
              </>
            )}
          </div>
          {/* padding menjaga gambar tetap utuh saat di-zoom ketika kartu di-hover */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} className={`h-full w-full object-contain ${pad} transition duration-700 ease-out group-hover:scale-105`} />
        </>
      ) : (
        index !== undefined && (
          <span className="absolute inset-0 grid place-items-center text-8xl font-black text-ink/10" aria-hidden>
            {String(index + 1).padStart(2, "0")}
          </span>
        )
      )}
    </div>
  );
}