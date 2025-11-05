import { Calendar, Book, CreditCard, Shield, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Jadwal & Acara',
    desc: 'Lihat jadwal ibadah, persekutuan, dan event komunitas terkini.',
    icon: Calendar,
    badge: 'Aktual',
  },
  {
    title: 'Pembacaan Alkitab',
    desc: 'Dukungan multi-versi (ID & EN) dari layanan API Alkitab terpercaya.',
    icon: Book,
    badge: 'Multi Versi',
  },
  {
    title: 'Persembahan QRIS',
    desc: 'Integrasi pembayaran Midtrans QRIS yang aman dan mudah.',
    icon: CreditCard,
    badge: 'Terintegrasi',
  },
  {
    title: 'Akses Berbasis Peran',
    desc: 'Autentikasi kompleks dengan hak akses yang ketat untuk admin & pengerja.',
    icon: Shield,
    badge: 'Keamanan',
  },
  {
    title: 'Tim & Pelayanan',
    desc: 'Kenali hamba Tuhan, tim pujian, dan pengurus pelayanan.',
    icon: Users,
    badge: 'Komunitas',
  },
];

export default function Features() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-zinc-900 dark:text-zinc-100">Semua yang Anda Butuhkan</h3>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">Dirancang untuk pengunjung dan dikelola oleh admin dengan kontrol penuh.</p>
          </div>
          <div className="hidden md:block text-right">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-zinc-700 dark:text-zinc-200">
              Monochrome • Elegan
            </span>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/50 dark:bg-zinc-900/50 p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="absolute right-0 top-0 m-3 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-black px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase">
                {f.badge}
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-xl border border-white/10 bg-white/40 dark:bg-white/10 p-3">
                  <f.icon className="h-5 w-5 text-zinc-800 dark:text-zinc-100" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{f.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">{f.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
