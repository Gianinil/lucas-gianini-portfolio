import { Briefcase, Code, GraduationCap } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { Card } from '@/components/ui/Card';
import { EXPERIENCE } from '@/data/experience';
import type { ExperienceItem } from '@/types';
import { fadeInUp } from '@/animations/variants';

const TYPE_ICON: Record<ExperienceItem['type'], typeof Briefcase> = {
  work: Briefcase,
  education: GraduationCap,
  project: Code,
};

export function Experience() {
  return (
    <Section
      id="experiencia"
      eyebrow="Trajetória"
      title="Experiência & formação"
      subtitle="Uma linha do tempo dos projetos e marcos que moldaram como eu trabalho hoje."
    >
      <ol className="relative mx-auto max-w-2xl border-l border-zinc-200 pl-8 dark:border-zinc-800">
        {EXPERIENCE.map((item, index) => {
          const Icon = TYPE_ICON[item.type];
          return (
            <li key={item.id} className="relative pb-12 last:pb-0">
              <RevealOnScroll variants={fadeInUp} delay={index * 0.05}>
                <span className="border-accent-500 absolute -left-[calc(2rem+9px)] flex h-[18px] w-[18px] items-center justify-center rounded-full border-2 bg-white dark:bg-zinc-950">
                  <span className="bg-accent-500 h-2 w-2 rounded-full" />
                </span>

                <Card className="p-5 sm:p-6" hoverable={false}>
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <Icon className="text-accent-500 h-4 w-4" aria-hidden="true" />
                      <h3 className="font-display text-base font-semibold text-zinc-900 sm:text-lg dark:text-zinc-50">
                        {item.role}
                      </h3>
                    </div>
                    <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">{item.period}</span>
                  </div>
                  <p className="text-accent-600 dark:text-accent-400 mt-1 text-sm font-medium">{item.organization}</p>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{item.description}</p>

                  {item.highlights && item.highlights.length > 0 && (
                    <ul className="mt-3 space-y-1.5">
                      {item.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  )}
                </Card>
              </RevealOnScroll>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
