# Portfólio Pessoal — Design Spec

Data: 2026-09-14
Autor: José Pedro Cunha do Amaral (via Claude Code)

## Objetivo

Site portfólio pessoal para José Pedro Cunha do Amaral, desenvolvedor
fullstack (ênfase em backend), formado em Engenharia de Software pela
UTFPR-CP, para apresentar formação, experiência profissional e
projetos.

## Stack e arquitetura

- React 18 + Vite + TypeScript
- React Router para navegação multi-página
- Tailwind CSS para estilização
- Deploy alvo: Vercel (conectado ao repositório GitHub; o deploy em si
  é feito pelo usuário conectando a conta Vercel, não faz parte do
  escopo de implementação)

### Estrutura de pastas

```
src/
  components/   # Navbar, Footer, Layout, Card, Timeline, etc. (reutilizáveis)
  pages/        # Home, Sobre, Projetos, Experiencia, Contato
  data/         # profile.ts — todo o conteúdo real centralizado
  App.tsx       # define as rotas
```

Conteúdo textual (nome, links, projetos, experiências) fica
centralizado em `src/data/profile.ts`, separado dos componentes
visuais — os componentes de página são apresentacionais e consomem
esses dados.

### Rotas

- `/` — Home
- `/sobre` — Sobre
- `/projetos` — Projetos
- `/experiencia` — Experiência
- `/contato` — Contato

Navbar fixa/sticky com os 5 links, responsiva com menu hambúguer no
mobile.

## Conteúdo por página

### Home

Hero simples: nome, título de apresentação ("Desenvolvedor Fullstack |
Backend"), call-to-action para as páginas de Projetos e Contato. Sem
mais conteúdo além disso.

### Sobre

- Formação: Engenharia de Software, UTFPR-CP (formado)
- Motivação: resolver problemas por meio de soluções
  web/software/app
- Área de interesse: desenvolvimento, com aprofundamento em fullstack
  e principalmente backend
- Linguagens: C#, JavaScript, TypeScript, Java
- Ferramentas/frameworks: NestJS, Angular, React

### Experiência (timeline, 3 entradas)

1. **Forlogic** (Cornélio Procópio) — 4º semestre do curso. Turma de
   formação de 300h: front-end em HTML/CSS/JS, back-end em C# .NET.
2. **CLAMOM** (empresa de móveis) — 7º e 8º semestre. Estágio em
   desenvolvimento fullstack: Node.js com NestJS e Angular, banco de
   dados MySQL, Docker, RabbitMQ, entre outras ferramentas.
3. **CLAMOM** — atual. Continua na empresa como PJ, na mesma função de
   dev fullstack.

### Projetos (3 cards: nome, descrição, tecnologias, link do repo)

1. **TCC — Sistema de RH / Hora Extra com Chatbot IA**
   Solução web para ponto com cálculo de horas extras e integração
   com IA local. Tecnologias: NestJS, Angular.
   Link: https://github.com/JosePCAmaral/TCC1-SistemaRHHoraExtraChatBoatIa
2. **Sistema de Venda de Ingressos**
   Link: https://github.com/JosePCAmaral/Sistema_de_venda_de_ingressos
3. **Operação Curiosidade**
   Front-end desenvolvido durante o treinamento na Forlogic (sem
   back-end).
   Link: https://github.com/JosePCAmaral/Operacao-Curiosidade

### Contato

Links diretos para:
- GitHub: https://github.com/JosePCAmaral
- LinkedIn: https://www.linkedin.com/in/joseamaraldev10/
- Instagram: https://www.instagram.com/_jpamarall/
- WhatsApp: (43) 99927-3855
- E-mail: joseamaralb04@gmail.com

## Visual

Tema escuro, minimalista, dev-focused:
- Fundo quase preto (ex: `#0a0a0a` / `#0d1117`)
- Texto claro, alto contraste
- Um único acento de cor (a definir durante implementação — ex.
  verde-terminal ou azul)
- Tipografia limpa (mono ou sans para títulos, sans para corpo)
- Pouca decoração, foco em espaçamento e hierarquia visual

## Testes

Projeto pequeno e majoritariamente apresentacional. Sem suite de
testes automatizados — validação manual via `npm run dev`, revisando
cada página e breakpoint (mobile/desktop) no navegador antes de
considerar o trabalho concluído.

## Deploy

Build estático via `npm run build` (Vite). Deploy no Vercel conectado
ao repositório GitHub. Configuração do projeto para deploy é escopo da
implementação; a conexão da conta Vercel ao repositório é feita pelo
usuário.

## Fora de escopo

- Blog ou CMS
- Testes automatizados
- Multilíngue (apenas português)
- Formulário de contato funcional (apenas links diretos)
