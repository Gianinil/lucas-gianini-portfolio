import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'header' | 'footer';
}

/** Consistent max-width + gutter used by every section, including ultrawide screens. */
export function Container({ children, className, as: Tag = 'div' }: ContainerProps) {
  return <Tag className={cn('mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-10', className)}>{children}</Tag>;
}
