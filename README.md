# Techavlon — Corporate Website

Production foundation for **Techavlon Info Solutions LLP** — enterprise IT
infrastructure, networking, data centre technology and security solutions.

Built with **React 19 + TypeScript + Vite + Tailwind CSS v4**.

## Current scope (Task 1)

- Global design system (tokens, typography, elevation)
- Sticky header with Solutions dropdown + full mobile menu
- Footer with verified contact information
- Complete homepage (11 sections)
- Responsive layout (desktop / laptop / tablet / mobile)
- SEO foundation (title, meta, Open Graph, JSON-LD, semantic HTML)

## Commands

```bash
npm install
npm run dev       # dev server (0.0.0.0:5173)
npm run build     # type-check + production build to dist/
npm run preview   # serve production build (0.0.0.0:4173)
```

## Structure

```
src/
  components/
    ui/           Reusable primitives
      Button.tsx        Button + ButtonLink (primary / secondary variants)
      Container.tsx     Page container (max-w-1200, responsive gutters)
      SectionHeading.tsx  Eyebrow + h2 + lead (align, onDark, id props)
      Breadcrumbs.tsx   For internal pages (home / solution / ...)
      Reveal.tsx        Restrained scroll-reveal (reduced-motion aware)
      ServiceCard.tsx   Service card (icon, copy, 3 points, CTA)
      FAQItem.tsx       Accessible accordion item
      CTASection.tsx    Reusable conversion band
      Logo.tsx          Wordmark
    layout/
      Header.tsx      Sticky header, utility bar, dropdown, mobile menu
      Footer.tsx      Global footer
    homepage/         Homepage section components
  data/
    site.ts           Verified contact/nav/partner data
    services.ts       The 8 services (slug, copy, points, icon, href)
    content.ts        Homepage section content (domains, steps, FAQ, ...)
  lib/
    icons.tsx         Inline SVG icon set (stroke style, 24px grid)
    cn.ts             className helper
  pages/
    HomePage.tsx      Homepage composition
public/
  images/             Optimized JPGs (hero, intro, CTA background)
```

## Adding the service pages (next task)

1. Each service has a stable `slug` in `src/data/services.ts`
   (e.g. `server-solutions`).
2. When a service page exists, set `href` on that service entry to the
   real route (e.g. `/services/server-solutions/`) — the card CTA,
   header dropdown and footer all read from this single data source.
3. Reuse: `Container`, `SectionHeading`, `Breadcrumbs`, `CTASection`,
   `Reveal` and the design tokens in `src/index.css`.
4. Suggested page pattern: dark hero (Breadcrumbs + h1 + summary) →
   overview → capability details → related solutions → CTASection.

## Design tokens

Defined in `src/index.css` via Tailwind v4 `@theme`:

- `navy-50…950` — deep blue-black enterprise scale (950 = near-black)
- `accent-200…700` — electric blue/cyan accent
- `ink-900/700/600/500` — body text on light surfaces
- `surface` / `surface-2` / `line` — subtle grey backgrounds & hairlines
- `font-display` (Space Grotesk) for headings, `font-sans` (Inter) for body
- `shadow-card` / `shadow-lift` — restrained elevation

## Content rules

All company facts (legal name, address, phones, email, hours, founding
2020, LLP incorporation 2025, vision, partner brands, service
descriptions) were preserved from the existing techavlon.in website.
No clients, certifications, awards, statistics or testimonials are
invented anywhere on the site.
