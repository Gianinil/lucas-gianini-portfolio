import type { ExperienceItem } from '@/types';

/**
 * Reverse-chronological timeline. The `work` entry is a PLACEHOLDER — swap
 * it for a real internship/job, or remove it if you don't have one yet;
 * an empty-looking timeline is more credible than an invented one.
 */
export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'aurionsys-dev',
    role: 'Desenvolvedor Full Stack — Projeto Autoral',
    organization: 'AurionSYS',
    period: '2026 — atual',
    description:
      'Construção de um ERP multi-tenant para lojas de vestuário, do modelo de dados à interface, com foco em arquitetura escalável.',
    highlights: [
      'Modelagem multi-tenant com isolamento de dados via Entity Framework Core',
      'Build incremental em .NET, priorizando testes e organização em camadas',
    ],
    type: 'project',
  },
  {
    id: 'via-sancta-dev',
    role: 'Desenvolvedor Mobile — Projeto Autoral',
    organization: 'Via Sancta',
    period: '2026',
    description: 'Desenvolvimento de aplicativo mobile com Expo/React Native, do zero ao protótipo navegável.',
    highlights: [
      'UI mobile acessível com tipografia e contraste cuidadosamente ajustados',
      'Arquitetura preparada para publicação em lojas de aplicativo',
    ],
    type: 'project',
  },
  {
    id: 'tcc',
    role: 'Trabalho de Conclusão de Curso',
    organization: 'Sistema Comercial (TCC)',
    period: '2025',
    description:
      'Planejamento, modelagem e desenvolvimento de um sistema de gestão comercial como projeto final de curso.',
    highlights: [
      'Levantamento de requisitos e modelagem de banco de dados',
      'Documentação técnica completa do ciclo de desenvolvimento',
    ],
    type: 'education',
  },
  {
    id: 'work-placeholder',
    role: 'PLACEHOLDER — Cargo',
    organization: 'PLACEHOLDER — Empresa',
    period: '20XX — 20XX',
    description: 'Substitua por uma experiência profissional real (estágio, CLT, freelance) ou remova este item.',
    type: 'work',
  },
];
