import { useEffect, useRef } from 'react';
import { ExternalLink, X } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import type { Project } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

/**
 * Built on the native `<dialog>` element on purpose: `showModal()` gives us
 * a real top-layer stacking context, native focus trapping, Escape-to-close
 * and `::backdrop` styling for free — far more robust than a hand-rolled
 * focus trap for the same result.
 */
export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (project) {
      if (!dialog.open) dialog.showModal();
    } else if (dialog.open) {
      dialog.close();
    }
  }, [project]);

  return (
    // Click-outside-to-dismiss is a mouse-only progressive enhancement here —
    // keyboard and screen-reader users already have two equivalent ways to
    // close the dialog (the Escape key, native to <dialog>, and the visible
    // close button below), so this doesn't need its own key handler.
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose();
      }}
      className="relative m-auto w-full max-w-lg rounded-3xl border border-zinc-200/80 bg-white p-0 text-zinc-900 shadow-2xl backdrop:bg-zinc-950/60 backdrop:backdrop-blur-sm open:animate-[modal-in_0.25s_ease-out] dark:border-zinc-800/80 dark:bg-zinc-900 dark:text-zinc-50"
      aria-labelledby="project-modal-title"
    >
      {project && (
        <div className="p-6 sm:p-8">
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar detalhes do projeto"
            className="focus-visible:ring-accent-500 absolute top-5 right-5 rounded-full p-1.5 text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-700 focus-visible:ring-2 focus-visible:outline-none dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>

          <img src={project.image} alt="" className="mb-5 aspect-[16/9] w-full rounded-xl object-cover" />

          <h3 id="project-modal-title" className="font-display text-xl font-semibold">
            {project.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-400">
            {project.longDescription ?? project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <Badge key={tag} tone="accent">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.githubUrl && (
              <Button
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
                icon={<SiGithub className="h-4 w-4" />}
                iconPosition="left"
              >
                Código-fonte
              </Button>
            )}
            {project.liveUrl && (
              <Button
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                icon={<ExternalLink className="h-4 w-4" />}
                iconPosition="left"
              >
                Ver deploy
              </Button>
            )}
          </div>
        </div>
      )}
    </dialog>
  );
}
