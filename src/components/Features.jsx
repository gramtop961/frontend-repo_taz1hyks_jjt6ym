import { Sparkles, Calendar, Radio, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Sparkles,
    title: 'Renungan Harian',
    desc: 'Bacaan singkat untuk menyalakan iman setiap hari, dengan pilihan bahasa ID & EN.',
  },
  {
    icon: Calendar,
    title: 'Jadwal Ibadah',
    desc: 'Informasi waktu ibadah Minggu, komsel, dan kelas pemuridan terbaru.',
  },
  {
    icon: Radio,
    title: 'Live & Rekaman',
    desc: 'Akses siaran langsung dan rekaman khotbah dengan satu klik.',
  },
  {
    icon: MessageSquare,
    title: 'Permohonan Doa',
    desc: 'Kirim permohonan doa dan dukungan rohani dari tim doa kami.',
  },
];

export default function Features() {
  return (
    <section className="py-16 sm:py-20 border-t border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Fitur Utama</h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-300">
            Semua yang Anda butuhkan untuk tetap terhubung dan bertumbuh.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-xl border border-zinc-200 dark:border-zinc-700 p-5 bg-white/70 dark:bg-zinc-900/40 backdrop-blur"
            >
              <div className="h-10 w-10 rounded-lg bg-zinc-900 text-white dark:bg-white dark:text-black flex items-center justify-center">
                <f.icon size={18} />
              </div>
              <h3 className="mt-4 font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
