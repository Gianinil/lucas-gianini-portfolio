import { motion } from 'framer-motion';

interface PageLoaderProps {
  onDone?: () => void;
}

/**
 * Brief branded splash shown only on first load (see `App.tsx`), never on
 * a second interaction — a loader that lingers reads as slow, not premium.
 */
export function PageLoader({ onDone }: PageLoaderProps) {
  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-zinc-950"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      onAnimationComplete={(definition) => {
        if (definition === 'exit') onDone?.();
      }}
      aria-hidden="true"
    >
      <motion.span
        className="font-display text-2xl font-semibold tracking-tight text-zinc-50"
        initial={{ opacity: 0, letterSpacing: '0.3em' }}
        animate={{ opacity: 1, letterSpacing: '0em' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        LG<span className="text-accent-400">.</span>
      </motion.span>
    </motion.div>
  );
}
