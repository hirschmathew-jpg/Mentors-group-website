# Mentora Group — Website

The official website for **Mentora Group**, the parent of HLB Ireland and
FutureRange — advisory, accounting, tax, technology and cybersecurity for
ambitious Irish businesses.

Built with [Astro](https://astro.build): static output, no client framework.

## Develop

```bash
npm install
npm run dev        # local dev server at http://localhost:4321
npm run build      # production build into dist/
npm run preview    # preview the production build
```

## Project structure

```
src/
  layouts/BaseLayout.astro   Shared shell: <head> (SEO/OG tags), header, footer
  components/                Header, Footer, Cta, PostCard
  pages/                     index, about, contact, insights/, privacy-policy, terms, 404
  content/insights/          Insights articles as Markdown (title/date/image in frontmatter)
  assets/                    Logos (SVG) and photography (optimized at build time)
  styles/global.css          Design tokens and shared styles
public/
  fonts/                     Self-hosted Fraunces + Manrope (variable woff2)
  favicon.svg  og.png  robots.txt
```

## Adding photos

Every image slot on the site shows an "insert image" box until you add a
photo. To fill a slot, drop an image into `src/assets/uploads/` named after
the slot and push — the site picks it up automatically on the next deploy.

| Slot (filename, + .jpg/.png/.webp) | Where it appears |
| --- | --- |
| `home-hero` | Homepage hero |
| `firm-hlb` | HLB Ireland card |
| `firm-futurerange` | FutureRange card |
| `about-hero` | About page hero |
| `about-story` | About "Why Mentora exists" |
| `hero-carousel-1..3` | The rotating circle carousel in the homepage hero |
| `spotlight-1..3` | The homepage spotlight story carousel |
| `hero-video` (.mp4) | Full-bleed background video behind the homepage hero |
| `insight-<article-slug>` | An article's card and header image |

Example: `src/assets/uploads/home-hero.jpg` fills the homepage hero. Images
are optimised and resized automatically at build time — upload the largest
version you have.

## Editing content

- **Add an Insights article**: create a new `.md` file in `src/content/insights/`
  following the frontmatter of the existing ones. It appears automatically on
  the homepage (latest three) and the Insights page.
- **Team members**: edit the `people` array in `src/pages/about.astro`.
- **Colours/typography**: CSS variables at the top of `src/styles/global.css`.

## Before launch (TODOs)

- Set the real production domain in `astro.config.mjs` (currently a
  placeholder) and in `public/robots.txt`.
- Decide the contact-form backend. The form currently opens the visitor's
  email app (`mailto:`); swap the form `action` in `src/pages/contact.astro`
  for e.g. a Formspree endpoint when one exists.
- Have the Privacy and Terms baseline text reviewed by the group's legal adviser.

## Deploying

`npm run build` produces a fully static `dist/` folder that can be hosted on
Netlify, Vercel, GitHub Pages or any static file host.
