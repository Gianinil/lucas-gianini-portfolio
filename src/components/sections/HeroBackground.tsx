import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

/**
 * Discreet animated backdrop: a faint grid (fades toward the edges via a
 * radial mask) plus two soft gradient blobs that drift slowly. Everything
 * here is `aria-hidden` and freezes entirely under reduced motion.
 */
export function HeroBackground() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0 opacity-[0.35] dark:opacity-[0.25]"
        style={{
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, black 40%, transparent 100%)',
          color: 'currentColor',
        }}
      />

      <motion.div
        className="bg-accent-500/20 dark:bg-accent-500/25 absolute top-[-10%] -left-1/4 h-[36rem] w-[36rem] rounded-full blur-[120px]"
        animate={prefersReducedMotion ? undefined : { x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-[10%] -right-1/4 h-[30rem] w-[30rem] rounded-full bg-cyan-400/10 blur-[120px] dark:bg-cyan-400/15"
        animate={prefersReducedMotion ? undefined : { x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
