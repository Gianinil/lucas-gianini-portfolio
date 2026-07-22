import type { SocialLink } from '@/types';
import { withBase } from '@/utils/asset';

/**
 * Placeholders — replace every href below with your real profiles before
 * deploying. Keeping them centralized here means the Contact section,
 * Footer, and Hero CTAs all update from one place.
 */
export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'github',
    label: 'GitHub',
    href: 'https://github.com/Gianinil',
    icon: 'github',
  },
  {
    platform: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/lucasgianini01',
    icon: 'linkedin',
  },
  {
    platform: 'instagram',
    label: 'Instagram',
    href: 'https://instagram.com/lukotag',
    icon: 'instagram',
  },
  {
    platform: 'email',
    label: 'E-mail',
    href: 'mailto:lucasgianini2006@gmail.com',
    icon: 'email',
  },
  {
    platform: 'whatsapp',
    label: 'WhatsApp',
    href: 'https://wa.me/44999162330',
    icon: 'whatsapp',
  },
  {
    platform: 'resume',
    label: 'Currículo (PDF)',
    href: withBase('resume.pdf'),
    icon: 'resume',
  },
];
