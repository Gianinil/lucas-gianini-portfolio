import type { Variants } from 'framer-motion';
import { EASE_PREMIUM } from '@/constants';

/**
 * Shared Framer Motion variants. Keeping these centralized keeps every
 * section's "reveal on scroll" feel consistent instead of each component
 * inventing its own timing.
 */

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: EASE_PREMIUM } },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_PREMIUM } },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_PREMIUM } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: EASE_PREMIUM } },
};

export const blurIn: Variants = {
  hidden: { opacity: 0, filter: 'blur(8px)', y: 12 },
  visible: { opacity: 1, filter: 'blur(0px)', y: 0, transition: { duration: 0.7, ease: EASE_PREMIUM } },
};

export const staggerContainer = (staggerChildren = 0.12, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});

export const revealMaskVariants: Variants = {
  hidden: { y: '100%' },
  visible: { y: '0%', transition: { duration: 0.9, ease: EASE_PREMIUM } },
};
