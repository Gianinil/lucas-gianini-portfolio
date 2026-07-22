import type Lenis from 'lenis';

/**
 * Lenis lives at the App root (see `useLenis`), but the smooth-scroll target
 * is needed from the Navbar, Footer, Hero CTAs, etc. A tiny module-level
 * singleton avoids threading a ref through every intermediate component.
 */
let lenisInstance: Lenis | null = null;

export function setLenisInstance(instance: Lenis | null): void {
  lenisInstance = instance;
}

interface ScrollToOptions {
  offset?: number;
}

/** Smoothly scrolls to a hash target, or an element/selector. Falls back to native scroll if Lenis is off (reduced motion). */
export function scrollToTarget(target: string | HTMLElement, { offset = -72 }: ScrollToOptions = {}): void {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, { offset, duration: 1.1 });
    return;
  }

  const el = typeof target === 'string' ? document.querySelector(target) : target;
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
