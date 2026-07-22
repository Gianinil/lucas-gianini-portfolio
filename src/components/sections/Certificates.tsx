import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { CERTIFICATES } from '@/data/certificates';
import { fadeInUp, staggerContainer } from '@/animations/variants';

export function Certificates() {
  if (CERTIFICATES.length === 0) return null;

  return (
    <Section
      id="certificados"
      eyebrow="Certificados"
      title="Formação complementar"
      subtitle="Cursos e certificações que sustentam a prática do dia a dia."
    >
      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {CERTIFICATES.map((cert) => (
          <motion.div key={cert.id} variants={fadeInUp}>
            <Card className="flex h-full flex-col gap-3 p-5">
              <div className="bg-accent-500/10 text-accent-500 flex h-10 w-10 items-center justify-center rounded-xl">
                <Award className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-base font-semibold text-zinc-900 dark:text-zinc-50">{cert.name}</h3>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                  {cert.issuer} · {cert.date}
                </p>
              </div>
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent-600 dark:text-accent-400 inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
                >
                  Ver credencial <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              )}
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
