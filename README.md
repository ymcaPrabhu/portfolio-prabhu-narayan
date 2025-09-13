# Director Portfolio (Next.js + TypeScript + Tailwind)

Mobile-first portfolio suitable for a senior Government of India role. Content is YAML-driven.

## Quick start

1. **Unzip** this folder and open in **VS Code**.
2. Run:
   ```bash
   npm install
   npm run dev
   ```
   Visit http://localhost:3000

3. Edit content in `/content/*.yaml`. Changes are instant on dev server.

## Structure
- `app/` — App Router pages.
- `components/` — UI components.
- `content/` — Edit YAML to update the site.
- `lib/content.ts` — YAML loader.
- `styles/globals.css` — Tailwind styles.

## Copilot prompts (paste in files)
- **Layout/Header/Footer**: “Create a responsive App Router layout with sticky header and accessible mobile menu in Tailwind.”
- **Timeline**: “Build a simple experience timeline component that maps YAML fields.”
- **Card grid**: “Create a card grid for projects with hover states and focus rings.”
- **SEO**: “Add default SEO with Next SEO.”

## Deploy
- Option 1: Vercel (recommended).
- Option 2: Any Node host with `npm run build` then `npm start`.

## Notes
- Keep content strictly public and non-sensitive.
- Replace `example.com` in `app/sitemap.ts` and `app/robots.txt` when you get a domain.
