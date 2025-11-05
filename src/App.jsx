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
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent dark:via-zinc-800" />
        <Features />
        <Updates />
      </main>
      <footer className="border-t border-black/5 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-zinc-600 dark:text-zinc-400">
          © {new Date().getFullYear()} Gereja Harmoni. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
