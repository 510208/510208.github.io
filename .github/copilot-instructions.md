# Copilot Instructions for 510208.github.io

## Project Overview

Personal portfolio website built with React 19.1, TypeScript, Vite 7, and Tailwind CSS 4. Uses GitHub Pages for deployment with automatic data generation from GitHub API and external WordPress GraphQL.

## Architecture & Data Flow

### Build-Time Data Generation

Three critical scripts run **before** React builds, generating JSON data consumed by the app:

- `scripts/generate-projects-data.js` - Fetches repos from GitHub API (requires `GH_TOKEN` env var), filters out forks, adds OpenGraph images via GraphQL
- `scripts/generate-blog-posts-data.js` - Queries `samhacker.xyz/sh-graphql` WordPress endpoint for blog posts
- `scripts/auto-build-static-pages.js` - Creates per-route HTML files with custom meta tags for SEO, generates sitemap.xml

Data flow: **Build scripts → `public/*.json` → React components fetch at runtime**

### Build Process

```bash
yarn build  # Runs: generate-blog-posts → generate-projects → tsc → vite build → build-static
```

**Critical**: Vite plugins in `vite.config.ts` also trigger data generation via `buildStart` hooks. Build fails if `GH_TOKEN` is missing.

## Development Patterns

### Component Architecture

- **Page components** (`src/pages/*.tsx`) use `<BasePages>` wrapper providing Navbar, Footer, CursorFollower, GoTopButton
- **Section components** (`src/components/section/`) are page-specific content blocks (e.g., `Home/HeroSection.tsx`)
- **UI components** (`src/components/ui/`) are shadcn/ui primitives following New York style

### Routing & Lazy Loading

All routes use React lazy loading with custom page transition animations (`fadeIn`/`fadeOut` in `App.tsx`). Loading spinner shows during route changes and disappears as soon as the new route is ready.

### Import Aliases

Use `@/` for all imports (configured in `tsconfig.json`, `vite.config.ts`, `components.json`):

```tsx
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
```

### Styling Conventions

- **Tailwind CSS 4** with v4 syntax (use `@tailwindcss/vite` plugin)
- Dark mode: `dark:` variants everywhere (theme via `next-themes`)
- Utility function: `cn()` from `@/lib/utils` for conditional classes (clsx + tailwind-merge)
- Responsive: Mobile-first with `sm:`, `md:`, `lg:`, `xl:` breakpoints

### Font Setup

Multiple self-hosted fonts loaded in `src/main.tsx`:

- `@fontsource-variable/inter` - UI text
- `@fontsource-variable/noto-sans-tc` - Chinese (class: `font-noto`)
- `@fontsource-variable/fira-code` - Code
- `@fontsource-variable/edu-nsw-act-cursive` - Handwriting (class: `font-writing`)

## Environment & Secrets

### Required Environment Variables

Create `.env` with:

```bash
GH_TOKEN=your_github_personal_access_token  # For generate-projects-data.js
```

**Never commit `.env`** - see `.env.example` for template.

### GitHub Actions Deployment

`.github/workflows/main.yml` deploys on push to `main`:

- Uses secrets: `GH_TOKEN` (for build), `DEPLOY_SECRET` (for gh-pages)
- Runs on Node 24.3.0, uses Yarn
- Creates `.nojekyll` and copies `index.html` to `404.html` for SPA routing

## Commands Reference

```bash
yarn dev                  # Dev server (Vite port 5173)
yarn build                # Full production build with data generation
yarn preview              # Preview production build locally
yarn lint                 # ESLint check
yarn generate-projects    # Manually regenerate projects-data.json
yarn generate-blog-posts  # Manually regenerate posts-data.json
yarn build-static         # Manually regenerate static HTML + sitemap
yarn cn                   # shadcn/ui CLI (add new components)
```

## Key Libraries & Patterns

### Animation & UX

- **Lenis** (`<ReactLenis root />` in `App.tsx`) - Smooth scroll
- **Motion** (Framer Motion successor) - Animations
- **React Headroom** - Auto-hide navbar (commented out in current `Navbar.tsx`)
- **TypeIt React** - Typing animations

### 3D & Visual Effects

- **@tsparticles** - Particle backgrounds
- **Three.js + skin3d** - Minecraft skin viewer (lazy loaded in `IntroSection.tsx`)
- **cobe** - Interactive globe component

### UI Framework

- **shadcn/ui** (New York style): Configure via `components.json`, install with `yarn cn`
- **Radix UI** primitives: Dialog, Dropdown, Navigation, Select, Tooltip
- **Lucide React** for icons

## Conventions to Follow

1. **All pages must use `<BasePages>` wrapper** from `src/pages/base-page.tsx`
2. **Lazy load heavy components** (see `MCPlayer` example in `IntroSection.tsx`)
3. **Static routes defined in two places**: `src/pages/PageList.tsx` (nav menu) + `scripts/auto-build-static-pages.js` (meta tags)
4. **Component structure**: `Card` components use data-slot attributes for styling (see `src/components/ui/card.tsx`)
5. **Chinese language**: UI is Traditional Chinese (`zh-TW`) with some English labels

## Common Gotchas

- **Build fails without `GH_TOKEN`**: Scripts throw errors that halt Vite build
- **Data JSON not updating**: Run individual `yarn generate-*` scripts or rebuild
- **Module split**: Vite config splits node_modules into separate chunks (see `rollupOptions.manualChunks`)
- **Legacy browser support**: `@vitejs/plugin-legacy` enabled for older browsers
- **Route changes require static HTML regeneration**: Update both `PageList.tsx` and `auto-build-static-pages.js`

## Testing & Debugging

No test framework configured. Validate builds with `yarn preview` after `yarn build`.

---

_Last updated: Based on codebase analysis 2025-10-24_
