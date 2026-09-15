# Portfólio Pessoal Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a multi-page React portfolio site for José Pedro Cunha do Amaral, with real content (formação, experiência, projetos, contato), styled with Tailwind in a dark dev-focused theme, ready to deploy on Vercel.

**Architecture:** React 18 + Vite + TypeScript SPA using React Router for 5 routes (`/`, `/sobre`, `/projetos`, `/experiencia`, `/contato`). Content is centralized in `src/data/profile.ts` as typed data; page components are purely presentational and read from it. A shared `Layout` component wraps every route with a sticky `Navbar` and `Footer`.

**Tech Stack:** React 18, TypeScript, Vite 5, React Router 6, Tailwind CSS 3.

**Spec:** `docs/superpowers/specs/2026-09-14-portfolio-site-design.md`

## Global Constraints

- Dark theme only, built entirely from Tailwind's built-in palette: background `neutral-950`, primary text `gray-100`/`gray-300`, accent `emerald-400`. Do not introduce custom colors or a separate design token file.
- Portuguese (pt-BR) copy only — no i18n.
- No automated test framework (per spec's Testing section) — verification is via `npx tsc --noEmit` and `npm run build` (catches type/JSX errors) plus manual browser check.
- All content must come from the spec (`docs/superpowers/specs/2026-09-14-portfolio-site-design.md`) — never invent names, technologies, or descriptions not present there. If a project has no listed technologies in the spec, render nothing for that field rather than guessing.
- No contact form — Contato page is direct links only (github, linkedin, instagram, whatsapp, email).
- Every task ends with a commit.

---

### Task 1: Project scaffold and tooling

**Files:**
- Create: `package.json`
- Create: `vite.config.ts`
- Create: `tsconfig.json`
- Create: `tsconfig.node.json`
- Create: `postcss.config.js`
- Create: `tailwind.config.js`
- Create: `index.html`
- Create: `.gitignore`
- Create: `src/index.css`
- Create: `src/main.tsx`
- Create: `src/App.tsx` (temporary minimal version, replaced in Task 3)

**Interfaces:**
- Produces: a working Vite dev/build pipeline with Tailwind wired through `src/index.css`; `src/main.tsx` mounts `<App />` from `src/App.tsx` into `#root`.

- [ ] **Step 1: Create `package.json`**

```json
{
  "name": "portfolio",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.26.0"
  },
  "devDependencies": {
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.39",
    "tailwindcss": "^3.4.4",
    "typescript": "^5.5.3",
    "vite": "^5.3.1"
  }
}
```

- [ ] **Step 2: Create `vite.config.ts`**

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});
```

- [ ] **Step 3: Create `tsconfig.json`**

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

- [ ] **Step 4: Create `tsconfig.node.json`**

```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
```

- [ ] **Step 5: Create `postcss.config.js`**

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

- [ ] **Step 6: Create `tailwind.config.js`**

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

- [ ] **Step 7: Create `index.html`**

```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>José Pedro Amaral — Portfólio</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 8: Create `.gitignore`**

```
node_modules
dist
.vercel
*.local
```

- [ ] **Step 9: Create `src/index.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply bg-neutral-950 text-gray-100;
}
```

- [ ] **Step 10: Create `src/App.tsx` (temporary)**

```tsx
export function App() {
  return <div>App scaffold OK</div>;
}
```

- [ ] **Step 11: Create `src/main.tsx`**

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

- [ ] **Step 12: Install dependencies**

Run: `npm install`
Expected: installs without errors, creates `node_modules/` and `package-lock.json`.

- [ ] **Step 13: Verify build works**

Run: `npm run build`
Expected: completes with no TypeScript or Vite errors, creates `dist/`.

- [ ] **Step 14: Commit**

```bash
git add package.json package-lock.json vite.config.ts tsconfig.json tsconfig.node.json postcss.config.js tailwind.config.js index.html .gitignore src/index.css src/main.tsx src/App.tsx
git commit -m "chore: scaffold Vite + React + TS + Tailwind project"
```

---

### Task 2: Content data layer

**Files:**
- Create: `src/data/profile.ts`

**Interfaces:**
- Consumes: nothing (pure data module).
- Produces: types `Project`, `ExperienceEntry`, `Profile`, and the `profile: Profile` constant, all exported from `src/data/profile.ts`. Later tasks import `profile` and these types from this path.

- [ ] **Step 1: Create `src/data/profile.ts`**

```ts
export interface Project {
  name: string;
  description: string;
  technologies: string[];
  link: string;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Profile {
  name: string;
  title: string;
  education: string;
  about: string;
  languages: string[];
  tools: string[];
  experience: ExperienceEntry[];
  projects: Project[];
  contact: {
    github: string;
    linkedin: string;
    instagram: string;
    whatsapp: string;
    email: string;
  };
}

export const profile: Profile = {
  name: "José Pedro Cunha do Amaral",
  title: "Desenvolvedor Fullstack | Backend",
  education: "Engenharia de Software — UTFPR-CP (formado)",
  about:
    "O que mais me motiva é a possibilidade de resolver problemas reais através de soluções web, software e apps. Tenho grande interesse na área de desenvolvimento, com aprofundamento em fullstack e, principalmente, em backend.",
  languages: ["C#", "JavaScript", "TypeScript", "Java"],
  tools: ["NestJS", "Angular", "React"],
  experience: [
    {
      company: "Forlogic",
      role: "Treinamento — Front-end (HTML/CSS/JS) e Back-end (C# .NET)",
      period: "4º semestre — 300h",
      description:
        "Turma de formação em Cornélio Procópio com 300 horas de carga, cobrindo front-end com HTML, CSS e JavaScript e back-end com C# e .NET.",
    },
    {
      company: "CLAMOM",
      role: "Estagiário Fullstack",
      period: "7º e 8º semestre",
      description:
        "Estágio em desenvolvimento fullstack com Node.js, NestJS e Angular, banco de dados MySQL, Docker e RabbitMQ, entre outras ferramentas.",
    },
    {
      company: "CLAMOM",
      role: "Desenvolvedor Fullstack (PJ)",
      period: "Atual",
      description:
        "Contratado como PJ pela mesma empresa, seguindo na mesma função de desenvolvimento fullstack.",
    },
  ],
  projects: [
    {
      name: "TCC — Sistema de RH / Hora Extra com Chatbot IA",
      description:
        "Solução web de ponto com cálculo de horas extras e integração com IA local.",
      technologies: ["NestJS", "Angular"],
      link: "https://github.com/JosePCAmaral/TCC1-SistemaRHHoraExtraChatBoatIa",
    },
    {
      name: "Sistema de Venda de Ingressos",
      description: "Sistema web para venda de ingressos.",
      technologies: [],
      link: "https://github.com/JosePCAmaral/Sistema_de_venda_de_ingressos",
    },
    {
      name: "Operação Curiosidade",
      description:
        "Front-end desenvolvido durante o treinamento na Forlogic (sem back-end).",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/JosePCAmaral/Operacao-Curiosidade",
    },
  ],
  contact: {
    github: "https://github.com/JosePCAmaral",
    linkedin: "https://www.linkedin.com/in/joseamaraldev10/",
    instagram: "https://www.instagram.com/_jpamarall/",
    whatsapp: "https://wa.me/5543999273855",
    email: "joseamaralb04@gmail.com",
  },
};
```

- [ ] **Step 2: Verify typecheck passes**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/data/profile.ts
git commit -m "feat: add centralized profile content data"
```

---

### Task 3: Routing and shared layout

**Files:**
- Create: `src/components/Navbar.tsx`
- Create: `src/components/Footer.tsx`
- Create: `src/components/Layout.tsx`
- Create: `src/pages/Home.tsx` (minimal stub, filled in Task 4)
- Create: `src/pages/Sobre.tsx` (minimal stub, filled in Task 5)
- Create: `src/pages/Projetos.tsx` (minimal stub, filled in Task 7)
- Create: `src/pages/Experiencia.tsx` (minimal stub, filled in Task 6)
- Create: `src/pages/Contato.tsx` (minimal stub, filled in Task 8)
- Modify: `src/App.tsx` (replace Task 1's placeholder with real routing)

**Interfaces:**
- Consumes: `profile` from `src/data/profile.ts` (Task 2) in `Footer.tsx`.
- Produces: exported function components `Home`, `Sobre`, `Projetos`, `Experiencia`, `Contato` from `src/pages/*.tsx` (one default responsibility each — later tasks only edit the body of these, not their file location or export name), and `Layout` from `src/components/Layout.tsx` used as the route wrapper in `App.tsx`.

- [ ] **Step 1: Install react-router-dom (already in package.json from Task 1) — verify it's present**

Run: `npm ls react-router-dom`
Expected: prints the installed version (from Task 1's `package.json`). If missing, run `npm install react-router-dom@^6.26.0`.

- [ ] **Step 2: Create `src/components/Navbar.tsx`**

```tsx
import { NavLink } from "react-router-dom";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/sobre", label: "Sobre" },
  { to: "/projetos", label: "Projetos" },
  { to: "/experiencia", label: "Experiência" },
  { to: "/contato", label: "Contato" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? "text-emerald-400" : "text-gray-300 hover:text-emerald-400"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/90 backdrop-blur">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
        <NavLink to="/" className="font-mono text-lg font-semibold text-gray-100">
          JP.dev
        </NavLink>

        <button
          className="sm:hidden text-gray-300"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          <span className="mb-1 block h-0.5 w-6 bg-current" />
          <span className="mb-1 block h-0.5 w-6 bg-current" />
          <span className="block h-0.5 w-6 bg-current" />
        </button>

        <ul className="hidden sm:flex sm:gap-2">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={linkClass} end={link.to === "/"}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <ul className="border-t border-neutral-800 px-4 pb-3 sm:hidden">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={linkClass}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
```

- [ ] **Step 3: Create `src/components/Footer.tsx`**

```tsx
import { profile } from "../data/profile";

export function Footer() {
  return (
    <footer className="border-t border-neutral-800 py-6 text-center text-sm text-gray-500">
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  );
}
```

- [ ] **Step 4: Create `src/components/Layout.tsx`**

```tsx
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-950 text-gray-100">
      <Navbar />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
```

- [ ] **Step 5: Create stub page files**

`src/pages/Home.tsx`:
```tsx
export function Home() {
  return <h1 className="text-3xl font-bold text-gray-100">Home</h1>;
}
```

`src/pages/Sobre.tsx`:
```tsx
export function Sobre() {
  return <h1 className="text-3xl font-bold text-gray-100">Sobre</h1>;
}
```

`src/pages/Projetos.tsx`:
```tsx
export function Projetos() {
  return <h1 className="text-3xl font-bold text-gray-100">Projetos</h1>;
}
```

`src/pages/Experiencia.tsx`:
```tsx
export function Experiencia() {
  return <h1 className="text-3xl font-bold text-gray-100">Experiência</h1>;
}
```

`src/pages/Contato.tsx`:
```tsx
export function Contato() {
  return <h1 className="text-3xl font-bold text-gray-100">Contato</h1>;
}
```

- [ ] **Step 6: Replace `src/App.tsx` with real routing**

```tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Sobre } from "./pages/Sobre";
import { Projetos } from "./pages/Projetos";
import { Experiencia } from "./pages/Experiencia";
import { Contato } from "./pages/Contato";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/experiencia" element={<Experiencia />} />
          <Route path="/contato" element={<Contato />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
```

- [ ] **Step 7: Verify build**

Run: `npm run build`
Expected: no errors.

- [ ] **Step 8: Manual check**

Run: `npm run dev`, open the printed local URL in a browser. Confirm: navbar shows all 5 links, clicking each renders the corresponding stub heading, active link is highlighted in emerald, and on a narrow window (<640px) the links collapse behind the hamburger button and toggle open/closed on click. Stop the dev server after checking.

- [ ] **Step 9: Commit**

```bash
git add src/components/Navbar.tsx src/components/Footer.tsx src/components/Layout.tsx src/pages/Home.tsx src/pages/Sobre.tsx src/pages/Projetos.tsx src/pages/Experiencia.tsx src/pages/Contato.tsx src/App.tsx
git commit -m "feat: add routing, navbar, and page scaffolding"
```

---

### Task 4: Home page content

**Files:**
- Modify: `src/pages/Home.tsx`

**Interfaces:**
- Consumes: `profile` from `src/data/profile.ts` (`profile.name`, `profile.title`).

- [ ] **Step 1: Replace `src/pages/Home.tsx`**

```tsx
import { Link } from "react-router-dom";
import { profile } from "../data/profile";

export function Home() {
  return (
    <section className="flex min-h-[70vh] flex-col items-start justify-center gap-6">
      <p className="font-mono text-emerald-400">Olá, eu sou</p>
      <h1 className="text-4xl font-bold text-gray-100 sm:text-5xl">
        {profile.name}
      </h1>
      <h2 className="text-xl text-gray-400 sm:text-2xl">{profile.title}</h2>
      <div className="flex gap-4">
        <Link
          to="/projetos"
          className="rounded-md border border-emerald-400 px-5 py-2 font-medium text-emerald-400 transition-colors hover:bg-emerald-400 hover:text-neutral-950"
        >
          Ver projetos
        </Link>
        <Link
          to="/contato"
          className="rounded-md border border-neutral-700 px-5 py-2 font-medium text-gray-300 transition-colors hover:border-gray-400 hover:text-gray-100"
        >
          Contato
        </Link>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: no errors.

- [ ] **Step 3: Manual check**

Run: `npm run dev`, open `/`. Confirm name, title, and both buttons render and both links navigate correctly. Stop the dev server.

- [ ] **Step 4: Commit**

```bash
git add src/pages/Home.tsx
git commit -m "feat: implement Home page hero"
```

---

### Task 5: Sobre page content

**Files:**
- Modify: `src/pages/Sobre.tsx`

**Interfaces:**
- Consumes: `profile` from `src/data/profile.ts` (`profile.about`, `profile.education`, `profile.languages`, `profile.tools`).

- [ ] **Step 1: Replace `src/pages/Sobre.tsx`**

```tsx
import { profile } from "../data/profile";

export function Sobre() {
  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold text-gray-100">Sobre</h1>

      <p className="leading-relaxed text-gray-300">{profile.about}</p>

      <div>
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-emerald-400">
          Formação
        </h2>
        <p className="text-gray-300">{profile.education}</p>
      </div>

      <div>
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-emerald-400">
          Linguagens
        </h2>
        <ul className="flex flex-wrap gap-2">
          {profile.languages.map((lang) => (
            <li
              key={lang}
              className="rounded-full border border-neutral-700 px-3 py-1 text-sm text-gray-300"
            >
              {lang}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-emerald-400">
          Ferramentas e frameworks
        </h2>
        <ul className="flex flex-wrap gap-2">
          {profile.tools.map((tool) => (
            <li
              key={tool}
              className="rounded-full border border-neutral-700 px-3 py-1 text-sm text-gray-300"
            >
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: no errors.

- [ ] **Step 3: Manual check**

Run: `npm run dev`, open `/sobre`. Confirm the about text, formação, and both tag lists (languages, tools) render. Stop the dev server.

- [ ] **Step 4: Commit**

```bash
git add src/pages/Sobre.tsx
git commit -m "feat: implement Sobre page"
```

---

### Task 6: Experiência page content

**Files:**
- Create: `src/components/TimelineItem.tsx`
- Modify: `src/pages/Experiencia.tsx`

**Interfaces:**
- Consumes: `ExperienceEntry` type from `src/data/profile.ts` (Task 2), `profile.experience` array.
- Produces: `TimelineItem` component exported from `src/components/TimelineItem.tsx`, taking a single prop `entry: ExperienceEntry`.

- [ ] **Step 1: Create `src/components/TimelineItem.tsx`**

```tsx
import { ExperienceEntry } from "../data/profile";

export function TimelineItem({ entry }: { entry: ExperienceEntry }) {
  return (
    <li className="relative border-l border-neutral-800 pl-6">
      <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-emerald-400" />
      <p className="font-mono text-sm text-emerald-400">{entry.period}</p>
      <h3 className="text-lg font-semibold text-gray-100">{entry.company}</h3>
      <p className="text-sm text-gray-400">{entry.role}</p>
      <p className="mt-2 leading-relaxed text-gray-300">{entry.description}</p>
    </li>
  );
}
```

- [ ] **Step 2: Replace `src/pages/Experiencia.tsx`**

```tsx
import { profile } from "../data/profile";
import { TimelineItem } from "../components/TimelineItem";

export function Experiencia() {
  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold text-gray-100">Experiência</h1>
      <ul className="flex flex-col gap-8">
        {profile.experience.map((entry, index) => (
          <TimelineItem key={index} entry={entry} />
        ))}
      </ul>
    </section>
  );
}
```

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: no errors.

- [ ] **Step 4: Manual check**

Run: `npm run dev`, open `/experiencia`. Confirm all 3 entries (Forlogic, CLAMOM estágio, CLAMOM PJ atual) render in order with period, company, role, and description. Stop the dev server.

- [ ] **Step 5: Commit**

```bash
git add src/components/TimelineItem.tsx src/pages/Experiencia.tsx
git commit -m "feat: implement Experiencia page with timeline"
```

---

### Task 7: Projetos page content

**Files:**
- Create: `src/components/ProjectCard.tsx`
- Modify: `src/pages/Projetos.tsx`

**Interfaces:**
- Consumes: `Project` type from `src/data/profile.ts` (Task 2), `profile.projects` array.
- Produces: `ProjectCard` component exported from `src/components/ProjectCard.tsx`, taking a single prop `project: Project`.

- [ ] **Step 1: Create `src/components/ProjectCard.tsx`**

```tsx
import { Project } from "../data/profile";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <li className="rounded-lg border border-neutral-800 p-5 transition-colors hover:border-emerald-400">
      <h3 className="text-lg font-semibold text-gray-100">{project.name}</h3>
      <p className="mt-2 leading-relaxed text-gray-300">{project.description}</p>
      {project.technologies.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-neutral-700 px-2.5 py-0.5 text-xs text-gray-400"
            >
              {tech}
            </li>
          ))}
        </ul>
      )}
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-block font-mono text-sm text-emerald-400 hover:underline"
      >
        Ver repositório →
      </a>
    </li>
  );
}
```

- [ ] **Step 2: Replace `src/pages/Projetos.tsx`**

```tsx
import { profile } from "../data/profile";
import { ProjectCard } from "../components/ProjectCard";

export function Projetos() {
  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold text-gray-100">Projetos</h1>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {profile.projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </ul>
    </section>
  );
}
```

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: no errors.

- [ ] **Step 4: Manual check**

Run: `npm run dev`, open `/projetos`. Confirm all 3 project cards render (TCC, Sistema de Venda de Ingressos, Operação Curiosidade), each with a working "Ver repositório" link opening in a new tab, and that the ticket-sale project card renders with no technology tags (since its `technologies` array is empty) without leaving a visual gap. Stop the dev server.

- [ ] **Step 5: Commit**

```bash
git add src/components/ProjectCard.tsx src/pages/Projetos.tsx
git commit -m "feat: implement Projetos page with project cards"
```

---

### Task 8: Contato page content

**Files:**
- Modify: `src/pages/Contato.tsx`

**Interfaces:**
- Consumes: `profile.contact` from `src/data/profile.ts` (`github`, `linkedin`, `instagram`, `whatsapp`, `email`).

- [ ] **Step 1: Replace `src/pages/Contato.tsx`**

```tsx
import { profile } from "../data/profile";

const links = [
  { label: "GitHub", href: profile.contact.github },
  { label: "LinkedIn", href: profile.contact.linkedin },
  { label: "Instagram", href: profile.contact.instagram },
  { label: "WhatsApp", href: profile.contact.whatsapp },
  { label: "E-mail", href: `mailto:${profile.contact.email}` },
];

export function Contato() {
  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold text-gray-100">Contato</h1>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-md border border-neutral-800 px-4 py-3 text-gray-200 transition-colors hover:border-emerald-400 hover:text-emerald-400"
            >
              <span className="font-mono text-sm text-gray-500">{link.label}</span>
              <span className="truncate text-sm">{link.href}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: no errors.

- [ ] **Step 3: Manual check**

Run: `npm run dev`, open `/contato`. Confirm all 5 links render with correct labels and hrefs (GitHub, LinkedIn, Instagram, WhatsApp, E-mail as `mailto:`). Stop the dev server.

- [ ] **Step 4: Commit**

```bash
git add src/pages/Contato.tsx
git commit -m "feat: implement Contato page"
```

---

### Task 9: Responsive QA, production build check, and deploy prep

**Files:**
- Create: `README.md`
- Modify (if issues found in Step 1): any `src/components/*.tsx` or `src/pages/*.tsx` file with a responsive bug.

**Interfaces:**
- Consumes: the full app assembled by Tasks 1–8.
- Produces: `README.md` documenting dev/build/deploy steps; no new component interfaces.

- [ ] **Step 1: Full manual QA pass**

Run: `npm run dev`. In the browser, resize (or use dev tools device toolbar) to check at minimum: 375px (mobile), 768px (tablet), 1280px (desktop). For each breakpoint, visit all 5 routes and confirm: no horizontal scroll, navbar hamburger works below `sm` (640px) and the inline link list shows above it, text is legible (no overflow/clipping), project cards stack to 1 column below `sm` and 2 columns at/above it. Fix any issues found directly in the relevant component/page file before proceeding. Stop the dev server when done.

- [ ] **Step 2: Verify production build**

Run: `npm run build && npm run preview`
Expected: build completes with no errors; the preview server (prints a local URL) serves the same working site. Spot-check `/` and one other route in the browser, then stop the preview server.

- [ ] **Step 3: Create `README.md`**

```markdown
# Portfólio — José Pedro Cunha do Amaral

Site portfólio pessoal, feito em React + Vite + TypeScript + Tailwind CSS.

## Desenvolvimento

\`\`\`bash
npm install
npm run dev
\`\`\`

## Build de produção

\`\`\`bash
npm run build
npm run preview
\`\`\`

## Deploy (Vercel)

1. Importe este repositório em https://vercel.com/new.
2. Framework preset: Vite (detectado automaticamente).
3. Build command: `npm run build` — Output directory: `dist` (padrão do preset, não precisa alterar).
4. Deploy.
```

- [ ] **Step 4: Commit**

```bash
git add README.md
git commit -m "docs: add README with dev, build, and deploy instructions"
```

(If Step 1 required fixes, stage and commit those separately before this commit, with a message describing the specific responsive fix.)
