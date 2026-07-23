import type { Project } from '@/types';
import { withBase } from '@/utils/asset';

/**
 * All entries below are real projects. Images are illustrative mockups in
 * `/public/projects/` (no live screenshots yet) — drop a real screenshot in
 * that folder with the same filename to replace one whenever it's ready.
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
    status: 'concluded',
    featured: true,
    year: 2026,
  },
  {
    id: 'tcc-sistema-comercial',
    title: 'Sistema Comercial (TCC)',
    description:
      'Sistema de gestão comercial - vendas, estoque e clientes - desenvolvido como Trabalho de Conclusão de Curso.',
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
    id: 'automacao-cadastro',
    title: 'Automação de Cadastro',
    description:
      'Script em Python que lê planilhas de cadastro e preenche automaticamente o sistema interno da empresa, eliminando a digitação manual linha a linha.',
    longDescription:
      'Automação criada para acelerar o cadastro em lote no sistema interno da empresa: os dados são lidos e tratados de planilhas Excel/CSV com Pandas e openpyxl, e um script com Selenium preenche o formulário de cadastro do sistema para cada linha automaticamente.',
    image: withBase('projects/automacao-cadastro.svg'),
    tags: ['Python', 'Pandas', 'Selenium', 'openpyxl', 'RPA'],
    categories: ['automation'],
    githubUrl: undefined,
    liveUrl: undefined,
    status: 'archived',
    featured: false,
    year: 2026,
  },
  {
    id: 'landing-page-psicologo',
    title: 'Landing Page Para Psicólogo',
    description: 'Página de venda de curso para psicólogo.',
    image: withBase('projects/landing-page-psicologo.svg'),
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    categories: ['frontend'],
    githubUrl: 'https://github.com/Gianinil/curso-4-temperamentos',
    liveUrl: 'https://exemplo.com',
    status: 'archived',
    featured: false,
    year: 2026,
  },
  {
    id: 'app-trilha-tabuada',
    title: 'Trilha da Tabuada',
    description: 'Um jogo mobile para crianças com o objetivo de ensinar a matematica de uma forma divertida.',
    image: withBase('projects/trilha-tabuada.svg'),
    tags: ['React', 'TypeScript', 'Data Viz'],
    categories: ['frontend', 'mobile'],
    githubUrl: 'https://github.com/Gianinil/trilha-tabuada',
    liveUrl: undefined,
    status: 'archived',
    featured: false,
    year: 2026,
  },
];
