import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[70vh] w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-black">
        <Spline
          scene="https://prod.spline.design/1o9m3k3b3X2ySz1q/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent dark:from-black dark:via-black/50" />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="max-w-3xl"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/40 px-3 py-1 text-xs font-medium tracking-widest uppercase text-zinc-700 dark:text-zinc-200 dark:bg-white/10 dark:border-white/10 backdrop-blur">
                Gereja • Web3 • 2026
              </span>
              <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight text-zinc-900 dark:text-zinc-100">
                Ibadah yang Lebih Dekat, Informasi yang Lebih Jelas.
              </h2>
              <p className="mt-4 text-lg text-zinc-700 dark:text-zinc-300">
                Platform informasi gereja modern untuk jemaat dan pengunjung. Terintegrasi jadwal, renungan, persembahan QRIS, dan konten yang dikelola tim admin.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button className="inline-flex items-center rounded-xl bg-zinc-900 px-5 py-3 text-white dark:bg-white dark:text-black hover:opacity-90 transition font-medium">
                  Mulai Jelajah
                </button>
                <button className="inline-flex items-center rounded-xl border border-white/10 bg-white/10 px-5 py-3 text-zinc-900 dark:text-zinc-100 hover:bg-white/20 transition font-medium">
                  Lihat Jadwal Ibadah
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
