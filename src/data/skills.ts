import type { Skill } from '@/types';

/**
 * `level` is a self-assessment (1-100) rendered as a subtle proficiency bar —
 * review every number here honestly before publishing. Icons are resolved
 * by key in `TechIcon.tsx`, so adding a skill only requires a matching case
 * there if the key is new.
 */
export const SKILLS: Skill[] = [
  // Frontend
  { name: 'React', icon: 'react', category: 'frontend', level: 90 },
  { name: 'TypeScript', icon: 'typescript', category: 'frontend', level: 88 },
  { name: 'JavaScript', icon: 'javascript', category: 'frontend', level: 90 },
  { name: 'Tailwind CSS', icon: 'tailwind', category: 'frontend', level: 85 },
  { name: 'HTML5 & CSS3', icon: 'html5', category: 'frontend', level: 92 },
  { name: 'Framer Motion', icon: 'framer', category: 'frontend', level: 75 },
  { name: 'React Native / Expo', icon: 'react', category: 'frontend', level: 78 },

  // Backend
  { name: 'C# / .NET', icon: 'dotnet', category: 'backend', level: 75 },
  { name: 'ASP.NET Core', icon: 'dotnet', category: 'backend', level: 40 },
  { name: 'Node.js', icon: 'nodejs', category: 'backend', level: 60 },
  { name: 'Python', icon: 'python', category: 'backend', level: 65 }, // TODO: ajuste pro seu nível real

  // Database
  { name: 'Entity Framework Core', icon: 'ef', category: 'database', level: 82 },
  { name: 'SQL Server', icon: 'sqlserver', category: 'database', level: 80 },
  { name: 'PostgreSQL', icon: 'postgresql', category: 'database', level: 70 },

  // Tools
  { name: 'Git & GitHub', icon: 'github', category: 'tools', level: 90 },
  { name: 'VS Code', icon: 'vscode', category: 'tools', level: 95 },
  { name: 'Figma', icon: 'figma', category: 'tools', level: 65 },

  // Cloud
  { name: 'Vercel', icon: 'vercel', category: 'cloud', level: 75 },

  // DevOps
  { name: 'GitHub Actions', icon: 'githubactions', category: 'devops', level: 70 },
  { name: 'Docker', icon: 'docker', category: 'devops', level: 60 },
];

export const SKILL_CATEGORY_LABELS: Record<Skill['category'], string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Banco de Dados',
  tools: 'Ferramentas',
  cloud: 'Cloud',
  devops: 'DevOps',
};
