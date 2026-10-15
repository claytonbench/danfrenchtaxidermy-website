# Dan French Taxidermy — Website

A modern, static-first rebuild of **danfrenchtaxidermy.com**: Next.js (App Router) + TypeScript + Tailwind, deployable as a single Docker container.

- **Design:** premium rugged / Rocky Mountain lodge aesthetic — forest green, antique bronze, warm ivory; serif display + clean sans body.
- **Content:** every page prerenders statically.
- **Images:** 163 assets migrated from the current site (logo + 103 gallery photos + species option photos + hero slides).
- **CMS removed:** content lives as typed modules in `src/data/`.

---

## Quick start (local Mac)

Prerequisites: **Docker Desktop** running on your Mac.

```bash
# clone / cd to the repo
git clone https://github.com/claytonbench/danfrenchtaxidermy-website.git
cd danfrenchtaxidermy-website
git checkout claude/wonderful-volta-t0ymp4

# build & run the production image (first run pulls base image + builds, ~1–2 min)
docker compose up --build
```

Then open **http://localhost:3000**.

- Stop: `Ctrl+C`, then `docker compose down`
- Rebuild after code changes: `docker compose up --build`
- Logs: `docker compose logs -f web`

### Hot-reload dev container (no local Node install needed)

```bash
docker compose --profile dev up
# serves on http://localhost:3000 with live reload
```

### Local dev without Docker

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve production build
npm run typecheck  # TypeScript check
```

### Environment variables

Copy `.env.example` to `.env.local` (local dev) or `.env` (Docker Compose) and fill in any you want:

| Var                   | Purpose                                                                                                          |
| --------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `CONTACT_WEBHOOK_URL` | Optional HTTPS endpoint (Zapier, Make, Formspree, Lambda…) that receives contact-form submissions as JSON.       |
| `CONTACT_TO_EMAIL`    | Routing hint sent in the webhook payload. Defaults to `dan@danfrenchtaxidermy.com`.                              |

If `CONTACT_WEBHOOK_URL` is unset, submissions are validated, acknowledged to the user, and logged to the server stdout — no SMTP credentials are ever shipped to the browser.

---

## Project structure

```
src/
  app/                     # App Router pages
    page.tsx               # homepage
    about/                 # /about
    services/              # /services and /services/[species]
    gallery/               # /gallery
    outfitters/            # /outfitters
    contact/               # /contact (+ server action)
    terms/                 # /terms
    sitemap.ts | robots.ts
    layout.tsx | globals.css
  components/              # Header, Footer, Hero, Gallery, ContactForm, ...
  data/                    # site, services, gallery, outfitters (editable)
public/
  brand/                   # logo
  images/gallery/          # portfolio (preserved from legacy site)
  images/slider3/          # hero photos
  images/legacy/           # misc preserved assets
Dockerfile                 # multi-stage, standalone Next output
docker-compose.yml         # web (prod) + dev profile
next.config.mjs            # standalone output + legacy URL redirects
tailwind.config.ts         # brand palette
```

---

## Content & SEO

- **Legacy URL redirects (301 permanent)** are wired in `next.config.mjs`:

  | Old                                       | New                        |
  | ----------------------------------------- | -------------------------- |
  | `/about-us`                               | `/about`                   |
  | `/taxidermy-photos`                       | `/gallery`                 |
  | `/outfitter-affiliations`                 | `/outfitters`              |
  | `/taxidermy-options/antelope-options`     | `/services/antelope`       |
  | `/taxidermy-options/elk-options`          | `/services/elk`            |
  | `/taxidermy-options/deer-options`         | `/services/deer`           |
  | `/taxidermy-options/bear-options`         | `/services/bear`           |

- `sitemap.xml`, `robots.txt`, Open Graph / Twitter metadata, canonicals, and LocalBusiness JSON-LD are generated automatically.
- All images use `next/image` for responsive sizes, lazy loading, and modern formats (AVIF/WebP).

### Editing content

- Site info (name, phone, email, address, nav): `src/data/site.ts`
- Outfitters: `src/data/outfitters.ts`
- Services copy & mount options: `src/data/services.ts` + `src/data/options.json`
- Gallery images & categories: `src/data/gallery.ts` + `src/data/gallery.json`

Add a new gallery image by dropping the file under `public/images/gallery/...` and adding an entry to `src/data/gallery.json`.

---

## Items for business-owner review

1. **Logo quality** — original asset is only available at 220×175 PNG (`public/brand/dan-french-logo.png`). A higher-resolution vector (SVG) or 1500px+ PNG would ship sharper, especially on retina displays.
2. **Outfitter websites & phone numbers** — URLs weren’t preserved on the legacy site; please verify each listing in `src/data/outfitters.ts` and supply website links to add.
3. **Hero photography** — currently uses the strongest existing shot (bull elk). Replace with new, custom photography when available (`public/images/slider3/`).
4. **About page** — Dan’s story is quoted verbatim from the current site. If any details have changed (daughters, grandkids, team size), let us know.
5. **Shop hours** — not published on the legacy site; the Contact page currently reads "By appointment — give Dan a call." Confirm or replace.
6. **Rush service terms** — the legacy site mentions a 20% discount with 12-month completion. Confirm current offer language before publishing it on the new site.
7. **Contact form delivery** — pick between an email forwarding service (Formspree, Resend), a Zapier webhook, or an in-house endpoint, and set `CONTACT_WEBHOOK_URL`.
8. **Social links** — Facebook/Instagram URLs preserved; please verify.

---

## Deployment

The repository builds to a single `docker-compose up` container. It works on any host that runs Docker — Fly.io, Render, Railway, DigitalOcean App Platform, Hetzner, AWS Fargate, your own VPS. Point `danfrenchtaxidermy.com` at the host and set an HTTPS termination (Caddy, Cloudflare, platform-native).

```bash
# single-shot production image
docker build -t danfrenchtaxidermy-website .
docker run -p 3000:3000 danfrenchtaxidermy-website
```

---

## Build phases completed

- **Phase 1 — Foundation:** audit, project scaffold, design system, header/footer/nav, full homepage, 163 images migrated.
- **Phase 2 — Core pages:** About, Services overview, Antelope/Elk/Deer/Bear, Gallery, Outfitters, Contact, Terms.
- **Phase 3 — Functionality:** gallery filtering + keyboard-navigable lightbox, server-action contact form with validation + honeypot + webhook delivery, legacy URL redirects.
- **Phase 4 (ready for review):** performance verified via static prerender; responsive tested; accessibility baseline (skip link, focus states, aria labels, reduced-motion) in place.
