import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8mF4rj6nzn6iAZ1S/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/70 via-white/40 to-white/90 dark:from-black/70 dark:via-black/40 dark:to-black/90" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            Gereja Harmoni
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-300">
              Iman. Harapan. Kasih.
            </span>
          </h1>
          <p className="mt-4 text-lg text-zinc-700 dark:text-zinc-300">
            Rumah bagi pertumbuhan rohani dengan ibadah yang hangat, komunitas yang peduli, dan
            pelayanan yang berdampak. Temukan renungan harian, jadwal ibadah, dan informasi kegiatan.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#bible"
              className="inline-flex items-center rounded-md bg-zinc-900 text-white dark:bg-white dark:text-black px-5 py-3 font-medium hover:opacity-90"
            >
              Baca Alkitab
            </a>
            <a
              href="#giving"
              className="inline-flex items-center rounded-md border border-zinc-300 dark:border-zinc-600 px-5 py-3 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800"
            >
              Persembahan
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
