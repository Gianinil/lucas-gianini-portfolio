import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { ProjectCard } from '@/components/sections/projects/ProjectCard';
import { ProjectFilters } from '@/components/sections/projects/ProjectFilters';
import { ProjectModal } from '@/components/sections/projects/ProjectModal';
import { PROJECTS } from '@/data/projects';
import type { Project, ProjectCategory } from '@/types';
import { staggerContainer } from '@/animations/variants';

const ALL_CATEGORIES = Array.from(new Set(PROJECTS.flatMap((project) => project.categories))) as ProjectCategory[];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'all'>('all');
  const [search, setSearch] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    const query = search.trim().toLowerCase();

    return PROJECTS.filter((project) => {
      const matchesCategory = activeCategory === 'all' || project.categories.includes(activeCategory);
      const matchesSearch =
        query.length === 0 ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <Section
      id="projetos"
      eyebrow="Projetos"
      title="O que eu já construí"
      subtitle="Uma seleção de projetos reais e alguns espaços reservados para o que vem por aí — filtre por tecnologia ou busque pelo nome."
    >
      <ProjectFilters
        categories={ALL_CATEGORIES}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        search={search}
        onSearchChange={setSearch}
      />

      {filteredProjects.length > 0 ? (
        <motion.div
          layout
          variants={staggerContainer(0.08)}
          initial="hidden"
          animate="visible"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onLearnMore={setSelectedProject} />
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <p className="py-16 text-center text-zinc-500 dark:text-zinc-400">
          Nenhum projeto encontrado para essa busca. Tente outro termo ou categoria.
        </p>
      )}

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </Section>
  );
}
