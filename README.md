# Lucas Gianini — Portfólio

Portfólio pessoal de **Lucas Gianini**, Software Engineer / Full Stack
Developer, construído como uma single-page application estática, pensada para
recrutadores avaliarem o trabalho em segundos: hero direto, projetos reais em
destaque, stack técnica organizada e um caminho claro de contato.

Stack: **React 19 · TypeScript · Vite · Tailwind CSS v4 · Framer Motion ·
Lenis · GSAP (pontual) · React Icons / Lucide**.

> **Antes de publicar**, veja a seção [Checklist antes de publicar](#checklist-antes-de-publicar) —
> o projeto está funcional, mas vários textos e links são placeholders
> intencionais para você substituir pelos seus dados reais.

---

## Índice

- [Decisões de design](#decisões-de-design)
- [Como rodar localmente](#como-rodar-localmente)
- [Scripts disponíveis](#scripts-disponíveis)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Checklist antes de publicar](#checklist-antes-de-publicar)
- [Deploy no GitHub Pages](#deploy-no-github-pages)
- [Performance, SEO & acessibilidade](#performance-seo--acessibilidade)
- [Licença](#licença)

## Decisões de design

Algumas escolhas não estavam explícitas no briefing original e foram
resolvidas com critério de produto, documentadas aqui para não parecerem
arbitrárias:

- **Paleta**: preto/zinc (`#09090b` → `#fafafa`) como base, com um único
  acento — um roxo-azulado elétrico (`#7c6cff`) — usado com intenção, nunca
  espalhado. Ciano aparece só como segunda cor em gradientes pontuais (barras
  de progresso, glow do hero).
- **Tipografia**: **Space Grotesk** para títulos (geométrica, com
  personalidade) e **Inter** para texto corrido (altíssima legibilidade em
  qualquer tamanho). Carregadas via Google Fonts com `preconnect` +
  `display=swap`.
- **Skills + Tecnologias viraram uma seção só.** O briefing listava as duas
  separadamente, mas apresentá-las como seções distintas resultaria em duas
  grades quase idênticas de logos em sequência — repetitivo para quem rola a
  página. `Skills` cobre front-end, back-end, banco de dados, ferramentas,
  cloud e DevOps num único lugar, agrupado por categoria.
- **Experiência + Timeline também.** A seção "Experiência" já é apresentada
  como linha do tempo — não fazia sentido duplicar o conceito em duas seções.
- **GSAP é usado uma vez, de propósito** (`StatCounter.tsx`): a animação de
  contagem numérica na seção Sobre. É o cenário onde GSAP é genuinamente mais
  natural que Framer Motion, e é carregado via `import()` dinâmico — só baixa
  quando o contador entra em viewport, não pesa no bundle inicial.
- **Sem React Router.** O site é uma página só com âncoras (`#projetos`,
  `#contato`...); um roteador adicionaria peso e complexidade sem resolver
  problema nenhum aqui.
- **Formulário de contato usa `mailto:`.** Sem backend, não há como enviar
  e-mail sem expor uma API key de terceiro (Formspree, EmailJS, Web3Forms...)
  no código-fonte de um site estático. O formulário valida os campos e abre o
  cliente de e-mail do usuário já preenchido. Se você tiver uma dessas contas,
  troque a função `handleSubmit` em `src/components/sections/Contact.tsx` por
  uma chamada `fetch` real.

## Como rodar localmente

Pré-requisitos: **Node.js 20+** e npm.

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173/lucas-gianini-portfolio/` (o path
`/lucas-gianini-portfolio/` vem do `base` configurado no Vite para bater com
o GitHub Pages — veja [Deploy](#deploy-no-github-pages)).

## Scripts disponíveis

| Script                 | O que faz                                             |
| ---------------------- | ----------------------------------------------------- |
| `npm run dev`          | Servidor de desenvolvimento com HMR                   |
| `npm run build`        | Type-check (`tsc -b`) + build de produção em `dist/`  |
| `npm run preview`      | Serve o build de produção localmente para conferência |
| `npm run lint`         | ESLint (TypeScript, React Hooks, jsx-a11y)            |
| `npm run lint:fix`     | ESLint com autofix                                    |
| `npm run format`       | Formata todo o projeto com Prettier                   |
| `npm run format:check` | Verifica formatação sem alterar arquivos              |

## Estrutura do projeto

```
src/
├── animations/     # Variants do Framer Motion compartilhados entre seções
├── components/
│   ├── layout/     # Navbar, Footer, ThemeToggle, CustomCursor, etc.
│   ├── sections/   # Hero, About, Projects, Experience, Skills, Contact...
│   └── ui/         # Button, Card, Badge, Section, TechIcon — primitivos reutilizáveis
├── constants/      # Metadados do site (nome, cargo, links de navegação)
├── data/           # projects.ts, skills.ts, experience.ts, social.ts, certificates.ts
├── hooks/          # useLenis, useTheme, useActiveSection, useReducedMotion...
├── styles/         # globals.css (Tailwind v4 + tokens de design)
├── types/          # Tipos compartilhados (Project, Skill, ExperienceItem...)
└── utils/          # cn (clsx), scroll (Lenis), asset (base path do Vite)
```

Todo conteúdo editável vive em `src/data/*.ts` e `src/constants/index.ts` —
não é necessário mexer em componentes para atualizar textos, projetos ou
links.

## Checklist antes de publicar

O projeto builda, linta e roda de ponta a ponta — mas os itens abaixo são
placeholders deliberados. Busque por `SEU_USUARIO` no projeto inteiro para
não esquecer nenhum:

- [x] **URLs do GitHub** (`SITE.url`, canonical, Open Graph, Twitter Card,
      JSON-LD, sitemap, `robots.txt` e os `githubUrl` de `projects.ts`) já
      apontam para `Gianinil` / `gianinil.github.io`, batendo com o repositório
      publicado.
- [ ] **`src/data/social.ts`** — LinkedIn e Instagram ainda estão como
      `SEU_USUARIO`, e o WhatsApp como `55SEUNUMERO`.
- [ ] **`src/data/projects.ts`** — troque os `githubUrl`/`liveUrl` dos 3
      projetos reais (AurionSYS, Via Sancta, Sistema Comercial) pelos
      repositórios de verdade; ajuste as tags do TCC (`// TODO` no arquivo)
      para a stack real usada; substitua ou remova os 3 projetos placeholder
      (Landing Page, API REST, Dashboard).
- [ ] **`src/data/experience.ts`** — substitua o item `work-placeholder` por
      uma experiência real, ou remova-o.
- [ ] **`src/data/certificates.ts`** — substitua os certificados placeholder
      pelos seus, ou esvazie o array (a seção some sozinha se estiver vazia).
- [ ] **`src/components/sections/About.tsx`** — troque o bloco de foto
      placeholder (comentário `PLACEHOLDER` no arquivo) por uma
      `<img src="/profile.jpg" />` real, e adicione a imagem em `public/`.
- [ ] **`public/resume.pdf`** — está com um PDF de um parágrafo avisando que é
      placeholder; substitua pelo seu currículo real.
- [ ] **`public/og-image.svg`**, **`public/projects/*.svg`** — são capas
      geradas via SVG para não depender de imagens externas; troque por
      screenshots reais dos projetos e por uma imagem OG em PNG/JPG (a
      maioria dos crawlers de redes sociais não renderiza SVG em preview de
      link — exporte o SVG fornecido para PNG 1200×630, ex. no Figma/Photopea).

## Deploy no GitHub Pages

O repositório já vem com um workflow em
`.github/workflows/deploy.yml` que builda e publica automaticamente a cada
push em `main`, usando o GitHub Actions oficial (`actions/deploy-pages`).

1. Crie um repositório no GitHub chamado `lucas-gianini-portfolio` (ou outro
   nome — veja o passo 3).
2. `git init && git add . && git commit -m "Initial commit"` (se ainda não
   for um repositório Git) e depois `git push` para o repositório criado.
3. **Se você usar um nome de repositório diferente de
   `lucas-gianini-portfolio`**, atualize o base path nestes arquivos para
   bater com o novo nome:
   - `vite.config.ts` → `base: '/novo-nome/'`
   - `public/404.html` → variável `base`
   - `public/site.webmanifest` → `start_url` e `scope`
4. No GitHub, vá em **Settings → Pages** e selecione **Source: GitHub
   Actions**.
5. Faça um push em `main` — o workflow builda e publica sozinho. O site fica
   em `https://SEU_USUARIO.github.io/lucas-gianini-portfolio/`.

Também é possível rodar o workflow manualmente pela aba **Actions** do
GitHub (`workflow_dispatch`), sem precisar de um novo commit.

### Se o repositório for a raiz do seu GitHub Pages (`SEU_USUARIO.github.io`)

Troque `base: '/lucas-gianini-portfolio/'` por `base: '/'` em
`vite.config.ts` e ajuste os mesmos três arquivos do passo 3 para `'/'`.

## Performance, SEO & acessibilidade

- **Lazy loading** em todas as imagens de projeto (`loading="lazy"`).
- **Code-splitting**: GSAP só é baixado quando o contador da seção Sobre
  entra em viewport (chunk separado, confirmável em `npm run build`).
- **`prefers-reduced-motion`** é respeitado de ponta a ponta: desliga o
  smooth scroll (Lenis), o cursor customizado e os floats/parallax do hero.
- **Navegação por teclado**: skip link, foco visível em todos os elementos
  interativos, modal de projeto construído sobre `<dialog>` nativo (foco
  preso e Escape de graça, sem JS extra).
- **SEO**: meta tags completas, Open Graph, Twitter Card, `robots.txt`,
  `sitemap.xml`, canonical e JSON-LD (`schema.org/Person`) — todos com
  placeholders claros para o domínio real (veja o checklist acima).

Rode `npm run build && npm run preview` e audite com o Lighthouse do Chrome
DevTools antes de publicar, principalmente depois de trocar as imagens
placeholder por assets reais (fotos/screenshots pesam mais que os SVGs
gerados que vêm por padrão).

## Licença

Distribuído sob a licença MIT — veja [LICENSE](./LICENSE). O código é livre
para reuso; as informações pessoais (nome, projetos, contato) são,
obviamente, específicas de Lucas Gianini.
