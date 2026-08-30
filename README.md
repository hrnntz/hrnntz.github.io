# hrnntz.me

Portafolio personal. Next.js 16, React 19, Tailwind CSS v4, desplegado en Vercel.

## Stack

| Capa | Tecnología |
|------|-----------|
| Framework | Next.js 16 (App Router) |
| UI | React 19 + Tailwind CSS v4 |
| Email | Resend |
| Analytics | Vercel Analytics |
| CI | GitHub Actions (type-check + lint + build) |
| Deploy | Vercel (Edge Network) |

## Desarrollo local

```bash
# Instalar dependencias
npm install

# Variables de entorno (solo necesarias para el formulario de contacto)
cp .env.example .env.local
# editar .env.local y agregar RESEND_API_KEY

# Servidor de desarrollo
npm run dev
```

La app corre en `http://localhost:3000`.

## Variables de entorno

| Variable | Descripción |
|----------|-------------|
| `RESEND_API_KEY` | API key de [Resend](https://resend.com). Requerida para el formulario de contacto. |

En producción, se configura en Vercel → Settings → Environment Variables.

## Estructura

```
src/
├── app/
│   ├── api/contact/     # Route Handler — procesa el formulario y llama a Resend
│   ├── projects/        # Páginas de proyectos individuales
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── contact-form.tsx
    ├── footer.tsx
    ├── header.tsx
    ├── project-card.tsx
    └── skills-list.tsx
```

## CI

El workflow en `.github/workflows/ci.yml` corre en cada push y PR a `main`:

1. `tsc --noEmit` — verificación de tipos
2. `eslint` — linting
3. `next build` — build de producción

## Licencia

MIT
