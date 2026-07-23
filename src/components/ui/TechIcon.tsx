import type { IconType } from 'react-icons';
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiFramer,
  SiNodedotjs,
  SiPostgresql,
  SiGithub,
  SiFigma,
  SiVercel,
  SiGithubactions,
  SiDocker,
  SiInstagram,
  SiWhatsapp,
  SiPython,
} from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa6';
import { TbBrandAzure, TbBrandVscode } from 'react-icons/tb';
import { DiDotnet, DiMsqlServer } from 'react-icons/di';
import { Mail, FileText, Database, Code2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/**
 * Single source of truth mapping the icon `key` strings used in
 * `data/skills.ts` and `data/social.ts` to actual icon components. Add a
 * case here whenever a new key is introduced in the data files.
 */
const REACT_ICON_MAP: Record<string, IconType> = {
  react: SiReact,
  typescript: SiTypescript,
  javascript: SiJavascript,
  tailwind: SiTailwindcss,
  html5: SiHtml5,
  framer: SiFramer,
  nodejs: SiNodedotjs,
  postgresql: SiPostgresql,
  github: SiGithub,
  figma: SiFigma,
  vercel: SiVercel,
  githubactions: SiGithubactions,
  docker: SiDocker,
  instagram: SiInstagram,
  whatsapp: SiWhatsapp,
  linkedin: FaLinkedin,
  azure: TbBrandAzure,
  vscode: TbBrandVscode,
  dotnet: DiDotnet,
  sqlserver: DiMsqlServer,
  python: SiPython,
};

const LUCIDE_ICON_MAP: Record<string, LucideIcon> = {
  email: Mail,
  resume: FileText,
  ef: Database,
};

interface TechIconProps {
  name: string;
  className?: string;
}

export function TechIcon({ name, className = 'h-5 w-5' }: TechIconProps) {
  const ReactIcon = REACT_ICON_MAP[name];
  if (ReactIcon) return <ReactIcon className={className} aria-hidden="true" />;

  const LucideIconComp = LUCIDE_ICON_MAP[name];
  if (LucideIconComp) return <LucideIconComp className={className} aria-hidden="true" />;

  return <Code2 className={className} aria-hidden="true" />;
}
