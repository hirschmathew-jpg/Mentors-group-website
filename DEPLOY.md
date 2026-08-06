# Go-live runbook — Cloudflare Pages

The site builds for any domain via two environment variables — no code
changes needed:

| Variable    | GitHub Pages (current)               | Production                    |
| ----------- | ------------------------------------ | ----------------------------- |
| `SITE`      | `https://hirschmathew-jpg.github.io` | `https://www.YOURDOMAIN.ie`   |
| `BASE_PATH` | `/Mentors-group-website`             | `/`                           |

Everything below assumes Cloudflare Pages. Wherever you see
`www.YOURDOMAIN.ie`, substitute the real domain.

## 1. Move the repo to the company GitHub account (keeps code private)

1. Create/log into the company GitHub account.
2. On this repo: **Settings → General → Transfer ownership** → transfer to
   the company account (preserves history and branches). Alternatively
   **Import repository** on the new account using this repo's URL.
3. On the new account, set the repository **visibility to Private**.
4. The old GitHub Pages URL stops working after transfer — that's fine
   once the real site is live.

## 2. Create the Cloudflare Pages project

1. Sign up / log in at https://dash.cloudflare.com (free plan is enough).
2. **Workers & Pages → Create → Pages → Connect to Git** → authorise the
   company GitHub account → pick this repository.
3. Build settings:
   - **Production branch:** `main`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Environment variables (Production and Preview):**
     - `SITE` = `https://www.YOURDOMAIN.ie`
     - `BASE_PATH` = `/`
     - `NODE_VERSION` = `20`
4. Deploy. The first build gives you a `*.pages.dev` URL — check the site
   fully there before touching DNS.

## 3. Attach the domain

1. In the Pages project: **Custom domains → Set up a custom domain** →
   `www.YOURDOMAIN.ie`.
2. Easiest path: add the domain to Cloudflare (free) and let the registrar
   point its **nameservers** at Cloudflare — then Pages wires the DNS
   record automatically and HTTPS certificates are instant.
   - Alternative without moving nameservers: add the `CNAME` record shown
     by Pages (`www` → `<project>.pages.dev`) at your registrar.
3. Add the apex `YOURDOMAIN.ie` as a second custom domain (Cloudflare
   redirects apex → www automatically when it manages the DNS).

## 4. Post-launch checklist

- [ ] Home, About, Insights (+ a few articles), Careers, `/careers/mentora/`, Contact all load on the real domain.
- [ ] `https://www.YOURDOMAIN.ie/sitemap-index.xml` and `/robots.txt` show the real domain (both are generated from `SITE`).
- [ ] Contact form opens a mail draft to info@hlb.ie (mailto fallback until a form backend is wired).
- [ ] Submit the sitemap in Google Search Console.

## 5. Next steps after launch (optional)

- **Form backend:** create a free Web3Forms access key (250 submissions
  /month) and point the form's `action` at it — see the TODO in
  `src/pages/contact.astro`. Upgrade path: Cloudflare Worker + Resend.
- **Deploy flow stays the same:** push to `main` → Cloudflare builds and
  deploys in ~1 minute. Preview deployments are created for other branches
  automatically.
