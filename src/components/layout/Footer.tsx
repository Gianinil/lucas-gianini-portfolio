import { ArrowUp } from 'lucide-react';
import { SITE } from '@/constants';
import { SOCIAL_LINKS } from '@/data/social';
import { Container } from '@/components/ui/Container';
import { TechIcon } from '@/components/ui/TechIcon';
import { scrollToTarget } from '@/utils/scroll';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200/80 py-10 dark:border-zinc-800/80">
      <Container className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          <span className="font-medium text-zinc-700 dark:text-zinc-300">{SITE.name}</span> · &copy; {year} · Todos os
          direitos reservados.
        </p>

        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.filter((link) => link.platform !== 'resume').map((link) => (
            <a
              key={link.platform}
              href={link.href}
              target={link.platform === 'email' ? undefined : '_blank'}
              rel="noreferrer"
              aria-label={link.label}
              className="hover:text-accent-500 text-zinc-500 transition-colors dark:text-zinc-400"
            >
              <TechIcon name={link.icon} className="h-[18px] w-[18px]" />
            </a>
          ))}

          <button
            type="button"
            onClick={() => scrollToTarget('#hero', { offset: 0 })}
            aria-label="Voltar ao topo"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition-colors hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-zinc-50"
          >
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      </Container>
    </footer>
  );
}
