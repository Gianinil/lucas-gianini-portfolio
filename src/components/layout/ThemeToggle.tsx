import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Ativar tema claro' : 'Ativar tema escuro'}
      aria-pressed={isDark}
      className="focus-visible:ring-accent-500 relative flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white/60 text-zinc-600 backdrop-blur-sm transition-colors hover:border-zinc-300 hover:text-zinc-900 focus-visible:ring-2 focus-visible:outline-none dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-zinc-50"
    >
      <Sun
        className="h-4 w-4 scale-100 rotate-0 transition-all duration-300 dark:scale-0 dark:-rotate-90"
        aria-hidden="true"
      />
      <Moon
        className="absolute h-4 w-4 scale-0 rotate-90 transition-all duration-300 dark:scale-100 dark:rotate-0"
        aria-hidden="true"
      />
    </button>
  );
}
