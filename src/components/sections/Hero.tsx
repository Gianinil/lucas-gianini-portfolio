import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Download, Mail } from 'lucide-react';
import { SITE, EASE_PREMIUM } from '@/constants';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { RevealText } from '@/components/ui/RevealText';
import { HeroBackground } from '@/components/sections/HeroBackground';
import { HeroVisual } from '@/components/sections/HeroVisual';
import { scrollToTarget } from '@/utils/scroll';
import { SOCIAL_LINKS } from '@/data/social';

const resumeLink = SOCIAL_LINKS.find((link) => link.platform === 'resume');

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-16 sm:pt-[72px]"
      aria-label="Introdução"
    >
      <HeroBackground />

      <Container className="grid items-center gap-16 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_PREMIUM }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200/80 bg-white/60 px-4 py-1.5 text-sm text-zinc-600 backdrop-blur-sm dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:text-zinc-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Disponível para novas oportunidades
          </motion.div>

          <h1 className="font-display text-4xl leading-[1.05] font-semibold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl xl:text-7xl dark:text-zinc-50">
            <RevealText as="span" text={SITE.name} className="block" />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_PREMIUM, delay: 0.5 }}
            className="font-display text-accent-500 mt-4 text-xl font-medium sm:text-2xl"
          >
            {SITE.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_PREMIUM, delay: 0.6 }}
            className="mx-auto mt-5 max-w-xl text-base text-pretty text-zinc-600 sm:text-lg lg:mx-0 dark:text-zinc-400"
          >
            {SITE.description} Hoje construo produtos com{' '}
            <strong className="font-medium text-zinc-800 dark:text-zinc-200">React e TypeScript</strong> no front-end e{' '}
            <strong className="font-medium text-zinc-800 dark:text-zinc-200">.NET</strong> no back-end, sempre com
            atenção a performance, acessibilidade e detalhes de UX.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_PREMIUM, delay: 0.7 }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start"
          >
            <Button
              href="#projetos"
              size="lg"
              icon={<ArrowRight className="h-4 w-4" />}
              onClick={(e) => {
                e.preventDefault();
                scrollToTarget('#projetos', { offset: -80 });
              }}
            >
              Ver Projetos
            </Button>
            <Button
              href="#contato"
              variant="secondary"
              size="lg"
              icon={<Mail className="h-4 w-4" />}
              onClick={(e) => {
                e.preventDefault();
                scrollToTarget('#contato', { offset: -80 });
              }}
            >
              Entrar em Contato
            </Button>
            <Button
              href={resumeLink?.href ?? '#contato'}
              variant="ghost"
              size="lg"
              icon={<Download className="h-4 w-4" />}
              download
            >
              Download CV
            </Button>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <HeroVisual />
        </motion.div>
      </Container>

      <motion.button
        type="button"
        onClick={() => scrollToTarget('#sobre', { offset: -72 })}
        aria-label="Rolar para a próxima seção"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-zinc-400 transition-colors hover:text-zinc-700 focus-visible:outline-none sm:flex dark:text-zinc-600 dark:hover:text-zinc-300"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-xs font-medium tracking-wide">Scroll</span>
        <ArrowDown className="h-4 w-4" aria-hidden="true" />
      </motion.button>
    </section>
  );
}
