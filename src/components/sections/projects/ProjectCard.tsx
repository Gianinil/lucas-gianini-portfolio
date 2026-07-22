import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import type { Project } from '@/types';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { scaleIn } from '@/animations/variants';

const STATUS_LABEL: Record<Project['status'], string> = {
  production: 'Em produção',
  'in-progress': 'Em desenvolvimento',
  concluded: 'Concluído',
  archived: 'Arquivado',
};

const STATUS_TONE: Record<Project['status'], 'success' | 'accent' | 'neutral' | 'warning'> = {
  production: 'success',
  'in-progress': 'accent',
  concluded: 'neutral',
  archived: 'warning',
};

const MAX_VISIBLE_TAGS = 4;

interface ProjectCardProps {
  project: Project;
  onLearnMore: (project: Project) => void;
}

export function ProjectCard({ project, onLearnMore }: ProjectCardProps) {
  const visibleTags = project.tags.slice(0, MAX_VISIBLE_TAGS);
  const remainingTags = project.tags.length - visibleTags.length;

  return (
    <motion.div layout variants={scaleIn} initial="hidden" animate="visible" exit="hidden" className="h-full">
      <Card className="flex h-full flex-col">
        <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
          <img
            src={project.image}
            alt=""
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 right-3">
            <Badge tone={STATUS_TONE[project.status]}>{STATUS_LABEL[project.status]}</Badge>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-4 p-6">
          <div>
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-display text-lg font-semibold text-zinc-900 dark:text-zinc-50">{project.title}</h3>
              <span className="shrink-0 font-mono text-xs text-zinc-400 dark:text-zinc-500">{project.year}</span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{project.description}</p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {visibleTags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
            {remainingTags > 0 && <Badge>+{remainingTags}</Badge>}
          </div>

          <div className="mt-auto flex items-center justify-between pt-2">
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Repositório de ${project.title} no GitHub`}
                  className="hover:text-accent-500 text-zinc-500 transition-colors dark:text-zinc-400"
                >
                  <SiGithub className="h-[18px] w-[18px]" aria-hidden="true" />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Ver deploy de ${project.title}`}
                  className="hover:text-accent-500 text-zinc-500 transition-colors dark:text-zinc-400"
                >
                  <ExternalLink className="h-[18px] w-[18px]" aria-hidden="true" />
                </a>
              )}
            </div>
            <button
              type="button"
              onClick={() => onLearnMore(project)}
              className="hover:text-accent-500 focus-visible:ring-accent-500 text-sm font-medium text-zinc-700 underline-offset-4 transition-colors hover:underline focus-visible:ring-2 focus-visible:outline-none dark:text-zinc-300"
            >
              Saiba mais
            </button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
