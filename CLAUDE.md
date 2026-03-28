# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Project:EPB (万界规划局) portfolio website — a single-page showcase site linking to related sub-projects (blog, wiki, Chatbot SILI, FlareDrive, InPageEdit). Built with Astro as a static site generator, Vue 3 for interactive components, and Tailwind CSS + DaisyUI for styling.

## Commands

```bash
npm run dev       # Dev server on port 3000
npm run build     # Static build to /dist
npm run preview   # Preview production build
```

No lint or test commands are configured.

## Architecture

### Framework Stack

- **Astro 5** — static site generation, file-based routing (`/src/pages/`)
- **Vue 3** — interactive components, hydrated client-side via `client:only="vue"`
- **Tailwind CSS 4 + DaisyUI 5** — utility-first styling with theme system
- **GSAP** — complex entrance animations and scroll-triggered effects

### Key Path Aliases (tsconfig.json)

| Alias | Path |
|-------|------|
| `@/*` | `./src/*` |
| `~/*` | `./src/assets/*` |
| `@com/*` | `./src/components/*` |
| `@lay/*` | `./src/layouts/*` |
| `@pg/*` | `./src/pages/*` |

### Component Conventions

Vue SFCs use **Pug** for templates, **TypeScript** in `<script setup>`, and **scoped SASS** for styles. This is consistent across all `.vue` files.

### Page Structure

The site is a single page (`/src/pages/index.astro`) that renders `Home.vue` as the main component. `Home.vue` manages a sections array that dynamically renders:
- `SectionFrontpage.vue` — hero section with GSAP timeline animations
- `SectionCard.vue` — project showcase cards (async-loaded)
- `SectionAbout.vue` / `SectionFooter.vue`

Sections are navigated via anchor links (`#section-frontpage`, `#section-about`, etc.) with Intersection Observer triggering animations on scroll.

### Animation Pattern

- Elements use `data-anim` attributes and a `.preload-anim` CSS class (hidden by default)
- GSAP initializes pre-animation state with `gsap.set()`, then animates via timelines
- `prefers-reduced-motion` is respected for accessibility

### Theme System

DaisyUI themes (light/dark) with localStorage-based toggle. Colors use oklch color space defined as CSS custom properties in `global.css`.

### Color Assignment for Cards

Cards get deterministic gradient colors based on a hash of their title, cycling through 5 predefined color schemes (purple/pink, cyan/green, pink/orange, orange/pink, green/purple).

## Content Language

Site content is in Chinese (Simplified), HTML lang is `zh_CN`. Code comments should be in English.

## Deployment

Static output to `/dist`, hosted on GitHub Pages (project-epb.github.io).
