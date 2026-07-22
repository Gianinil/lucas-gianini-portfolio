import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const INTERACTIVE_SELECTOR = 'a, button, [role="button"], input, textarea, [data-cursor-hover]';

/**
 * Custom two-layer cursor (dot + lagging ring). Only mounts on devices with
 * a real mouse (`pointer: fine`) and when motion isn't reduced — on touch
 * devices this component renders nothing, so the OS cursor/tap behavior is
 * untouched.
 */
export function CustomCursor() {
  const isFinePointer = useMediaQuery('(pointer: fine)');
  const prefersReducedMotion = useReducedMotion();
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 260, damping: 26, mass: 0.4 });
  const ringY = useSpring(y, { stiffness: 260, damping: 26, mass: 0.4 });

  const enabled = isFinePointer && !prefersReducedMotion;

  useEffect(() => {
    if (!enabled) return;

    document.documentElement.classList.add('custom-cursor-active');

    function handleMove(event: MouseEvent) {
      x.set(event.clientX);
      y.set(event.clientY);
      if (!isVisible) setIsVisible(true);
    }

    function handleOver(event: MouseEvent) {
      const target = event.target as HTMLElement;
      setIsHovering(Boolean(target.closest(INTERACTIVE_SELECTOR)));
    }

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseover', handleOver);

    return () => {
      document.documentElement.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseover', handleOver);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="bg-accent-500 pointer-events-none fixed top-0 left-0 z-[100] h-1.5 w-1.5 rounded-full"
        style={{ x, y, opacity: isVisible ? 1 : 0, translateX: '-50%', translateY: '-50%' }}
      />
      <motion.div
        aria-hidden="true"
        className="border-accent-500/60 pointer-events-none fixed top-0 left-0 z-[100] rounded-full border"
        style={{
          x: ringX,
          y: ringY,
          opacity: isVisible ? 1 : 0,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{ width: isHovering ? 56 : 28, height: isHovering ? 56 : 28, borderWidth: isHovering ? 1.5 : 1 }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
