import { motion } from 'framer-motion';
import { TechIcon } from '@/components/ui/TechIcon';
import { EASE_PREMIUM } from '@/constants';

const CODE_LINES = [
  { text: 'const engineer = {', indent: 0 },
  { text: "name: 'Lucas Gianini',", indent: 1 },
  { text: "role: 'Software Engineer',", indent: 1 },
  { text: "stack: ['React', 'TypeScript', '.NET'],", indent: 1 },
  { text: 'focus: () => performance + design,', indent: 1 },
  { text: '};', indent: 0 },
];

const FLOATING_ICONS = [
  { name: 'react', style: { top: '-8%', left: '-10%' }, delay: 0 },
  { name: 'typescript', style: { top: '18%', right: '-12%' }, delay: 0.15 },
  { name: 'dotnet', style: { bottom: '-6%', left: '8%' }, delay: 0.3 },
  { name: 'tailwind', style: { bottom: '10%', right: '-8%' }, delay: 0.45 },
];

/** A code-editor mockup rather than a stock illustration — reinforces "this person builds software" at a glance. */
export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:mx-0">
      {FLOATING_ICONS.map((item) => (
        <motion.div
          key={item.name}
          className="absolute z-10 hidden h-12 w-12 items-center justify-center rounded-2xl border border-zinc-200/80 bg-white/80 text-zinc-700 shadow-lg backdrop-blur-sm sm:flex dark:border-zinc-800/80 dark:bg-zinc-900/80 dark:text-zinc-200"
          style={item.style}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: [0, -8, 0] }}
          transition={{
            opacity: { duration: 0.6, delay: 0.6 + item.delay },
            y: { duration: 5 + item.delay * 4, repeat: Infinity, ease: 'easeInOut', delay: item.delay },
          }}
        >
          <TechIcon name={item.name} className="h-5 w-5" />
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: EASE_PREMIUM, delay: 0.3 }}
        className="relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/70 shadow-2xl shadow-zinc-900/10 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-900/70 dark:shadow-black/40"
      >
        <div className="flex items-center gap-1.5 border-b border-zinc-200/80 px-4 py-3 dark:border-zinc-800/80">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          <span className="ml-3 font-mono text-xs text-zinc-400">portfolio.ts</span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-zinc-600 sm:text-sm dark:text-zinc-300">
          {CODE_LINES.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.08 }}
              style={{ paddingLeft: `${line.indent * 1.25}rem` }}
            >
              <span className="text-accent-500">{line.text}</span>
            </motion.div>
          ))}
        </pre>
      </motion.div>
    </div>
  );
}
