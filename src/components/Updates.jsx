import { motion } from 'framer-motion';

const updates = [
  {
    title: 'Ibadah Minggu – Seri "Hidup Dalam Kasih"',
    date: 'Minggu, 10:00 WIB',
    badge: 'Ibadah',
  },
  {
    title: 'Doa Pagi Jemaat',
    date: 'Setiap Rabu, 06:00 WIB',
    badge: 'Komunitas',
  },
  {
    title: 'Kelas Pemuridan Batch 5',
    date: 'Sabtu, 14:00 WIB',
    badge: 'Kelas',
  },
];

export default function Updates() {
  return (
    <section className="py-16 sm:py-20 border-t border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Sorotan & Pengumuman</h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-300">Tetap terbarui dengan kegiatan terbaru gereja.</p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {updates.map((u, i) => (
            <motion.article
              key={u.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="rounded-xl border border-zinc-200 dark:border-zinc-700 p-5 bg-white/70 dark:bg-zinc-900/40 backdrop-blur"
            >
              <div className="flex items-center gap-2 text-xs">
                <span className="inline-flex items-center rounded-full bg-zinc-900 text-white dark:bg-white dark:text-black px-2 py-0.5">{u.badge}</span>
                <span className="text-zinc-500 dark:text-zinc-400">{u.date}</span>
              </div>
              <h3 className="mt-2 font-semibold leading-snug">{u.title}</h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
