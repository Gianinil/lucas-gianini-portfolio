import { useEffect, useRef } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
}

/**
 * The one deliberate use of GSAP in this project: a count-up number driven
 * by direct DOM writes (no React re-renders per frame) once the stat scrolls
 * into view. Framer Motion could approximate this, but GSAP's tweened
 * numeric interpolation is the more natural tool for the job.
 */
export function StatCounter({ value, suffix = '', label }: StatCounterProps) {
  const numberRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    const numberEl = numberRef.current;
    if (!container || !numberEl) return;

    if (prefersReducedMotion) {
      numberEl.textContent = String(value);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        // Dynamically imported so the ~30kB of GSAP core only loads once a
        // stat actually scrolls into view, instead of sitting in the
        // critical bundle every visitor pays for on first paint.
        import('gsap').then(({ default: gsap }) => {
          const counter = { val: 0 };
          gsap.to(counter, {
            val: value,
            duration: 1.6,
            ease: 'power2.out',
            onUpdate: () => {
              numberEl.textContent = Math.round(counter.val).toString();
            },
          });
        });
      },
      { threshold: 0.4 },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [value, prefersReducedMotion]);

  return (
    <div ref={containerRef} className="text-center">
      <p className="font-display text-3xl font-semibold text-zinc-900 sm:text-4xl dark:text-zinc-50">
        <span ref={numberRef}>0</span>
        {suffix}
      </p>
      <p className="mt-1.5 text-sm text-zinc-500 dark:text-zinc-400">{label}</p>
    </div>
  );
}
