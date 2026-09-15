# Portfólio — José Pedro Cunha do Amaral

Site portfólio pessoal, feito em React + Vite + TypeScript + Tailwind CSS.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
npm run preview
```

## Deploy (Vercel)

1. Importe este repositório em https://vercel.com/new.
2. Framework preset: Vite (detectado automaticamente).
3. Build command: `npm run build` — Output directory: `dist` (padrão do preset, não precisa alterar).
4. Deploy.

O arquivo `vercel.json` na raiz fornece o rewrite de SPA necessário para que o roteamento client-side funcione ao atualizar a página ou acessar um link direto.
