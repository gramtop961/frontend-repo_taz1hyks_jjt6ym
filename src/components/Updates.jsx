import { motion } from 'framer-motion';

const posts = [
  {
    title: 'Ibadah Minggu – Seri: Iman yang Bertumbuh',
    category: 'Ibadah',
    excerpt: 'Bergabunglah dalam ibadah minggu pukul 09.00 & 11.00. Tema: Bertumbuh dalam Kasih dan Kebenaran.',
    date: 'Minggu, 10 Nov 2026',
  },
  {
    title: 'Renungan Harian: Mazmur 23',
    category: 'Renungan',
    excerpt: 'Tuhan adalah Gembalaku, takkan kekurangan aku. Renungan singkat untuk menguatkan harimu.',
    date: 'Hari ini',
  },
  {
    title: 'Pengumuman Baptisan & Kelas Katekisasi',
    category: 'Pengumuman',
    excerpt: 'Pendaftaran kelas katekisasi dan baptisan telah dibuka. Informasi lengkap di admin.',
    date: 'Pekan ini',
  },
];

export default function Updates() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-zinc-900 dark:text-zinc-100">Sorotan Terbaru</h3>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">Semua konten berasal dari panel admin dan ditampilkan di sini untuk pengunjung.</p>
          </div>
          <a href="#" className="hidden md:inline-flex items-center rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:bg-white/20 transition">
            Lihat Semua
          </a>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/60 dark:bg-zinc-900/60 p-5 hover:shadow-md transition-shadow"
            >
              <div className="mb-3 flex items-center gap-2 text-xs">
                <span className="inline-flex items-center rounded-full bg-zinc-900 text-white dark:bg-white dark:text-black px-2 py-0.5 font-semibold tracking-wider uppercase">
                  {p.category}
                </span>
                <span className="text-zinc-500">{p.date}</span>
              </div>
              <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{p.title}</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{p.excerpt}</p>
              <div className="mt-4">
                <a href="#" className="text-sm font-medium text-zinc-800 dark:text-zinc-200 underline-offset-4 hover:underline">
                  Selengkapnya
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
