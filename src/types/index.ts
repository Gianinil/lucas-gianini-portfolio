/**
 * Domain types shared across the app. Keeping them here (instead of inline
 * in components) means data files and components can both import a single
 * source of truth.
 */

export type ProjectCategory = 'frontend' | 'fullstack' | 'backend' | 'mobile' | 'desktop' | 'automation';

export type ProjectStatus = 'production' | 'in-progress' | 'concluded' | 'archived';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  categories: ProjectCategory[];
  githubUrl?: string;
  liveUrl?: string;
  status: ProjectStatus;
  featured?: boolean;
  year: number;
}

export type SkillCategory = 'frontend' | 'backend' | 'database' | 'tools' | 'cloud' | 'devops';

export interface Skill {
  name: string;
  icon: string;
  category: SkillCategory;
  level: number; // 1-100, used for subtle proficiency bars
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  highlights?: string[];
  type: 'work' | 'education' | 'project';
}

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  image?: string;
}

export type SocialPlatform = 'github' | 'linkedin' | 'instagram' | 'email' | 'whatsapp' | 'resume';

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  href: string;
  icon: string;
}

export interface NavLink {
  label: string;
  href: string;
}
