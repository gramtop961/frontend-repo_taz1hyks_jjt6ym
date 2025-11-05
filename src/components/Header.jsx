import { Home, Book, Heart, User } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/60 dark:bg-black/40 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <motion.a
          href="#"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 font-semibold tracking-tight text-xl"
        >
          <span className="inline-block h-8 w-8 rounded-md bg-gradient-to-br from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400" />
          <span>Gereja Harmoni</span>
        </motion.a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-300">
          <a href="#home" className="hover:text-zinc-900 dark:hover:text-white inline-flex items-center gap-2">
            <Home size={16} /> Beranda
          </a>
          <a href="#bible" className="hover:text-zinc-900 dark:hover:text-white inline-flex items-center gap-2">
            <Book size={16} /> Alkitab
          </a>
          <a href="#giving" className="hover:text-zinc-900 dark:hover:text-white inline-flex items-center gap-2">
            <Heart size={16} /> Persembahan
          </a>
          <a href="#account" className="hover:text-zinc-900 dark:hover:text-white inline-flex items-center gap-2">
            <User size={16} /> Akun
          </a>
        </nav>

        <div className="md:hidden">
          <button className="inline-flex items-center justify-center rounded-md px-3 py-2 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800">
            Menu
          </button>
        </div>
      </div>
    </header>
  );
}
