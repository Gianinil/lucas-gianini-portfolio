import { clsx, type ClassValue } from 'clsx';

/** Thin wrapper around clsx so class-merging reads the same everywhere. */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}
