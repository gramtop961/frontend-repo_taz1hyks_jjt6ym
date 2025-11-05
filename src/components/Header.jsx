import { useState } from 'react';
import { Menu, X, Home, Book, Calendar, CreditCard, Settings, User } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: 'Beranda', icon: Home },
    { name: 'Renungan', icon: Book },
    { name: 'Jadwal', icon: Calendar },
    { name: 'Persembahan', icon: CreditCard },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/30 dark:bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9 rounded-xl bg-gradient-to-br from-zinc-200 to-zinc-50 dark:from-zinc-900 dark:to-zinc-800 border border-white/10 shadow-inner" />
            <div className="text-left">
              <p className="text-sm uppercase tracking-widest text-zinc-600 dark:text-zinc-400">Gereja Digital</p>
              <h1 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">Iman & Kasih</h1>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map(({ name, icon: Icon }) => (
              <a key={name} href="#" className="group inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors">
                <Icon className="h-4 w-4 text-zinc-500 group-hover:text-zinc-900 dark:text-zinc-400 dark:group-hover:text-white transition-colors" />
                <span>{name}</span>
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <button className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:bg-white/20 transition">
              <User className="h-4 w-4" /> Masuk
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 text-white px-3 py-2 text-sm font-medium dark:bg-white dark:text-black hover:opacity-90 transition">
              <Settings className="h-4 w-4" /> Admin
            </button>
          </div>

          <button aria-label="Open menu" className="md:hidden inline-flex items-center rounded-lg p-2 border border-white/10" onClick={() => setOpen(true)}>
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="ml-auto h-full w-80 max-w-[85%] bg-white dark:bg-zinc-950 border-l border-white/10 shadow-xl p-6 flex flex-col">
            <div className="flex items-center justify-between">
              <div className="text-left">
                <p className="text-xs uppercase tracking-widest text-zinc-600 dark:text-zinc-400">Gereja Digital</p>
                <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Iman & Kasih</h2>
              </div>
              <button aria-label="Close menu" className="rounded-lg p-2 border border-white/10" onClick={() => setOpen(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6 space-y-2">
              {navItems.map(({ name, icon: Icon }) => (
                <a key={name} href="#" className="flex items-center gap-3 rounded-xl px-3 py-3 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100/60 dark:hover:bg-white/5 transition">
                  <Icon className="h-5 w-5 text-zinc-500" />
                  <span className="text-base">{name}</span>
                </a>
              ))}
            </div>

            <div className="mt-auto grid grid-cols-2 gap-2 pt-6">
              <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:bg-white/20 transition">
                <User className="h-4 w-4" /> Masuk
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-zinc-900 text-white px-3 py-2 text-sm font-medium dark:bg-white dark:text-black hover:opacity-90 transition">
                <Settings className="h-4 w-4" /> Admin
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
