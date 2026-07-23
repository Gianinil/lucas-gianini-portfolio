import type { NavLink } from '@/types';

/**
 * Update these three values before deploying — they drive the hero copy,
 * every meta tag in index.html (kept in sync by hand, since this is a
 * static SPA with no server-side templating), and the JSON-LD schema.
 */
export const SITE = {
  name: 'Lucas Gianini',
  role: 'Analista de Sistemas',
  tagline: 'Full Stack Development · React, TypeScript & .NET',
  description:
    'Desenvolvedor Full Stack focado em construir produtos web rápidos, acessíveis e bem arquitetados do front-end ao back-end.',
  url: 'https://gianinil.github.io/lucas-gianini-portfolio/',
  locale: 'pt-BR',
  keywords: [
    'Lucas Gianini',
    'Analista de Sistemas',
    'Desenvolvedor Front-End',
    'Full Stack Developer',
    'React',
    'TypeScript',
    '.NET',
    'Portfólio',
  ],
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certificados', href: '#certificados' },
  { label: 'Contato', href: '#contato' },
];

/** Shared easing curve — used everywhere motion needs to feel "premium" rather than linear. */
export const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;

export const BREAKPOINTS = {
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;
