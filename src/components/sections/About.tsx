import { Sparkles, Target } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { Badge } from '@/components/ui/Badge';
import { StatCounter } from '@/components/ui/StatCounter';
import { fadeInUp, scaleIn } from '@/animations/variants';

const FAVORITE_TECH = ['React', 'TypeScript', '.NET', 'Tailwind CSS', 'PostgreSQL', 'Framer Motion'];

const STATS = [
  { value: 5, suffix: '+', label: 'Projetos reais no portfólio' },
  { value: 6, suffix: '', label: 'Tecnologias no dia a dia' },
  { value: 100, suffix: '%', label: 'Foco em performance & acessibilidade' },
];

export function About() {
  return (
    <Section
      id="sobre"
      eyebrow="Sobre mim"
      title="Quem constrói o que você está vendo"
      subtitle="Um pouco da minha trajetória, como penso produto e o que me move como Analista de Sistemas."
    >
      <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <RevealOnScroll variants={scaleIn} className="mx-auto w-full max-w-xs lg:mx-0">
          <div className="relative">
            <div className="from-accent-500/20 absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br to-cyan-400/10 blur-2xl" />
            <img
              src="/profile.jpg"
              alt="Foto Lucas Gianini"
              className="aspect-square w-full rounded-3xl object-cover"
            />
          </div>
        </RevealOnScroll>

        <div className="space-y-8">
          <RevealOnScroll
            variants={fadeInUp}
            className="space-y-4 text-base leading-relaxed text-pretty text-zinc-600 sm:text-lg dark:text-zinc-400"
          >
            <p>
              Sou desenvolvedor full stack com foco em construir interfaces refinadas sem perder de vista o que sustenta
              essas interfaces: modelagem de dados sólida, APIs bem desenhadas e arquitetura que não vira dívida técnica
              em seis meses.
            </p>
            <p>
              Gosto de projetos que exigem os dois lados, hoje isso aparece em produtos como um ERP multi-tenant em
              .NET, um app mobile para uma comunidade real de usuários e um sistema comercial completo desenvolvido como
              Trabalho de Conclusão de Curso. Em todos eles, o critério é o mesmo: o código precisa ser legível daqui a um ano.
            </p>
          </RevealOnScroll>

          <RevealOnScroll variants={fadeInUp} delay={0.05}>
            <div className="grid grid-cols-3 gap-4 rounded-2xl border border-zinc-200/80 bg-white/50 py-6 dark:border-zinc-800/80 dark:bg-zinc-900/40">
              {STATS.map((stat) => (
                <StatCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll variants={fadeInUp} delay={0.1}>
            <div className="flex items-start gap-3 rounded-2xl border border-zinc-200/80 bg-white/50 p-5 dark:border-zinc-800/80 dark:bg-zinc-900/40">
              <Target className="text-accent-500 mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
              <p className="text-sm text-zinc-600 sm:text-base dark:text-zinc-400">
                <span className="font-medium text-zinc-900 dark:text-zinc-100">Objetivo atual: </span>
                atuar como Front-End, Full Stack ou Analista de Sistemas em um time que valorize produto bem feito, onde
                eu possa crescer resolvendo problemas reais de escala, performance e experiência do usuário.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll variants={fadeInUp} delay={0.15}>
            <div className="flex items-center gap-2 text-sm font-medium text-zinc-900 dark:text-zinc-100">
              <Sparkles className="text-accent-500 h-4 w-4" aria-hidden="true" />
              Tecnologias favoritas
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {FAVORITE_TECH.map((tech) => (
                <Badge key={tech} tone="accent">
                  {tech}
                </Badge>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </Section>
  );
}
