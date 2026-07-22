import type { ReactNode } from 'react';
import { Container } from '@/components/ui/Container';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { fadeInUp } from '@/animations/variants';
import { cn } from '@/utils/cn';

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

/** Standard section shell: id anchor for the nav, eyebrow/title/subtitle header, consistent vertical rhythm. */
export function Section({ id, eyebrow, title, subtitle, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn('scroll-mt-24 py-24 sm:py-28 lg:py-32', className)}
      aria-labelledby={`${id}-heading`}
    >
      <Container>
        <RevealOnScroll variants={fadeInUp} className="mx-auto mb-14 max-w-2xl text-center sm:mb-16">
          {eyebrow && (
            <span className="text-accent-500 mb-4 inline-block font-mono text-sm font-medium tracking-wide">
              {eyebrow}
            </span>
          )}
          <h2
            id={`${id}-heading`}
            className="font-display text-3xl font-semibold tracking-tight text-balance text-zinc-900 sm:text-4xl dark:text-zinc-50"
          >
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-base text-pretty text-zinc-600 sm:text-lg dark:text-zinc-400">{subtitle}</p>
          )}
        </RevealOnScroll>
        {children}
      </Container>
    </section>
  );
}
