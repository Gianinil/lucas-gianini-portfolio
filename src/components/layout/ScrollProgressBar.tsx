import { motion, useScroll, useSpring } from 'framer-motion';

/** Thin reading-progress indicator pinned under the navbar; scaleX driven by scroll progress. */
export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 220, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      style={{ scaleX }}
      className="from-accent-400 via-accent-500 fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r to-cyan-400"
      aria-hidden="true"
    />
  );
}
