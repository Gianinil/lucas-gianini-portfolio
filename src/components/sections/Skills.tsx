import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { TechIcon } from '@/components/ui/TechIcon';
import { SKILLS, SKILL_CATEGORY_LABELS } from '@/data/skills';
import type { Skill, SkillCategory } from '@/types';
import { fadeInUp, staggerContainer } from '@/animations/variants';

const CATEGORY_ORDER: SkillCategory[] = ['frontend', 'backend', 'database', 'tools', 'cloud', 'devops'];

export function Skills() {
  const grouped = CATEGORY_ORDER.map((category) => ({
    category,
    skills: SKILLS.filter((skill) => skill.category === category),
  })).filter((group) => group.skills.length > 0);

  return (
    <Section
      id="skills"
      eyebrow="Stack"
      title="Skills & tecnologias"
      subtitle="Ferramentas que uso no dia a dia, organizadas por camada — do front-end à operação."
    >
      <div className="space-y-12">
        {grouped.map((group) => (
          <div key={group.category}>
            <h3 className="mb-5 text-sm font-semibold tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
              {SKILL_CATEGORY_LABELS[group.category]}
            </h3>
            <motion.div
              variants={staggerContainer(0.06)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
            >
              {group.skills.map((skill) => (
                <SkillTile key={skill.name} skill={skill} />
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function SkillTile({ skill }: { skill: Skill }) {
  return (
    <motion.div variants={fadeInUp}>
      <Card className="flex flex-col gap-3 p-4">
        <div className="flex items-center gap-2.5">
          <TechIcon name={skill.icon} className="h-5 w-5 shrink-0 text-zinc-700 dark:text-zinc-300" />
          <span className="truncate text-sm font-medium text-zinc-800 dark:text-zinc-200">{skill.name}</span>
        </div>
        <div
          className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800"
          role="progressbar"
          aria-label={`Proficiência em ${skill.name}`}
          aria-valuenow={skill.level}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <motion.div
            className="from-accent-500 h-full rounded-full bg-gradient-to-r to-cyan-400"
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          />
        </div>
      </Card>
    </motion.div>
  );
}
