export default function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              © {new Date().getFullYear()} Gereja Harmoni. Semua hak cipta dilindungi.
            </p>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Iman. Harapan. Kasih.
            </p>
          </div>
          <nav className="flex flex-wrap gap-4 text-sm text-zinc-600 dark:text-zinc-300">
            <a href="#home" className="hover:text-zinc-900 dark:hover:text-white">Beranda</a>
            <a href="#bible" className="hover:text-zinc-900 dark:hover:text-white">Alkitab</a>
            <a href="#giving" className="hover:text-zinc-900 dark:hover:text-white">Persembahan</a>
            <a href="#account" className="hover:text-zinc-900 dark:hover:text-white">Akun</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
