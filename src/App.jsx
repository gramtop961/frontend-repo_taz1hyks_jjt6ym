import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Updates from './components/Updates';

function Divider() {
  return (
    <div className="relative my-14">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-zinc-500/20 to-transparent h-px" />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-black dark:text-zinc-100 selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-black">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(60rem_30rem_at_50%_-10%,rgba(0,0,0,0.08),transparent)] dark:bg-[radial-gradient(60rem_30rem_at_50%_-10%,rgba(255,255,255,0.08),transparent)]" />
      <Header />

      <main className="relative z-0 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14 pb-20">
        <div className="pt-6">
          <Hero />
        </div>
        <Divider />
        <Features />
        <Divider />
        <Updates />
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">© {new Date().getFullYear()} Gereja Iman & Kasih. Hak cipta dilindungi.</p>
          <div className="flex items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white">Kebijakan Privasi</a>
            <span className="opacity-30">•</span>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white">Ketentuan</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
