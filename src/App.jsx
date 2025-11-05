import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Updates from './components/Updates';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <Header />
      <main>
        <Hero />
        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent dark:via-zinc-800" />
        <Features />
        <Updates />

        {/* Anchor targets so navbar links work even before those pages are built */}
        <section id="bible" className="py-16 sm:py-20 border-t border-black/5 dark:border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Alkitab</h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-300">
              Pembaca Alkitab interaktif akan hadir di sini. Untuk sekarang, bagian ini adalah jangkar navigasi agar tautan bekerja.
            </p>
          </div>
        </section>

        <section id="giving" className="py-16 sm:py-20 border-t border-black/5 dark:border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Persembahan</h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-300">
              Alur QRIS Midtrans akan terintegrasi di sini. Sementara ini, gunakan bagian ini sebagai jangkar untuk tautan di navigasi.
            </p>
          </div>
        </section>

        <section id="account" className="py-16 sm:py-20 border-t border-black/5 dark:border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Akun</h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-300">
              Fitur login dan profil akan ditambahkan di tahap berikutnya. Area ini memastikan tautan navigasi tidak rusak.
            </p>
          </div>
        </section>
      </main>
      <footer className="border-t border-black/5 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-zinc-600 dark:text-zinc-400">
          © {new Date().getFullYear()} Gereja Harmoni. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
