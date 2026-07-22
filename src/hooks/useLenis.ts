import { useEffect } from 'react';
import Lenis from 'lenis';
import { setLenisInstance } from '@/utils/scroll';
import { useReducedMotion } from '@/hooks/useReducedMotion';

/**
 * Mounted once at the App root. Skips smooth-scroll entirely when the user
 * prefers reduced motion — native scrolling is the more accessible default
 * in that case, not just a lesser version of the effect.
 */
export function useLenis(): void {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    setLenisInstance(lenis);

    let frameId: number;
    function raf(time: number) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }
    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      setLenisInstance(null);
      lenis.destroy();
    };
  }, [prefersReducedMotion]);
}
