import { Search } from 'lucide-react';
import type { ProjectCategory } from '@/types';
import { cn } from '@/utils/cn';

const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  frontend: 'Front-end',
  fullstack: 'Full Stack',
  backend: 'Back-end',
  mobile: 'Mobile',
  desktop: 'Desktop',
  automation: 'Automação',
};

interface ProjectFiltersProps {
  categories: ProjectCategory[];
  activeCategory: ProjectCategory | 'all';
  onCategoryChange: (category: ProjectCategory | 'all') => void;
  search: string;
  onSearchChange: (value: string) => void;
}

export function ProjectFilters({
  categories,
  activeCategory,
  onCategoryChange,
  search,
  onSearchChange,
}: ProjectFiltersProps) {
  return (
    <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
      <div
        className="flex flex-wrap justify-center gap-2 sm:justify-start"
        role="group"
        aria-label="Filtrar projetos por tecnologia"
      >
        <FilterPill label="Todos" active={activeCategory === 'all'} onClick={() => onCategoryChange('all')} />
        {categories.map((category) => (
          <FilterPill
            key={category}
            label={CATEGORY_LABELS[category]}
            active={activeCategory === category}
            onClick={() => onCategoryChange(category)}
          />
        ))}
      </div>

      <label className="relative w-full sm:w-64">
        <span className="sr-only">Buscar projetos</span>
        <Search
          className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-zinc-400"
          aria-hidden="true"
        />
        <input
          type="search"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Buscar por nome ou tecnologia…"
          className="focus:border-accent-500 focus-visible:ring-accent-500 w-full rounded-full border border-zinc-200 bg-white/60 py-2.5 pr-4 pl-10 text-sm text-zinc-900 backdrop-blur-sm transition-colors placeholder:text-zinc-400 focus:outline-none focus-visible:ring-2 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-100 dark:placeholder:text-zinc-500"
        />
      </label>
    </div>
  );
}

function FilterPill({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        'focus-visible:ring-accent-500 rounded-full border px-4 py-1.5 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none',
        active
          ? 'border-zinc-900 bg-zinc-900 text-white dark:border-zinc-50 dark:bg-zinc-50 dark:text-zinc-900'
          : 'border-zinc-200 text-zinc-600 hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-zinc-50',
      )}
    >
      {label}
    </button>
  );
}
