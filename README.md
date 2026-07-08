# Arohi Shukla — Portfolio

A single-page portfolio site for Arohi Shukla, Social Media Manager. Built as a
premium, editorial-style presentation of brand and content strategy work
rather than a resume dump.

## Stack

- **React 19 + TypeScript + Vite** — no router, single scrolling page
- **Tailwind CSS** — custom warm neutral palette + serif/sans type pairing
- **Framer Motion** — scroll reveals, magnetic buttons, mobile nav transitions
- **Lucide React** — icons

## Getting started

```bash
npm install
npm run dev      # start local dev server
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build locally
```

## Project structure

```
src/
  components/
    sections/    # Nav, Hero, About, Experience, FeaturedWork, CaseStudyCard,
                  # Skills, Achievements, Contact, Footer
    ui/           # Container, Reveal, SectionHeading, Chip, MagneticButton
  data/
    content.ts    # all site copy — profile, case studies, skills, etc.
  lib/
    motion.ts             # shared Framer Motion variants
    useActiveSection.ts   # IntersectionObserver hook for nav active state
```

## Editing content

Everything text-based — the hero copy, About story, experience timeline,
featured case studies, skills, achievements, and contact links — lives in
[`src/data/content.ts`](src/data/content.ts). There's no CMS; edit that file
and the whole site updates.

## Things to swap before shipping

- `profile.email`, `profile.linkedin`, `profile.instagram` in `content.ts`
  are placeholders — update with real handles.
- `profile.resumeUrl` points to `/Arohi-Shukla-Resume.pdf`. Drop the real
  file into `public/` under that name, or update the path.
- The hero portrait is an abstract monogram card, not a photo. Swap the
  markup in `src/components/sections/Hero.tsx` for an `<img>` if a real
  portrait becomes available.
- `public/og-image.svg` is a simple generated social-share card — replace
  with a designed PNG/JPG for richer previews on iMessage/Slack/Twitter.

## Design notes

- **Palette**: warm paper background, near-black ink, single terracotta
  accent — kept deliberately narrow so the content carries the page.
- **Type**: Fraunces (display/serif) for headings, Inter (sans) for body —
  loaded via Google Fonts in `index.html`.
- **Motion**: respects `prefers-reduced-motion` via Framer Motion's
  `MotionConfig reducedMotion="user"` wrapper in `App.tsx`.
- **Accessibility**: skip-to-content link, visible focus rings, semantic
  landmarks (`header` / `main` / `footer`), and a body-scroll lock while the
  mobile nav is open.
