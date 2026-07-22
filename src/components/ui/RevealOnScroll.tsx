import type { ReactNode } from 'react';
import { motion, type Variants } from 'framer-motion';
import { fadeInUp } from '@/animations/variants';

interface RevealOnScrollProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  /** Lower values re-trigger more eagerly; 0.2 means "20% of the element is visible". */
  amount?: number;
}

/**
 * Wraps content in a `whileInView` animation. `viewport.once` is true so
 * sections don't visually reset every time they're scrolled past again —
 * that reads as buggy, not premium.
 */
export function RevealOnScroll({
  children,
  variants = fadeInUp,
  className,
  delay = 0,
  amount = 0.2,
}: RevealOnScrollProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
