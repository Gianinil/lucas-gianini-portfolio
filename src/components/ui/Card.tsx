import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hoverable?: boolean;
}

/** Glass-panel card used across Projects, Skills, and Certificates — one visual language for every "card". */
export function Card({ children, className, hoverable = true, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/70 backdrop-blur-sm transition-all duration-300 dark:border-zinc-800/80 dark:bg-zinc-900/40',
        hoverable &&
          'hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-900/5 dark:hover:border-zinc-700 dark:hover:shadow-black/20',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
