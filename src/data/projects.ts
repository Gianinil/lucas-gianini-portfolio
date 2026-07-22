import type { Project } from '@/types';
import { withBase } from '@/utils/asset';

/**
 * Real projects first, placeholders last. The three featured projects below
 * are based on actual work — double-check descriptions, tags, and links
 * before publishing, and add screenshots to `/public/projects/`.
 *
 * The entries marked PLACEHOLDER are scaffolding from the brief (landing
 * pages / API REST / dashboard) — replace or delete them once you have
 * real projects to show, don't ship the site with fake case studies.
 */
export const PROJECTS: Project[] = [
  {
    id: 'aurionsys',
    title: 'AurionSYS',
    description:
      'ERP multi-tenant para gestão de lojas de vestuário: cadastro, estoque, vendas e financeiro em uma base .NET moderna.',
    longDescription:
      'Sistema de gestão empresarial (ERP) construído do zero em .NET, com arquitetura multi-tenant real (isolamento de dados por loja via filtros globais do EF Core), pensado para escalar para múltiplas filiais sem duplicar infraestrutura.',
    image: withBase('projects/aurionsys.svg'),
    tags: ['.NET', 'C#', 'Entity Framework Core', 'SQL Server', 'Multi-tenant'],
    categories: ['fullstack', 'backend'],
    githubUrl: 'https://github.com/Gianinil/aurionsys',
    liveUrl: undefined,
    status: 'in-progress',
    featured: true,
    year: 2026,
  },
  {
    id: 'via-sancta',
    title: 'Via Sancta',
    description:
      'Aplicativo mobile para a comunidade católica, com orações, leituras litúrgicas e uma experiência de uso serena e acessível.',
    longDescription:
      'App mobile construído com Expo e React Native, priorizando desempenho em dispositivos de entrada, tipografia legível e uma UI que reforça o tom contemplativo do conteúdo.',
    image: withBase('projects/via-sancta.svg'),
    tags: ['React Native', 'Expo', 'TypeScript'],
    categories: ['mobile'],
    githubUrl: 'https://github.com/Gianinil/via-sancta',
    liveUrl: undefined,
    status: 'in-progress',
    featured: true,
    year: 2026,
  },
  {
    id: 'tcc-sistema-comercial',
    title: 'Sistema Comercial (TCC)',
    description:
      'Sistema de gestão comercial — vendas, estoque e clientes — desenvolvido como Trabalho de Conclusão de Curso.',
    longDescription:
      'Projeto acadêmico de TCC com foco em modelagem de dados, regras de negócio de vendas/estoque e documentação completa do processo de desenvolvimento.',
    image: withBase('projects/tcc-sistema-comercial.svg'),
    // TODO: ajuste as tags para a stack real usada no TCC (linguagem, banco, framework).
    tags: ['Sistema de Gestão', 'Banco de Dados', 'Engenharia de Software'],
    categories: ['fullstack'],
    githubUrl: 'https://github.com/Gianinil/tcc-sistema-comercial',
    liveUrl: undefined,
    status: 'concluded',
    featured: false,
    year: 2025,
  },
  {
    id: 'landing-page-placeholder',
    title: 'Landing Page — Produto SaaS',
    description:
      'PLACEHOLDER: substitua por uma landing page real construída com foco em conversão, performance e SEO.',
    image: withBase('projects/placeholder-landing.svg'),
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    categories: ['frontend'],
    githubUrl: 'https://github.com/Gianinil/landing-page',
    liveUrl: 'https://exemplo.com',
    status: 'archived',
    featured: false,
    year: 2026,
  },
  {
    id: 'api-rest-placeholder',
    title: 'API REST — Serviço de Pedidos',
    description:
      'PLACEHOLDER: substitua por uma API real com autenticação, documentação OpenAPI e testes automatizados.',
    image: withBase('projects/placeholder-api.svg'),
    tags: ['Node.js', 'Express', 'PostgreSQL', 'Docker'],
    categories: ['backend'],
    githubUrl: 'https://github.com/Gianinil/api-rest',
    liveUrl: undefined,
    status: 'archived',
    featured: false,
    year: 2026,
  },
  {
    id: 'dashboard-placeholder',
    title: 'Dashboard Analítico',
    description:
      'PLACEHOLDER: substitua por um dashboard real com visualização de dados em tempo real e filtros avançados.',
    image: withBase('projects/placeholder-dashboard.svg'),
    tags: ['React', 'TypeScript', 'Data Viz'],
    categories: ['frontend', 'automation'],
    githubUrl: 'https://github.com/Gianinil/dashboard',
    liveUrl: undefined,
    status: 'archived',
    featured: false,
    year: 2026,
  },
];
